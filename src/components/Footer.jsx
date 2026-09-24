import { NAME, ROLE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-5 border-t border-line px-gutter py-[30px] text-mist">
      <span className="label">© {new Date().getFullYear()} {NAME}</span>
      <span className="label">{ROLE}</span>
    </footer>
  );
}
