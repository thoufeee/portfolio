import { useRef, useState } from 'react';
import { EMAIL, FORM_ENDPOINT } from '../data/profile';
import Reveal from './ui/Reveal';

const EMPTY = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOTES = {
  idle: '',
  invalid: 'Please fill in your name, a valid email and a message.',
  sending: 'Sending…',
  sent: 'Thanks! Your message has been sent — I’ll get back to you soon.',
  error: 'Couldn’t send right now.',
};

function Field({ id, label, error, full = false, multiline = false, ...props }) {
  const Input = multiline ? 'textarea' : 'input';
  return (
    <div className={`field relative ${full ? 'md:col-span-2' : ''} ${error ? 'error' : ''}`}>
      <Input
        id={id}
        placeholder=" "
        className="w-full resize-y bg-transparent pb-2.5 pt-[22px] font-sans text-base font-normal text-paper caret-violet outline-none"
        aria-invalid={error || undefined}
        {...props}
      />
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

/** Sends the message to your inbox via FormSubmit; falls back to the visitor's email app if that fails. */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | invalid | sending | sent | error
  const refs = { name: useRef(null), email: useRef(null), message: useRef(null) };
  const honeypot = useRef(null);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (status === 'sent' || status === 'invalid') setStatus('idle');
  };

  const subjectLine = () => values.subject.trim() || `Portfolio enquiry from ${values.name.trim()}`;
  const mailtoHref = () =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(subjectLine())}&body=${encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
    )}`;

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const next = {
      name: !values.name.trim(),
      email: !EMAIL_RE.test(values.email),
      message: !values.message.trim(),
    };
    setErrors(next);
    const firstBad = Object.keys(next).find((k) => next[k]);
    if (firstBad) {
      setStatus('invalid');
      refs[firstBad].current?.focus();
      return;
    }
    if (honeypot.current?.value) return; // bots fill hidden fields

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _subject: subjectLine(),
          _replyto: values.email.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'send failed');
      setStatus('sent');
      setValues(EMPTY);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const noteColor = status === 'invalid' || status === 'error' ? 'text-[#C91B11]' : status === 'sent' ? 'text-ok' : 'text-mist';

  return (
    <Reveal
      as="form"
      delay={2}
      noValidate
      onSubmit={submit}
      className="mx-auto grid w-full max-w-[760px] grid-cols-1 gap-x-8 gap-y-7 rounded-[18px] border border-line bg-card p-[clamp(28px,4vw,48px)] text-left shadow-[0_30px_60px_-40px_rgb(42_22_71/.25)] md:grid-cols-2"
    >
      <Field id="mf-name" label="Your name" ref={refs.name} autoComplete="name" value={values.name} onChange={set('name')} error={errors.name} />
      <Field id="mf-email" label="Your email" ref={refs.email} type="email" autoComplete="email" value={values.email} onChange={set('email')} error={errors.email} />
      <Field id="mf-subject" label="Subject" full value={values.subject} onChange={set('subject')} />
      <Field id="mf-msg" label="Tell me about your project" ref={refs.message} full multiline rows={4} value={values.message} onChange={set('message')} error={errors.message} />

      {/* spam trap: hidden from people, tempting for bots */}
      <input ref={honeypot} type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center justify-between gap-5 md:col-span-2">
        <p aria-live="polite" className={`text-[13px] ${noteColor}`}>
          {NOTES[status]}
          {status === 'error' && (
            <>
              {' '}
              <a href={mailtoHref()} className="underline underline-offset-2 hover:text-violet">
                Open your email app instead
              </a>
              .
            </>
          )}
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-violet px-7 py-3.5 font-sans text-sm font-normal tracking-[.04em] text-white transition-[translate,box-shadow,background-color,opacity] duration-300 hover:-translate-y-0.5 hover:bg-violet-active hover:shadow-[0_14px_34px_-12px_rgb(144_71_255/.7)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
          {status !== 'sending' && status !== 'sent' && <span aria-hidden="true">↗</span>}
        </button>
      </div>
    </Reveal>
  );
}
