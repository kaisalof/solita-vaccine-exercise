import React from 'react'

const All = ({ totalOrders, totalInjections }) => {
    return (
        <div>
            <h3>Total amount of orders and injections</h3>
            <p>Total amount of orders: {totalOrders}</p>
            <p>Total amount of injections: {totalInjections}</p>
        </div>
    )
}

export default All