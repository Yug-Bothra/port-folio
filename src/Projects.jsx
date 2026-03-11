import React, { useState } from 'react';

const projects = [
  {
    title: 'NEURO CAMPUS – AI & ML Based Campus Cloud Network',
    description:
      'A full-scale AI-powered campus cloud platform built with React and Supabase. Includes smart attendance, role-based dashboards, AI analytics, secure authentication, and scalable cloud infrastructure for universities.',
    github: 'https://github.com/Yug-Bothra/NEURO_CAMPUS',
    demo: 'https://neuro-campus-73w8.vercel.app/',
    tags: ['React', 'Supabase', 'AI/ML', 'Cloud'],
    emoji: '🧠',
  },
  {
    title: 'FORAM – Student Social Media Platform',
    description:
      'A student-only social media web platform designed to connect campus communities, share updates, and collaborate in a focused academic environment.',
    github: 'https://github.com/Yug-Bothra/FORAM',
    demo: 'https://foram.vercel.app/',
    tags: ['React', 'Social', 'Community'],
    emoji: '👥',
  },
  {
    title: 'AutoSlideX – AI PPT Generator',
    description:
      'An AI-powered presentation generator that automatically creates polished PowerPoint slides from a topic or prompt — saving hours of manual work.',
    github: 'https://github.com/Yug-Bothra/AutoSlideX',
    demo: 'https://auto-slide-x.vercel.app/',
    tags: ['AI', 'Productivity', 'React'],
    emoji: '📊',
  },
  {
    title: 'Smart Career Guidance & Quiz Generator',
    description:
      'An AI-driven quiz and career guidance system that generates personalized quizzes and career recommendations based on student profiles and interests.',
    github: null,
    demo: 'https://smart-career-guidance-system.vercel.app/',
    tags: ['AI', 'Career', 'Quiz', 'Education'],
    emoji: '🎯',
  },
  {
    title: 'NextStep – AI Resume Generator',
    description:
      'An intelligent resume builder that uses AI to craft professional, role-tailored resumes in seconds. Clean UI with export-ready output.',
    github: null,
    demo: 'https://nextstep-resume.netlify.app/',
    tags: ['AI', 'Resume', 'React'],
    emoji: '📄',
  },
  {
    title: 'PaperVista – AI Question Paper Generator',
    description:
      'An AI-powered tool for educators to auto-generate structured question papers with customizable difficulty, topics, and formats.',
    github: null,
    demo: 'https://paper-vista-five.vercel.app/',
    tags: ['AI', 'Education', 'Automation'],
    emoji: '📝',
  },
  {
    title: 'Animation Website (Frontend)',
    description:
      'A modern React + Vite powered animation portfolio website featuring smooth UI animations, 3D models, and multi-section layouts for a premium frontend experience.',
    github: 'https://github.com/Yug-Bothra/animationwebsite',
    demo: 'https://animationwebsite-kappa.vercel.app/',
    tags: ['React', 'Vite', '3D', 'Animation'],
    emoji: '✨',
  },
  {
    title: 'Novel-Nest – AI Novel Platform',
    description:
      'An AI-powered platform for novel generation and recommendation using Gemini API and Firebase.',
    github: 'https://github.com/Yug-Bothra/NOVEL-NEST',
    demo: 'https://novelnest-wdfo.vercel.app/',
    tags: ['Gemini API', 'Firebase', 'AI'],
    emoji: '📚',
  },
  {
    title: 'TRADEgain – Crypto Trading Simulator',
    description:
      'A real-time crypto trading simulator with WebSocket API and dynamic price updates.',
    github: 'https://github.com/Yug-Bothra/TRADEgain',
    demo: 'https://yug-bothra.github.io/TRADEgain/',
    tags: ['WebSocket', 'Crypto', 'Real-time'],
    emoji: '📈',
  },
  {
    title: 'Coffee E-Commerce Website',
    description:
      'A responsive e-commerce site for a coffee brand using HTML, CSS, and Bootstrap.',
    github: 'https://github.com/Yug-Bothra/COFFEE-WEB-SITE-',
    demo: 'https://yug-bothra.github.io/COFFEE-WEB-SITE-/',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    emoji: '☕',
  },
];

const tagColors = {
  'React': '#61dafb22',
  'AI': '#a78bfa22',
  'AI/ML': '#a78bfa22',
  'Gemini API': '#a78bfa22',
  'Firebase': '#fb923c22',
  'Supabase': '#34d39922',
  'Cloud': '#38bdf822',
  'WebSocket': '#f59e0b22',
  'Crypto': '#fbbf2422',
  'Education': '#4ade8022',
  'Social': '#f472b622',
  'Productivity': '#818cf822',
};

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{
      padding: '3rem 2rem',
      backgroundColor: '#121212',
      color: 'white',
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '0.5rem',
        fontSize: '1.8rem',
        letterSpacing: '0.03em',
      }}>
        🚀 Projects
      </h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
        {projects.length} projects · Click links to explore
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              border: hovered === index ? '1px solid #334155' : '1px solid #1e293b',
              borderRadius: '14px',
              padding: '1.5rem',
              backgroundColor: hovered === index ? '#1a2235' : '#161b27',
              transition: 'all 0.25s ease',
              transform: hovered === index ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: hovered === index ? '0 8px 30px rgba(0,0,0,0.4)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{project.emoji}</span>
              <h3 style={{
                margin: 0,
                fontSize: '0.97rem',
                fontWeight: 700,
                color: '#e2e8f0',
                lineHeight: 1.4,
              }}>
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p style={{
              color: '#94a3b8',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              margin: 0,
              flexGrow: 1,
            }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {project.tags.map((tag, t) => (
                <span key={t} style={{
                  fontSize: '0.72rem',
                  padding: '0.18rem 0.55rem',
                  borderRadius: '5px',
                  backgroundColor: tagColors[tag] || '#1e293b',
                  color: '#93c5fd',
                  border: '1px solid #1e40af33',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#60a5fa',
                    fontSize: '0.83rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontWeight: 500,
                  }}
                >
                  ⬡ GitHub
                </a>
              )}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4ade80',
                  fontSize: '0.83rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: 500,
                }}
              >
                ↗ Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;