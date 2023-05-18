import { brands } from '../../data/brands'
import { shuffle } from '../../utils/index.js'
import './background.scss'

export default function Background() {
    const repeatedBrands = [
        ...brands, ...brands, ...brands, ...brands, ...brands,
        ...brands, ...brands, ...brands, ...brands, ...brands,
        ...brands, ...brands, ...brands, ...brands, ...brands,
        ...brands, ...brands, ...brands, ...brands
    ]

    const shuffledBrands = shuffle(repeatedBrands)

    return (
        <>
            <div className="background">
                {shuffledBrands.map( ( logo, index ) => (
                    <img key={index} src={logo.url} alt={logo.name}
                         className="background__logo"/>)
                )}
            </div>
        </>
    )
}
