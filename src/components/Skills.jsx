import { Fragment } from 'react';
import { skillGroups, marqueeRows } from '../data/skills';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import Chip from './ui/Chip';

function Marquee({ words, reverse = false }) {
  const row = (
    <div className="marquee-row flex gap-[.45em] pr-[.45em]">
      {words.map((w, i) => (
        <Fragment key={w}>
          <span className={(i + (reverse ? 1 : 0)) % 2 ? 'outline-text' : ''}>{w}</span>
          <span className="italic text-violet">·</span>
        </Fragment>
      ))}
    </div>
  );
  return (
    <div
      aria-hidden="true"
      className={`flex whitespace-nowrap font-serif text-[clamp(44px,6.5vw,100px)] font-normal uppercase leading-none ${reverse ? 'marquee-rev' : ''}`}
    >
      {row}
      {row}
    </div>
  );
}

// grid spans: 4 cards on the first row, 3 on the second (desktop); 2 per row on tablet
function spanFor(i, total) {
  const desktop = i < 4 ? 'xl:col-span-3' : 'xl:col-span-4';
  const tablet = i === total - 1 ? 'md:col-span-12' : 'md:col-span-6';
  return `col-span-12 ${tablet} ${desktop}`;
}

export default function Skills() {
  return (
    <section id="stack" className="relative overflow-hidden pb-[clamp(72px,9vw,128px)]">
      <SectionHead title="Skills" className="mx-gutter" />
      <Marquee words={marqueeRows[0]} />
      <Marquee words={marqueeRows[1]} reverse />

      <div className="mx-gutter mt-[clamp(48px,6vw,80px)] grid grid-cols-12 gap-px border border-line bg-line">
        {skillGroups.map((g, i) => (
          <Reveal
            key={g.name}
            delay={i % 4}
            className={`bg-card px-8 pb-10 pt-9 hover:bg-[linear-gradient(160deg,var(--color-tint),var(--color-card)_70%)] ${spanFor(i, skillGroups.length)}`}
          >
            <span className="label leading-[1.6] text-mist">{g.name}</span>
            <ul className="mt-[22px] flex list-none flex-wrap gap-2">
              {g.items.map((s) => (
                <Chip key={s} as="li">
                  {s}
                </Chip>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
