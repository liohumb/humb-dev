import {works} from '../../data/works.js'

import './work.scss'

export default function Work() {
    return (
        <section className="work section">
            <div className="work__container">
                <div className="work__container-left">
                    <ul className="work__content">
                        {works.filter(work => work.container).map((work) => (
                            <li className="work__content-name" key={work.id} data-text={work.name}>{work.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="work__container-right"></div>
            </div>
        </section>
    )
}