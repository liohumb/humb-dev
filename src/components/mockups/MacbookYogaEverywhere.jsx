import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/macbookYogaEverywhere-transformed.glb')

  return (
    <group {...props} rotation={[-Math.PI / -.1, -.5, 0]}>
      <group position={[0, 0.1, -1.01]} rotation={[-1.92, 0, 0]}>
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.017']} position={[-0.03, 0.62, 1.02]} rotation={[-Math.PI, 0, -Math.PI]} scale={[32.94, 32.94, 33.49]} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes.Object_15.geometry} material={materials['Material.011']} position={[-1.45, 0.09, -0.57]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['Material.014']} />
      <mesh geometry={nodes.Object_28.geometry} material={materials['Material.010']} position={[-1.49, 0.09, -0.76]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-0.01, 0.01, 0.01]} />
    </group>
  )
}

useGLTF.preload('/models/macbookYogaEverywhere-transformed.glb')
