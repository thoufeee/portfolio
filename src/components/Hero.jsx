import { useEffect, useMemo, useRef } from 'react';

const LOGS = [
  ['GET', '/v1/rides/8812', '200', '12ms'], ['POST', '/v1/auth/otp', '201', '48ms'],
  ['GET', '/v1/drivers/near', '200', '9ms'], ['PUT', '/v1/bookings/42', '200', '17ms'],
  ['POST', '/v1/payments', '202', '63ms'], ['GET', '/healthz', '200', '1ms'],
  ['SUB', 'ride.status.updated', 'ok', '—'], ['GET', '/v1/fare?km=6.4', '200', '6ms'],
  ['POST', '/v1/chat/send', '201', '11ms'], ['PUB', 'booking.created', 'ok', '—'],
  ['GET', '/v1/hotels/rates', '200', '33ms'], ['DEL', '/v1/sessions/me', '204', '4ms'],
];
const LETTER_STEP = 0.055; // seconds between letters

/** Splits a word into letters that rise in one after another. */
function Letters({ word }) {
  return [...word].map((c, i) => (
    <span key={i} className="ch" style={{ '--c': i }}>
      {c}
    </span>
  ));
}

function HttpTag({ children, delay, side, ok = false }) {
  return (
    <span
      className={`http-tag mx-auto mt-2.5 flex w-max items-center gap-2 whitespace-nowrap rounded-full border border-violet/25 bg-white/75 px-3 py-[5px] font-mono text-[11px] leading-[1.3] tracking-normal normal-case text-paper shadow-[0_10px_24px_-14px_rgb(42_22_71/.35)] md:absolute md:top-full md:mx-0 md:mt-3.5 md:inline-flex md:text-xs ${side}`}
      style={{ '--t': delay }}
    >
      {ok && <i className="size-[7px] rounded-full bg-ok shadow-[0_0_0_3px_rgb(49_159_67/.18)]" />}
      {children}
    </span>
  );
}

const wordClass =
  'relative whitespace-nowrap font-serif text-[clamp(52px,7.6vw,120px)] lowercase leading-[.9] tracking-[-.01em] md:absolute';

export default function Hero() {
  const innerRef = useRef(null);
  const sunRef = useRef(null);

  // random bokeh particles inside the circle (stable across renders)
  const bokeh = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        size: 6 + Math.random() * 20,
        left: Math.random() * 100,
        top: 58 + Math.random() * 42,
        opacity: (0.35 + Math.random() * 0.6).toFixed(2),
        delay: -Math.random() * 9,
      })),
    [],
  );

  // gentle parallax of the scene inside the circle
  useEffect(() => {
    const move = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (innerRef.current) innerRef.current.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
      if (sunRef.current) sunRef.current.style.transform = `translate(calc(-50% + ${x * -18}px), calc(-50% + ${y * -18}px))`;
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const reqBase = 0.45;
  const caretAt = `${(reqBase + 7 * LETTER_STEP + 0.3).toFixed(2)}s`;

  return (
    <header
      id="top"
      className="hero-guides relative grid min-h-svh place-items-center content-center overflow-hidden bg-ink px-gutter pb-[110px] pt-[100px] md:pt-[120px]"
    >
      <h1 className="sr-only">Request and Response — Muhammad Thoufeeq, Full Stack Developer</h1>

      <div className="relative z-[1] flex w-full max-w-[1100px] flex-col items-center md:grid md:place-items-center">
        {/* request */}
        <div aria-hidden="true" className="pointer-events-none z-[2] mb-7 md:absolute md:inset-0 md:mb-0">
          <span className={`${wordClass} text-paper md:left-[15%] md:top-[24%]`} style={{ '--base': `${reqBase}s` }}>
            <Letters word="Request" />
            <span className="caret" style={{ '--caret-at': caretAt }} />
            <HttpTag delay="1.1s" side="md:left-[.1em]">GET /api/hello</HttpTag>
          </span>
        </div>

        {/* the circle */}
        <div className="portal relative aspect-square rounded-full">
          <div ref={innerRef} className="portal-inner relative size-full overflow-hidden rounded-full">
            <div ref={sunRef} className="portal-sun absolute left-[58%] top-[34%] aspect-square w-[38%] rounded-full" />
            <span className="cloud" style={{ left: '8%', top: '20%', width: '42%', height: '12%' }} />
            <span className="cloud" style={{ left: '52%', top: '12%', width: '36%', height: '9%', animationDelay: '-6s' }} />
            <span className="cloud" style={{ left: '30%', top: '32%', width: '30%', height: '7%', opacity: 0.6, animationDelay: '-3s' }} />
            <svg className="absolute inset-x-0 bottom-0 h-[62%] w-full" viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 70 Q80 40 170 62 T400 55 V250 H0Z" fill="#E6DBFB" opacity=".9" />
              <path d="M0 105 Q120 70 230 95 T400 88 V250 H0Z" fill="#D6C3F8" opacity=".9" />
              <path d="M0 150 Q150 120 260 140 T400 130 V250 H0Z" fill="#C1A6F3" />
              <path d="M0 200 Q180 175 400 195 V250 H0Z" fill="#A988EC" />
            </svg>
            <div className="absolute inset-0">
              {bokeh.map((b, i) => (
                <span
                  key={i}
                  className="bokeh-dot"
                  style={{ width: b.size, height: b.size, left: `${b.left}%`, top: `${b.top}%`, opacity: b.opacity, animationDelay: `${b.delay}s` }}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="logstream absolute inset-x-[16%] inset-y-[14%] overflow-hidden whitespace-nowrap font-mono text-[clamp(8px,.8vw,10.5px)] leading-[1.9] text-paper/60"
            >
              <div className="logstream-track">
                {[...LOGS, ...LOGS].map(([m, p, s, t], i) => (
                  <div key={i}>
                    <b className="font-normal text-violet">{m}</b> {p} <span className="opacity-70">{s} · {t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* response */}
        <div aria-hidden="true" className="pointer-events-none z-[2] mt-3.5 md:absolute md:inset-0 md:mt-0">
          <span className={`${wordClass} glow-text text-violet md:left-[59%] md:top-[62%]`} style={{ '--base': '.8s' }}>
            <Letters word="Response" />
            <HttpTag delay="1.5s" side="md:right-[.1em]" ok>
              200 OK
            </HttpTag>
          </span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="intro absolute bottom-[18%] left-gutter hidden flex-col items-center gap-2.5 md:flex"
        style={{ animationDelay: '.9s' }}
      >
        <span className="grid size-16 place-items-center rounded-full border border-paper/20">
          <span className="rotate-180 font-sans text-[9px] uppercase tracking-[.28em] text-mist [writing-mode:vertical-rl]">Scroll down</span>
        </span>
        <span className="scroll-stem relative h-[54px] w-px bg-linear-to-b from-paper/20 to-mist" />
      </a>

      <div className="intro absolute bottom-9 right-gutter hidden items-center gap-3 text-mist md:flex" style={{ animationDelay: '1.1s' }}>
        <span className="label">Open to work</span>
        <i className="status-dot grid size-[34px] place-items-center rounded-full border border-paper/20" />
      </div>
    </header>
  );
}
