import React, {useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {useGLTF} from '@react-three/drei'

export default function Model(props) {
    const groupRef = useRef()
    const {nodes, materials} = useGLTF('/models/retroComputer-transformed.glb')

    useFrame(() => {
        groupRef.current.rotation.y += -.001
    })

    return (
        <group ref={groupRef} {...props}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Part2}/>
                    <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Part1}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/retroComputer-transformed.glb')
