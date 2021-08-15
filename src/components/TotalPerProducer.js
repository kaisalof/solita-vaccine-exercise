import React from 'react'
import '../styles/homepage.css';

const TotalPerProducer = ({ name, totalO, total, expired, used, inj }) => {
    
    return (
        <tr>
            <td id="producersName">{name}</td>
            <td>{totalO}</td>
            <td>{total}</td>
            <td>{used}</td>
            <td>{expired}</td>
            <td><b>{inj}</b></td>
        </tr>
    )
}

export default TotalPerProducer
