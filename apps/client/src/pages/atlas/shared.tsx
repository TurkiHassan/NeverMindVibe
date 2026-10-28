import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { arabicCopy, type Domain } from "./domains/base";
import { contentBySlug } from "./domains/content";

export const isArabicPath = (pathname: string) => pathname === "/ar" || pathname.startsWith("/ar/");

export function Meta({ domain }: { domain?: Domain }) {
  useEffect(() => {
    const isArabic = typeof window !== "undefined" && isArabicPath(window.location.pathname);
    const localizedDomain = domain && isArabic ? arabicCopy[domain.slug] : domain;
    const title = localizedDomain ? `${localizedDomain.name} — Landscape Lab` : isArabic ? "Landscape Lab — 20 قالب صفحة هبوط" : "Landscape Lab — 20 landing-page templates";
    const lede = domain ? contentBySlug[domain.slug]?.lede : undefined;
    const description = localizedDomain
      ? `${localizedDomain.statement} ${lede ? lede[isArabic ? "ar" : "en"] : localizedDomain.description}`
      : isArabic ? "عشرون قالب صفحة هبوط، واحد لكل مجال، بالإنجليزية والعربية، لكلٍّ منها هويته وأقسامه الحقيقية." : "Twenty landing-page templates, one per domain, in English and Arabic, each with its own identity and real sections.";
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = title;
    const setMeta = (selector: string, attr: string, key: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", "index,follow");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    let structuredData = document.querySelector<HTMLScriptElement>("#structured-data-jsonld");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "structured-data-jsonld";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: domain ? `${domain.name} / Landscape Lab` : "Landscape Lab",
      description,
    };
    structuredData.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
  }, [domain]);
  return null;
}

