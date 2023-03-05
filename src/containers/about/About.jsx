import Computer from '../../components/computer/Computer.jsx'

import './about.scss'

export default function About() {
    return (
        <section className="about section">
            <div className="about__container">
                <div className="about__container-left">
                    <Computer/>
                </div>
                <div className="about__container-right">
                    <h1 className="about__title">
                        Dev<span>.</span>
                        Creative<span>.</span>
                        <br/>
                        Web<span>.</span>
                        App<span>.</span>
                    </h1>
                    <span className="about__subtitle">#React #Node #ThreeJS #JavaScript #ES6</span>
                    <p className="about__description">
                        <span className="about__description-long">
                            Je suis un développeur web et web mobile créatif passionné par React, Node, React Native,
                            Three.js, et ES6. Je suis constamment en quête de nouvelles connaissances pour améliorer mes
                            compétences en développement web et web mobile. Mon expertise en ES6 me permet d'adopter
                            facilement de nouveaux frameworks JavaScript et de concevoir des applications innovantes et
                            performantes.
                        </span>
                        <span className="about__description-short">
                            Je suis un développeur web et mobile créatif qui se passionne pour les technologies comme
                            React, Node, React Native, Three.js et ES6. Ma connaissance approfondie de l'ES6 me permet
                            d'adopter facilement de nouveaux frameworks JavaScript et de concevoir des applications
                            innovantes et performantes.
                        </span>
                    </p>
                    <a href="#work" className="about__work">Mon portfolio</a>
                </div>
            </div>
        </section>
    )
}