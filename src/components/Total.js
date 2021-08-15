import React from 'react'

const Total = ({ usedInjections, expiredInjections, totalInjections }) => {

    return (
        <div>
            <p>Used injections: {usedInjections}</p>
            <p>Expired injections: {expiredInjections}</p>
            <p>Injections left: {totalInjections}</p>
        </div>
    )
}

export default Total