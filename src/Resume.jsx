import React, { useState } from 'react';

function Resume() {
  const [hoveredView, setHoveredView] = useState(false);
  const [hoveredDl, setHoveredDl] = useState(false);

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
      backgroundColor: '#060810',
      fontFamily: "'DM Sans', sans-serif",
      borderBottom: '1px solid #0a0f1a',
    }}>
      {/* Label */}
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
      }}>
        Resume
      </span>

      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #f1f5f9 20%, #64748b 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        My Resume
      </h2>

      <p style={{
        color: '#334155',
        fontSize: '0.88rem',
        lineHeight: 1.75,
        marginBottom: '2.5rem',
        maxWidth: '480px',
      }}>
        A summary of my experience, skills, and projects. Available to view online or download as PDF.
      </p>

      {/* Resume card */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.25rem 1.75rem',
        borderRadius: '14px',
        border: '1px solid #111827',
        backgroundColor: '#0a0f1a',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        {/* File icon */}
        <div style={{
          width: '44px',
          height: '52px',
          borderRadius: '8px',
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          flexShrink: 0,
        }}>
          📄
        </div>
        <div>
          <div style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#cbd5e1',
            marginBottom: '0.2rem',
          }}>
            Yug_Bothra_Resume.pdf
          </div>
          <div style={{ fontSize: '0.75rem', color: '#334155' }}>
            Full-Stack Developer · Updated 2025
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a
          href="/Yug_Bothra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredView(true)}
          onMouseLeave={() => setHoveredView(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.4rem',
            borderRadius: '10px',
            border: `1px solid ${hoveredView ? '#4f8ef780' : '#1a3060'}`,
            backgroundColor: hoveredView ? '#0a1428' : 'transparent',
            color: hoveredView ? '#4f8ef7' : '#4f8ef7',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            letterSpacing: '0.02em',
            fontFamily: "'Syne', sans-serif",
          }}
        >
          <span style={{ fontSize: '0.8rem' }}>↗</span>
          View Resume
        </a>

        <a
          href="/Yug_Bothra_Resume.pdf"
          download
          onMouseEnter={() => setHoveredDl(true)}
          onMouseLeave={() => setHoveredDl(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.4rem',
            borderRadius: '10px',
            border: '1px solid transparent',
            backgroundColor: hoveredDl ? '#3d7ae0' : '#4f8ef7',
            color: '#fff',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            letterSpacing: '0.02em',
            fontFamily: "'Syne', sans-serif",
            boxShadow: hoveredDl ? '0 8px 24px rgba(79,142,247,0.3)' : '0 4px 14px rgba(79,142,247,0.15)',
          }}
        >
          <span style={{ fontSize: '0.8rem' }}>⬇</span>
          Download
        </a>
      </div>
    </section>
  );
}

export default Resume;