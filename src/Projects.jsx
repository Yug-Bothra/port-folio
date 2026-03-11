import React, { useState } from 'react';

import img1  from './assets/images/image1.png';
import img2  from './assets/images/image2.png';
import img3  from './assets/images/image3.png';
import img4  from './assets/images/image4.png';
import img5  from './assets/images/image5.png';
import img6  from './assets/images/image6.png';
import img7  from './assets/images/image7.png';
import img8  from './assets/images/image8.png';
import img9  from './assets/images/image9.png';
import img10 from './assets/images/image10.png';

const projects = [
  // ── Full Stack ──────────────────────────────────────────
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

  // ── AI / ML ─────────────────────────────────────────────
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
    title: 'Novel-Nest – AI Novel Platform',
    description:
      'An AI-powered platform for novel generation and recommendation using Gemini API and Firebase.',
    github: 'https://github.com/Yug-Bothra/NOVEL-NEST',
    demo: 'https://novelnest-wdfo.vercel.app/',
    tags: ['Gemini API', 'Firebase', 'AI'],
    emoji: '📚',
    image: img7,
    category: 'ai',
  },

  // ── Web Dev ─────────────────────────────────────────────
  {
    title: 'Animation Website (Frontend)',
    description:
      'A modern React + Vite powered animation portfolio website featuring smooth UI animations, 3D models, and multi-section layouts for a premium frontend experience.',
    github: 'https://github.com/Yug-Bothra/animationwebsite',
    demo: 'https://animationwebsite-kappa.vercel.app/',
    tags: ['React', 'Vite', '3D', 'Animation'],
    emoji: '✨',
    image: img8,
    category: 'webdev',
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
    category: 'webdev',
  },
  {
    title: 'Coffee E-Commerce Website',
    description:
      'A responsive e-commerce site for a coffee brand using HTML, CSS, and Bootstrap.',
    github: 'https://github.com/Yug-Bothra/COFFEE-WEB-SITE-',
    demo: 'https://yug-bothra.github.io/COFFEE-WEB-SITE-/',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    emoji: '☕',
    image: img10,
    category: 'webdev',
  },
];

const tagStyle = {
  'React':        { bg: '#61dafb10', text: '#67e8f9', border: '#61dafb25' },
  'AI':           { bg: '#a78bfa10', text: '#c4b5fd', border: '#a78bfa25' },
  'AI/ML':        { bg: '#a78bfa10', text: '#c4b5fd', border: '#a78bfa25' },
  'Gemini API':   { bg: '#a78bfa10', text: '#c4b5fd', border: '#a78bfa25' },
  'Firebase':     { bg: '#fb923c10', text: '#fdba74', border: '#fb923c25' },
  'Supabase':     { bg: '#34d39910', text: '#6ee7b7', border: '#34d39925' },
  'Cloud':        { bg: '#38bdf810', text: '#7dd3fc', border: '#38bdf825' },
  'WebSocket':    { bg: '#f59e0b10', text: '#fcd34d', border: '#f59e0b25' },
  'Crypto':       { bg: '#fbbf2410', text: '#fde68a', border: '#fbbf2425' },
  'Education':    { bg: '#4ade8010', text: '#86efac', border: '#4ade8025' },
  'Social':       { bg: '#f472b610', text: '#f9a8d4', border: '#f472b625' },
  'Productivity': { bg: '#818cf810', text: '#a5b4fc', border: '#818cf825' },
  'Vite':         { bg: '#f97316 10', text: '#fdba74', border: '#f9731625' },
  '3D':           { bg: '#e879f910', text: '#f0abfc', border: '#e879f925' },
  'Animation':    { bg: '#e879f910', text: '#f0abfc', border: '#e879f925' },
  'Real-time':    { bg: '#f59e0b10', text: '#fcd34d', border: '#f59e0b25' },
  'Bootstrap':    { bg: '#7c3aed10', text: '#c4b5fd', border: '#7c3aed25' },
  'HTML':         { bg: '#ea580c10', text: '#fb923c', border: '#ea580c25' },
  'CSS':          { bg: '#0284c710', text: '#38bdf8', border: '#0284c725' },
  'Resume':       { bg: '#10b98110', text: '#6ee7b7', border: '#10b98125' },
  'Career':       { bg: '#0ea5e910', text: '#38bdf8', border: '#0ea5e925' },
  'Quiz':         { bg: '#8b5cf610', text: '#c4b5fd', border: '#8b5cf625' },
  'Automation':   { bg: '#06b6d410', text: '#22d3ee', border: '#06b6d425' },
  'Community':    { bg: '#ec489910', text: '#f472b6', border: '#ec489925' },
};

const categoryMeta = {
  all:       { label: 'All Projects', icon: '⊞', color: '#60a5fa', glow: '#3b82f6' },
  fullstack: { label: 'Full Stack',   icon: '⬡', color: '#34d399', glow: '#10b981' },
  ai:        { label: 'AI / ML',      icon: '◎', color: '#a78bfa', glow: '#8b5cf6' },
  webdev:    { label: 'Web Dev',      icon: '◇', color: '#fb923c', glow: '#f97316' },
};

