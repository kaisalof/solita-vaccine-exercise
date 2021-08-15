import React from 'react'
import '../styles/healthcaredistrictstyles.css'
import District from './District'

const HealthcareDistricts = ({ hyksData, kysData, oysData, taysData, tyksData }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>healthcare district</th>
                        <th>orders</th>
                        <th>vaccines</th>
                        <th>used vaccines</th>
                        <th>expired vaccines</th>
                        <th>vaccines left</th>
                        <th>wasted (%) </th>
                    </tr>
                    <District data={hyksData} />
                    <District data={kysData} />
                    <District data={oysData} />
                    <District data={taysData} />
                    <District data={tyksData} />
                </tbody>
            </table>
        </div>
    )
}

export default HealthcareDistricts