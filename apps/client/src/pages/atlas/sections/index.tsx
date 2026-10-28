import { useId, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";
import type { Item, L, Lang, Section, Still } from "../domains/types";

type Ctx = { lang: Lang; slug: string };

const ARABIC = /[\u0600-\u06FF]/;
/** Keeps figures such as "+1.2%" or "$4.2B" reading left-to-right inside Arabic text. */
export function Bidi({ children }: { children: string }) {
  return ARABIC.test(children) ? <>{children}</> : <bdi dir="ltr">{children}</bdi>;
}

const POSITIONS = ["50% 45%", "18% 60%", "82% 35%", "50% 85%", "30% 20%", "70% 70%"];

function Picture({ slug, still = 0, index = 0, className = "" }: { slug: string; still?: Still; index?: number; className?: string }) {
  return (
    <span className={`dp-pic ${className}`}>
      <img
        src={`/assets/domain-stills/${slug}-${still + 1}.webp`}
        alt=""
        width={960}
        height={540}
        decoding="async"
        style={{ objectPosition: POSITIONS[index % POSITIONS.length] }}
      />
    </span>
  );
}

function Shell({ section, lang, children }: { section: Section; lang: Lang; children: ReactNode }) {
  return (
    <section id={section.id} className={`dp-section dp-s-${section.kind}`} aria-labelledby={`${section.id}-title`}>
      <header className="dp-section-head">
        <h2 id={`${section.id}-title`}>{section.title[lang]}</h2>
        {section.lede && <p>{section.lede[lang]}</p>}
      </header>
      {children}
    </section>
  );
}

function Tags({ tags, lang }: { tags?: L[]; lang: Lang }) {
  if (!tags?.length) return null;
  return (
    <ul className="dp-tags">
      {tags.map((tag) => (
        <li key={tag.en}>{tag[lang]}</li>
      ))}
    </ul>
  );
}

function GalleryItem({ item, index, ctx, layout }: { item: Item; index: number; ctx: Ctx; layout: string }) {
  const { lang, slug } = ctx;
  return (
    <article className={`dp-item dp-item-${index % 6}`}>
      <Picture slug={slug} still={item.still ?? ((index % 4) as Still)} index={index} />
      <div className="dp-item-body">
        {layout === "rail" || layout === "grid" ? <Tags tags={item.tags} lang={lang} /> : null}
        <h3>{item.title[lang]}</h3>
        {item.meta && <p className="dp-meta">{item.meta[lang]}</p>}
        {item.note && <p className="dp-note">{item.note[lang]}</p>}
        {layout === "archive" && item.facts && (
          <dl className="dp-facts">
            {item.facts.map((fact) => (
              <div key={fact.k.en}>
                <dt>{fact.k[lang]}</dt>
                <dd>{fact.v[lang]}</dd>
              </div>
            ))}
          </dl>
        )}
        {layout === "archive" || layout === "asym" || layout === "rows" ? <Tags tags={item.tags} lang={lang} /> : null}
      </div>
    </article>
  );
}

function Gallery({ section, ctx }: { section: Extract<Section, { kind: "gallery" }>; ctx: Ctx }) {
  const rail = section.layout === "rail";
  return (
    <Shell section={section} lang={ctx.lang}>
      <div
        className={`dp-gallery dp-gallery-${section.layout}`}
        data-count={section.items.length}
        {...(rail ? { role: "region", tabIndex: 0, "aria-label": section.title[ctx.lang] } : {})}
      >
        {section.items.map((item, index) => (
          <GalleryItem key={item.title.en} item={item} index={index} ctx={ctx} layout={section.layout} />
        ))}
      </div>
    </Shell>
  );
}

function Timeline({ section, ctx }: { section: Extract<Section, { kind: "timeline" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <ol className="dp-timeline">
        {section.items.map((entry) => (
          <li key={entry.title.en}>
            <span className="dp-when">{entry.when[ctx.lang]}</span>
            <div>
              <h3>{entry.title[ctx.lang]}</h3>
              <p>{entry.note[ctx.lang]}</p>
            </div>
          </li>
        ))}
      </ol>
    </Shell>
  );
}

function Specs({ section, ctx }: { section: Extract<Section, { kind: "specs" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className={`dp-specs-wrap ${section.still === undefined ? "" : "has-pic"}`}>
        <dl className="dp-specs-list">
          {section.rows.map((row) => (
            <div key={row.k.en}>
              <dt>{row.k[ctx.lang]}</dt>
              <dd><Bidi>{row.v[ctx.lang]}</Bidi></dd>
            </div>
          ))}
        </dl>
        {section.still !== undefined && <Picture slug={ctx.slug} still={section.still} index={2} className="dp-specs-pic" />}
      </div>
    </Shell>
  );
}

function Bars({ section, ctx }: { section: Extract<Section, { kind: "bars" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <ul className="dp-bars">
        {section.rows.map((row) => (
          <li key={row.label.en}>
            <div className="dp-bars-label">
              <span>{row.label[ctx.lang]}</span>
              <b>
                {row.value.toLocaleString("en-US")} <small>{(row.unit ?? section.unit)[ctx.lang]}</small>
              </b>
            </div>
            <div className="dp-bars-track" role="img" aria-label={`${row.label[ctx.lang]}: ${row.value} / ${row.max}`}>
              <i style={{ width: `${Math.min(100, (row.value / row.max) * 100)}%` }} />
            </div>
            {row.note && <p>{row.note[ctx.lang]}</p>}
          </li>
        ))}
      </ul>
    </Shell>
  );
}

function DataTable({ section, ctx }: { section: Extract<Section, { kind: "table" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className="dp-table-wrap" role="region" tabIndex={0} aria-label={section.title[ctx.lang]}>
        <table className="dp-table">
          <thead>
            <tr>
              {section.columns.map((column) => (
                <th key={column.en} scope="col">
                  {column[ctx.lang]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row[0].en}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th key={cell.en} scope="row">
                      <Bidi>{cell[ctx.lang]}</Bidi>
                    </th>
                  ) : (
                    <td key={`${row[0].en}-${index}`} data-label={section.columns[index][ctx.lang]}><Bidi>{cell[ctx.lang]}</Bidi></td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.foot && <p className="dp-foot">{section.foot[ctx.lang]}</p>}
    </Shell>
  );
}

function Pricing({ section, ctx }: { section: Extract<Section, { kind: "pricing" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className="dp-plans">
        {section.plans.map((plan) => (
          <article key={plan.name.en} className={plan.featured ? "is-featured" : ""}>
            <h3>{plan.name[ctx.lang]}</h3>
            <p className="dp-price">
              <b><Bidi>{plan.price[ctx.lang]}</Bidi></b> <small>{plan.per[ctx.lang]}</small>
            </p>
            <ul>
              {plan.points.map((point) => (
                <li key={point.en}>{point[ctx.lang]}</li>
              ))}
            </ul>
            <a className="dp-button dp-button-quiet" href="#cta">
              {ctx.lang === "ar" ? "اختر هذه الباقة" : "Choose this plan"}
            </a>
          </article>
        ))}
      </div>
    </Shell>
  );
}

function Tracks({ section, ctx }: { section: Extract<Section, { kind: "tracks" }>; ctx: Ctx }) {
  const [playing, setPlaying] = useState<number | null>(0);
  return (
    <Shell section={section} lang={ctx.lang}>
      <ol className="dp-tracks">
        {section.items.map((track, index) => {
          const on = playing === index;
          return (
            <li key={track.title.en} className={on ? "is-playing" : ""}>
              <button
                type="button"
                aria-pressed={on}
                aria-label={`${on ? (ctx.lang === "ar" ? "إيقاف" : "Pause") : ctx.lang === "ar" ? "تشغيل" : "Play"}: ${track.title[ctx.lang]}`}
                onClick={() => setPlaying(on ? null : index)}
              >
                {on ? <Pause size={16} aria-hidden /> : <Play size={16} aria-hidden />}
              </button>
              <div>
                <h3>{track.title[ctx.lang]}</h3>
                <p>{track.meta[ctx.lang]}</p>
              </div>
              <span className="dp-eq" aria-hidden>
                <i />
                <i />
                <i />
                <i />
              </span>
              <time>{track.length}</time>
            </li>
          );
        })}
      </ol>
    </Shell>
  );
}

function Workflow({ section, ctx }: { section: Extract<Section, { kind: "workflow" }>; ctx: Ctx }) {
  const count = section.nodes.length;
  const step = 100 / (count - 1 || 1);
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className="dp-workflow">
        <ol className="dp-flow" style={{ ["--n" as string]: count }}>
          {section.nodes.map((node, index) => (
            <li key={node.en} style={{ ["--x" as string]: `${index * step}%` }}>
              <span>{node[ctx.lang]}</span>
            </li>
          ))}
        </ol>
        <figure className="dp-code">
          <figcaption>{section.codeLabel[ctx.lang]}</figcaption>
          <pre dir="ltr" tabIndex={0}>
            <code>{section.code}</code>
          </pre>
        </figure>
      </div>
    </Shell>
  );
}

function Switch({ section, ctx }: { section: Extract<Section, { kind: "switch" }>; ctx: Ctx }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const option = section.options[active];
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className="dp-switch">
        <div className="dp-tablist" role="tablist" aria-label={section.title[ctx.lang]}>
          {section.options.map((entry, index) => (
            <button
              key={entry.label.en}
              type="button"
              role="tab"
              id={`${id}-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`${id}-panel`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  const dir = (event.key === "ArrowRight" ? 1 : -1) * (ctx.lang === "ar" ? -1 : 1);
                  const next = (active + dir + section.options.length) % section.options.length;
                  setActive(next);
                  document.getElementById(`${id}-tab-${next}`)?.focus();
                }
              }}
            >
              {entry.label[ctx.lang]}
            </button>
          ))}
        </div>
        <div className="dp-tabpanel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`}>
          <h3>{option.title[ctx.lang]}</h3>
          <p>{option.body[ctx.lang]}</p>
          <ul>
            {option.points.map((point) => (
              <li key={point.en}>{point[ctx.lang]}</li>
            ))}
          </ul>
        </div>
      </div>
    </Shell>
  );
}

function Stories({ section, ctx }: { section: Extract<Section, { kind: "stories" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className="dp-stories">
        {section.items.map((story, index) => (
          <figure key={story.who.en} className={`dp-story dp-story-${index % 3}`}>
            {story.still !== undefined && <Picture slug={ctx.slug} still={story.still} index={index + 1} />}
            <blockquote>{story.quote[ctx.lang]}</blockquote>
            <figcaption>
              <b>{story.who[ctx.lang]}</b>
              {story.role && <span>{story.role[ctx.lang]}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Shell>
  );
}

function Calendar({ section, ctx }: { section: Extract<Section, { kind: "calendar" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <div className="dp-calendar" role="table" aria-label={section.title[ctx.lang]}>
        <div className="dp-cal-months" role="row">
          <span role="columnheader" className="dp-cal-corner" />
          {section.months.map((month) => (
            <span key={month.en} role="columnheader">
              {month[ctx.lang]}
            </span>
          ))}
        </div>
        {section.rows.map((row) => (
          <div key={row.label.en} className="dp-cal-row" role="row">
            <span role="rowheader" className="dp-cal-label">
              {row.label[ctx.lang]}
              <span className="dp-cal-range">
                {section.months[row.from - 1][ctx.lang]} – {section.months[row.to - 1][ctx.lang]}
              </span>
            </span>
            <span role="cell" className="dp-cal-lane">
              <i
                style={{
                  gridColumn: `${row.from} / ${row.to + 1}`,
                }}
                title={row.note?.[ctx.lang]}
              />
            </span>
            {row.note && <p className="dp-cal-note">{row.note[ctx.lang]}</p>}
          </div>
        ))}
      </div>
    </Shell>
  );
}

function Steps({ section, ctx }: { section: Extract<Section, { kind: "steps" }>; ctx: Ctx }) {
  return (
    <Shell section={section} lang={ctx.lang}>
      <ol className="dp-steps">
        {section.items.map((step) => (
          <li key={step.title.en}>
            <div>
              <h3>{step.title[ctx.lang]}</h3>
              <p>{step.note[ctx.lang]}</p>
            </div>
            {step.time && <span className="dp-step-time">{step.time[ctx.lang]}</span>}
          </li>
        ))}
      </ol>
    </Shell>
  );
}

export function RenderSection({ section, ctx }: { section: Section; ctx: Ctx }) {
  switch (section.kind) {
    case "gallery":
      return <Gallery section={section} ctx={ctx} />;
    case "timeline":
      return <Timeline section={section} ctx={ctx} />;
    case "specs":
      return <Specs section={section} ctx={ctx} />;
    case "bars":
      return <Bars section={section} ctx={ctx} />;
    case "table":
      return <DataTable section={section} ctx={ctx} />;
    case "pricing":
      return <Pricing section={section} ctx={ctx} />;
    case "tracks":
      return <Tracks section={section} ctx={ctx} />;
    case "workflow":
      return <Workflow section={section} ctx={ctx} />;
    case "switch":
      return <Switch section={section} ctx={ctx} />;
    case "stories":
      return <Stories section={section} ctx={ctx} />;
    case "calendar":
      return <Calendar section={section} ctx={ctx} />;
    case "steps":
      return <Steps section={section} ctx={ctx} />;
  }
}
