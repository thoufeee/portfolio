// Line-art developer whose head pops open with dev things (after Huy Phan's about page).
// Each .fly group bursts out of the head when the About section gets the "in" class.
export default function DeveloperIllustration({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 420 600" role="img" aria-label="Illustration: a developer with Go, a laptop, code, a database and tools bursting out of his head">
    <defs><pattern id="ht" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.1" fill="#2A1647" opacity=".55"/></pattern></defs>
    <g fill="none" stroke="#2A1647" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <g className="burst"><path d="M150 378l-18-14M270 378l18-14M128 408l-22-3M292 408l22-3M176 356l-7-20M244 356l7-20"/></g>
    <g className="fly" style={{ '--dx': '0px', '--dy': '345px', '--d': '0' }}><g className="float" style={{ '--d': '0' }}><g transform="translate(210 60) rotate(-8)"><rect x="-60" y="-44" width="120" height="76" rx="7" fill="#fff"/><rect x="-51" y="-35" width="102" height="58" rx="3" fill="#2A1647"/><path d="M-40 -20h30M-40 -10h52M-32 0h38M-40 10h24" stroke="#B98CFF"/><path d="M-72 32H72l-8 12H-64Z" fill="url(#ht)"/></g></g></g>
    <g className="fly" style={{ '--dx': '-120px', '--dy': '300px', '--d': '1' }}><g className="float" style={{ '--d': '1' }}><g transform="translate(330 105) rotate(0)"><ellipse rx="34" ry="12"/><ellipse rx="34" ry="12" transform="rotate(60)"/><ellipse rx="34" ry="12" transform="rotate(120)"/><circle r="5" fill="#9047FF"/></g></g></g>
    <g className="fly" style={{ '--dx': '132px', '--dy': '285px', '--d': '2' }}><g className="float" style={{ '--d': '2' }}><g transform="translate(78 120) rotate(0)"><circle r="22" strokeWidth="10" strokeDasharray="7 5.5"/><circle r="16" fill="#fff"/><circle r="6" fill="#9047FF"/></g></g></g>
    <g className="fly" style={{ '--dx': '60px', '--dy': '230px', '--d': '3' }}><g className="float" style={{ '--d': '3' }}><g transform="translate(150 175) rotate(-4)"><path d="M-26 12a14 14 0 0 1 4-27 18 18 0 0 1 34 4 12 12 0 0 1 4 23Z" fill="#fff"/><path d="M-12 2h18" stroke="#9047FF"/></g></g></g>
    <g className="fly" style={{ '--dx': '138px', '--dy': '155px', '--d': '4' }}><g className="float" style={{ '--d': '4' }}><g transform="translate(72 250) rotate(-12)"><path d="M-22 -24h44v44a10 10 0 0 1-10 10h-24a10 10 0 0 1-10-10Z" fill="#fff"/><path d="M-22 2h44v18a10 10 0 0 1-10 10h-24a10 10 0 0 1-10-10Z" fill="url(#ht)" stroke="none"/><path d="M22 -12h7a10 10 0 0 1 0 20h-7"/><path d="M-9 -32c-6-8 6-12 0-20M6 -32c-6-8 6-12 0-20"/></g></g></g>
    <g className="fly" style={{ '--dx': '-18px', '--dy': '200px', '--d': '5' }}><g className="float" style={{ '--d': '5' }}><g transform="translate(228 205) rotate(0)"><path d="M-14 -22V22M14 -8Q14 10 -12 20"/><circle cx="-14" cy="-24" r="6" fill="#fff"/><circle cx="-14" cy="26" r="6" fill="#fff"/><circle cx="14" cy="-12" r="6" fill="#9047FF"/></g></g></g>
    <g className="fly" style={{ '--dx': '-112px', '--dy': '190px', '--d': '6' }}><g className="float" style={{ '--d': '6' }}><g transform="translate(322 215) rotate(14)"><ellipse rx="12" ry="16" fill="#9047FF"/><circle cy="-19" r="7" fill="#fff"/><path d="M-12 -6h-9M-12 4h-10M-11 13l-8 6M12 -6h9M12 4h10M11 13l8 6M-4 -25l-4-7M4 -25l4-7M0 -16V16" /><path d="M0 -16V16" stroke="#fff" strokeWidth="2"/></g></g></g>
    <g className="fly" style={{ '--dx': '112px', '--dy': '65px', '--d': '7' }}><g className="float" style={{ '--d': '7' }}><g transform="translate(98 340) rotate(8)"><path d="M-22 -18v36a22 7 0 0 0 44 0v-36" fill="url(#ht)"/><ellipse cy="-18" rx="22" ry="7" fill="#fff"/><path d="M-22 0a22 7 0 0 0 44 0"/></g></g></g>
    <g className="fly" style={{ '--dx': '-102px', '--dy': '87px', '--d': '8' }}><g className="float" style={{ '--d': '8' }}><g transform="translate(312 318) rotate(6)"><rect x="-40" y="-28" width="80" height="56" rx="6" fill="#2A1647"/><path d="M-40 -16H40" stroke="#6E5F92" strokeWidth="2"/><circle cx="-31" cy="-22" r="2" fill="#B98CFF" stroke="none"/><circle cx="-24" cy="-22" r="2" fill="#B98CFF" stroke="none"/><path d="M-28 -2l8 6-8 6M-14 12h14" stroke="#B98CFF"/></g></g></g>
    <g className="fly" style={{ '--dx': '-135px', '--dy': '375px', '--d': '9' }}><g className="float" style={{ '--d': '9' }}><g transform="translate(345 30) rotate(10)"><text x="0" y="14" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="46" fill="#9047FF" stroke="none">{'{ }'}</text></g></g></g>
    <g className="fly" style={{ '--dx': '114px', '--dy': '363px', '--d': '10' }}><g className="float" style={{ '--d': '10' }}><g transform="translate(96 42) rotate(-10)"><path d="M-56 -8h12M-60 0h14M-54 8h10"/><rect x="-38" y="-18" width="76" height="36" rx="10" fill="#fff"/><text x="1" y="9" textAnchor="middle" fontFamily="Jost, sans-serif" fontWeight="500" fontStyle="italic" fontSize="26" letterSpacing="-1" fill="#00ADD8" stroke="none">GO</text></g></g></g>
    {/* the developer */}
    <path d="M96 600C106 548 150 528 210 528s104 20 114 72Z" fill="#fff"/>
    <path d="M184 530l26 30 26-30"/>
    <path d="M192 498v34h36v-34" fill="#fff"/>
    <ellipse cx="148" cy="458" rx="10" ry="15" fill="#fff"/><ellipse cx="272" cy="458" rx="10" ry="15" fill="#fff"/>
    <path d="M150 422c0-25 20-28 60-28s60 3 60 28v36c0 38-25 58-60 58s-60-20-60-58Z" fill="#fff"/>
    <path d="M150 428c0-26 16-31 60-31s60 5 60 31c-12-10-28-7-40-14-13 9-28 4-42 8-11-6-26 0-38 6Z" fill="#2A1647"/>
    <ellipse cx="210" cy="400" rx="56" ry="11" fill="#1A0D30"/>
    <ellipse className="glow" cx="210" cy="400" rx="40" ry="6" fill="#9047FF" stroke="none"/>
    <path d="M165 434q13-8 26 0M229 434q13-8 26 0"/>
    <rect x="160" y="442" width="38" height="26" rx="9" fill="#fff"/><rect x="222" y="442" width="38" height="26" rx="9" fill="#fff"/>
    <path d="M198 452q12-6 24 0M160 450h-10M260 450h10"/>
    <path d="M179 447l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z M241 447l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="#9047FF" stroke="none"/>
    <path d="M210 466q-6 12 3 14" strokeWidth="2.5"/>
    <path d="M180 486q30 26 60 0q-30 10-60 0Z" fill="#fff"/><path d="M187 490q23 9 46 0" strokeWidth="1.5"/>
    <circle cx="166" cy="486" r="9" fill="url(#ht)" stroke="none"/><circle cx="254" cy="486" r="9" fill="url(#ht)" stroke="none"/>
    </g>
    </svg>
  );
}
