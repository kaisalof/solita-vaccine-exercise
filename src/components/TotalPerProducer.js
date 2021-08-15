import React from 'react'

const TotalPerProducer = ({ name, totalO, total, expired, used, inj }) => {
    
    return (
        <tr>
            <td>{name}</td>
            <td>{totalO}</td>
            <td>{total}</td>
            <td>{used}</td>
            <td>{expired}</td>
            <td>{inj}</td>
        </tr>
    )
}

export default TotalPerProducer
