import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/the_rose_of_curse.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.291}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_106.geometry}
            material={materials.stonewall}
            position={[-69.153, -2.976, -66.679]}
            scale={[5.708, 9.594, 5.708]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_108.geometry}
            material={materials.stonewall}
            position={[153.73, 11.454, -58.915]}
            scale={[4.85, 8.153, 4.85]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_110.geometry}
            material={materials["dark-night-river-forest-minimal-art"]}
            position={[0.794, 46.211, -144.648]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[417.462, 341.66, 314.912]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/the_rose_of_curse.glb");
