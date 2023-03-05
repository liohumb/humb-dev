import {useState} from 'react'
import {OrbitControls, Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

import {works} from '../../data/works.js'
import IpadLesAilesDePegase from '../../components/mockups/IpadLesAilesDePegase'
import ImacPortfolio from '../../components/mockups/ImacPortfolio'
import MacbookYogaEverywhere from '../../components/mockups/MacbookYogaEverywhere'
import IphoneLabelCars from '../../components/mockups/IphoneLabelCars'
import Entre2Mains from '../../components/mockups/Entre2mains'

import './work.scss'

export default function Work() {
    const [show, setShow] = useState("Les Ailes de Pégase")

    return (
        <section className="work section">
            <div className="work__container">
                <div className="work__container-left">
                    <ul className="work__content">
                        {works.filter(work => work.container).map((work) => (
                            <li className="work__content-name" key={work.id}
                                data-text={work.name} onMouseEnter={() => setShow(work.name)}>
                                {work.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="work__container-right">
                    {show === 'Les Ailes de Pégase' ? (
                        <Canvas>
                            <Stage intensity={1}>
                                <IpadLesAilesDePegase/>
                            </Stage>
                            <OrbitControls enableZoom={false}/>
                        </Canvas>
                    ) : show === 'Portfolio' ? (
                        <Canvas>
                            <Stage intensity={1}>
                                <ImacPortfolio/>
                            </Stage>
                            <OrbitControls enableZoom={false}/>
                        </Canvas>
                    ) : show === 'Yoga EveryWhere' ? (
                        <Canvas>
                            <Stage>
                                <MacbookYogaEverywhere/>
                            </Stage>
                            <OrbitControls enableZoom={false}/>
                        </Canvas>
                    ) : show === 'Label Cars' ? (
                        <Canvas>
                            <Stage intensity={1}>
                                <IphoneLabelCars/>
                            </Stage>
                            <OrbitControls enableZoom={false}/>
                        </Canvas>
                    ) :  (
                        <Canvas>
                            <Stage intensity={1}>
                                <Entre2Mains/>
                            </Stage>
                            <OrbitControls enableZoom={false}/>
                        </Canvas>
                    )}
                </div>
            </div>
        </section>
    )
}