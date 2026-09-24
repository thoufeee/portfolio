import { Fragment } from 'react';
import Reveal from './ui/Reveal';

const WORDS = ['Simplicity', 'is', 'the', 'art', 'of', 'hiding', 'complexity.'];

/** Frosted quote card: quote mark springs in, words rise out of a blur, then the attribution. */
export default function QuoteCard({ className = '' }) {
  return (
    <Reveal
      as="blockquote"
      delay={2}
      className={`qcard group relative max-w-[440px] self-end rounded-[14px] border border-violet/20 bg-white/70 px-8 pb-[26px] pt-[38px] shadow-[0_30px_60px_-40px_rgb(42_22_71/.4)] backdrop-blur-[6px] hover:-translate-y-1 hover:shadow-[0_36px_70px_-38px_rgb(144_71_255/.55)] ${className}`}
    >
      <span aria-hidden="true" className="q-mark absolute -top-11 left-5 font-serif text-[128px] leading-none text-violet">
        “
      </span>
      <p className="font-sans text-[clamp(21px,2vw,30px)] font-medium uppercase leading-[1.12] tracking-[-.01em] text-paper">
        {WORDS.map((w, i) => (
          <Fragment key={w}>
            <span
              className={`q-word ${i === 0 ? 'shimmer pr-[.06em] font-serif text-[1.3em] font-normal normal-case italic leading-[.9]' : ''}`}
              style={{ '--i': i }}
            >
              {w}
            </span>{' '}
          </Fragment>
        ))}
      </p>
      <div className="mt-[22px] flex flex-wrap items-center gap-3">
        <span aria-hidden="true" className="q-line h-px bg-violet" />
        <cite className="q-cite font-sans text-[13px] font-medium not-italic uppercase tracking-[.2em] text-paper">Rob Pike</cite>
      </div>
    </Reveal>
  );
}
