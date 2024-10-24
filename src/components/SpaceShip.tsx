import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const SpaceShip = () => {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf');

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={meshRef} dispose={null} scale={0.5} position={[0, 0, 0]}>
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube005_1.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube005_2.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Cube005_3.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Cube005_4.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Cube005_5.geometry} material={materials['Material.007']} />
    </group>
  );
};

export default SpaceShip;