export function MotionStage({ domain, compact = false }: { domain: Domain; compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "linear" as const };

  if (domain.motion === "orbit") {
    return (
      <div className={`motion-stage orbit-stage ${compact ? "is-compact" : ""}`}>
        <motion.div className="orbit-sphere" animate={reduceMotion ? undefined : { rotate: 360 }} transition={transition}>
          <span />
        </motion.div>
        <motion.div className="orbit-line orbit-line-one" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ ...transition, duration: 18 }} />
        <motion.div className="orbit-line orbit-line-two" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ ...transition, duration: 24 }} />
        <span className="orbit-label">L2 / 01</span>
      </div>
    );
  }
  if (domain.motion === "grid") {
    return (
      <div className={`motion-stage grid-stage ${compact ? "is-compact" : ""}`}>
        <div className="grid-plane" />
        <motion.div className="grid-beam" animate={reduceMotion ? undefined : { x: ["-10%", "110%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <div className="grid-pin pin-a" />
        <div className="grid-pin pin-b" />
        <div className="grid-pin pin-c" />
        <span className="stage-tag">SITE / 04</span>
      </div>
    );
  }
  if (domain.motion === "bars") {
    return (
      <div className={`motion-stage bars-stage ${compact ? "is-compact" : ""}`}>
        <div className="bars-header"><span>LIVE FLOW</span><span>08:42:11</span></div>
        <div className="bars">
          {[42, 76, 58, 91, 64, 84, 50, 73, 38, 68, 88, 56].map((height, index) => (
            <motion.i
              key={index}
              style={{ height: `${height}%` }}
              animate={reduceMotion ? undefined : { scaleY: [0.7, 1, 0.78] }}
              transition={{ duration: 1.8 + index * 0.04, repeat: Infinity, repeatType: "mirror", delay: index * 0.08 }}
            />
          ))}
        </div>
        <div className="bars-footer"><b>+18.6%</b><span>velocity / now</span></div>
      </div>
    );
  }
  if (domain.motion === "wave") {
    return (
      <div className={`motion-stage wave-stage ${compact ? "is-compact" : ""}`}>
        <div className="wave-grid" />
        {[0, 1, 2].map((row) => (
          <motion.div
            key={row}
            className={`wave-line wave-${row}`}
            animate={reduceMotion ? undefined : { x: ["-4%", "4%", "-4%"] }}
            transition={{ duration: 5 + row, repeat: Infinity, ease: "easeInOut", delay: row * 0.3 }}
          />
        ))}
        <span className="stage-tag">VITAL / 24</span>
      </div>
    );
  }
  if (domain.motion === "nodes") {
    return (
      <div className={`motion-stage nodes-stage ${compact ? "is-compact" : ""}`}>
        <svg viewBox="0 0 420 300" role="img" aria-label="Network of connected intelligence nodes">
          <path d="M35 215 L128 92 L230 192 L340 58 M128 92 L344 244 L230 192 L65 46 L340 58" />
          <path d="M35 215 L344 244 M65 46 L230 192" />
          {[["35", "215"], ["128", "92"], ["230", "192"], ["340", "58"], ["344", "244"], ["65", "46"]].map(([cx, cy], index) => (
            <motion.circle key={cx + cy} cx={cx} cy={cy} r={index === 2 ? 12 : 6} animate={reduceMotion ? undefined : { r: [6, 10, 6] }} transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }} />
          ))}
        </svg>
        <span className="stage-tag">NODE / 31</span>
      </div>
    );
  }
  if (domain.motion === "sun") {
    return (
      <div className={`motion-stage sun-stage ${compact ? "is-compact" : ""}`}>
        <motion.div className="sun-core" animate={reduceMotion ? undefined : { scale: [0.96, 1.04, 0.96] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="sun-orbit sun-orbit-one" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.div className="sun-orbit sun-orbit-two" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
        <span className="stage-tag">FIELD / 2030</span>
      </div>
    );
  }
  if (domain.motion === "ripple") {
    return (
      <div className={`motion-stage ripple-stage ${compact ? "is-compact" : ""}`}>
        {[0, 1, 2, 3].map((ring) => (
          <motion.div key={ring} className="ripple-ring" animate={reduceMotion ? undefined : { scale: [0.65, 1.2], opacity: [0.75, 0] }} transition={{ duration: 4, repeat: Infinity, delay: ring * 0.9, ease: "easeOut" }} />
        ))}
        <div className="ripple-dot" />
        <span className="stage-tag">ROOM / 04</span>
      </div>
    );
  }
  if (domain.motion === "pixels") {
    return (
      <div className={`motion-stage pixels-stage ${compact ? "is-compact" : ""}`}>
        <div className="pixel-field">
          {Array.from({ length: 48 }, (_, index) => (
            <motion.i key={index} animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2], y: [0, index % 3 === 0 ? -8 : 5, 0] }} transition={{ duration: 2.2 + (index % 5) * 0.22, repeat: Infinity, delay: (index % 8) * 0.16 }} />
          ))}
        </div>
        <span className="stage-tag">BUILD / 2.6×</span>
      </div>
    );
  }
  return (
    <div className={`motion-stage cards-stage ${compact ? "is-compact" : ""}`}>
      <motion.div className="stack-card card-back" animate={reduceMotion ? undefined : { y: [0, 8, 0], rotate: [-5, -3, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="stack-card card-mid" animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [4, 2, 4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
      <div className="stack-card card-front"><span>SELECTED</span><b>{domain.index}</b></div>
    </div>
  );
}

export function HeroVideo({ reduceMotion, slug, className = "" }: { reduceMotion: boolean; slug?: string; className?: string }) {
  return (
    <div className={`hero-video-plane ${className}`} aria-hidden="true">
      {reduceMotion ? (
        <img src="/assets/atlas-flux.webp" alt="" width="2848" height="1600" />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/atlas-flux.webp"
          aria-hidden="true"
        >
          <source src={slug ? `/assets/domain-heroes/${slug}-hero.mp4` : "/assets/landscape-lab-hero-flux.mp4"} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
