'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'Digisailor',
    role: 'Web Developer Intern',
    duration: '2025',
    location: 'Thoothukudi, Tamil Nadu',

    bullets: [
      'Learned and developed responsive web applications using Next.js, Tailwind CSS, and Firebase during internship training.',
      'Built a role-based online examination portal with secure authentication and user management features.',
      'Implemented responsive UI components and improved user experience using modern frontend development practices.',
      'Collaborated with the development team to understand real-world project workflows and full stack integration.',
    ],

    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Git',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  const exp = experiences[active];

  return (
    <Reveal>
      <section
        id="experience"
        style={{
          padding: '8rem 2rem',
          maxWidth: '1150px',
          margin: '0 auto',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem',
            marginBottom: '4rem',
          }}
        >


          <h2
            style={{
              color: 'var(--gold)',
              fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
          >
            Work{' '}
            <span style={{ color: 'var(--gold)' }}>
              Experience
            </span>
          </h2>

          <div
            style={{
              flex: 1,
              height: '1px',

              background: `
                linear-gradient(
                  90deg,
                  rgba(255,215,120,0.5),
                  transparent
                )
              `,
            }}
          />
        </div>

        {/* MAIN GRID */}
        <div className="profileGrid"
          style={{
            display: 'grid',
            gridTemplateColumns: '240px 1fr',
            gap: '2rem',
          }}
        >
          {/* LEFT SIDEBAR */}
          <div
            style={{
              position: 'relative',
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '0',
                top: 0,
                bottom: 0,
                width: '1px',

                background:
                  'rgba(255,255,255,0.06)',
              }}
            />

            {experiences.map((e, i) => (
              <button
                key={e.company}
                onClick={() => setActive(i)}
                style={{
                  position: 'relative',

                  width: '100%',

                  background:
                    active === i
                      ? 'rgba(255,215,120,0.06)'
                      : 'transparent',

                  border: 'none',

                  borderLeft:
                    active === i
                      ? '2px solid var(--gold)'
                      : '2px solid transparent',

                  padding: '1.1rem 1.2rem',

                  textAlign: 'left',

                  cursor: 'pointer',

                  transition:
                    'all 0.25s ease',

                  backdropFilter: 'blur(10px)',

                  borderRadius: '0 14px 14px 0',
                }}
              >
                <div
                  style={{
                    color:
                      active === i
                        ? 'var(--gold)'
                        : 'var(--white)',

                    fontSize: '0.95rem',

                    fontWeight: 500,

                    marginBottom: '4px',
                  }}
                >
                  {e.company}
                </div>

                <div
                  style={{
                    color:
                      'var(--text-muted)',

                    fontSize: '0.75rem',

                    letterSpacing: '0.08em',

                    textTransform: 'uppercase',
                  }}
                >
                  {e.duration}
                </div>
              </button>
            ))}
          </div>

          {/* EXPERIENCE CARD */}
          <div
            key={active}
            style={{
              position: 'relative',

              borderRadius: '32px',

              overflow: 'hidden',

              animation:
                'fadeSlide 0.45s ease',

              boxShadow: `
                0 25px 80px rgba(0,0,0,0.55),
                0 0 60px rgba(255,215,120,0.06)
              `,
            }}
          >
            {/* RUNNING GOLD BORDER */}
            <div
              style={{
                position: 'absolute',
                inset: '-250%',

                background: `
                  conic-gradient(
                    from 0deg,
                    transparent,
                    transparent,
                    rgba(255,215,120,0.9),
                    rgba(255,235,180,1),
                    rgba(255,215,120,0.9),
                    transparent,
                    transparent
                  )
                `,

                animation:
                  'rotateBorder 6s linear infinite',

                zIndex: 0,
              }}
            />

            {/* INNER PANEL */}
            <div
              style={{
                position: 'relative',

                margin: '2px',

                borderRadius: '30px',

                padding: '2.8rem',

                background: `
                  linear-gradient(
                    145deg,
                    rgba(18,18,18,0.98),
                    rgba(8,8,8,0.99)
                  )
                `,

                backdropFilter: 'blur(30px)',

                zIndex: 2,
              }}
            >
              {/* TOP GLOW */}
              <div
                style={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-80px',

                  width: '220px',
                  height: '220px',

                  background:
                    'radial-gradient(circle, rgba(255,215,120,0.12), transparent 70%)',

                  filter: 'blur(60px)',
                }}
              />

              {/* ROLE */}
              <div
                style={{
                  marginBottom: '2rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',

                    fontWeight: 600,

                    marginBottom: '0.7rem',

                    lineHeight: 1.3,
                  }}
                >
                  {exp.role}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.7rem',

                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--gold)',
                      fontWeight: 600,
                    }}
                  >
                    {exp.company}
                  </span>

                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background:
                        'rgba(255,255,255,0.3)',
                    }}
                  />

                  <span
                    style={{
                      color:
                        'var(--text-muted)',

                      fontSize: '0.9rem',
                    }}
                  >
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* BULLETS */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',

                  marginBottom: '2.2rem',
                }}
              >
                {exp.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '14px',

                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',

                        borderRadius: '50%',

                        marginTop: '10px',

                        background:
                          'var(--gold)',

                        boxShadow:
                          '0 0 12px rgba(255,215,120,0.6)',

                        flexShrink: 0,
                      }}
                    />

                    <p
                      style={{
                        color:
                          'var(--text-muted)',

                        lineHeight: 1.8,

                        fontSize: '0.9rem',
                      }}
                    >
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* TECH STACK */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.8rem',
                }}
              >
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding:
                        '0.55rem 1rem',

                      borderRadius: '999px',

                      background:
                        'rgba(255,215,120,0.08)',

                      border:
                        '1px solid rgba(255,215,120,0.12)',

                      color: 'var(--gold)',

                      fontSize: '0.8rem',

                      fontFamily:
                        "'Fira Code', monospace",

                      backdropFilter:
                        'blur(10px)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes rotateBorder {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* TABLET */
  @media (max-width: 900px) {
    .profileGrid {
      grid-template-columns: 180px 1fr;
      gap: 1.5rem;
    }
  }

  /* MOBILE */
  @media (max-width: 360px) {
    .profileGrid {
      grid-template-columns:100px 1fr;
      text-align: center;
    }
  }

        `}</style>
      </section>
    </Reveal>
  );
}