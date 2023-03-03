import { v4 } from 'uuid'
import { logos } from '../../data/brands'

import './background.scss'

export default function Background() {
    return (
        <div className="background">
            {logos.map( ( logo ) => (
                <img key={v4()} src={logo.url} alt={logo.name}
                     className="background__logo"/>)
            )}
        </div>
    )
}