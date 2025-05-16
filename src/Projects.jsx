import React from 'react';

const projects = [
  {
    title: 'Novel-Nest',
    description: 'An AI-powered platform for novel generation and recommendation using Gemini API and Firebase.',
    github: 'https://github.com/Yug-Bothra/NOVEL-NEST',
    demo: 'https://novelnestwebsite.netlify.app/',
  },
  {
    title: 'Coffee E-Commerce Website',
    description: 'A responsive e-commerce site for a coffee brand using HTML, CSS, and Bootstrap.',
    github: 'https://github.com/Yug-Bothra/COFFEE-WEB-SITE-',
    demo: 'https://yug-bothra.github.io/COFFEE-WEB-SITE-/',
  },
  {
    title: 'TRADEgain (Crypto Trading)',
    description: 'Real-time crypto trading simulator with WebSocket API and dynamic price updates.',
    github: 'https://github.com/Yug-Bothra/TRADEgain',
    demo: 'https://yug-bothra.github.io/TRADEgain/',
  },
];

function Projects() {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#121212', color: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🚀 Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #333', borderRadius: '10px', padding: '1.5rem' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '1rem', color: '#00bfff' }}
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#00ff88' }}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
