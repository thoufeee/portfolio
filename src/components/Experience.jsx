import { experience } from '../data/experience';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative px-gutter pb-[clamp(72px,9vw,128px)]">
      <SectionHead title="Experience" />
      <ol className="list-none border-t border-line">
        {experience.map((job) => (
          <Reveal
            as="li"
            key={job.role}
            className="exp-row grid grid-cols-1 gap-[18px] border-b border-line py-11 hover:bg-[linear-gradient(90deg,var(--color-tint),transparent_70%)] md:grid-cols-[1fr_1.4fr] md:gap-8 md:hover:pl-6 xl:grid-cols-[180px_1fr_1.3fr]"
          >
            <div className="label text-mist md:col-span-2 xl:col-span-1 xl:pt-2.5">{job.when}</div>
            <div>
              <h4 className="font-serif text-[clamp(28px,2.8vw,40px)] font-normal uppercase leading-none">{job.role}</h4>
              <span className="label mt-3 block text-deep">{job.company}</span>
            </div>
            <ul className="dash-list list-none text-sm text-paper/70">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
