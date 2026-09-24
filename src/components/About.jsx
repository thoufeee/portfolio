import { useInView } from '../hooks/useInView';
import { NAME, ROLE, RESUME_URL } from '../data/profile';
import Reveal from './ui/Reveal';
import QuoteCard from './QuoteCard';
import DeveloperIllustration from './art/DeveloperIllustration';

export default function About() {
  // the illustration bursts once a quarter of the section is visible
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section
      id="about"
      ref={ref}
      className={`relative overflow-hidden bg-about px-gutter pb-[clamp(56px,6vw,84px)] pt-[clamp(96px,10vw,140px)] ${inView ? 'about-in' : ''}`}
    >
      <div className="relative z-[1] grid grid-cols-1 gap-y-8 md:grid-cols-[1fr_min(30vw,440px)_1fr] md:gap-x-[clamp(24px,4vw,64px)] md:gap-y-7">
        <Reveal as="h2" className="font-serif text-[clamp(40px,5vw,76px)] font-normal uppercase leading-[.9] md:col-start-1 md:row-start-1">
          Build <em className="align-[.5em] text-[.55em] normal-case text-violet">the</em> Backbone
        </Reveal>

        <Reveal delay={1} className="order-2 max-w-[440px] text-ink-black md:order-none md:col-start-3 md:row-start-1">
          <span className="mb-3 block font-serif text-[clamp(34px,3.4vw,52px)] italic leading-none">Hi there,</span>
          <p className="font-sans text-[clamp(20px,2vw,30px)] font-medium uppercase leading-[1.1] tracking-[-.01em]">
            I'm <strong className="marker px-[.08em] font-medium">{NAME}</strong>, a {ROLE}.
          </p>
        </Reveal>

        <div className="order-1 flex justify-center md:order-none md:col-span-3 md:row-start-2">
          <DeveloperIllustration className="about-art relative z-[2] h-auto w-[min(74vw,340px)] overflow-visible md:w-[min(30vw,440px)]" />
        </div>

        <Reveal delay={1} className="order-4 self-end md:order-none md:col-start-1 md:row-start-3">
          <a className="line-link label text-paper transition-colors hover:text-violet" href={RESUME_URL} download>
            Download résumé
          </a>
        </Reveal>

        <QuoteCard className="order-3 mt-[30px] md:order-none md:col-start-3 md:row-start-3 md:mt-0" />
      </div>
    </section>
  );
}
