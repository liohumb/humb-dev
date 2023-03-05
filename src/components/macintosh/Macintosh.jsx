import React, {useRef} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {useGLTF} from '@react-three/drei'

export default function Model(props) {
    const groupRef = useRef()
    const {nodes, materials} = useGLTF('/models/macintosh-transformed.glb')
    const {camera} = useThree()

    camera.position.set(500, 0, 75)

    return (
        <group ref={groupRef} {...props}>
            <mesh geometry={nodes.one_lp_lambert1_0.geometry} material={materials.lambert1}/>
            <mesh geometry={nodes.tre_lp_lambert1_0.geometry} material={materials.lambert1}/>
            <mesh geometry={nodes.too_lp_lambert1_0.geometry} material={materials.lambert1}/>
        </group>
    )
}

useGLTF.preload('/models/macintosh-transformed.glb')
