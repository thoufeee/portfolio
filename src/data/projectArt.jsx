// Illustrations for the project cards (converted from the original inline SVGs).

export const zipRideFeature = (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
  <linearGradient id="zf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8b74e0"/><stop offset=".45" stopColor="#e2bdef"/><stop offset="1" stopColor="#1a0840"/></linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#zf)"/>
  <path d="M0 300 Q120 260 220 290 T400 280 V500 H0Z" fill="#7b3fd1"/>
  <path d="M0 380 Q200 350 400 372 V500 H0Z" fill="#2c0c64"/>
  <path d="M60 470 C120 400 200 420 250 360 S330 300 360 250" fill="none" stroke="#F6F1FF" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round"/>
  <circle cx="360" cy="250" r="8" fill="#F6F1FF"/>
  <text x="30" y="168" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="26" fill="#0E0920" opacity=".75">every ride,</text>
  <text x="30" y="200" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="26" fill="#0E0920" opacity=".75">an event.</text>
  </svg>
);

export const zipRideTiles = [
  {
    cls: 't1',
    label: "live tracking",
    art: (
      <svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="180" fill="#221a44"/>
      <g stroke="#3a2f66" strokeWidth="1"><path d="M0 40H200M0 90H200M0 140H200M40 0V180M100 0V180M160 0V180"/></g>
      <path d="M30 150 C60 120 60 80 100 80 S150 50 170 30" fill="none" stroke="#B98CFF" strokeWidth="3" strokeDasharray="6 5"/>
      <circle cx="30" cy="150" r="6" fill="#F6F1FF"/><circle cx="170" cy="30" r="7" fill="#B98CFF"/><circle cx="170" cy="30" r="14" fill="none" stroke="#B98CFF" opacity=".4"/>
      </svg>
    ),
  },
  {
    cls: 't2',
    label: "driver ⇄ rider chat",
    art: (
      <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="zg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6a3fc0"/><stop offset="1" stopColor="#1d1240"/></linearGradient></defs>
      <rect width="200" height="150" fill="url(#zg2)"/>
      <rect x="18" y="28" width="110" height="26" rx="13" fill="rgba(246,241,255,.14)"/>
      <rect x="72" y="66" width="110" height="26" rx="13" fill="#B98CFF"/>
      <rect x="18" y="104" width="80" height="26" rx="13" fill="rgba(246,241,255,.14)"/>
      </svg>
    ),
  },
  {
    cls: 't3',
    label: null,
    art: (
      <svg viewBox="0 0 260 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="260" height="150" fill="#140e2a"/>
      <text x="20" y="44" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#A99BC9">fare_estimate</text>
      <text x="20" y="100" fontFamily="Instrument Serif, serif" fontSize="52" fill="#F6F1FF">₹142</text>
      <text x="170" y="100" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#A8F0D8">▲ 6.4 km</text>
      </svg>
    ),
  },
  {
    cls: 't4',
    label: "kafka · websocket",
    art: (
      <svg viewBox="0 0 220 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><radialGradient id="zg4" cx=".3" cy=".3" r="1"><stop offset="0" stopColor="#8b74e0"/><stop offset="1" stopColor="#1a1236"/></radialGradient></defs>
      <rect width="220" height="190" fill="url(#zg4)"/>
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F6F1FF">
      <text x="18" y="36" opacity=".6">ride.status</text>
      <circle cx="24" cy="66" r="5" fill="#B98CFF"/><text x="38" y="69">requested</text>
      <circle cx="24" cy="96" r="5" fill="#B98CFF"/><text x="38" y="99">driver_assigned</text>
      <circle cx="24" cy="126" r="5" fill="none" stroke="#B98CFF"/><text x="38" y="129" opacity=".6">en_route</text>
      <circle cx="24" cy="156" r="5" fill="none" stroke="#B98CFF"/><text x="38" y="159" opacity=".6">completed</text>
      </g>
      <path d="M24 71V91M24 101V121" stroke="#B98CFF"/>
      </svg>
    ),
  },
];

export const consoleFeature = (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
  <linearGradient id="tf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3A2A6E"/><stop offset="1" stopColor="#0E0920"/></linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#tf)"/>
  <g stroke="rgba(143,180,255,.18)"><path d="M0 100H400M0 200H400M0 300H400M0 400H400M100 0V500M200 0V500M300 0V500"/></g>
  <path d="M0 380 L60 340 L110 360 L170 280 L230 300 L290 200 L340 230 L400 140" fill="none" stroke="#8FB4FF" strokeWidth="2.5"/>
  <path d="M0 380 L60 340 L110 360 L170 280 L230 300 L290 200 L340 230 L400 140 V500 H0Z" fill="#8FB4FF" opacity=".08"/>
  <text x="30" y="172" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="26" fill="#F6F1FF">uptime is a feature.</text>
  </svg>
);

