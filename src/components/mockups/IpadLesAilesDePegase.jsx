import React, { useRef } from 'react'
import {useThree} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/ipadLesAilesDePegase-transformed.glb')
  const {camera} = useThree()

  camera.position.set(0, 0, 2.5)

  return (
    <group {...props}>
      <group position={[0, 0.03, -0.01]}>
        <group rotation={[Math.PI / 2, 0, 3.4]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.iPad_Mini_BaseColor_0.geometry} material={materials.BaseColor} />
            <mesh geometry={nodes.iPad_Mini_BaseColorMatte_0.geometry} material={materials.BaseColorMatte} />
            <mesh geometry={nodes.iPad_Mini_CamGray_0.geometry} material={materials.CamGray} />
            <mesh geometry={nodes.iPad_Mini_SpeakerMic_0.geometry} material={materials.SpeakerMic} />
            <mesh geometry={nodes.iPad_Mini_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.iPad_Mini_Bezel_0.geometry} material={materials.Bezel} />
            <mesh geometry={nodes.iPad_Mini_CamGlass_0.geometry} material={materials.CamGlass} />
            <mesh geometry={nodes.iPad_Mini_Cam1_0.geometry} material={materials.Cam1} />
            <mesh geometry={nodes.iPad_Mini_CamBlack_0.geometry} material={materials.CamBlack} />
            <mesh geometry={nodes.iPad_Mini_Port_0.geometry} material={materials.Port} />
            <mesh geometry={nodes.iPad_Mini_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.iPad_Mini_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.iPad_Mini_BaseColorLogo_0.geometry} material={materials.BaseColorLogo} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ipadLesAilesDePegase-transformed.glb')
