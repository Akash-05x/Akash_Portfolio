'use client';

import { useState } from 'react';
import Reveal from './Reveal';

function FlipCard({
  front,
}: {
  front: React.ReactNode;
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);

    setPosition({
      x: 0,
      y: 0,
    });
  };

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!dragging) return;

    const moveX =
      (e.clientX - window.innerWidth / 2) * 0.08;

    const moveY =
      (e.clientY - window.innerHeight / 2) * 0.08;

    setPosition({
      x: moveX,
      y: moveY,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        perspective: '1600px',
        height: '280px',
        cursor: dragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',

          transform: `
            translateX(${position.x}px)
            translateY(${position.y}px)
            scale(${dragging ? 1.03 : 1})
          `,

          transition: dragging
            ? 'transform 0.05s linear'
            : 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',

          animation: dragging
            ? 'none'
            : 'floatingCard 6s ease-in-out infinite',
        }}
      >
        {/* OUTER CONTAINER */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',

            borderRadius: '32px',

            overflow: 'hidden',

            background: `
              linear-gradient(
                145deg,
                rgba(18,18,18,0.96),
                rgba(8,8,8,0.98)
              )
            `,

            backdropFilter: 'blur(30px)',

            border:
              '1px solid rgba(255,255,255,0.04)',

            boxShadow: dragging
              ? `
                0 40px 120px rgba(0,0,0,0.7),
                0 0 60px rgba(200,169,110,0.15)
              `
              : `
                0 25px 80px rgba(0,0,0,0.6),
                inset 0 1px 1px rgba(255,255,255,0.05)
              `,
          }}
        >
          {/* LIQUID GOLD BORDER */}
          <div
            style={{
              position: 'absolute',
              inset: '-250%',

              background: `
                conic-gradient(
                  from 0deg,
                  transparent,
                  transparent,
                  rgba(200,169,110,0.95),
                  rgba(255,220,160,1),
                  rgba(200,169,110,0.95),
                  transparent,
                  transparent
                )
              `,

              animation:
                'liquidRotate 5s linear infinite',

              zIndex: 0,
            }}
          />

          {/* INNER PANEL */}
          <div
            style={{
              position: 'absolute',
              inset: '2px',

              borderRadius: '30px',

              background: `
                linear-gradient(
                  145deg,
                  rgba(22,22,22,0.98),
                  rgba(8,8,8,0.99)
                )
              `,

              zIndex: 1,
            }}
          />

          {/* TOP LIGHT */}
          <div
            style={{
              position: 'absolute',
              top: '-120px',
              left: '-80px',

              width: '300px',
              height: '300px',

              background:
                'radial-gradient(circle, rgba(255,215,140,0.18), transparent 70%)',

              filter: 'blur(70px)',

              animation:
                'waterMove 6s ease-in-out infinite',

              zIndex: 1,
            }}
          />

          {/* BOTTOM WATER GLOW */}
          <div
            style={{
              position: 'absolute',
              bottom: '-140px',
              right: '-100px',

              width: '320px',
              height: '320px',

              background:
                'radial-gradient(circle, rgba(200,169,110,0.15), transparent 70%)',

              filter: 'blur(90px)',

              animation:
                'waterMove2 8s ease-in-out infinite',

              zIndex: 1,
            }}
          />

          {/* SHINE EFFECT */}
          <div
            style={{
              position: 'absolute',
              inset: 0,

              background: `
                linear-gradient(
                  120deg,
                  transparent 20%,
                  rgba(255,255,255,0.04),
                  transparent 80%
                )
              `,

              transform: `
                translateX(${position.x * 1.5}px)
                translateY(${position.y * 1.5}px)
              `,

              zIndex: 2,
            }}
          />

          {/* CONTENT */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,

              padding: '2rem',

              height: '100%',
            }}
          >
            {front}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        style={{
          padding: '8rem 2.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
              color: 'var(--gold)',
              fontWeight: 700,
            }}
          >
            About Me
          </h2>

          <div
            style={{
              flex: 1,
              height: '1px',
              background: 'var(--border)',
              maxWidth: '300px',
            }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT */}
          <div>
            <p
              style={{
                lineHeight: 1.9,
                marginBottom: '1.2rem',
                fontSize: '0.98rem',
              }}
            >
              I’m a Full Stack Developer and Computer Science student
              passionate about building modern, scalable, and user-friendly
              web applications.
            </p>

            <p
              style={{
                lineHeight: 1.9,
                marginBottom: '1.2rem',
                fontSize: '0.98rem',
              }}
            >
              Through internships and personal projects, I’ve gained hands-on
              experience developing full stack applications and AI-powered
              solutions.
            </p>

            <p
              style={{
                lineHeight: 1.9,
                fontSize: '0.98rem',
              }}
            >
              I enjoy writing clean, maintainable code and continuously
              learning new technologies.
            </p>
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {/* CARD 1 */}
            <FlipCard
              front={
                <>
                  <p
                    style={{
                      color: 'var(--gold)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '1.5rem',
                    }}
                  >
                    PROFILE INFO
                  </p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1.5rem',
                    }}
                  >
                    {[
                      { label: 'Location', value: 'Thoothukudi' },
                      { label: 'CGPA', value: '8.14' },
                      { label: 'Availability', value: 'Open to Work' },
                      { label: 'Education', value: 'B.E. CSE' },
                    ].map((item) => (
                      <div key={item.label}>
                        <p
                          style={{
                            color: 'rgba(200,169,110,0.6)',
                            fontSize: '0.7rem',
                            marginBottom: '5px',
                          }}
                        >
                          {item.label}
                        </p>

                        <p
                          style={{
                            color: '#fff',
                            fontWeight: 600,
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              }
            />


          </div>
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

  @keyframes floatingCard {
    0%, 100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-16px);
    }
  }

  @keyframes waterMove {
    0%, 100% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(40px, 30px);
    }
  }

  @keyframes waterMove2 {
    0%, 100% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(-30px, -25px);
    }
  }

  @media (max-width: 768px) {
    section > div:last-child {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
      </section>
    </Reveal>
  );
}