export default function Projects() {
  const [hovered,   setHovered]   = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const filtered  = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const countFor = key =>
    key === 'all' ? projects.length : projects.filter(p => p.category === key).length;

  return (
    <section style={{
      padding: '4.5rem 2rem 5.5rem',
      backgroundColor: '#07090f',
      color: 'white',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
    }}>

      {/* ── Header ─────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#3b82f6',
          marginBottom: '0.75rem',
          padding: '0.25rem 0.85rem',
          border: '1px solid #1e3a5f',
          borderRadius: '999px',
          backgroundColor: '#0f1e3a',
        }}>
          Portfolio
        </span>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          fontWeight: 800,
          margin: '0.4rem 0 0.6rem',
          background: 'linear-gradient(135deg, #f1f5f9 20%, #64748b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>
          Things I've Built
        </h2>
        <p style={{ color: '#334155', fontSize: '0.88rem', margin: 0, letterSpacing: '0.01em' }}>
          {projects.length} projects · full-stack &nbsp;·&nbsp; AI/ML &nbsp;·&nbsp; web development
        </p>
      </div>

      {/* ── Filter Tabs ─────────────────────────────────── */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.45rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
      }}>
        {Object.entries(categoryMeta).map(([key, meta]) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.38rem',
                padding: '0.48rem 1.1rem',
                borderRadius: '999px',
                border: isActive ? `1px solid ${meta.color}60` : '1px solid #161f2e',
                backgroundColor: isActive ? `${meta.color}0e` : '#0d1117',
                color: isActive ? meta.color : '#475569',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                letterSpacing: '0.025em',
                boxShadow: isActive ? `0 0 20px ${meta.glow}18` : 'none',
                outline: 'none',
              }}
            >
              <span style={{ fontSize: '0.7rem' }}>{meta.icon}</span>
              {meta.label}
              <span style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                padding: '0.08rem 0.4rem',
                borderRadius: '999px',
                backgroundColor: isActive ? `${meta.color}1a` : '#111827',
                color: isActive ? meta.color : '#374151',
                minWidth: '18px',
                textAlign: 'center',
              }}>
                {countFor(key)}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Cards Grid ──────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(335px, 1fr))',
        gap: '1.4rem',
        maxWidth: '1160px',
        margin: '0 auto',
      }}>
        {filtered.map((project, index) => {
          const isHov    = hovered === index;
          const catColor = categoryMeta[project.category]?.color || '#60a5fa';
          const catGlow  = categoryMeta[project.category]?.glow  || '#3b82f6';
          const catIcon  = categoryMeta[project.category]?.icon  || '⊞';
          const catLabel = categoryMeta[project.category]?.label || '';

          return (
            <div
              key={`${activeTab}-${index}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: '18px',
                border: isHov ? `1px solid ${catColor}40` : '1px solid #111827',
                backgroundColor: isHov ? '#0c1422' : '#0a0f19',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                transform: isHov ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: isHov
                  ? `0 24px 60px rgba(0,0,0,0.65), 0 0 0 1px ${catColor}14, 0 0 50px ${catGlow}0a`
                  : '0 2px 12px rgba(0,0,0,0.35)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* ── Image ── */}
              <div style={{
                width: '100%',
                height: '190px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#050810',
                flexShrink: 0,
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
                    transform: isHov ? 'scale(1.08)' : 'scale(1.01)',
                  }}
                />

                {/* Bottom gradient fade into card */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '70px',
                  background: `linear-gradient(to top, ${isHov ? '#0c1422' : '#0a0f19'}, transparent)`,
                  pointerEvents: 'none',
                  transition: 'background 0.3s',
                }} />

                {/* Top-left category pill */}
                <div style={{
                  position: 'absolute',
                  top: '0.7rem',
                  left: '0.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.28rem',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.22rem 0.6rem',
                  borderRadius: '6px',
                  backgroundColor: '#04060ccc',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: `1px solid ${catColor}35`,
                  color: catColor,
                }}>
                  <span style={{ fontSize: '0.6rem' }}>{catIcon}</span>
                  {catLabel}
                </div>

                {/* Top-right GitHub icon */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      top: '0.7rem',
                      right: '0.7rem',
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      backgroundColor: '#04060ccc',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid #1e293b70',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      color: '#94a3b8',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    title="GitHub"
                  >
                    ⬡
                  </a>
                )}
              </div>

              {/* ── Body ── */}
              <div style={{
                padding: '1.2rem 1.4rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                flexGrow: 1,
              }}>

                {/* Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.1rem', lineHeight: 1.1, flexShrink: 0 }}>
                    {project.emoji}
                  </span>
                  <h3 style={{
                    margin: 0,
                    fontSize: '0.91rem',
                    fontWeight: 700,
                    color: isHov ? '#f8fafc' : '#cbd5e1',
                    lineHeight: 1.45,
                    transition: 'color 0.2s',
                    letterSpacing: '0.005em',
                  }}>
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  color: '#4b5e78',
                  fontSize: '0.82rem',
                  lineHeight: 1.72,
                  margin: 0,
                  flexGrow: 1,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {project.tags.map((tag, t) => {
                    const ts = tagStyle[tag] || { bg: '#1e293b20', text: '#94a3b8', border: '#1e293b40' };
                    return (
                      <span key={t} style={{
                        fontSize: '0.67rem',
                        fontWeight: 600,
                        padding: '0.16rem 0.5rem',
                        borderRadius: '5px',
                        backgroundColor: ts.bg,
                        color: ts.text,
                        border: `1px solid ${ts.border}`,
                        letterSpacing: '0.02em',
                      }}>
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, #1a2540, transparent)',
                }} />

                {/* Footer links */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', gap: '1.2rem' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#60a5fa',
                          fontSize: '0.79rem',
                          textDecoration: 'none',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.28rem',
                          opacity: 0.8,
                          letterSpacing: '0.01em',
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
                        fontSize: '0.79rem',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.28rem',
                        opacity: 0.85,
                        letterSpacing: '0.01em',
                      }}
                    >
                      ↗ Live Demo
                    </a>
                  </div>

                  {/* Active indicator dot */}
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: catColor,
                    opacity: isHov ? 1 : 0.15,
                    transition: 'opacity 0.3s, box-shadow 0.3s',
                    boxShadow: isHov ? `0 0 10px ${catGlow}` : 'none',
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}