import re, html, json, pathlib

ROOT = pathlib.Path("/Users/turki/Downloads/website-01a176aa-1d42-7193-b341-3e4f029f3972/apps/client/public/experiences/kernel")
TPL = pathlib.Path(__file__).with_name("kernel_template.html").read_text()

CODE = '''import { workflow } from "@kernel/sdk";

export default workflow("invoice-triage", async (run) => {
  const doc = await run.ingest({ source: "inbox/invoices" });
  const facts = await run.retrieve(doc, { index: "vendors", topK: 5 });

  const draft = await run.reason({
    model: "kern-m",
    task: "Match to purchase order and flag mismatches",
    context: facts,
    schema: { po: "string", total: "number", flags: "string[]" },
  });

  const approved = await run.review(draft, { when: draft.flags.length > 0 });
  return run.ship(approved, { to: "erp.bills" });
});'''

KW = {"import", "from", "export", "default", "async", "await", "const", "return"}
def hl(line):
    out = []
    for m in re.finditer(r'"[^"]*"|[A-Za-z_$][\w$]*|\s+|.', line):
        t = m.group(0)
        e = html.escape(t, quote=False)
        if t.startswith('"'): out.append('<i class="s">%s</i>' % e)
        elif t in KW: out.append('<b class="k">%s</b>' % e)
        else: out.append(e)
    return "".join(out)
code_lines = "\n".join('            <li class="kn-l" data-n="%d"><span>%s</span></li>' % (i + 1, hl(l) or " ") for i, l in enumerate(CODE.split("\n")))

SAMPLE = "INVOICE INV-2209\nFrom: Harbor Paper Co.\nPO: PO-4471\nRecycled paper reams 40 x 6.50\nFreight 1 x 18.00\nTotal: 278.00"

EN = dict(
  lang="en", dir="ltr", otherLang="ar", otherHref="ar/", langHref="ar/", langText="العربية", enginePrefix="../",
  fontsHref="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap",
  fontText='"Geist", system-ui, sans-serif', fontMsg='var(--sc-font-mono)',
  title="Kernel: from a raw document to a booked invoice (sample brand)",
  desc="Scroll is the debugger: a sample code editor runs the invoice-triage workflow one line at a time, five steps, until the bill is booked. Sample brand, runs in your browser, nothing is sent.",
  brand="Kernel", tag="Sample brand", navLabel="Workflow steps",
  h1="From a raw document to a booked invoice",
  lede="A workflow is plain code with five steps you can read, test and replay. Every run is logged with its inputs, so a wrong answer can be traced.",
  s=["Ingest", "Retrieve", "Reason", "Review", "Ship"],
  cta="Start with one workflow", tabRunning="Running", varsH="Variables", logH="Run log", slipH="Booking slip (sample)",
  aEditor="Workflow editor", aCode="invoice-triage.js source", aRun="Run state",
  closeH="Build the part that thinks with you.",
  closeP="Tell us the job you want off your team's desk. We will set up a workspace with a starter workflow and test credits.",
  invLabel="Invoice text", invHint="Sample invoice text. Edit it or paste your own: the five steps run on exactly this text.",
  offline="Runs in your browser with sample logic. Nothing is sent anywhere.",
  outH="Run output", idle="Nothing has run yet.",
  foot1="Kernel is a sample brand from Landscape Lab. Brand, invoice and figures are sample content.",
  back="Back to the Kernel page", backHref="/kernel", again="Run it again",
  srH="The run as text (sample)",
  srItems=["Ingest: read INV-2209 from Harbor Paper Co. in inbox/invoices.",
           "Retrieve: five vendor matches, best V-118 Harbor Paper Co.",
           "Reason: kern-m drafts PO-4471, total 278.00, one flag: the total is 18.00 over the purchase order.",
           "Review: the flag is queued for a named reviewer and approved (sample).",
           "Ship: booked as BILL-2209 in erp.bills, total 278.00."],
)
T_EN = dict(
  sample=SAMPLE, run="run", unknown="unknown", none="none",
  nodes=["Ingest", "Retrieve", "Reason", "Review", "Ship"],
  stat=dict(todo="not started", run="running", done="done"),
  tabRunning="Running", tabBooked="Booked",
  l=dict(start="[[invoice-triage]] started", queue="1 document waiting in [[inbox/invoices]]", ing1="reading [[inbox/invoices]]",
    ing2="read [[{inv}]] from [[{vendor}]]", fail="no invoice number or total found",
    ret1="searching [[vendors]], topK [[5]]", ret2="{n} matches, best [[{id}]] [[{name}]]", retNone="no vendor matched",
    rs7="calling [[kern-m]], 128K context, typically 620 ms", rs8="model [[kern-m]]", rs9="task: match to purchase order, flag mismatches",
    rs10="context: [[facts]], {n} matches", rs11="schema: [[po, total, flags]]", rs12="draft ready, flags: [[{k}]]",
    rv1f="flags: [[{k}]], queued for a named reviewer", rv1n="no flags, review skipped", rv2="approved by the reviewer (sample)",
    sh1="sending to [[erp.bills]]", sh2="vendor [[{name}]], PO [[{po}]]", sh3="lines posted: [[{n}]]", sh4="total [[{t}]] posted",
    sh5="booked as [[{bill}]]", sh6="run complete"),
  f=dict(noPo="No PO number on the invoice", unknownPo="[[{po}]] is not in the PO book", otherVendor="[[{po}]] belongs to another vendor",
    over="Total [[{t}]] is [[{d}]] over [[{po}]]", sum="Lines add to [[{a}]], invoice says [[{b}]]"),
  sl=dict(vendor="Vendor", po="PO", total="Total", posted="posted", booked="Booked as {bill}"),
  c=dict(okFlag="Booked as {bill}. Flags reviewed: {k}.", okClean="Booked as {bill}. No flags.",
    fail="Could not read an invoice number and a total. Try the sample text."),
  notes=[
    dict(title="Ingest", text="Reads the source folder and returns each document as text and fields."),
    dict(title="Retrieve", text="Looks the vendor up in the vendors index and keeps the five closest matches."),
    dict(title="Kern M", meta="128K context · 620 ms", text="The default for documents. Reads contracts and tables and returns structured output that validates.", tags=["Documents", "Structured output"]),
    dict(title="Review", quote="Every low-confidence answer lands in a queue with a person's name on it. In six months nothing went out unreviewed that should have been.", who="Dev Anand, Head of Platform, Orchard Payments"),
    dict(title="Ship", text="Sends the approved result to erp.bills.", facts=[["Uptime, 12 months", "99.98%"], ["Workflows in production", "41,000"], ["Tokens orchestrated, last 30 days", "1.2B"], ["Run logs kept", "90 days"]]),
  ],
)

