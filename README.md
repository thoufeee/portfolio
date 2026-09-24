# Muhammad Thoufeeq — Portfolio

Personal portfolio built with **React 19**, **Vite 8** and **Tailwind CSS 4**.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build
```

Requires Node.js 20.19+ (or 22.12+).

## Project structure

```
public/
  favicon.svg
  Muhammad-Thoufeeq-Resume.pdf     ← "Download résumé" link
src/
  main.jsx, App.jsx
  index.css                        ← Tailwind import + design tokens (@theme) + base styles
  styles/effects.css               ← keyframes, pseudo-elements, scroll-reveal states
  data/                            ← edit content here
    profile.js                     ← name, email, social links, résumé path
    projects.js                    ← Works cards (text, tags, links)
    projectArt.jsx                 ← the SVG illustrations for each card
    experience.js
    skills.js
  hooks/
    useInView.js                   ← "in view once" IntersectionObserver hook
    useActiveSection.js            ← highlights the current nav link
  components/
    Navbar, Hero, About, QuoteCard, Works, ProjectCard,
    Experience, Skills, Contact, ContactForm, Footer, Cursor
    art/DeveloperIllustration.jsx  ← About illustration
    ui/Reveal.jsx, SectionHead.jsx, Chip.jsx
```

## Editing content

- **Personal details / links:** `src/data/profile.js` (email, GitHub, LinkedIn, LeetCode, résumé path).
- **Projects:** `src/data/projects.js`. Each project's pictures live in `src/data/projectArt.jsx`.
- **Experience / skills:** `src/data/experience.js`, `src/data/skills.js`.
- **Résumé:** replace `public/Muhammad-Thoufeeq-Resume.pdf` (keep the file name, or update `RESUME_URL`).

## Styling

- Colours, fonts, spacing and breakpoints are Tailwind theme tokens in `src/index.css`
  (`bg-ink`, `text-paper`, `text-violet`, `border-line`, `font-serif`, `px-gutter`, `md:` = 721px, `xl:` = 1001px …).
- Layout and typography are Tailwind utility classes in the components.
- Animations that need keyframes, pseudo-elements or "revealed" states (letter build-in, the illustration
  burst, card reveals, marquee, floating form labels, custom cursor) are in `src/styles/effects.css`.
- Everything respects `prefers-reduced-motion`.

## Contact form

Messages are delivered to your inbox by [FormSubmit](https://formsubmit.co) (free, no account or backend).

1. Deploy the site (or run it locally) and send yourself one test message from the form.
2. FormSubmit emails **connectthoufeeq@gmail.com** an **Activate Form** link. Click it once.
3. From then on every message arrives in your inbox, with the sender's address set as reply-to.

A hidden honeypot field filters simple spam bots. If FormSubmit can't be reached, the form offers to open the
visitor's email app instead. To use a different service, change `FORM_ENDPOINT` in `src/data/profile.js`.

## Deploying

`npm run build` outputs a static site in `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages or any static host.
