import React, { useRef } from 'react'
import {useThree} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/entre2mains-transformed.glb')
  const {camera} = useThree()

  camera.position.set(0, 0, 4)

  return (
    <group {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/entre2mains-transformed.glb')
