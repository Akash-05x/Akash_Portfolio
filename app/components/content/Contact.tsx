'use client';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: '3px',
    padding: '0.85rem 1rem',
    color: 'var(--white)',
    fontSize: '0.92rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <Reveal>
      <section
        id="contact"
        style={{ padding: '8rem 2.5rem', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
      >
        <span style={{ color: 'var(--gold)', fontFamily: "'Fira Code', monospace", fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>
          what&apos;s next?
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '1.2rem',
            lineHeight: 1.2,
          }}
        >
          Get In <span style={{ color: 'var(--gold)' }}>Touch</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.97rem' }}>
          I&apos;m currently open to new opportunities. Whether you have a project in mind,
          a question, or just want to say hi — my inbox is always open.
        </p>

        <div
          style={{
            position: 'relative',
            borderRadius: '36px',
            overflow: 'hidden',

            boxShadow: `
      0 25px 80px rgba(0,0,0,0.6),
      0 0 60px rgba(200,169,110,0.12)
    `,
          }}
        >
          {/* RUNNING BORDER */}
          <div
            style={{
              position: 'absolute',
              inset: '-250%',

              background: `
        conic-gradient(
          from 0deg,
          transparent,
          transparent,
          rgba(255,200,100,0.95),
          rgba(255,230,180,1),
          rgba(255,200,100,0.95),
          transparent,
          transparent
        )
      `,

              animation: 'liquidRotate 6s linear infinite',

              zIndex: 0,
            }}
          />

          {/* INNER PANEL */}
          <div
            style={{
              position: 'relative',
              margin: '2px',

              borderRadius: '34px',

              background: `
        linear-gradient(
          145deg,
          rgba(18,18,18,0.98),
          rgba(8,8,8,0.99)
        )
      `,

              backdropFilter: 'blur(30px)',

              padding: '2.5rem',

              zIndex: 2,
            }}
          >

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '0.6rem' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you — I&apos;ll be in touch soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    marginTop: '1.5rem',
                    background: 'none',
                    border: '1px solid var(--gold)',
                    color: 'var(--gold)',
                    padding: '0.6rem 1.5rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '0.85rem',
                    borderRadius: '3px',
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Akash S"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="akash@gmail.com"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#e57373', fontSize: '0.85rem' }}>Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  style={{
                    background: 'var(--gold)',
                    border: 'none',
                    color: 'var(--card-bg)',
                    padding: '0.95rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    fontFamily: 'inherit',
                    borderRadius: '3px',
                    opacity: status === 'sending' ? 0.7 : 1,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending') e.currentTarget.style.background = 'var(--gold-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--gold)';
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            )}
          </div>
        </div>


        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3.5rem' }}>
          {[
            { label: 'GitHub', url: 'https://github.com/Akash-05x' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/akash-s-a203592a1' },
            { label: 'Twitter', url: 'https://x.com/AKASH__05' },
            { label: 'Instagram', url: 'https://www.instagram.com/_akash05._/' },
            { label: 'Email', url: 'mailto:akashcrazy2004@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontFamily: "'Fira Code', monospace",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <style jsx>{`

         @keyframes liquidRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

          @keyframes rotateBorder {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotateGlow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 540px) {
    div[style*="grid-template-columns: 1fr 1fr"] {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
      </section>
    </Reveal>
  );
}
