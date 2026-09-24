import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import SectionHead from './ui/SectionHead';
import ProjectCard from './ProjectCard';

export default function Works() {
  const sectionRef = useRef(null);

  // subtle parallax: each card's main image drifts up to 18px as it scrolls past
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const feats = [...sectionRef.current.querySelectorAll('.pcard-feature')];
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      feats.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
        el.querySelector('svg')?.style.setProperty('--py', `${(p * -18).toFixed(1)}px`);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="works" ref={sectionRef} className="relative px-gutter py-[clamp(72px,9vw,128px)]">
      <SectionHead title="Works" />
      <div className="mx-auto flex max-w-[1120px] flex-col gap-[clamp(56px,7vw,96px)] pt-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
