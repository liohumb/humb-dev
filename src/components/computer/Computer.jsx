import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'

import RetroComputer from '../retroComputer/RetroComputer'

export default function Computer() {
    return (
        <Canvas>
            <Stage environment="city">
                <RetroComputer/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}