AR = dict(
  lang="ar", dir="rtl", otherLang="en", otherHref="../", langHref="../", langText="English", enginePrefix="../../",
  fontsHref="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap",
  fontText='"Rubik", system-ui, sans-serif', fontMsg='"Rubik", system-ui, sans-serif',
  title="نواة: من مستند خام إلى فاتورة مسجّلة (علامة تجريبية)",
  desc="التمرير هو المنقّح: محرر شيفرة تجريبي ينفّذ سير عمل فرز الفواتير سطرًا بسطر، خمس خطوات، حتى تُسجَّل الفاتورة. علامة تجريبية تعمل داخل متصفحك ولا يُرسَل شيء.",
  brand="نواة", tag="علامة تجريبية", navLabel="خطوات سير العمل",
  h1="من مستند خام إلى فاتورة مسجّلة",
  lede="سير العمل شيفرة عادية من خمس خطوات تقرؤها وتختبرها وتعيد تشغيلها. كل تشغيل يُسجَّل بمدخلاته، فيمكن تتبّع أي إجابة خاطئة.",
  s=["الاستقبال", "الاسترجاع", "الاستدلال", "المراجعة", "الإرسال"],
  cta="ابدأ بسير عمل واحد", tabRunning="قيد التشغيل", varsH="المتغيرات", logH="سجل التشغيل", slipH="قيد الفاتورة (تجريبي)",
  aEditor="محرر سير العمل", aCode="شيفرة invoice-triage.js", aRun="حالة التشغيل",
  closeH="ابنِ الجزء الذي يفكّر معك.",
  closeP="أخبرنا بالمهمة التي تريد إزاحتها عن كاهل فريقك. سنجهّز لك مساحة عمل بسير عمل أولي ورصيد تجريبي.",
  invLabel="نص الفاتورة", invHint="نص فاتورة تجريبي بالإنجليزية. عدّله أو الصق نصك: الخطوات الخمس تعمل على هذا النص بالضبط.",
  offline="يعمل داخل متصفحك بمنطق تجريبي. لا يُرسَل أي شيء إلى أي مكان.",
  outH="مخرجات التشغيل", idle="لم يعمل شيء بعد.",
  foot1="نواة علامة تجريبية من Landscape Lab. العلامة والفاتورة والأرقام محتوى تجريبي.",
  back="العودة إلى صفحة نواة", backHref="/ar/kernel", again="شغّله من جديد",
  srH="التشغيل كنص (تجريبي)",
  srItems=["الاستقبال: قُرئت الفاتورة INV-2209 من Harbor Paper Co. في inbox/invoices.",
           "الاسترجاع: خمس نتائج للموردين، الأقرب V-118 Harbor Paper Co.",
           "الاستدلال: يصوغ kern-m المسودة PO-4471 والإجمالي 278.00 وتنبيهًا واحدًا: الإجمالي يتجاوز أمر الشراء بمقدار 18.00.",
           "المراجعة: التنبيه في طابور مراجع محدد الاسم، واعتُمد (تجريبي).",
           "الإرسال: سُجّلت الفاتورة باسم BILL-2209 في erp.bills، والإجمالي 278.00."],
)
T_AR = dict(
  sample=SAMPLE, run="تشغيل", unknown="غير معروف", none="لا يوجد",
  nodes=AR["s"],
  stat=dict(todo="لم يبدأ", run="قيد التشغيل", done="اكتمل"),
  tabRunning="قيد التشغيل", tabBooked="سُجّلت الفاتورة",
  l=dict(start="بدأ تشغيل [[invoice-triage]]", queue="مستند واحد ينتظر في [[inbox/invoices]]", ing1="قراءة [[inbox/invoices]]",
    ing2="قُرئت [[{inv}]] من [[{vendor}]]", fail="لم يُعثر على رقم فاتورة أو إجمالي",
    ret1="بحث في [[vendors]]، أفضل [[5]] نتائج", ret2="{n} نتائج، الأقرب [[{id}]] [[{name}]]", retNone="لا مورّد مطابق",
    rs7="استدعاء [[kern-m]]، سياق 128 ألف، والزمن المعتاد 620 مللي ثانية", rs8="النموذج [[kern-m]]", rs9="المهمة: مطابقة أمر الشراء وتنبيه حالات عدم التطابق",
    rs10="السياق: [[facts]]، {n} نتائج", rs11="المخطط: [[po, total, flags]]", rs12="المسودة جاهزة، التنبيهات: [[{k}]]",
    rv1f="التنبيهات: [[{k}]]، في طابور مراجع محدد الاسم", rv1n="لا تنبيهات، تُخطّيت المراجعة", rv2="اعتُمدت من المراجع (تجريبي)",
    sh1="الإرسال إلى [[erp.bills]]", sh2="المورّد [[{name}]]، أمر الشراء [[{po}]]", sh3="الأسطر المسجّلة: [[{n}]]", sh4="سُجّل الإجمالي [[{t}]]",
    sh5="سُجّلت باسم [[{bill}]]", sh6="اكتمل التشغيل"),
  f=dict(noPo="لا يوجد رقم أمر شراء في الفاتورة", unknownPo="[[{po}]] غير موجود في سجل أوامر الشراء", otherVendor="[[{po}]] يخص مورّدًا آخر",
    over="الإجمالي [[{t}]] يتجاوز [[{po}]] بمقدار [[{d}]]", sum="مجموع الأسطر [[{a}]] بينما تذكر الفاتورة [[{b}]]"),
  sl=dict(vendor="المورّد", po="أمر الشراء", total="الإجمالي", posted="مسجّل", booked="سُجّلت باسم {bill}"),
  c=dict(okFlag="سُجّلت باسم {bill}. التنبيهات المراجَعة: {k}.", okClean="سُجّلت باسم {bill}. لا تنبيهات.",
    fail="تعذّرت قراءة رقم فاتورة وإجمالي. جرّب النص التجريبي."),
  notes=[
    dict(title="الاستقبال", text="يقرأ المجلد المصدر ويعيد كل مستند نصًا وحقولًا."),
    dict(title="Kern M", meta="سياق 128 ألف · 620 مللي ثانية", text="الخيار الافتراضي للمستندات. يقرأ العقود والجداول ويعيد مخرجات منظمة تجتاز التحقق.", tags=["مستندات", "مخرجات منظمة"]),
    dict(title="المراجعة", quote="كل إجابة منخفضة الثقة تصل إلى طابور باسم شخص محدد. ولم يخرج خلال ستة أشهر شيء كان ينبغي مراجعته دون أن يُراجَع.", who="ديف أناند، رئيس المنصة، أورتشارد للمدفوعات"),
    dict(title="الإرسال", text="يرسل النتيجة المعتمدة إلى erp.bills.", facts=[["التوافر، 12 شهرًا", "99.98%"], ["سير عمل قيد التشغيل", "41,000"], ["رموز جرت إدارتها خلال 30 يومًا", "1.2 مليار"], ["سجلات التشغيل محفوظة", "90 يومًا"]]),
  ],
)
# Arabic note order must match steps 0..4: insert Retrieve at index 1 and Reason card at 2
T_AR["notes"] = [
    T_AR["notes"][0],
    dict(title="الاسترجاع", text="يبحث عن المورّد في فهرس الموردين ويحتفظ بأقرب خمس نتائج."),
    T_AR["notes"][1], T_AR["notes"][2], T_AR["notes"][3],
]

def build(S, T, out):
    page = TPL
    ctx = dict(S)
    for i, v in enumerate(S["s"]): ctx["s%d" % i] = v
    ctx["codeLines"] = code_lines
    ctx["sample"] = html.escape(SAMPLE, quote=False)
    def wrap(x):
        x = html.escape(x, quote=False)
        if S["lang"] == "ar":
            x = re.sub(r"([A-Za-z0-9][A-Za-z0-9 ./_\-]*[A-Za-z0-9])", r'<bdi dir="ltr">\1</bdi>', x)
        return x
    ctx["srItems"] = "\n".join("      <li>%s</li>" % wrap(x) for x in S["srItems"])
    ctx["T"] = json.dumps(T, ensure_ascii=False)
    for k, v in ctx.items():
        if k == "s": continue
        page = page.replace("@@%s@@" % k, v if isinstance(v, str) else str(v))
    left = re.findall(r"@@\w+@@", page)
    assert not left, left
    out.write_text(page)
    print(out, len(page))

build(EN, T_EN, ROOT / "index.html")
build(AR, T_AR, ROOT / "ar" / "index.html")
