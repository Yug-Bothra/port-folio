import React from 'react';

function Experience() {
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
      padding: '3rem 2rem',
      backgroundColor: '#1e1e1e',
      color: 'white',
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        fontSize: '1.8rem',
        letterSpacing: '0.03em',
      }}>
        💼 Experience
      </h2>

      <div style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experiences.map((exp, i) => (
          <div key={i} style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '12px',
            padding: '1.5rem 1.75rem',
            borderLeft: `4px solid ${exp.current ? '#4ade80' : '#60a5fa'}`,
            position: 'relative',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: exp.current ? '#4ade80' : '#60a5fa' }}>
                  {exp.role}
                </h3>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.95rem', color: '#cbd5e1', fontWeight: 500 }}>
                  {exp.company}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  backgroundColor: '#1e1e1e',
                  borderRadius: '20px',
                  padding: '0.2rem 0.75rem',
                  border: '1px solid #334155',
                }}>
                  {exp.current && <span style={{ color: '#4ade80', marginRight: '4px' }}>●</span>}
                  {exp.period}
                </span>
                <p style={{ margin: '0.3rem 0 0', fontSize: '0.8rem', color: '#64748b' }}>📍 {exp.location}</p>
              </div>
            </div>

            {/* Bullets */}
            <ul style={{ margin: '1rem 0 0.75rem', paddingLeft: '1.25rem', lineHeight: 1.7, color: '#cbd5e1', fontSize: '0.92rem' }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ marginBottom: '0.4rem' }}>{b}</li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
              {exp.tags.map((tag, k) => (
                <span key={k} style={{
                  fontSize: '0.75rem',
                  backgroundColor: '#1e293b',
                  color: '#93c5fd',
                  borderRadius: '6px',
                  padding: '0.2rem 0.6rem',
                  border: '1px solid #1e40af33',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;