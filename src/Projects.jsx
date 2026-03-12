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
  {
    title: 'NEURO CAMPUS – AI & ML Based Campus Cloud Network',
    description: 'A full-scale AI-powered campus cloud platform built with React and Supabase. Includes smart attendance, role-based dashboards, AI analytics, secure authentication, and scalable cloud infrastructure for universities.',
    github: 'https://github.com/Yug-Bothra/NEURO_CAMPUS',
    demo: 'https://neuro-campus-73w8.vercel.app/',
    tags: ['React', 'Supabase', 'AI/ML', 'Cloud'],
    emoji: '🧠',
    image: img1,
    category: 'fullstack',
  },
  {
    title: 'FORAM – Student Social Media Platform',
    description: 'A student-only social media web platform designed to connect campus communities, share updates, and collaborate in a focused academic environment.',
    github: 'https://github.com/Yug-Bothra/FORAM',
    demo: 'https://foram.vercel.app/',
    tags: ['React', 'Social', 'Community'],
    emoji: '👥',
    image: img2,
    category: 'fullstack',
  },
  {
    title: 'AutoSlideX – AI PPT Generator',
    description: 'An AI-powered presentation generator that automatically creates polished PowerPoint slides from a topic or prompt — saving hours of manual work.',
    github: 'https://github.com/Yug-Bothra/AutoSlideX',
    demo: 'https://auto-slide-x.vercel.app/',
    tags: ['AI', 'Productivity', 'React'],
    emoji: '📊',
    image: img3,
    category: 'ai',
  },
  {
    title: 'Smart Career Guidance & Quiz Generator',
    description: 'An AI-driven quiz and career guidance system that generates personalized quizzes and career recommendations based on student profiles and interests.',
    github: null,
    demo: 'https://smart-career-guidance-system.vercel.app/',
    tags: ['AI', 'Career', 'Quiz', 'Education'],
    emoji: '🎯',
    image: img4,
    category: 'ai',
  },
  {
    title: 'NextStep – AI Resume Generator',
    description: 'An intelligent resume builder that uses AI to craft professional, role-tailored resumes in seconds. Clean UI with export-ready output.',
    github: null,
    demo: 'https://nextstep-resume.netlify.app/',
    tags: ['AI', 'Resume', 'React'],
    emoji: '📄',
    image: img5,
    category: 'ai',
  },
  {
    title: 'PaperVista – AI Question Paper Generator',
    description: 'An AI-powered tool for educators to auto-generate structured question papers with customizable difficulty, topics, and formats.',
    github: null,
    demo: 'https://paper-vista-five.vercel.app/',
    tags: ['AI', 'Education', 'Automation'],
    emoji: '📝',
    image: img6,
    category: 'ai',
  },
  {
    title: 'Novel-Nest – AI Novel Platform',
    description: 'An AI-powered platform for novel generation and recommendation using Gemini API and Firebase.',
    github: 'https://github.com/Yug-Bothra/NOVEL-NEST',
    demo: 'https://novelnest-wdfo.vercel.app/',
    tags: ['Gemini API', 'Firebase', 'AI'],
    emoji: '📚',
    image: img7,
    category: 'ai',
  },
  {
    title: 'Animation Website (Frontend)',
    description: 'A modern React + Vite powered animation portfolio website featuring smooth UI animations, 3D models, and multi-section layouts for a premium frontend experience.',
    github: 'https://github.com/Yug-Bothra/animationwebsite',
    demo: 'https://animationwebsite-kappa.vercel.app/',
    tags: ['React', 'Vite', '3D', 'Animation'],
    emoji: '✨',
    image: img8,
    category: 'webdev',
  },
  {
    title: 'TRADEgain – Crypto Trading Simulator',
    description: 'A real-time crypto trading simulator with WebSocket API and dynamic price updates.',
    github: 'https://github.com/Yug-Bothra/TRADEgain',
    demo: 'https://yug-bothra.github.io/TRADEgain/',
    tags: ['WebSocket', 'Crypto', 'Real-time'],
    emoji: '📈',
    image: img9,
    category: 'webdev',
  },
  {
    title: 'Coffee E-Commerce Website',
    description: 'A responsive e-commerce site for a coffee brand using HTML, CSS, and Bootstrap.',
    github: 'https://github.com/Yug-Bothra/COFFEE-WEB-SITE-',
    demo: 'https://yug-bothra.github.io/COFFEE-WEB-SITE-/',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    emoji: '☕',
    image: img10,
    category: 'webdev',
  },
];

