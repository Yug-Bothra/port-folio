import React, { useState } from 'react';

import img1 from './assets/images/image1.png';
import img2 from './assets/images/image3.png';
import img3 from './assets/images/image4.png';
import img4 from './assets/images/image5.png';
import img5 from './assets/images/image6.png';
import img6 from './assets/images/image7.png';
import img7 from './assets/images/image8.png';
import img8 from './assets/images/image9.png';
import img9 from './assets/images/image10.png';

const projects = [
  {
    title: 'NEURO CAMPUS – AI & ML Based Campus Cloud Network',
    description:
      'A full-scale AI-powered campus cloud platform built with React and Supabase. Includes smart attendance, role-based dashboards, AI analytics, secure authentication, and scalable cloud infrastructure for universities.',
    github: 'https://github.com/Yug-Bothra/NEURO_CAMPUS',
    demo: 'https://neuro-campus-73w8.vercel.app/',
    tags: ['React', 'Supabase', 'AI/ML', 'Cloud'],
    emoji: '🧠',
    image: img1,
    category: 'fullstack',
  },
  {
    title: 'FORAM – Student Social Media Platform',
    description:
      'A student-only social media web platform designed to connect campus communities, share updates, and collaborate in a focused academic environment.',
    github: 'https://github.com/Yug-Bothra/FORAM',
    demo: 'https://foram.vercel.app/',
    tags: ['React', 'Social', 'Community'],
    emoji: '👥',
    image: img2,
    category: 'fullstack',
  },
  {
    title: 'AutoSlideX – AI PPT Generator',
    description:
      'An AI-powered presentation generator that automatically creates polished PowerPoint slides from a topic or prompt — saving hours of manual work.',
    github: 'https://github.com/Yug-Bothra/AutoSlideX',
    demo: 'https://auto-slide-x.vercel.app/',
    tags: ['AI', 'Productivity', 'React'],
    emoji: '📊',
    image: img3,
    category: 'ai',
  },
  {
    title: 'Smart Career Guidance & Quiz Generator',
    description:
      'An AI-driven quiz and career guidance system that generates personalized quizzes and career recommendations based on student profiles and interests.',
    github: null,
    demo: 'https://smart-career-guidance-system.vercel.app/',
    tags: ['AI', 'Career', 'Quiz', 'Education'],
    emoji: '🎯',
    image: img4,
    category: 'ai',
  },
  {
    title: 'NextStep – AI Resume Generator',
    description:
      'An intelligent resume builder that uses AI to craft professional, role-tailored resumes in seconds. Clean UI with export-ready output.',
    github: null,
    demo: 'https://nextstep-resume.netlify.app/',
    tags: ['AI', 'Resume', 'React'],
    emoji: '📄',
    image: img5,
    category: 'ai',
  },
  {
    title: 'PaperVista – AI Question Paper Generator',
    description:
      'An AI-powered tool for educators to auto-generate structured question papers with customizable difficulty, topics, and formats.',
    github: null,
    demo: 'https://paper-vista-five.vercel.app/',
    tags: ['AI', 'Education', 'Automation'],
    emoji: '📝',
    image: img6,
    category: 'ai',
  },
  {
    title: 'Animation Website (Frontend)',
    description:
      'A modern React + Vite powered animation portfolio website featuring smooth UI animations, 3D models, and multi-section layouts for a premium frontend experience.',
    github: 'https://github.com/Yug-Bothra/animationwebsite',
    demo: 'https://animationwebsite-kappa.vercel.app/',
    tags: ['React', 'Vite', '3D', 'Animation'],
    emoji: '✨',
    image: img7,
    category: 'fullstack',
  },
  {
    title: 'Novel-Nest – AI Novel Platform',
    description:
      'An AI-powered platform for novel generation and recommendation using Gemini API and Firebase.',
    github: 'https://github.com/Yug-Bothra/NOVEL-NEST',
    demo: 'https://novelnest-wdfo.vercel.app/',
    tags: ['Gemini API', 'Firebase', 'AI'],
    emoji: '📚',
    image: img8,
    category: 'ai',
  },
  {
    title: 'TRADEgain – Crypto Trading Simulator',
    description:
      'A real-time crypto trading simulator with WebSocket API and dynamic price updates.',
    github: 'https://github.com/Yug-Bothra/TRADEgain',
    demo: 'https://yug-bothra.github.io/TRADEgain/',
    tags: ['WebSocket', 'Crypto', 'Real-time'],
    emoji: '📈',
    image: img9,
    category: 'fullstack',
  },
  {
    title: 'Coffee E-Commerce Website',
    description:
      'A responsive e-commerce site for a coffee brand using HTML, CSS, and Bootstrap.',
    github: 'https://github.com/Yug-Bothra/COFFEE-WEB-SITE-',
    demo: 'https://yug-bothra.github.io/COFFEE-WEB-SITE-/',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    emoji: '☕',
    image: null,
    category: 'fullstack',
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

const categoryMeta = {
  all:      { label: 'All Projects', color: '#60a5fa' },
  fullstack: { label: 'Full Stack',  color: '#34d399' },
  ai:       { label: 'AI / ML',      color: '#a78bfa' },
};

function Projects() {
  const [hovered, setHovered]   = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <section style={{
      padding: '3rem 2rem',
      backgroundColor: '#0d1117',
      color: 'white',
      fontFamily: "'Segoe UI', sans-serif",
    }}>

      {/* Header */}
      <h2 style={{
        textAlign: 'center',
        marginBottom: '0.4rem',
        fontSize: '1.9rem',
        letterSpacing: '0.03em',
        color: '#e2e8f0',
      }}>
        🚀 Projects
      </h2>
      <p style={{ textAlign: 'center', color: '#475569', marginBottom: '1.75rem', fontSize: '0.88rem' }}>
        {projects.length} projects · Click links to explore
      </p>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.6rem',
        marginBottom: '2.5rem',
        flexWrap: 'wrap',
      }}>
        {Object.entries(categoryMeta).map(([key, meta]) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '0.42rem 1.1rem',
                borderRadius: '999px',
                border: isActive ? `1.5px solid ${meta.color}` : '1.5px solid #1e293b',
                backgroundColor: isActive ? `${meta.color}18` : 'transparent',
                color: isActive ? meta.color : '#64748b',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}
            >
              {meta.label}
              <span style={{
                marginLeft: '0.45rem',
                fontSize: '0.72rem',
                opacity: 0.7,
              }}>
                {key === 'all' ? projects.length : projects.filter(p => p.category === key).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {filtered.map((project, index) => {
          const isHovered = hovered === index;
          const catColor = categoryMeta[project.category]?.color || '#60a5fa';

          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                border: isHovered ? `1px solid ${catColor}44` : '1px solid #1e293b',
                borderRadius: '16px',
                backgroundColor: isHovered ? '#141c2e' : '#10151f',
                transition: 'all 0.25s ease',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 10px 35px rgba(0,0,0,0.5), 0 0 0 1px ${catColor}22` : 'none',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* ── Image Banner ── */}
              <div style={{
                width: '100%',
                height: '175px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#0d1117',
                flexShrink: 0,
              }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      display: 'block',
                    }}
                  />
                ) : (
                  /* Fallback for Coffee project */
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    fontSize: '3.5rem',
                  }}>
                    {project.emoji}
                  </div>
                )}

                {/* Category badge overlay */}
                <span style={{
                  position: 'absolute',
                  top: '0.65rem',
                  right: '0.65rem',
                  fontSize: '0.67rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.22rem 0.6rem',
                  borderRadius: '5px',
                  backgroundColor: '#0d111799',
                  backdropFilter: 'blur(6px)',
                  border: `1px solid ${catColor}55`,
                  color: catColor,
                }}>
                  {categoryMeta[project.category]?.label}
                </span>
              </div>

              {/* ── Card Body ── */}
              <div style={{
                padding: '1.25rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                flexGrow: 1,
              }}>
                {/* Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>{project.emoji}</span>
                  <h3 style={{
                    margin: 0,
                    fontSize: '0.95rem',
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
                  fontSize: '0.86rem',
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.tags.map((tag, t) => (
                    <span key={t} style={{
                      fontSize: '0.7rem',
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
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  paddingTop: '0.25rem',
                  borderTop: '1px solid #1e293b',
                  marginTop: '0.15rem',
                }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#60a5fa',
                        fontSize: '0.82rem',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontWeight: 500,
                        transition: 'color 0.2s',
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
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontWeight: 500,
                      transition: 'color 0.2s',
                    }}
                  >
                    ↗ Live Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;