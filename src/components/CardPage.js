import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import Card from "./Card";

const CardPage = ({
  frontImage,
  backImage,
  rotateY,
  setZoomPercent,
  zoomPercent,
}) => {
  const [rotation, setRotation] = useState(0);
  const controlsRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      const controls = controlsRef.current;

      if (controls) {
        const handleZoomChange = () => {
          const distance = controls.object.position.distanceTo(controls.target);
          const percent =
            ((distance - controls.minDistance) /
              (controls.maxDistance - controls.minDistance)) *
            100;
          setZoomPercent(percent.toFixed(0));
        };

        controls.addEventListener("change", handleZoomChange);

        return () => {
          controls.removeEventListener("change", handleZoomChange);
        };
      }
    }
  }, [isLoaded]);

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const min = controls.minDistance;
      const max = controls.maxDistance;
      const distance = min + ((max - min) * zoomPercent) / 100;
      // Update the OrbitControls zoom level when zoomPercent changes
      // controls.object.position.setZ(distance); // Update camera position
      // controls.update();
    }
  }, [zoomPercent]);

  return (
    <Canvas
      className="cursor-grab"
      gl={{
        toneMapping: THREE.NoToneMapping,
      }}
      style={{ border: "0px", width: "100%", height: "100%" }}
      onCreated={() => setIsLoaded(true)} // Set isLoaded when the canvas is ready
    >
      <ambientLight intensity={1} />
      <Card
        frontImage={frontImage}
        backImage={backImage}
        rotation={rotation}
        rotateY={rotateY}
      />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        minDistance={1.25}
        maxDistance={2.0}
      />
    </Canvas>
  );
};

export default CardPage;
