import React from 'react'

const All = ({ totalOrders, totalInjections }) => {
    return (
        <div>
            <p>Total amount of orders: {totalOrders}</p>
            <p>Total amount of vaccinations: {totalInjections}</p>
        </div>
    )
}

export default All