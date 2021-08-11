import React from 'react'

const HealthcareDistrict = ({ name, orders, injections }) => {
    return (
        <tr>
            <th>{name}</th>
            <td>{orders}</td>
            <td>{injections}</td>
        </tr>
    )
}

export default HealthcareDistrict