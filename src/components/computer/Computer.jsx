import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'

import Macintosh from '../macintosh/Macintosh'

export default function Computer() {
    return (
        <Canvas>
            <Stage environment="city">
                <Macintosh/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={.25}/>
        </Canvas>
    )
}