import {
  zipRideFeature, zipRideTiles,
  consoleFeature, consoleTiles,
  eventBookingFeature, eventBookingTiles,
} from './projectArt';

export const projects = [
  {
    id: 'zipride',
    title: 'ZipRide',
    meta: 'Ride-hailing platform · 2025',
    paragraphs: [
      'A microservices ride-hailing platform connecting riders with car, rickshaw and bike-taxi drivers.',
      'Real-time ride status, chat and in-app calling over WebSocket, Redis and Kafka. JWT + Google auth, OTP verification, PhonePe payments, ACL-based admin and cron-driven subscriptions.',
    ],
    chips: ['React', 'Go', 'Gin', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
    kind: 'Team project',
    cta: { label: 'See on GitHub', href: 'https://github.com/thoufeee/Zip_Ride', external: true },
    rot: '-1.1deg',
    feature: zipRideFeature,
    tiles: zipRideTiles,
  },
  {
    id: 'console',
    title: 'Console',
    meta: 'Tathkarah · Production · Now',
    paragraphs: [
      'The core booking console — a modular Go/Fiber platform serving booking, flight, hotel and payment domains, plus the data pipelines that keep it in sync.',
      'Plugin-based features, REST & gRPC APIs, live WebSocket updates and NATS events via Watermill — secured with JWT and role-based access, watched in Grafana.',
    ],
    chips: ['Go', 'Fiber', 'gRPC', 'NATS', 'WebSocket', 'PostgreSQL', 'MongoDB'],
    kind: 'Professional work',
    cta: { label: 'Read more', href: '#experience' },
    rot: '0.9deg',
    flip: true,
    feature: consoleFeature,
    tiles: consoleTiles,
  },
  {
    id: 'event-booking',
    title: 'Event Booking',
    meta: 'Event booking platform · 2026',
    wip: true,
    paragraphs: [
      'A microservices platform for discovering events and booking tickets — being built service by service in Go.',
      'Fiber services behind a gateway, Redis for fast seat holds and caching, packaged with Docker and orchestrated on Kubernetes.',
    ],
    chips: ['Golang', 'Microservices', 'Fiber', 'Docker', 'Kubernetes', 'Redis'],
    kind: 'Personal project',
    cta: { label: 'Coming soon' },
    rot: '-0.7deg',
    feature: eventBookingFeature,
    tiles: eventBookingTiles,
  },
];