export const consoleTiles = [
  {
    cls: 't1',
    label: "nats · watermill",
    art: (
      <svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="180" fill="#12112e"/>
      <g fill="none" stroke="#8FB4FF" strokeWidth="1.5">
      <circle cx="100" cy="90" r="16"/><circle cx="40" cy="44" r="10"/><circle cx="160" cy="44" r="10"/><circle cx="40" cy="140" r="10"/><circle cx="160" cy="140" r="10"/>
      <path d="M86 80L48 52M114 80L152 52M86 100L48 132M114 100L152 132" strokeDasharray="3 3"/>
      </g>
      <text x="86" y="94" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#F6F1FF">nats</text>
      </svg>
    ),
  },
  {
    cls: 't2',
    label: null,
    art: (
      <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="150" fill="#1d1a44"/>
      <g fill="#8FB4FF"><rect x="20" y="96" width="16" height="34"/><rect x="44" y="76" width="16" height="54"/><rect x="68" y="86" width="16" height="44"/><rect x="92" y="56" width="16" height="74"/><rect x="116" y="66" width="16" height="64"/><rect x="140" y="40" width="16" height="90" fill="#F6F1FF"/></g>
      </svg>
    ),
  },
  {
    cls: 't3',
    label: null,
    art: (
      <svg viewBox="0 0 260 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="260" height="150" fill="#0c0a1f"/>
      <g fontFamily="JetBrains Mono, monospace" fontSize="8.5">
      <text x="16" y="30" fill="#8FB4FF">GET  /bookings/8812   200  21ms</text>
      <text x="16" y="50" fill="#A99BC9">POST /flights/search  200  64ms</text>
      <text x="16" y="70" fill="#8FB4FF">GET  /hotels/rates    200  33ms</text>
      <text x="16" y="90" fill="#B98CFF">SYNC booking.operator  retry</text>
      <text x="16" y="110" fill="#8FB4FF">SYNC booking.operator  ok  1.2s</text>
      <text x="16" y="130" fill="#A99BC9">▌</text>
      </g>
      </svg>
    ),
  },
  {
    cls: 't4',
    label: null,
    art: (
      <svg viewBox="0 0 220 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="tg4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3A2A6E"/><stop offset="1" stopColor="#12112e"/></linearGradient></defs>
      <rect width="220" height="190" fill="url(#tg4)"/>
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F6F1FF">
      <text x="18" y="40" opacity=".6">postgres</text><rect x="18" y="50" width="184" height="8" rx="4" fill="rgba(255,255,255,.1)"/><rect x="18" y="50" width="130" height="8" rx="4" fill="#8FB4FF"/>
      <text x="18" y="96" opacity=".6">mongodb</text><rect x="18" y="106" width="184" height="8" rx="4" fill="rgba(255,255,255,.1)"/><rect x="18" y="106" width="96" height="8" rx="4" fill="#8FB4FF"/>
      <text x="18" y="152" opacity=".6">grafana · pipelines</text><text x="158" y="152" fill="#A8F0D8">healthy</text>
      </g>
      </svg>
    ),
  },
];

export const eventBookingFeature = (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
  <linearGradient id="ef" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a0840"/><stop offset=".6" stopColor="#5a17a8"/><stop offset="1" stopColor="#0E0920"/></linearGradient>
  <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F6F1FF" stopOpacity=".55"/><stop offset="1" stopColor="#B98CFF" stopOpacity="0"/></linearGradient>
  </defs>
  <rect width="400" height="500" fill="url(#ef)"/>
  <path d="M90 0 L40 360 H160Z" fill="url(#beam)"/>
  <path d="M310 0 L240 360 H360Z" fill="url(#beam)"/>
  <path d="M200 0 L150 360 H250Z" fill="url(#beam)" opacity=".7"/>
  <rect x="0" y="360" width="400" height="20" fill="#2c0c64"/>
  <g fill="#0E0920">
  <circle cx="40" cy="430" r="26"/><circle cx="110" cy="440" r="30"/><circle cx="185" cy="425" r="24"/><circle cx="255" cy="440" r="30"/><circle cx="330" cy="430" r="26"/><circle cx="390" cy="445" r="28"/>
  <rect x="0" y="440" width="400" height="60"/>
  <path d="M150 410 L140 360 L152 362 L160 405Z"/>
  </g>
  <text x="30" y="168" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="28" fill="#F6F1FF">the show is</text>
  <text x="30" y="200" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="28" fill="#F2B8EC">being built.</text>
  </svg>
);

