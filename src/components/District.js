import React from 'react'
import '../styles/homepage.css';

const District = ({ data }) => {
    const percentage = (num, per) => {
        return (num / per * 100).toFixed(2)
    }
    return (
        <tr>
            <td id="hName">{data.name}</td>
            <td>{data.allOrders.length}</td>
            <td>{data.injectionAmount}</td>
            <td>{data.usedI} </td>
            <td>{data.expiredI} </td>
            <td>{data.leftInjections} </td>
            <td>{percentage(data.expiredI, data.injectionAmount)} </td>
        </tr>
    )

}

export default District