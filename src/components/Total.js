import React from 'react'

const Total = ({ usedInjections, expiredInjections, totalInjections }) => {

    return (
        <div>
            <p>Used vaccinations: {usedInjections}</p>
            <p>Expired vaccinations: {expiredInjections}</p>
            <p>Vaccinations left: {totalInjections}</p>
        </div>
    )
}

export default Total