import Header from '../../navigations/header/Header.jsx'
import Background from '../../components/background/Background.jsx'

import './hero.scss'

export default function Hero() {
    return (
        <section className="hero section">
            <Header/>
            <Background/>
            <div className="hero__container">
                <div className="hero__subtitle">
                    <span className="hero__subtitle-h">h</span>
                    <span className="hero__subtitle-e">e</span>
                    <span className="hero__subtitle-l">l</span>
                    <span className="hero__subtitle-ll">l</span>
                    <span className="hero__subtitle-o">o</span>
                    <span className="hero__subtitle-virgule">,</span>
                    <span className="hero__subtitle-space">&nbsp;</span>
                    <span className="hero__subtitle-emoji">👋</span>
                    <span className="hero__subtitle-space">&nbsp;</span>
                    <span className="hero__subtitle-i">I</span>
                    <span className="hero__subtitle-apos">&apos;</span>
                    <span className="hero__subtitle-m">m</span>
                </div>
                <div className="hero__title">
                    <h1 className="hero__title-text">
                        Lio
                        <span>nel </span>
                        Humb
                        <span>ert</span>
                    </h1>
                </div>
                <a href="#about" className="hero__scroll">
                    <span className="hero__scroll-arrow"></span>
                    <span className="hero__scroll-arrow"></span>
                    <span className="hero__scroll-arrow"></span>
                </a>
            </div>
        </section>
    )
}