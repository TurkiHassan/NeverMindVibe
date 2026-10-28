import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, LayoutGrid, List, Menu, MoveRight, Search, X } from "lucide-react";

import { arabicCopy, copyFor, domainBySlug, domains, type Domain } from "./domains/base";
import { normalize, searchTerms } from "./domains/search";
import { isDarkPaper, tokensFor } from "./domains/tokens";
import DomainPage from "./DomainPage";
import { HeroVideo, Meta, MotionStage, isArabicPath } from "./shared";

type FilterId = "All" | "Light" | "Dark" | "Editorial" | "Modular" | "Cinematic" | "Human";

const FILTERS: { id: FilterId; en: string; ar: string }[] = [
  { id: "All", en: "All", ar: "الكل" },
  { id: "Light", en: "Light", ar: "فاتح" },
  { id: "Dark", en: "Dark", ar: "داكن" },
  { id: "Editorial", en: "Editorial", ar: "تحريري" },
  { id: "Modular", en: "Modular", ar: "معياري" },
  { id: "Cinematic", en: "Cinematic", ar: "سينمائي" },
  { id: "Human", en: "Human", ar: "إنساني" },
];

const DENSITY = {
  airy: { en: "Airy", ar: "مفتوح" },
  balanced: { en: "Balanced", ar: "متوازن" },
  dense: { en: "Dense", ar: "كثيف" },
} as const;

function matchesFilter(domain: Domain, filter: FilterId) {
  if (filter === "All") return true;
  const dark = isDarkPaper(domain.paper);
  if (filter === "Dark") return dark;
  if (filter === "Light") return !dark;
  return domain.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase());
}

/** Everything a visitor might type, in both languages, regardless of the page language. */
function haystackFor(domain: Domain) {
  const ar = arabicCopy[domain.slug];
  return normalize(
    [domain.slug, domain.name, domain.eyebrow, domain.statement, domain.tags.join(" "), ar?.name, ar?.eyebrow, ar?.statement, searchTerms[domain.slug]].filter(Boolean).join(" "),
  );
}
const haystacks = new Map(domains.map((domain) => [domain.slug, haystackFor(domain)]));

function DomainCard({ domain, isArabic = false }: { domain: Domain; isArabic?: boolean }) {
  const copy = copyFor(domain, isArabic);
  const [brand, kind] = copy.name.split(" / ");
  const dark = isDarkPaper(domain.paper);
  const style = { ...tokensFor(domain), "--border": domain.border } as React.CSSProperties;
  return (
    <Link to={isArabic ? `/ar/${domain.slug}` : `/${domain.slug}`} className={`domain-card card-theme-${domain.slug}`} style={style}>
      <div className="card-topline"><span>{domain.index}</span><ArrowUpRight className="dir-icon" size={16} strokeWidth={1.5} aria-hidden /></div>
      <div className="card-visual" aria-hidden="true"><MotionStage domain={domain} compact /></div>
      <span className="card-swatches" aria-hidden="true"><i style={{ background: domain.ink }} /><i style={{ background: domain.accent }} /><i style={{ background: domain.accentSoft }} /></span>
      <div className="card-copy"><h3>{brand}</h3><span className="card-kind">{kind}</span><p>{copy.statement}</p></div>
      <div className="card-foot"><span>{isArabic ? (dark ? "داكن" : "فاتح") : dark ? "Dark" : "Light"}</span><span>{DENSITY[domain.density][isArabic ? "ar" : "en"]}</span></div>
    </Link>
  );
}

