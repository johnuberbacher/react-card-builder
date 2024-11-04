import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, BoxGeometry, MeshStandardMaterial } from 'three';
import backImage from '../images/yu/normalback.png';   // Replace with your card back image

const Card = ({ rotation, image }) => {
  const frontTexture = useLoader(TextureLoader, image);
  const backTexture = useLoader(TextureLoader, backImage);

  return (
    <mesh rotation-y={rotation}>
      {/* Use BoxGeometry with slightly rounded edges */}
      <boxGeometry args={[1, 1.5, 0.02]} />
      
      {/* Set front and back materials */}
      <meshStandardMaterial attach="material-4" map={frontTexture} />
      <meshStandardMaterial attach="material-5" map={backTexture} />
      
      {/* Set edge materials to black */}
      <meshStandardMaterial attach="material-0" color="black" />      {/* Right edge */}
      <meshStandardMaterial attach="material-1" color="black" />      {/* Left edge */}
      <meshStandardMaterial attach="material-2" color="black" />      {/* Top edge */}
      <meshStandardMaterial attach="material-3" color="black" />      {/* Bottom edge */}
    </mesh>
  );
};

export default Card;
