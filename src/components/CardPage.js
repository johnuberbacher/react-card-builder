import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Card from './Card';

const CardPage = ({ frontImage, backImage, rotateY }) => {
  const [rotation, setRotation] = useState(0);

  return (
    <Canvas className="cursor-grab" style={{ border: '0px', width: '100%', height: '100%' }}>
      {/* Lighting */}
      <ambientLight intensity={1.0} />  {/* Soft ambient light */}
      
      {/* Directional light from the camera's POV, slightly to the left */}
      <directionalLight
        position={[0, 0, 3]}  // Light slightly to the left (negative x) and in front of the camera (positive z)
        intensity={1.0}         // Increased intensity for better lighting
        color="#ffffff"        // Neutral white light
      />

      {/* Card with rotation control */}
      <Card frontImage={frontImage} backImage={backImage} rotation={rotation} rotateY={rotateY} />

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={1.25}
        maxDistance={2.0}
      />
    </Canvas>
  );
};

export default CardPage;
