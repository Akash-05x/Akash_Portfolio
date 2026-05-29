'use client';

import Reveal from './Reveal';

const projects = [
  {
    number: '01',
    title: 'Emergency Blood Request Management System',
    description:
      'Developed a real-time platform connecting hospitals with nearby blood donors using an intelligent matching algorithm, enabling faster response and efficient emergency coordination.',
    stack: ['Node.js', 'Java', 'PostgreSQL', 'React', 'Mapping APIs', 'Socket.IO'],
    links: { github: 'https://github.com/Akash-05x/blooddonation.git' },
    image: '/emer.png',
    featured: true,
  },
  {
    number: '02',
    title: 'Role-Based Online Examination Platform',
    description:
      'Developed a role-based online examination platform that streamlined user management and exam administration, ensuring a secure, efficient, and user- friendly experience.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    links: { github: 'https://github.com/Akash-05x/Role-Based-Online-Examination-Platform.git' },
    image: '/role.png',
    featured: true,
  },

];

const sideProjects = [
  {
    title: 'PDF Splitter Bot', desc: 'Developed an automation bot using UiPath to split multi-page PDF files into individual pages or by specified page ranges.', stack: ['UIPath', 'PDFActivities', 'RPA']
  },
  { title: 'Emotion Detection', desc: 'Developed an AI-based emotion detection system that identifies human emotions from facial expressions using computer vision and deep learning techniques.', stack: ['Python', 'OpenCV', 'Deep Learning', 'CNN', 'TensorFlow / Keras'] },

  { title: 'Number Plate Detection', desc: 'Developed a vehicle number plate detection system capable of identifying and extracting license plate numbers from vehicle images using computer vision and OCR techniques.', stack: ['Python', 'OpenCV', 'YOLOv5', 'Tesseract OCR', 'Computer Vision'] },

];

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        style={{ padding: '8rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>

          <h2 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700 }}>
            Featured Projects
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)', maxWidth: '300px' }} />
        </div>

        {/* Featured */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '6rem' }}>

          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
                marginBottom: '2rem',
              }}
            >
              {/* LEFT VISUAL */}
              <div
                className="project-visual"
                style={{
                  direction: 'ltr',
                  position: 'relative',
                  height: '340px',
                  borderRadius: '32px',
                  overflow: 'hidden',

                  background: `
          linear-gradient(
            145deg,
            rgba(18,18,18,0.95),
            rgba(8,8,8,0.98)
          )
        `,

                  border: '1px solid rgba(255,255,255,0.05)',

                  backdropFilter: 'blur(30px)',

                  boxShadow: `
          0 30px 80px rgba(0,0,0,0.55),
          inset 0 1px 1px rgba(255,255,255,0.03)
        `,
                }}
              >
                {/* LIQUID BORDER */}
                <div
                  className="liquid-border"
                  style={{
                    position: 'absolute',
                    inset: '-250%',

                    background: `
            conic-gradient(
              from 0deg,
              transparent,
              transparent,
              rgba(200,169,110,0.95),
              rgba(255,215,140,1),
              rgba(200,169,110,0.95),
              transparent,
              transparent
            )
          `,
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

                {/* GLOW */}
                <div
                  className="water-glow"
                  style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',

                    width: '300px',
                    height: '300px',

                    background:
                      'radial-gradient(circle, rgba(200,169,110,0.22), transparent 70%)',

                    filter: 'blur(80px)',

                    zIndex: 1,
                  }}
                />

                {/* GRID */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,

                    backgroundImage:
                      'linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)',

                    backgroundSize: '30px 30px',

                    zIndex: 1,
                  }}
                />

                {/* PROJECT NUMBER */}
                <span
                  className="floating-number"
                  style={{
                    position: 'absolute',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '8rem',
                    fontWeight: 700,

                    color: 'rgba(200,169,110,0.08)',

                    zIndex: 2,

                    top: '20px',
                    left: '30px',

                    userSelect: 'none',
                  }}
                >
                  {project.number}
                </span>

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',

                    position: 'relative',
                    zIndex: 3,

                    opacity: 0.88,
                  }}
                />

                {/* OVERLAY */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,

                    background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.65),
              transparent
            )
          `,

                    zIndex: 4,
                  }}
                />
              </div>

              {/* RIGHT CONTENT */}
              <div
                style={{
                  direction: 'ltr',
                }}
              >
                <p
                  style={{
                    color: 'var(--gold)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontFamily: "'Fira Code', monospace",
                    marginBottom: '0.8rem',
                  }}
                >
                  Featured Project
                </p>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '1.5rem',

                    color: '#fff',
                  }}
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION CARD */}
                <div
                  className="desc-card"
                  style={{
                    position: 'relative',

                    background: `
            linear-gradient(
              145deg,
              rgba(20,20,20,0.96),
              rgba(10,10,10,0.98)
            )
          `,

                    border:
                      '1px solid rgba(255,255,255,0.05)',

                    borderRadius: '24px',

                    padding: '2rem',

                    marginBottom: '1.8rem',

                    overflow: 'hidden',

                    backdropFilter: 'blur(20px)',

                    boxShadow: `
            0 20px 50px rgba(0,0,0,0.4)
          `,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,

                      background: `
              linear-gradient(
                120deg,
                transparent,
                rgba(255,255,255,0.03),
                transparent
              )
            `,
                    }}
                  />

                  <p
                    style={{
                      position: 'relative',
                      zIndex: 2,

                      color: 'var(--text-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.9,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* STACK */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                    marginBottom: '2rem',
                  }}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
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
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                  }}
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="project-btn"
                    style={{
                      padding: '0.9rem 1.4rem',

                      borderRadius: '999px',

                      background:
                        'rgba(200,169,110,0.08)',

                      border:
                        '1px solid rgba(200,169,110,0.2)',

                      color: '#fff',

                      textDecoration: 'none',

                      transition: '0.3s',
                    }}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}


        </div>

        {/* Side projects */}
        <h3
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            fontFamily: "'Fira Code', monospace",
          }}
        >
          Other Noteworthy Projects
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.2rem' }}>
          {sideProjects.map((p) => (
            <div
              key={p.title}
              style={{
                background: 'var(--white-alpha-5)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                color: 'var(--gold)',
                padding: '1.5rem',
                transition: 'all 0.25s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>⬡</div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.6rem' }}>{p.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.stack.map((t) => (
                  <span key={t} style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: "'Fira Code', monospace" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
`}</style>
      </section>
    </Reveal>
  );
}
