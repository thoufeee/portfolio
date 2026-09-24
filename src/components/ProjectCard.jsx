import { useInView } from '../hooks/useInView';
import Chip from './ui/Chip';

// keeps each tile at its drawing's aspect ratio so all four line up
const TILE_ASPECT = {
  t1: 'aspect-[200/180]',
  t2: 'aspect-[200/150]',
  t3: 'aspect-[260/150]',
  t4: 'aspect-[220/190]',
};

/** Taped, slightly tilted card. Its parts slide up one after another when it enters the viewport. */
export default function ProjectCard({ project: p }) {
  const [ref, inView] = useInView({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  let step = 0;
  const next = () => ({ '--i': step++ }); // stagger index for the next .st element

  const columns = p.flip ? 'flip lg:grid-cols-[1fr_1.15fr]' : 'lg:grid-cols-[1.15fr_1fr]';

  return (
    <article
      ref={ref}
      className={`pcard relative grid grid-cols-1 items-center gap-[clamp(24px,3.5vw,52px)] rounded-md border border-line bg-card p-[clamp(18px,2.4vw,30px)] ${columns} ${inView ? 'in' : ''}`}
      style={{ '--rot': p.rot }}
    >
      <span aria-hidden="true" className="tape absolute -top-[13px] left-1/2 z-[2] h-7 w-32" />

      {/* media */}
      <div className={`st flex min-w-0 flex-col gap-2.5 ${p.flip ? 'lg:order-2' : ''}`} style={next()}>
        <div className="pcard-feature relative aspect-[16/10] overflow-hidden rounded-[3px] border border-paper/10">{p.feature}</div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-[1.11fr_1.33fr_1.73fr_1.16fr]">
          {p.tiles.map((t) => (
            <div key={t.cls} className={`tile relative overflow-hidden rounded-[3px] border border-paper/10 ${TILE_ASPECT[t.cls]}`}>
              {t.art}
              {t.label && (
                <span className="absolute bottom-[5px] left-[7px] font-mono text-[8px] tracking-[.08em] text-white/70">{t.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* copy */}
      <div className="min-w-0">
        {p.wip && (
          <span
            className="st wip-dot label mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-dashed border-violet/50 bg-tint py-1.5 pl-3 pr-3.5 text-deep"
            style={next()}
          >
            Under construction
          </span>
        )}
        <h3 className="st font-serif text-[clamp(42px,4.6vw,70px)] font-normal uppercase leading-[.9]" style={next()}>
          {p.title}
        </h3>
        <div className="st date-dot label mb-[30px] mt-[18px] flex items-center gap-2.5 text-mist" style={next()}>
          {p.meta}
        </div>
        {p.paragraphs.map((text, i) => (
          <p key={i} className={`st text-sm text-paper/70 ${i ? 'mt-3.5' : ''}`} style={next()}>
            {text}
          </p>
        ))}
        <div className="st mt-[22px] flex flex-wrap gap-2" style={next()}>
          {p.chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
        <div className="st mt-[26px] flex items-center justify-between gap-4 border-t border-line pt-[18px]" style={next()}>
          <span className="label text-mist">{p.kind}</span>
          {p.cta.href ? (
            <a
              className="line-link label"
              style={{ '--line-w': '44px' }}
              href={p.cta.href}
              {...(p.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {p.cta.label}
            </a>
          ) : (
            <span className="line-link muted label cursor-default text-mist" style={{ '--line-w': '44px' }}>
              {p.cta.label}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
