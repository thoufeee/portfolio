import Reveal from './Reveal';

export default function SectionHead({ title, className = '' }) {
  return (
    <Reveal className={`mb-[clamp(48px,6vw,80px)] flex items-end justify-between gap-6 border-b border-line pb-6 ${className}`}>
      <h2 className="font-serif text-[clamp(40px,5vw,76px)] font-normal uppercase leading-[.9]">{title}</h2>
    </Reveal>
  );
}
