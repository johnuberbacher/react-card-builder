import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Card = ({ frontImage, backImage, rotateY }) => {
  const frontTexture = useLoader(TextureLoader, frontImage);
  const backTexture = useLoader(TextureLoader, backImage);
  const [rotationY, setRotationY] = useState(5.5);

  useEffect(() => {
    if (rotateY) {
      const interval = setInterval(() => {
        setRotationY((prev) => prev + 0.0025);
      }, 16); // ~60 FPS

      return () => clearInterval(interval);
    }
  }, [rotateY]);

  return (
    <mesh rotation={[0, rotationY, 0]}>
      <boxGeometry args={[1, 1.4, 0.01]} />
      <meshBasicMaterial  attach="material-4" map={frontTexture} />
      <meshBasicMaterial  attach="material-5" map={backTexture} />
      <meshBasicMaterial  attach="material-0" color="DimGray" /> {/* Right edge */}
      <meshBasicMaterial  attach="material-1" color="DimGray" /> {/* Left edge */}
      <meshBasicMaterial  attach="material-2" color="DimGray" /> {/* Top edge */}
      <meshBasicMaterial  attach="material-3" color="DimGray" /> {/* Bottom edge */}
    </mesh>
  );
};

export default Card;
