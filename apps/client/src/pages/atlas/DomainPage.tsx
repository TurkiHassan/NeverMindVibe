import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Menu, MoveRight, X } from "lucide-react";

import { copyFor, type Domain } from "./domains/base";
import { contentBySlug } from "./domains/content";
import { tokensFor } from "./domains/tokens";
import { faceNames, fontHref, fontVars } from "./domains/type";
import type { DomainContent, Field, Lang } from "./domains/types";
import { Bidi, RenderSection } from "./sections";
import { Meta, isArabicPath } from "./shared";
import { experienceHref } from "./domains/experiences";
import "./domain-page.css";

function useDomainFonts(slug: string) {
  useEffect(() => {
    const href = fontHref(slug);
    if (!href) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.domainFonts = slug;
    document.head.appendChild(link);
    return () => link.remove();
  }, [slug]);
}

/** The hero film plays on larger screens; phones, data-saver and reduced motion get the still. */
function Film({ slug, reduceMotion }: { slug: string; reduceMotion: boolean }) {
  const [still, setStill] = useState(reduceMotion);
  useEffect(() => {
    const small = window.matchMedia("(max-width: 640px)").matches;
    const saver = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    setStill(reduceMotion || small || saver);
  }, [reduceMotion]);
  const poster = `/assets/domain-stills/${slug}-1.webp`;
  return (
    <div className="dp-film" aria-hidden="true">
      {still ? (
        <img src={poster} alt="" width={960} height={540} />
      ) : (
        <video autoPlay muted loop playsInline preload="metadata" poster={poster}>
          <source src={`/assets/domain-heroes/${slug}-hero.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

function FieldControl({ field, lang }: { field: Field; lang: Lang }) {
  const id = `f-${field.name}`;
  const common = { id, name: field.name, required: field.type === "email" || field.name === "name" };
  return (
    <div className={`dp-field ${field.wide ? "is-wide" : ""}`}>
      <label htmlFor={id}>{field.label[lang]}</label>
      {field.type === "select" ? (
        <select {...common} defaultValue="">
          <option value="" disabled>
            {lang === "ar" ? "اختر" : "Choose"}
          </option>
          {field.options?.map((option) => (
            <option key={option.en} value={option.en}>
              {option[lang]}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea {...common} rows={4} placeholder={field.placeholder?.[lang]} />
      ) : (
        <input {...common} type={field.type} placeholder={field.placeholder?.[lang]} autoComplete={field.type === "email" ? "email" : field.name === "name" ? "name" : "off"} />
      )}
    </div>
  );
}

function CallToAction({ content, label, lang }: { content: DomainContent["cta"]; label: string; lang: Lang }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <section id="cta" className="dp-cta" aria-labelledby="cta-title">
      <div className="dp-cta-copy">
        <h2 id="cta-title">{content.title[lang]}</h2>
        <p>{content.lede[lang]}</p>
      </div>
      {sent ? (
        <div className="dp-sent" role="status">
          <p>{content.success[lang]}</p>
          <small>{lang === "ar" ? "هذا نموذج تجريبي: لم يُرسَل شيء. اربطه بخدمتك." : "This is a sample form: nothing was sent. Connect it to your own service."}</small>
          <button type="button" className="dp-link" onClick={() => setSent(false)}>
            {lang === "ar" ? "ابدأ من جديد" : "Start over"}
          </button>
        </div>
      ) : (
        <form className="dp-form" onSubmit={submit}>
          {content.fields.map((field) => (
            <FieldControl key={field.name} field={field} lang={lang} />
          ))}
          <button className="dp-button" type="submit">
            {label} <MoveRight size={18} aria-hidden />
          </button>
        </form>
      )}
    </section>
  );
}

function IdentitySheet({ domain, lang }: { domain: Domain; lang: Lang }) {
  const names = faceNames(domain.slug);
  const swatches = [
    { label: lang === "ar" ? "حبر" : "Ink", value: domain.ink },
    { label: lang === "ar" ? "ورق" : "Paper", value: domain.paper },
    { label: lang === "ar" ? "لون" : "Accent", value: domain.accent },
    { label: lang === "ar" ? "لون هادئ" : "Soft", value: domain.accentSoft },
  ];
  return (
    <details className="dp-identity">
      <summary>{lang === "ar" ? "ورقة الهوية" : "Identity sheet"}</summary>
      <div className="dp-identity-body">
        <ul className="dp-swatches">
          {swatches.map((swatch) => (
            <li key={swatch.label}>
              <i style={{ background: swatch.value }} />
              <span>{swatch.label}</span>
              <code>{swatch.value}</code>
            </li>
          ))}
        </ul>
        {names && (
          <dl>
            <div>
              <dt>{lang === "ar" ? "عناوين" : "Display"}</dt>
              <dd>
                {names.en.display} · {names.ar.display}
              </dd>
            </div>
            <div>
              <dt>{lang === "ar" ? "نصوص" : "Body"}</dt>
              <dd>
                {names.en.body} · {names.ar.body}
              </dd>
            </div>
            <div>
              <dt>{lang === "ar" ? "الحركة" : "Motion"}</dt>
              <dd>{domain.motion}</dd>
            </div>
            <div>
              <dt>{lang === "ar" ? "الكثافة" : "Density"}</dt>
              <dd>{domain.density}</dd>
            </div>
          </dl>
        )}
      </div>
    </details>
  );
}

export default function DomainPage({ domain }: { domain: Domain }) {
  const { pathname } = useLocation();
  const lang: Lang = isArabicPath(pathname) ? "ar" : "en";
  const copy = copyFor(domain, lang === "ar");
  const content = contentBySlug[domain.slug];
  const reduceMotion = useReducedMotion() ?? false;
  const [menuOpen, setMenuOpen] = useState(false);
  useDomainFonts(domain.slug);
  useEffect(() => {
    const previous = document.body.style.background;
    document.body.style.background = domain.paper;
    return () => {
      document.body.style.background = previous;
    };
  }, [domain.paper]);

  const brand = copy.name.split(" / ")[0];
  const home = lang === "ar" ? "/ar" : "/";
  const other = lang === "ar" ? `/${domain.slug}` : `/ar/${domain.slug}`;
  const ctaLabel = copy.tree[copy.tree.length - 1];
  const style = { ...tokensFor(domain), ...fontVars(domain.slug, lang) };
  const experience = experienceHref(domain.slug, lang);

  if (!content) {
    return (
      <div className="dp" dir={lang === "ar" ? "rtl" : "ltr"} style={style}>
        <Meta domain={domain} />
        <main className="dp-missing">
          <h1>{copy.statement}</h1>
          <p>{lang === "ar" ? "محتوى هذه الصفحة لم يُكتب بعد." : "This page's content has not been written yet."}</p>
          <Link to={home}>{lang === "ar" ? "عودة إلى الأطلس" : "Back to the atlas"}</Link>
        </main>
      </div>
    );
  }

  const [first, second] = content.sections;
  const nav = [
    { href: `#${first.id}`, label: first.nav[lang] },
    { href: `#${second.id}`, label: second.nav[lang] },
    { href: "#proof", label: content.proof.nav[lang] },
  ];
  const close = () => setMenuOpen(false);

  return (
    <div className={`dp dp-hero-${content.hero} density-${domain.density}`} dir={lang === "ar" ? "rtl" : "ltr"} lang={lang} style={style}>
      <Meta domain={domain} />
      <a className="dp-skip" href="#main">
        {lang === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
      </a>
      <header className="dp-header">
        <a className="dp-brand" href="#top" onClick={close}>
          {brand}
        </a>
        <nav className={`dp-nav ${menuOpen ? "is-open" : ""}`} aria-label={lang === "ar" ? "التنقل الرئيسي" : "Main"}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="dp-nav-cta dp-button" href="#cta" onClick={close}>
            {ctaLabel}
          </a>
        </nav>
        <div className="dp-header-tools">
          <Link className="dp-lang" to={other} hrefLang={lang === "ar" ? "en" : "ar"}>
            {lang === "ar" ? "English" : "العربية"}
          </Link>
          <button type="button" className="dp-menu" aria-expanded={menuOpen} aria-label={lang === "ar" ? "القائمة" : "Menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </header>

      <main id="main">
        <section id="top" className="dp-hero">
          <div className="dp-hero-copy">
            <h1>{copy.statement}</h1>
            <p className="dp-hero-lede">{content.lede?.[lang] ?? copy.description}</p>
            <div className="dp-hero-actions">
              <a className="dp-button" href="#cta">
                {ctaLabel} <MoveRight size={18} aria-hidden />
              </a>
              <a className="dp-link" href={`#${first.id}`}>
                {content.secondary[lang]} <ArrowUpRight size={16} aria-hidden />
              </a>
              {experience && (
                <a className="dp-link" href={experience}>
                  {lang === "ar" ? "تجربة التمرير" : "Scroll experience"} <ArrowUpRight size={16} aria-hidden />
                </a>
              )}
            </div>
            <p className="dp-hero-proof">{copy.proof}</p>
          </div>
          <Film slug={domain.slug} reduceMotion={reduceMotion} />
        </section>

        <RenderSection section={first} ctx={{ lang, slug: domain.slug }} />
        <RenderSection section={second} ctx={{ lang, slug: domain.slug }} />

        <section id="proof" className="dp-proof" aria-labelledby="proof-title">
          <h2 id="proof-title" className="dp-sr">
            {content.proof.title[lang]}
          </h2>
          <figure>
            <blockquote>{content.proof.quote[lang]}</blockquote>
            <figcaption>{content.proof.who[lang]}</figcaption>
          </figure>
          <dl className="dp-proof-facts">
            {content.proof.facts.map((fact) => (
              <div key={fact.k.en}>
                <dt>{fact.k[lang]}</dt>
                <dd><Bidi>{fact.v[lang]}</Bidi></dd>
              </div>
            ))}
          </dl>
        </section>

        <CallToAction content={content.cta} label={content.cta.submit?.[lang] ?? ctaLabel} lang={lang} />
      </main>

      <footer className="dp-footer">
        <div className="dp-footer-row">
          <strong>{brand}</strong>
          <span>{copy.eyebrow}</span>
          <Link to={home} className="dp-back"><ArrowLeft size={16} aria-hidden /> <bdi>Landscape Lab</bdi> / {lang === "ar" ? "كل القوالب" : "all templates"}</Link>
        </div>
        <p className="dp-sample">
          {lang === "ar"
            ? "محتوى تجريبي: العلامة والمشاريع والأرقام والاقتباسات في هذه الصفحة خيالية لأغراض القالب."
            : "Sample content: the brand, projects, figures and quotes on this page are fictional and exist to demonstrate the template."}
        </p>
        <IdentitySheet domain={domain} lang={lang} />
      </footer>
    </div>
  );
}
