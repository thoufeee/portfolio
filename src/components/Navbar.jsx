import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { GITHUB_URL } from '../data/profile';

const LINKS = [
  ['about', 'About'],
  ['works', 'Works'],
  ['stack', 'Skills'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];
const IDS = LINKS.map(([id]) => id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(IDS);

  // transparent over the hero, faint lavender glass after it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const surface = open
    ? 'bg-ink'
    : scrolled
      ? 'bg-ink/80 backdrop-blur-md shadow-[0_1px_0_rgb(42_22_71/.06)]'
      : 'bg-transparent';

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 grid h-16 grid-cols-[1fr_auto] items-center px-gutter text-paper transition-[background-color,box-shadow] duration-400 md:h-[76px] md:grid-cols-[1fr_auto_1fr] ${surface}`}
    >
      <a
        href="#top"
        aria-label="hello world — home"
        className="justify-self-start font-sans text-2xl font-medium leading-none tracking-[-.02em] md:max-xl:text-[21px]"
      >
        hello world<span className="text-violet">.</span>
      </a>

      <ul
        id="menu"
        className={`fixed inset-x-0 top-16 flex list-none flex-col overflow-hidden border-b border-line bg-ink transition-[max-height] duration-500 md:static md:max-h-none md:flex-row md:gap-[18px] md:overflow-visible md:border-0 md:bg-transparent xl:gap-[clamp(20px,3.5vw,56px)] ${open ? 'max-h-80' : 'max-h-0'}`}
      >
        {LINKS.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`nav-link label block border-t border-line px-gutter py-[18px] transition-colors hover:text-paper md:border-0 md:p-0 md:max-xl:tracking-[.22em] ${active === id ? 'active text-paper' : 'text-mist'}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-[18px] justify-self-end">
        <span className="hidden h-[76px] w-px bg-line xl:block" />
        <a className="label hidden xl:inline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="#contact"
          className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-violet bg-violet px-[18px] py-[9px] text-xs tracking-[.02em] text-white transition-colors duration-400 hover:border-violet-active hover:bg-violet-active md:inline-flex"
        >
          Let's talk <span aria-hidden="true">↳</span>
        </a>
        <button
          type="button"
          className="label cursor-pointer text-paper md:hidden"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
      </div>
    </nav>
  );
}
