'use client';
import { useState } from 'react';
import Reveal from './Reveal';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React / Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Javascript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: '◉',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 75 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'Tools',
    icon: '◎',
    skills: [
      { name: 'Firebase', level: 88 },
      { name: 'OpenCV', level: 75 },
      { name: 'UIPath', level: 72 },

    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <Reveal>
      <section
        id="skills"
        style={{
          padding: '8rem 2.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>

          <h2 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700 }}>
            Skills & Technologies
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', maxWidth: '300px' }} />
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActive(i)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: active === i ? '2px solid var(--gold)' : '2px solid transparent',
                padding: '0.8rem 1.8rem',
                cursor: 'pointer',
                color: active === i ? 'var(--gold)' : 'var(--text-muted)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                marginBottom: '-1px',
              }}
            >
              <span style={{ marginRight: '8px', opacity: 0.7 }}>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
          {skillCategories[active].skills.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                animation: `fadeIn 0.4s ease ${i * 0.06}s both`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 500 }}>{skill.name}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--gold)', fontFamily: "'Fira Code', monospace" }}>
                  {skill.level}%
                </span>
              </div>
              <div
                style={{
                  height: '3px',
                  background: 'rgba(200,169,110,0.12)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                    borderRadius: '2px',
                    animation: `growBar 0.8s ease ${i * 0.08}s both`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tags cloud */}
        <div style={{ marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            Also familiar with
          </p>


          {/* STACK */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '2rem',
            }}
          >
            {['Prisma', 'JWT', 'vs code', 'Postman', 'Figma', 'Nodemailer', 'python', 'Angular', 'Git/GitHub'].map((tag) => (
              <span
                key={tag}
                className="tech-pill"
                style={{
                  padding: '0.6rem 1rem',

                  borderRadius: '999px',

                  background:
                    'rgba(255,255,255,0.03)',

                  border:
                    '1px solid rgba(200,169,110,0.15)',

                  color: 'var(--gold)',

                  fontSize: '0.75rem',

                  fontFamily:
                    "'Fira Code', monospace",

                  transition: '0.3s',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        <style jsx>{`

        .project-card {
    transition: 0.5s;
  }

  .project-card:hover {
    transform: translateY(-10px);
  }

  .project-visual {
    transition: 0.6s;
  }

  .project-visual:hover {
    transform:
      perspective(1400px)
      rotateX(6deg)
      rotateY(-6deg)
      scale(1.02);
  }

  .project-image {
    transition: 0.8s;
  }

  .project-visual:hover .project-image {
    transform: scale(1.08);
  }

  .liquid-border {
    animation: liquidRotate 5s linear infinite;
  }

  .water-glow {
    animation: waterMove 6s ease-in-out infinite;
  }

  .floating-number {
    animation: numberFloat 4s ease-in-out infinite;
  }

  .tech-pill:hover {
    transform: translateY(-4px);
    background: rgba(200,169,110,0.15);
    box-shadow:
      0 0 20px rgba(200,169,110,0.2);
  }

  .project-btn:hover {
    transform: translateY(-4px);
    background: rgba(200,169,110,0.15);
    box-shadow:
      0 0 30px rgba(200,169,110,0.2);
  }

  @keyframes liquidRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
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

  @keyframes numberFloat {
    0%, 100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-12px);
    }
  }

  @media (max-width: 900px) {
    .project-card {
      grid-template-columns: 1fr !important;
    }
  }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growBar {
          from { width: 0; }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      </section>
    </Reveal>
  );
}
