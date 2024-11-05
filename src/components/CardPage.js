import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Card from "./Card";

const CardPage = ({ image }) => {
  const [rotation, setRotation] = useState(0);
  return (
    <Canvas style={{ border: "0px", width: "100%", height: "100%" }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 0, 5]} intensity={1} />

      {/* Card with rotation control */}
      <Card image={image} rotation={rotation} />

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={1.25}
        maxDistance={2.0}
      />
      {/*
       <div className="hidden">
        <label
          htmlFor="range"
          className="block mb-0.5 text-sm font-medium text-gray-900"
        >
          Star Count
        </label>
        <div className="flex flex-row items-center justify-center gap-4">
          <input
            id="steps-range"
            type="range"
            min="1"
            max="1000"
            step="1"
            value={rotation}
            onChange={(e) => setRotation(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          ></input>
          {rotation}
        </div>
      </div>
      */}
    </Canvas>
  );
};

export default CardPage;
