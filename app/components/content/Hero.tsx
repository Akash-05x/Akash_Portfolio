'use client';
import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import HeroCanvas from './HeroCanvas';
import Akash from './Akash';



export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      // Draw subtle connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200,169,110,${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Reveal>
      <HeroCanvas />

      <section
        id="hero"
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'visible',


        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: '20%',
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.7,
          }}
        />

        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2.5rem',
            paddingTop: '100px',
          }}
        >
          <p
            style={{
              color: 'var(--gold)',
              fontSize: '0.95rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontFamily: "'Fira Code', monospace",
              animation: 'fadeInUp 0.6s ease both',
            }}
          >
            Hello, I&apos;m
          </p>

          <Akash />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0rem',
              marginBottom: '2rem',

            }}
          >
            <div />
            <h2
              style={{
                fontSize: '1.1rem',
                fontWeight: 400,
                color: 'var(--gold)',
                fontFamily: 'inherit',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Full Stack Developer
            </h2>
          </div>

          <p
            style={{
              maxWidth: '540px',
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '3rem',
              animation: 'fadeInUp 0.6s ease 0.3s both',
            }}
          >
            I build modern, scalable, and high-performance web applications with a strong focus on
            user experience and clean architecture. Passionate about <span style={{ color: 'var(--gold)' }}>
              full stack development
            </span>, I enjoy transforming complex ideas into seamless digital experiences using modern frontend,
            backend, and AI technologies.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.6s ease 0.4s both',
            }}
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--gold)',
                border: 'none',
                color: 'var(--navy)',
                padding: '0.85rem 2.2rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'inherit',
                borderRadius: '3px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                padding: '0.85rem 2.2rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'inherit',
                borderRadius: '3px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200,169,110,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '3rem',
              marginTop: '5rem',
              paddingTop: '3rem',
              borderTop: '1px solid var(--border)',
              animation: 'fadeInUp 0.6s ease 0.5s both',
              flexWrap: 'wrap',
            }}
          >
            {[
              { num: '2', label: 'Industry Internships' },
              { num: '8.14', label: 'Current CGPA' },
              { num: '8+', label: 'Technologies Learned' },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', marginTop: '4px' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div
        onClick={scrollToAbout}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounce 2s infinite',
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '20px',
            height: '32px',
            border: '1px solid var(--gold)',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '5px',
          }}
        >
          <div
            style={{
              width: '3px',
              height: '7px',
              background: 'var(--gold)',
              borderRadius: '2px',
              animation: 'scrollDot 1.5s infinite',
            }}
          />
        </div>
      </div> */}

        <style jsx>{`

        @keyframes rotate3d {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }

  25% {
    transform: rotateY(90deg) rotateX(8deg);
  }

  50% {
    transform: rotateY(180deg) rotateX(0deg);
  }

  75% {
    transform: rotateY(270deg) rotateX(-8deg);
  }

  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
}

@keyframes glowPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}

        @keyframes creatorFloat {
  0% {
    transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
  }

  25% {
    transform: translate3d(0, -10px, 0) rotateX(4deg) rotateY(-4deg);
  }

  50% {
    transform: translate3d(0, -18px, 0) rotateX(0deg) rotateY(4deg);
  }

  75% {
    transform: translate3d(0, -10px, 0) rotateX(-4deg) rotateY(-4deg);
  }

  100% {
    transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg);
  }
}

@keyframes shadowFloat {
  0% {
    transform: translateY(0px);
    opacity: 0.2;
  }

  50% {
    transform: translateY(18px);
    opacity: 0.08;
  }

  100% {
    transform: translateY(0px);
    opacity: 0.2;
  }
}

@keyframes glowMove {
  0%, 100% {
    transform: scale(1) translateX(0px);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.15) translateX(20px);
    opacity: 1;
  }
}
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }

    50% {
      transform: translateX(-50%) translateY(-6px);
    }
  }

  @keyframes scrollDot {
    0% {
      transform: translateY(0);
      opacity: 1;
    }

    100% {
      transform: translateY(10px);
      opacity: 0;
    }
  }

  @keyframes floatText {
    0% {
      transform: translateY(0px) rotateX(0deg);
    }

    25% {
      transform: translateY(-8px) rotateX(2deg);
    }

    50% {
      transform: translateY(-14px) rotateX(0deg);
    }

    75% {
      transform: translateY(-8px) rotateX(-2deg);
    }

    100% {
      transform: translateY(0px) rotateX(0deg);
    }
  }

  @keyframes floatShadow {
    0% {
      transform: translateY(0px);
      opacity: 0.3;
    }

    50% {
      transform: translateY(12px);
      opacity: 0.15;
    }

    100% {
      transform: translateY(0px);
      opacity: 0.3;
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }

    50% {
      opacity: 0.9;
      transform: scale(1.08);
    }
  }
`}</style>

      </section>

    </Reveal >
  );
}