function AtlasHome() {
  const [filter, setFilter] = useState<FilterId>("All");
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "index">("grid");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isArabic = isArabicPath(location.pathname);
  const lang = isArabic ? "ar" : "en";
  const reduceMotion = useReducedMotion() ?? false;
  const visibleDomains = useMemo(() => {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    return domains.filter((domain) => matchesFilter(domain, filter) && words.every((word) => haystacks.get(domain.slug)?.includes(word)));
  }, [filter, query]);
  const filtered = filter !== "All" || query.trim() !== "";
  const reset = () => {
    setFilter("All");
    setQuery("");
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`atlas-home ${isArabic ? "rtl" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <Meta />
      <a className="skip-link" href="#catalog">{isArabic ? "تخطَّ إلى الفهرس" : "Skip to the catalog"}</a>
      <header className="atlas-nav">
        <Link to={isArabic ? "/ar" : "/"} className="wordmark"><span className="wordmark-mark"><span /></span><span>LANDSCAPE LAB</span></Link>
        <span className="nav-note">{isArabic ? "20 قالب صفحة هبوط" : "20 landing-page templates"}</span>
        <nav className={`nav-actions ${menuOpen ? "is-open" : ""}`} aria-label={isArabic ? "التنقل الرئيسي" : "Main"} id="main-nav">
          <a href="#catalog" onClick={closeMenu}>{isArabic ? "القوالب" : "Templates"}</a>
          <a href="#principles" onClick={closeMenu}>{isArabic ? "كيف تعمل" : "How it works"}</a>
          <a href="#about" onClick={closeMenu}>{isArabic ? "عن المختبر" : "About"}</a>
          <Link to={isArabic ? "/" : "/ar"} hrefLang={isArabic ? "en" : "ar"} onClick={closeMenu}>{isArabic ? "English" : "العربية"}</Link>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={isArabic ? "القائمة" : "Menu"}>{menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}</button>
      </header>

      <main>
        <section className="atlas-hero">
          <div className="hero-copy">
            <h1>{isArabic ? <>عوالم مختلفة<br /><em>تستحق</em> صفحات مختلفة.</> : <>Different worlds<br /><em>deserve</em> different pages.</>}</h1>
            <p className="hero-lede">{isArabic ? "عشرون قالب صفحة هبوط، من العمارة إلى الألعاب. افتح أي قالب وشاهده كموقع حقيقي، ثم خذ بنيته واجعله لك." : "Twenty landing-page templates, from architecture to games. Open one, see it as a real site, then take its structure and make it yours."}</p>
            <div className="hero-actions"><a className="button button-dark" href="#catalog">{isArabic ? "تصفّح القوالب" : "Browse the templates"} <MoveRight className="dir-icon" size={16} aria-hidden /></a><span className="hero-caption">{isArabic ? "علامات تجريبية، بنية حقيقية" : "Sample brands, real structure"}</span></div>
          </div>
          <div className="hero-visual">
            <HeroVideo reduceMotion={reduceMotion} />
            <motion.div className="hero-image-sheen" animate={reduceMotion ? undefined : { x: ["-130%", "130%"] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }} />
            <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" /><div className="hero-orbit hero-orbit-three" />
            <motion.div className="hero-signal" animate={reduceMotion ? undefined : { rotate: [0, 8, -8, 0], scale: [1, 1.03, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}><span>20</span><small>{isArabic ? "قالبًا" : "templates"}</small></motion.div>
          </div>
        </section>

        <section className="intro-strip" id="principles">
          <div><strong>{isArabic ? "كل قالب يبدأ من عالمه" : "Each template starts from its world"}</strong><p>{isArabic ? "من يصل إلى الصفحة، وماذا يحتاج أن يرى، وما خطوته التالية. ثم تأتي الألوان والخطوط." : "Who arrives, what they need to see, what they do next. Colour and type come after."}</p></div>
          <div><strong>{isArabic ? "محتوى تستبدله في دقائق" : "Content you can swap in minutes"}</strong><p>{isArabic ? "ملف واحد لكل مجال يحمل النصوص بالإنجليزية والعربية، فتستبدلها بنصوصك دون إعادة تصميم." : "One file per domain holds the copy in English and Arabic, so you replace it without redesigning."}</p></div>
        </section>

        <section className="catalog-section" id="catalog">
          <div className="section-heading"><h2>{isArabic ? "عشرون طريقة للدخول." : "Twenty ways to enter."}</h2><p className="section-note">{isArabic ? "كل قالب صفحة هبوط كاملة بألوانها وخطوطها وأقسامها، بالإنجليزية والعربية." : "Each template is a full landing page with its own colours, type and sections, in English and Arabic."}</p></div>
          <div className="catalog-tools">
            <div className="filter-list" role="group" aria-label={isArabic ? "تصفية القوالب" : "Filter templates"}>{FILTERS.map((option) => <button type="button" key={option.id} aria-pressed={filter === option.id} onClick={() => setFilter(option.id)}>{option[lang]}</button>)}</div>
            <div className="catalog-controls">
              <label className="search-box"><Search size={16} aria-hidden /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isArabic ? "ابحث، مثل: مالية" : "Search, e.g. finance"} aria-label={isArabic ? "ابحث في القوالب" : "Search templates"} /></label>
              <div className="view-toggle" role="group" aria-label={isArabic ? "طريقة العرض" : "View mode"}>
                <button type="button" aria-pressed={viewMode === "grid"} onClick={() => setViewMode("grid")} aria-label={isArabic ? "عرض شبكة" : "Grid view"}><LayoutGrid size={18} aria-hidden /></button>
                <button type="button" aria-pressed={viewMode === "index"} onClick={() => setViewMode("index")} aria-label={isArabic ? "عرض قائمة" : "List view"}><List size={18} aria-hidden /></button>
              </div>
            </div>
          </div>
          <p className="catalog-count" aria-live="polite">{isArabic ? (filtered ? `${visibleDomains.length} من ${domains.length} قالبًا` : `${domains.length} قالبًا`) : filtered ? `${visibleDomains.length} of ${domains.length} templates` : `${domains.length} templates`}</p>
          <div className={`domain-grid ${viewMode === "index" ? "is-index" : ""}`}>{visibleDomains.map((domain) => <DomainCard key={domain.slug} domain={domain} isArabic={isArabic} />)}</div>
          {visibleDomains.length === 0 && <div className="empty-state"><span>{isArabic ? "لا توجد قوالب بهذا الوصف. جرّب كلمة أخرى أو امسح التصفية." : "No templates match that. Try another word, or clear the filters."}</span><button type="button" onClick={reset}>{isArabic ? "مسح التصفية" : "Clear filters"}</button></div>}
        </section>

        <section className="about-strip" id="about">
          <div className="about-stamp" aria-hidden="true"><span>LL</span></div>
          <div className="about-copy"><h2>{isArabic ? <>ابدأ من العالم،<br /><em>لا</em> من التخطيط.</> : <>Start from the world,<br /><em>not</em> the layout.</>}</h2></div>
          <div className="about-body">
            <p>{isArabic ? "الصفحة العامة تخرج حين تبدأ بترتيب الصناديق. هذه القوالب تبدأ من المجال: من يصل، وما الذي يقنعه، وما الخطوة التي يقوم بها بعدها." : "A generic page is what you get when you start by arranging boxes. These start from a domain: who arrives, what convinces them, what they do next."}</p>
            <p>{isArabic ? "كل القوالب بالإنجليزية والعربية، ونصوصها وأرقامها تجريبية تستبدلها بمحتواك." : "Every template comes in English and Arabic, with sample copy and figures you replace with your own."}</p>
            <Link to={isArabic ? "/ar/kernel" : "/kernel"} className="text-link">{isArabic ? "شاهد قالب «نواة»" : "See the Kernel template"} <ArrowUpRight className="dir-icon" size={15} aria-hidden /></Link>
          </div>
        </section>
      </main>
      <footer className="atlas-footer"><span>Landscape Lab</span><span>{isArabic ? "عشرون قالب صفحة هبوط · محتوى تجريبي" : "20 landing-page templates · sample content"}</span><a href="#" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0 }); }}><ArrowUp size={14} aria-hidden /> {isArabic ? "أعلى" : "Top"}</a></footer>
    </div>
  );
}

export default function Atlas() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const slug = parts[0] === "ar" ? parts[1] : parts[0];
  const domain = slug ? domainBySlug.get(slug) : undefined;
  return domain ? <DomainPage domain={domain} /> : <AtlasHome />;
}

export { domains };
