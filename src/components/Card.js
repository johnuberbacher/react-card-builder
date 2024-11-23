import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Card = ({ rotation = 0, frontImage, backImage, rotateY = false }) => {
  const frontTexture = useLoader(TextureLoader, frontImage);
  const backTexture = useLoader(TextureLoader, backImage);
  const [rotationY, setRotationY] = useState(5.5);

  useEffect(() => {
    if (rotateY) {
      const interval = setInterval(() => {
        setRotationY((prev) => prev + 0.0025); // Adjust rotation speed here
      }, 16); // ~60 FPS

      return () => clearInterval(interval); // Clean up on component unmount
    }
  }, [rotateY]);

  return (
    <mesh rotation={[0, rotationY, 0]}>
      <boxGeometry args={[1, 1.4, 0.01]} />
      <meshStandardMaterial attach="material-4" map={frontTexture} />
      <meshStandardMaterial attach="material-5" map={backTexture} />
      <meshStandardMaterial attach="material-0" color="DimGray" /> {/* Right edge */}
      <meshStandardMaterial attach="material-1" color="DimGray" /> {/* Left edge */}
      <meshStandardMaterial attach="material-2" color="DimGray" /> {/* Top edge */}
      <meshStandardMaterial attach="material-3" color="DimGray" /> {/* Bottom edge */}
    </mesh>
  );
};

export default Card;
