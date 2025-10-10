import React, { useRef, useEffect, useState, FC } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

// Container specifications
const CONTAINER_SPECS = {
  "20-yard": {
    length: 20,
    width: 8,
    height: 4,
    weight: "3,000 lbs",
    capacity: "20 cubic yards",
    color: "#2563eb",
  },
  "30-yard": {
    length: 22,
    width: 8,
    height: 6,
    weight: "4,500 lbs",
    capacity: "30 cubic yards",
    color: "#16a34a",
  },
  "40-yard": {
    length: 22,
    width: 8,
    height: 8,
    weight: "6,000 lbs",
    capacity: "40 cubic yards",
    color: "#dc2626",
  },
};

type ContainerSpecs = (typeof CONTAINER_SPECS)["20-yard"];

// 3D Container Model Component
function ContainerModel({ specs, showMeasurements }: { specs: ContainerSpecs; showMeasurements: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.MeshStandardMaterial).color.setStyle(specs.color);
    }
  }, [specs.color]);

  return (
    <group>
      {/* Main container body */}
      <mesh ref={meshRef} position={[0, specs.height / 2, 0]}>
        <boxGeometry args={[specs.length, specs.height, specs.width]} />
        <meshStandardMaterial color={specs.color} />
      </mesh>

      {/* Container walls (thicker walls) */}
      <mesh position={[0, specs.height, specs.width / 2]}>
        <boxGeometry args={[specs.length + 0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>

      {/* Wheels (simplified) */}
      <mesh position={[-specs.length / 2 + 1, -0.5, specs.width / 2 + 0.5]}>
        <cylinderGeometry args={[0.8, 0.8, 0.4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[specs.length / 2 - 1, -0.5, specs.width / 2 + 0.5]}>
        <cylinderGeometry args={[0.8, 0.8, 0.4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Door opening (back) */}
      <mesh position={[specs.length / 2, specs.height / 2, 0]}>
        <planeGeometry args={[0.1, specs.height]} />
        <meshStandardMaterial color="#374151" transparent opacity={0.7} />
      </mesh>

      {showMeasurements && (
        <>
          {/* Measurement lines */}
          <line>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" array={new Float32Array([-specs.length / 2, specs.height + 1, 0, specs.length / 2, specs.height + 1, 0])} count={2} itemSize={3} />
            </bufferGeometry>
            <lineBasicMaterial color="#ef4444" linewidth={2} />
          </line>
          <Text position={[0, specs.height + 1.5, 0]} fontSize={1} color="#ef4444" anchorX="center">
            {specs.length}' Length
          </Text>
        </>
      )}
    </group>
  );
}

// Ground plane
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#e5e7eb" />
    </mesh>
  );
}

// Animated lighting
function AnimatedLights() {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(elapsedTime) * 15;
      light1Ref.current.position.z = Math.cos(elapsedTime) * 15;
    }
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.sin(elapsedTime + Math.PI) * 12;
      light2Ref.current.position.z = Math.cos(elapsedTime + Math.PI) * 12;
    }
  });

  return (
    <>
      <pointLight ref={light1Ref} position={[10, 10, 10]} intensity={0.8} />
      <pointLight ref={light2Ref} position={[-10, 8, -10]} intensity={0.6} color="#f59e0b" />
    </>
  );
}

interface InteractiveContainerModelProps {
  initialSize?: keyof typeof CONTAINER_SPECS;
  className?: string;
}

const InteractiveContainerModel: FC<InteractiveContainerModelProps> = ({ initialSize = "40-yard", className = "" }) => {
  const [selectedSize, setSelectedSize] = useState<keyof typeof CONTAINER_SPECS>(initialSize);
  const [showMeasurements, setShowMeasurements] = useState(true);
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  const specs = CONTAINER_SPECS[selectedSize];

  return (
    <div className={`bg-gray-900 rounded-2xl overflow-hidden ${className}`}>
      {/* Controls */}
      <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Size Selection */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">Container Size:</span>
            {Object.keys(CONTAINER_SPECS).map((size) => (
              <button key={size} onClick={() => setSelectedSize(size as keyof typeof CONTAINER_SPECS)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedSize === size ? "bg-blue-600 text-white shadow-lg" : "bg-gray-600 text-gray-300 hover:bg-gray-500"}`}>
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>

          {/* Control Buttons */}
          <div className="flex items-center gap-3">
            <button onClick={() => setShowMeasurements(!showMeasurements)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${showMeasurements ? "bg-green-600 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-500"}`}>
              {showMeasurements ? "Hide" : "Show"} Measurements
            </button>
            <button onClick={() => setIsAutoRotating(!isAutoRotating)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${isAutoRotating ? "bg-purple-600 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-500"}`}>
              {isAutoRotating ? "Stop" : "Auto"} Rotate
            </button>
          </div>
        </div>

        {/* Specifications Display */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-white">{specs.length}'</div>
            <div className="text-sm text-gray-400">Length</div>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-white">{specs.width}'</div>
            <div className="text-sm text-gray-400">Width</div>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-white">{specs.height}'</div>
            <div className="text-sm text-gray-400">Height</div>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-white">{specs.capacity}</div>
            <div className="text-sm text-gray-400">Capacity</div>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="relative h-96">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[20, 15, 20]} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} autoRotate={isAutoRotating} autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} />

          <AnimatedLights />
          <ambientLight intensity={0.4} />

          <Ground />
          <ContainerModel specs={specs} showMeasurements={showMeasurements} />

          {/* Grid helper */}
          <gridHelper args={[30, 30, "#6b7280", "#374151"]} position={[0, -0.99, 0]} />
        </Canvas>

        {/* Instructions */}
        <div className="absolute top-4 left-4 bg-black/70 text-white p-3 rounded-lg text-sm">
          <div className="font-semibold mb-1">Controls:</div>
          <div>• Drag to rotate</div>
          <div>• Scroll to zoom</div>
          <div>• Right-click to pan</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContainerModel;
