import React, { useRef } from 'react'
import {useThree} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/imacPortfolio-transformed.glb')
  const {camera} = useThree()

  camera.position.set(0, 0, 5)

  return (
    <group {...props}>
      <group rotation={[-Math.PI / 2, 0, 5.25]}>
        <group position={[0.03, 0, 0.39]}>
          <group position={[-0.03, 0, -0.39]}>
            <mesh geometry={nodes.Screen_DarkBlue_0.geometry} material={materials.DarkBlue} />
            <mesh geometry={nodes.Screen_LightBlue_0.geometry} material={materials.LightBlue} />
            <mesh geometry={nodes.Screen_Black_0.geometry} material={materials.Black} />
            <mesh geometry={nodes.Screen_White_0.geometry} material={materials.White} />
            <mesh geometry={nodes.Screen_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Screen_Chrome_0.geometry} material={materials.Chrome} />
            <mesh geometry={nodes.Screen_CamBlack_0.geometry} material={materials['Cam.Black']} />
            <mesh geometry={nodes.Screen_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Screen_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.Screen_Black001_0.geometry} material={materials['Black.001']} />
            <mesh geometry={nodes.Screen_Yellow_0.geometry} material={materials.Yellow} />
          </group>
          <mesh geometry={nodes.Rotate_Metal_0.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Rotate_Metal2_0.geometry} material={materials.Metal2} />
        </group>
        <mesh geometry={nodes.Stand_LightBlue_0.geometry} material={materials.LightBlue} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/imacPortfolio-transformed.glb')
