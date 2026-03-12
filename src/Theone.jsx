import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Resume from './Resume'

function Theone() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    // Mobile: stacked layout
    return (
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: '#060810',
        minHeight: '100vh',
        color: 'white',
      }}>
        {/* Mobile header */}
        <div style={{
          background: 'linear-gradient(160deg, #08091a, #060810)',
          borderBottom: '1px solid #0f1525',
          padding: '2rem 1.5rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Hero />
          <div style={{ marginTop: '1.5rem' }}>
            <About />
          </div>
        </div>
        <div id="resume"><Resume /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
      </div>
    );
  }

  // Desktop: sticky left + scrollable right
  return (
    <div className="flex h-screen">
      {/* Left Sticky */}
      <div
        className="centerbox"
        style={{
          width: '420px',
          minWidth: '380px',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          borderRight: '1px solid #0f1525',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* 3D Model at top half */}
        <div style={{ flex: '0 0 auto', height: '45%', minHeight: '220px' }}>
          <About />
        </div>
        {/* Hero nav at bottom half */}
        <div style={{ flex: '1', overflow: 'hidden', borderTop: '1px solid #0f1525' }}>
          <Hero />
        </div>
      </div>

      {/* Right Scrollable */}
      <div
        className="rightbox"
        style={{
          marginLeft: '420px',
          flex: 1,
          height: '100vh',
          overflowY: 'scroll',
          backgroundColor: '#060810',
        }}
      >
        <div id="resume">
          <Resume />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Theone;