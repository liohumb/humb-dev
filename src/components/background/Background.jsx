import { v4 } from 'uuid'
import {logos2560, logos1440, logos1024, logos768, logos425} from '../../data/brands'

import './background.scss'

export default function Background() {
    return (
        <>
            <div className="background background__ultraScreen">
                {logos2560.map( ( logo ) => (
                    <img key={v4()} src={logo.url} alt={logo.name}
                         className="background__logo"/>)
                )}
            </div>
            <div className="background background__bigScreen">
                {logos1440.map( ( logo ) => (
                    <img key={v4()} src={logo.url} alt={logo.name}
                         className="background__logo"/>)
                )}
            </div>
            <div className="background background__laptopScreen">
                {logos1024.map( ( logo ) => (
                    <img key={v4()} src={logo.url} alt={logo.name}
                         className="background__logo"/>)
                )}
            </div>
            <div className="background background__tabletScreen">
                {logos768.map( ( logo ) => (
                    <img key={v4()} src={logo.url} alt={logo.name}
                         className="background__logo"/>)
                )}
            </div>
            <div className="background background__mobileScreen">
                {logos425.map( ( logo ) => (
                    <img key={v4()} src={logo.url} alt={logo.name}
                         className="background__logo"/>)
                )}
            </div>
        </>
    )
}