const tagStyles = {
  'React':        { bg: '#0e2a3a', text: '#67e8f9', border: '#61dafb20' },
  'AI':           { bg: '#1a1040', text: '#c4b5fd', border: '#a78bfa20' },
  'AI/ML':        { bg: '#1a1040', text: '#c4b5fd', border: '#a78bfa20' },
  'Gemini API':   { bg: '#1a1040', text: '#c4b5fd', border: '#a78bfa20' },
  'Firebase':     { bg: '#2a1800', text: '#fdba74', border: '#fb923c20' },
  'Supabase':     { bg: '#002a1a', text: '#6ee7b7', border: '#34d39920' },
  'Cloud':        { bg: '#001a2a', text: '#7dd3fc', border: '#38bdf820' },
  'WebSocket':    { bg: '#2a1e00', text: '#fcd34d', border: '#f59e0b20' },
  'Crypto':       { bg: '#2a2000', text: '#fde68a', border: '#fbbf2420' },
  'Education':    { bg: '#002a10', text: '#86efac', border: '#4ade8020' },
  'Social':       { bg: '#2a0a1a', text: '#f9a8d4', border: '#f472b620' },
  'Productivity': { bg: '#0f1240', text: '#a5b4fc', border: '#818cf820' },
  'Vite':         { bg: '#2a1000', text: '#fdba74', border: '#f9731620' },
  '3D':           { bg: '#200a2a', text: '#f0abfc', border: '#e879f920' },
  'Animation':    { bg: '#200a2a', text: '#f0abfc', border: '#e879f920' },
  'Real-time':    { bg: '#2a1e00', text: '#fcd34d', border: '#f59e0b20' },
  'Bootstrap':    { bg: '#15082a', text: '#c4b5fd', border: '#7c3aed20' },
  'HTML':         { bg: '#2a0e00', text: '#fb923c', border: '#ea580c20' },
  'CSS':          { bg: '#001a2a', text: '#38bdf8', border: '#0284c720' },
  'Resume':       { bg: '#002a20', text: '#6ee7b7', border: '#10b98120' },
  'Career':       { bg: '#001a28', text: '#38bdf8', border: '#0ea5e920' },
  'Quiz':         { bg: '#150a2a', text: '#c4b5fd', border: '#8b5cf620' },
  'Automation':   { bg: '#001e28', text: '#22d3ee', border: '#06b6d420' },
  'Community':    { bg: '#2a0018', text: '#f472b6', border: '#ec489920' },
};

const categoryMeta = {
  all:       { label: 'All',        icon: '⊞', color: '#4f8ef7', glow: '#3b82f6' },
  fullstack: { label: 'Full Stack', icon: '⬡', color: '#34d399', glow: '#10b981' },
  ai:        { label: 'AI / ML',    icon: '◎', color: '#a78bfa', glow: '#8b5cf6' },
  webdev:    { label: 'Web Dev',    icon: '◇', color: '#fb923c', glow: '#f97316' },
};

