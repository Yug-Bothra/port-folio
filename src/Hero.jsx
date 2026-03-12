import React, { useEffect, useState } from 'react';

const greetings = ["Hi", "Namaste", "Bonjour"];

const navItems = [
  { label: "Resume", href: "#resume", icon: "○" },
  { label: "Projects", href: "#projects", icon: "◇" },
  { label: "Experience", href: "#experience", icon: "△" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Yug-Bothra", icon: "⬡" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yug-bothra", icon: "▣" },
];

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [greetingVisible, setGreetingVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingVisible(false);
      setTimeout(() => {
        setGreetingIndex(prev => (prev + 1) % greetings.length);
        setGreetingVisible(true);
      }, 200);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['resume', 'projects', 'experience'];
      const rightBox = document.querySelector('.rightbox');
      if (!rightBox) return;
      const scrollTop = rightBox.scrollTop;
      let found = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollTop) found = id;
      }
      setActiveSection(found);
    };
    const rightBox = document.querySelector('.rightbox');
    rightBox?.addEventListener('scroll', handleScroll);
    return () => rightBox?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    const rightBox = document.querySelector('.rightbox');
    if (el && rightBox) {
      rightBox.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%',
      padding: '3rem 2.5rem 2.5rem',
      fontFamily: "'Syne', sans-serif",
      position: 'relative',
    }}>

      {/* Top section: greeting + name + tagline */}
      <div>
        {/* Greeting pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#4f8ef7',
          backgroundColor: '#0a1428',
          border: '1px solid #1a3060',
          borderRadius: '999px',
          padding: '0.28rem 0.85rem',
          marginBottom: '1.5rem',
          transition: 'opacity 0.2s',
          opacity: greetingVisible ? 1 : 0,
        }}>
          <span style={{ color: '#4ade80', fontSize: '0.5rem' }}>●</span>
          {greetings[greetingIndex]}
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '0.75rem',
          background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 50%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Yug<br />Bothra
        </h1>

        {/* Role badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            color: '#22d3ee',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Full-Stack Developer
          </span>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, #1e3a5f, transparent)' }} />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.85rem',
          color: '#4a5568',
          lineHeight: 1.75,
          fontStyle: 'italic',
          maxWidth: '280px',
        }}>
          Turning ideas into interfaces, and caffeine into code.
        </p>
      </div>

      {/* Middle: 3D model area — rendered by parent (About) */}

      {/* Nav links */}
      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '2rem' }}>
          {navItems.map(({ label, href, icon }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '10px',
                  border: isActive ? '1px solid #1a3060' : '1px solid transparent',
                  backgroundColor: isActive ? '#0a1428' : 'transparent',
                  color: isActive ? '#4f8ef7' : '#475569',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  width: '100%',
                  fontFamily: "'Syne', sans-serif",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.backgroundColor = '#0a0f1a';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>{icon}</span>
                {label}
                {isActive && (
                  <span style={{
                    marginLeft: 'auto',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#4f8ef7',
                    boxShadow: '0 0 8px #4f8ef7',
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Social links */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid #0f1525',
        }}>
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                border: '1px solid #1a2035',
                backgroundColor: '#0a0f1a',
                color: '#475569',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#1a3060';
                e.currentTarget.style.color = '#4f8ef7';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a2035';
                e.currentTarget.style.color = '#475569';
              }}
            >
              {icon}
            </a>
          ))}
          <span style={{
            marginLeft: 'auto',
            fontSize: '0.68rem',
            color: '#1e293b',
            letterSpacing: '0.08em',
            fontWeight: 600,
            alignSelf: 'center',
          }}>
            @YUG_BOTHRA
          </span>
        </div>
      </div>
    </div>
  );
}