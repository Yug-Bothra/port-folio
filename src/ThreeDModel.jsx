import React from 'react';

function ThreeDModel() {
  return (
    <div style={{ width: '100%', height: '500px', backgroundColor: 'black' }}>
      <model-viewer
        src="/gaming-desktop.glb"
        alt="Gaming Desktop 3D Model"
        auto-rotate
        camera-controls
        camera-orbit="0deg 90deg 2.5m"
        exposure="1.2"
        style={{ width: '100%', height: '100%' }}
      ></model-viewer>
    </div>
  );
}

export default ThreeDModel;