export default function Projects() {
  const [hovered, setHovered]     = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const countFor = key =>
    key === 'all' ? projects.length : projects.filter(p => p.category === key).length;

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
      backgroundColor: '#060810',
      fontFamily: "'DM Sans', sans-serif",
      borderBottom: '1px solid #0a0f1a',
    }}>

      {/* ── Header ─── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#4f8ef7',
          marginBottom: '1rem',
          padding: '0.22rem 0.8rem',
          border: '1px solid #1a3060',
          borderRadius: '999px',
          backgroundColor: '#0a1428',
          fontFamily: "'Syne', sans-serif",
        }}>
          Portfolio
        </span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #f1f5f9 20%, #64748b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Things I've Built
        </h2>
        <p style={{ color: '#1e293b', fontSize: '0.82rem', letterSpacing: '0.01em' }}>
          {projects.length} projects &nbsp;·&nbsp; full-stack &nbsp;·&nbsp; AI/ML &nbsp;·&nbsp; web dev
        </p>
      </div>

      {/* ── Filter Tabs ─── */}
      <div style={{
        display: 'flex',
        gap: '0.4rem',
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.42rem 0.95rem',
                borderRadius: '8px',
                border: isActive ? `1px solid ${meta.color}40` : '1px solid #0f1525',
                backgroundColor: isActive ? `${meta.color}0c` : '#080b14',
                color: isActive ? meta.color : '#334155',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none',
                fontFamily: "'Syne', sans-serif",
                boxShadow: isActive ? `0 0 18px ${meta.glow}14` : 'none',
              }}
            >
              <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>{meta.icon}</span>
              {meta.label}
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 700,
                padding: '0.06rem 0.38rem',
                borderRadius: '5px',
                backgroundColor: isActive ? `${meta.color}18` : '#0a0f1a',
                color: isActive ? meta.color : '#1e293b',
              }}>
                {countFor(key)}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Cards Grid ─── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {filtered.map((project, index) => {
          const isHov     = hovered === index;
          const catColor  = categoryMeta[project.category]?.color || '#4f8ef7';
          const catGlow   = categoryMeta[project.category]?.glow  || '#3b82f6';
          const catIcon   = categoryMeta[project.category]?.icon  || '⊞';
          const catLabel  = categoryMeta[project.category]?.label || '';

          return (
            <div
              key={`${activeTab}-${index}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: '16px',
                border: isHov ? `1px solid ${catColor}35` : '1px solid #0f1525',
                backgroundColor: isHov ? '#0a0f1a' : '#080b14',
                transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
                transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isHov
                  ? `0 20px 50px rgba(0,0,0,0.6), 0 0 40px ${catGlow}08`
                  : '0 2px 10px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Image */}
              <div style={{
                width: '100%',
                height: '180px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#040609',
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
                    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    transform: isHov ? 'scale(1.07)' : 'scale(1.02)',
                  }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${isHov ? '#0a0f1a' : '#080b14'} 0%, transparent 60%)`,
                  transition: 'background 0.28s',
                  pointerEvents: 'none',
                }} />
                {/* Category pill */}
                <div style={{
                  position: 'absolute',
                  top: '0.6rem',
                  left: '0.6rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(4,6,12,0.85)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${catColor}30`,
                  color: catColor,
                  fontFamily: "'Syne', sans-serif",
                }}>
                  <span>{catIcon}</span>
                  {catLabel}
                </div>
                {/* GitHub icon */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      position: 'absolute',
                      top: '0.6rem',
                      right: '0.6rem',
                      width: '27px',
                      height: '27px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(4,6,12,0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid #1a203580',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      color: '#475569',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                    title="GitHub"
                    onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = '#2a3a5e'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = '#1a203580'; }}
                  >
                    ⬡
                  </a>
                )}
              </div>

              {/* Body */}
              <div style={{
                padding: '1.1rem 1.3rem 1.3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                flexGrow: 1,
              }}>
                {/* Title */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                  <span style={{ fontSize: '1rem', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>
                    {project.emoji}
                  </span>
                  <h3 style={{
                    margin: 0,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: isHov ? '#f1f5f9' : '#cbd5e1',
                    lineHeight: 1.45,
                    letterSpacing: '-0.005em',
                    transition: 'color 0.2s',
                  }}>
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  color: '#2d3d55',
                  fontSize: '0.8rem',
                  lineHeight: 1.7,
                  margin: 0,
                  flexGrow: 1,
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28rem' }}>
                  {project.tags.map((tag, t) => {
                    const ts = tagStyles[tag] || { bg: '#0a0f1a', text: '#475569', border: '#1a203520' };
                    return (
                      <span key={t} style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        padding: '0.14rem 0.48rem',
                        borderRadius: '5px',
                        backgroundColor: ts.bg,
                        color: ts.text,
                        border: `1px solid ${ts.border}`,
                        letterSpacing: '0.02em',
                        fontFamily: "'Syne', sans-serif",
                      }}>
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, #0f1525, transparent)',
                }} />

                {/* Links */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#4f8ef7',
                          fontSize: '0.76rem',
                          textDecoration: 'none',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          opacity: 0.7,
                          letterSpacing: '0.03em',
                          fontFamily: "'Syne', sans-serif",
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                      >
                        ⬡ Source
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#4ade80',
                        fontSize: '0.76rem',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        opacity: 0.8,
                        letterSpacing: '0.03em',
                        fontFamily: "'Syne', sans-serif",
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
                    >
                      ↗ Live Demo
                    </a>
                  </div>
                  {/* Category dot */}
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: catColor,
                    opacity: isHov ? 1 : 0.12,
                    boxShadow: isHov ? `0 0 8px ${catGlow}` : 'none',
                    transition: 'all 0.28s',
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