export const eventBookingTiles = [
  {
    cls: 't1',
    label: "tickets",
    art: (
      <svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="eg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9047FF"/><stop offset="1" stopColor="#2a0d5c"/></linearGradient></defs>
      <rect width="200" height="180" fill="url(#eg1)"/>
      <g transform="translate(30 50)">
      <path d="M0 0H140V28a12 12 0 0 0 0 24V80H0V52a12 12 0 0 0 0-24Z" fill="#F6F1FF"/>
      <path d="M100 6V74" stroke="#9047FF" strokeDasharray="4 4"/>
      <text x="14" y="34" fontFamily="Instrument Serif, serif" fontSize="20" fill="#2a0d5c">ADMIT ONE</text>
      <text x="14" y="56" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6E5F92">ROW F · SEAT 12</text>
      </g>
      </svg>
    ),
  },
  {
    cls: 't2',
    label: "seat hold · redis",
    art: (
      <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="150" fill="#1d1240"/>
      <path d="M40 26 Q100 10 160 26" fill="none" stroke="#F2B8EC" strokeWidth="2"/>
      <g fill="#3a2f66">
      <circle cx="52" cy="54" r="6"/><circle cx="72" cy="54" r="6"/><circle cx="92" cy="54" r="6" fill="#B98CFF"/><circle cx="112" cy="54" r="6" fill="#B98CFF"/><circle cx="132" cy="54" r="6"/><circle cx="152" cy="54" r="6"/>
      <circle cx="52" cy="78" r="6"/><circle cx="72" cy="78" r="6" fill="#B98CFF"/><circle cx="92" cy="78" r="6"/><circle cx="112" cy="78" r="6"/><circle cx="132" cy="78" r="6" fill="#B98CFF"/><circle cx="152" cy="78" r="6"/>
      <circle cx="52" cy="102" r="6"/><circle cx="72" cy="102" r="6"/><circle cx="92" cy="102" r="6"/><circle cx="112" cy="102" r="6" fill="#9047FF"/><circle cx="132" cy="102" r="6"/><circle cx="152" cy="102" r="6"/>
      </g>
      </svg>
    ),
  },
  {
    cls: 't3',
    label: "microservices",
    art: (
      <svg viewBox="0 0 260 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="260" height="150" fill="#140e2a"/>
      <g fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#F6F1FF">
      <rect x="16" y="22" width="64" height="24" rx="4" fill="none" stroke="#B98CFF"/><text x="26" y="38">gateway</text>
      <rect x="110" y="14" width="64" height="20" rx="4" fill="none" stroke="#8FB4FF"/><text x="120" y="28">events</text>
      <rect x="110" y="44" width="64" height="20" rx="4" fill="none" stroke="#8FB4FF"/><text x="120" y="58">booking</text>
      <rect x="184" y="29" width="62" height="20" rx="4" fill="none" stroke="#8FB4FF"/><text x="192" y="43">payment</text>
      <path d="M80 34H110M80 34L110 54M174 54L184 44" stroke="#6E5F92"/>
      <text x="16" y="96" fill="#A99BC9">kubectl get pods</text>
      <text x="16" y="116" fill="#A8F0D8">booking-7f9c   Running</text>
      <text x="16" y="134" fill="#F2B8EC">payment-2b1d   Building…</text>
      </g>
      </svg>
    ),
  },
  {
    cls: 't4',
    label: "in progress",
    art: (
      <svg viewBox="0 0 220 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><pattern id="hz" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="20" fill="#F2B8EC"/><rect x="10" width="10" height="20" fill="#2a0d5c"/></pattern></defs>
      <rect width="220" height="190" fill="#221a44"/>
      <rect y="0" width="220" height="16" fill="url(#hz)" opacity=".85"/>
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F6F1FF">
      <text x="18" y="54" opacity=".6">build progress</text>
      <rect x="18" y="64" width="184" height="8" rx="4" fill="rgba(255,255,255,.1)"/><rect x="18" y="64" width="80" height="8" rx="4" fill="#9047FF"/>
      <text x="18" y="100">✓ services scaffolded</text>
      <text x="18" y="120">✓ docker images</text>
      <text x="18" y="140" opacity=".6">… k8s manifests</text>
      <text x="18" y="160" opacity=".6">… checkout flow</text>
      </g>
      </svg>
    ),
  },
];

