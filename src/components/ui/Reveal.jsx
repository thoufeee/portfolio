import { useInView } from '../../hooks/useInView';

/**
 * Fades + slides its content up the first time it scrolls into view.
 * `delay` (1–3) staggers siblings; `as` picks the rendered element.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  const classes = ['rv', delay ? `d${delay}` : '', inView ? 'in' : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
