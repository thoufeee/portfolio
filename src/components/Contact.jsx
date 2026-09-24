import { useState } from 'react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LEETCODE_URL } from '../data/profile';
import Reveal from './ui/Reveal';
import ContactForm from './ContactForm';

const SOCIALS = [
  ['GitHub', GITHUB_URL],
  ['LinkedIn', LINKEDIN_URL],
  ['LeetCode', LEETCODE_URL],
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <section
      id="contact"
      className="relative grid place-items-center overflow-hidden px-gutter py-[clamp(72px,9vw,128px)] text-center bg-[radial-gradient(ellipse_55%_50%_at_50%_55%,rgb(144_71_255/.12),transparent_70%)]"
    >
      <div className="w-full">
        <Reveal as="span" className="label inline-block text-mist">
          Open to new opportunities
        </Reveal>

        <Reveal as="h2" delay={1} className="mb-7 mt-[34px] font-serif font-normal leading-[.9]">
          <span className="mb-[.2em] block text-[clamp(24px,2.8vw,40px)] italic text-violet">have a project in mind?</span>
          <span className="block text-[clamp(52px,8vw,120px)] uppercase">Let's build</span>
          <span className="block text-[clamp(52px,8vw,120px)] uppercase">
            something <span className="text-[.6em] normal-case italic text-violet">great</span>
          </span>
        </Reveal>

        <Reveal as="p" delay={1} className="mx-auto mb-12 max-w-[460px] text-sm text-paper/70">
          Whether it's a full-time role or a freelance project, I'd love to hear about it. Send a message below or write to me directly.
        </Reveal>

        <ContactForm />

        <Reveal delay={3} className="mt-11 flex flex-wrap items-baseline justify-center gap-[18px]">
          <span className="label text-mist">or write directly</span>
          <a
            href={`mailto:${EMAIL}`}
            className="border-b border-line pb-1.5 font-serif text-[clamp(22px,2.6vw,36px)] italic transition-colors hover:border-violet hover:text-violet"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={copy}
            className="label cursor-pointer rounded-full border border-line px-3.5 py-1.5 text-mist transition-colors hover:border-violet hover:text-violet"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </Reveal>

        <Reveal delay={3} className="mt-14 flex flex-wrap justify-center gap-6 md:gap-10">
          {SOCIALS.map(([label, href]) => (
            <a key={label} className="label text-mist transition-colors hover:text-paper" href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
