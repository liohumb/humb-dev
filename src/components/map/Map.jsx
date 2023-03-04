import React from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps'

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1600,
            }}
            style={{width: '100%', height: '100%'}}
        >
            <Geographies
                geography="/features.json"
                fill="#2C065D"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({geographies}) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo}/>
                    ))
                }
            </Geographies>
            <Annotation
                subject={[3.066667, 50.633333]}
                dx={-90}
                dy={0}
                connectorProps={{
                    stroke: '#fff',
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                }}
            >
                <text x="-8" textAnchor="end" fontSize={'2rem'} alignmentBaseline="middle" fill="#fff">
                    {'Lille et périphérie'}
                </text>
            </Annotation>
        </ComposableMap>
    )
}

export default Map
