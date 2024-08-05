import React from 'react';
import { useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';

export default function Model({ path, position, rotation, scale }) {
  const { scene } = useGLTF(path);

  return (
    <animated.primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

useGLTF.preload('/assets/models/myModel.glb'); // Ensure the path is correct
