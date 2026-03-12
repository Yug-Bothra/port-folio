import React from 'react';

function ThreeDModel() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '220px',
      backgroundColor: '#060810',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow behind model */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <model-viewer
        src="/gaming-desktop.glb"
        alt="Gaming Desktop 3D Model"
        auto-rotate
        camera-controls
        camera-orbit="0deg 90deg 2.5m"
        exposure="1.4"
        shadow-intensity="0.2"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '220px',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
        }}
      ></model-viewer>
    </div>
  );
}

export default ThreeDModel;