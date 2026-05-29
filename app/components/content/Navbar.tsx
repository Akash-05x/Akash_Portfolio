'use client';
import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.2rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(0, 0, 0, 0.32)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          cursor: 'pointer',
          fontSize: '1.4rem',
          fontWeight: 700,
          alignItems: 'center',
          gap: '0.8rem',
          letterSpacing: '0.08em',
          fontFamily: "'Playfair Display', serif",
          color: 'var(--gold)',
        }}
      >
        <img src="/avatar1.jpeg" alt="Akash S" style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid var(--gold)',
          boxShadow: '0 0 15px rgba(200,169,110,0.25)',
        }} />
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
        {links.map((link, i) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'inherit',
              transition: 'color 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >

            {link}
          </button>
        ))}
        <button
          onClick={() => window.open('/AkashS.pdf', '_blank')}
          style={{
            background: 'none',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            padding: '0.5rem 1.2rem',
            cursor: 'pointer',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            borderRadius: '3px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)';
            e.currentTarget.style.color = 'var(--navy)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = 'var(--gold)';
          }}
        >
          Resume
        </button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--gold)',
              transition: 'all 0.3s',
              transform:
                menuOpen && i === 0
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : menuOpen && i === 2
                      ? 'rotate(-45deg) translate(5px, -5px)'
                      : 'none',
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            background: 'rgba(10,22,40,0.98)',
            backdropFilter: 'blur(20px)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {links.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--white)',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontFamily: 'inherit',
                textAlign: 'left',
              }}
            >
              <span style={{ color: 'var(--gold)', marginRight: '8px', fontSize: '0.8rem' }}>
                {String(i + 1).padStart(2, '0')}.
              </span>
              {link}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
