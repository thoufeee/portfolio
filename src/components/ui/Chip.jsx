export default function Chip({ children, as: Tag = 'span' }) {
  return (
    <Tag className="rounded-full border border-line px-3 py-1.5 font-sans text-[11px] font-normal uppercase tracking-[.1em] text-paper/80 transition-colors hover:border-violet hover:bg-tint hover:text-deep">
      {children}
    </Tag>
  );
}
