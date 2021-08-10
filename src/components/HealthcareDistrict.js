import React from 'react'

const HealthcareDistrict = ({ name, orders, injections }) => {
    return (
        <tr>
            <th>{name}</th>
            <th>{orders}</th>
            <th>{injections}</th>
        </tr>
    )
}

export default HealthcareDistrict