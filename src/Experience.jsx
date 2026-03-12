import React, { useState } from 'react';

function Experience() {
  const [hovered, setHovered] = useState(null);

  const experiences = [
    {
      role: 'Python Intern',
      company: 'Alphawizz Technologies Pvt. Ltd.',
      period: 'Jan 2026 – Present',
      location: 'Indore',
      current: true,
      bullets: [
        'Building FastAPI backend services for internal tools, handling database integration and debugging across multiple modules.',
        'Built and tested FastAPI endpoints across 3+ internal modules, handling database integration and deployment support.',
      ],
      tags: ['FastAPI', 'Python', 'PostgreSQL', 'Debugging'],
    },
    {
      role: 'Software Developer Intern',
      company: 'Prasanj Tech Pvt. Ltd.',
      period: 'Sep – Dec 2025',
      location: 'Indore',
      current: false,
      bullets: [
        'Built React components for dashboards and chat interfaces across two live products: HiredEasy (payment platform) and an AI Interview Assistant.',
        'Developed REST APIs with FastAPI and Flask for authentication and payments; integrated PayU UPI gateway with webhook-based transaction verification.',
        'Worked with MongoDB and PostgreSQL for data storage, following Git-based team workflows.',
      ],
      tags: ['React', 'FastAPI', 'Flask', 'MongoDB', 'PostgreSQL', 'PayU'],
    },
  ];

  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
      backgroundColor: '#060810',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#4ade80',
          marginBottom: '1rem',
          padding: '0.22rem 0.8rem',
          border: '1px solid #14532d40',
          borderRadius: '999px',
          backgroundColor: '#052e1640',
          fontFamily: "'Syne', sans-serif",
        }}>
          Experience
        </span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, #f1f5f9 20%, #64748b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Where I've Worked
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', maxWidth: '720px' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '12px',
          bottom: '12px',
          width: '1px',
          background: 'linear-gradient(to bottom, #1a3060, #0f1525, transparent)',
          marginLeft: '-1.5rem',
          display: window.innerWidth > 640 ? 'block' : 'none',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experiences.map((exp, i) => {
            const isHov = hovered === i;
            const accentColor = exp.current ? '#4ade80' : '#4f8ef7';
            const accentBg = exp.current ? '#052e1640' : '#0a142840';

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  padding: '1.6rem 1.75rem',
                  borderRadius: '16px',
                  border: isHov
                    ? `1px solid ${accentColor}35`
                    : '1px solid #0f1525',
                  backgroundColor: isHov ? '#0a0f1a' : '#080b14',
                  transition: 'all 0.28s ease',
                  transform: isHov ? 'translateX(4px)' : 'translateX(0)',
                  boxShadow: isHov
                    ? `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}10`
                    : 'none',
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.5rem',
                  bottom: '1.5rem',
                  width: '3px',
                  borderRadius: '2px',
                  backgroundColor: accentColor,
                  opacity: isHov ? 1 : 0.4,
                  transition: 'opacity 0.28s',
                }} />

                {/* Header row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: accentColor,
                      margin: 0,
                      marginBottom: '0.2rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#94a3b8',
                      margin: 0,
                      fontWeight: 500,
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.72rem',
                      color: '#475569',
                      backgroundColor: '#080b14',
                      border: '1px solid #1a2035',
                      borderRadius: '6px',
                      padding: '0.2rem 0.65rem',
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                    }}>
                      {exp.current && (
                        <span style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#4ade80',
                          boxShadow: '0 0 6px #4ade80',
                          flexShrink: 0,
                        }} />
                      )}
                      {exp.period}
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: '#2d3d55',
                      marginTop: '0.3rem',
                    }}>
                      📍 {exp.location}
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul style={{
                  paddingLeft: '1.1rem',
                  margin: '0 0 1rem',
                  color: '#475569',
                  fontSize: '0.84rem',
                  lineHeight: 1.75,
                }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: '0.35rem', color: isHov ? '#64748b' : '#475569', transition: 'color 0.2s' }}>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {exp.tags.map((tag, k) => (
                    <span key={k} style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      backgroundColor: accentBg,
                      color: accentColor,
                      borderRadius: '6px',
                      padding: '0.18rem 0.6rem',
                      border: `1px solid ${accentColor}20`,
                      letterSpacing: '0.02em',
                      fontFamily: "'Syne', sans-serif",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;