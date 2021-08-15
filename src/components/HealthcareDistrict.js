import React from 'react'
import '../styles/healthcaredistrictstyles.css'

const HealthcareDistrict = ({ hyksO, hyksI, hyksU, hyksE, hyksL, kysO, kysI, kysU, kysE, kysL, oysO, oysI, oysU, oysE, oysL, taysO, taysI, taysU, taysE, taysL, tyksO, tyksI, tyksU, tyksE, tyksL, }) => {
    const percentage = (num, per) => {
        return (num / per * 100).toFixed(2)
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>orders</th>
                        <th>vaccines</th>
                        <th>used vaccines</th>
                        <th>expired vaccines</th>
                        <th>vaccines left</th>
                        <th>wasted (%) </th>
                    </tr>
                    <tr>
                        <th>HYKS</th>
                        <td>{hyksO} </td>
                        <td>{hyksI} </td>
                        <td>{hyksU} </td>
                        <td>{hyksE} </td>
                        <td>{hyksL} </td>
                        <td> {percentage(hyksE, hyksI)} </td>
                    </tr>
                    <tr>
                        <th>KYS</th>
                        <td>{kysO} </td>
                        <td>{kysI} </td>
                        <td>{kysU} </td>
                        <td>{kysE} </td>
                        <td>{kysL} </td>
                        <td>{percentage(kysE, kysI)}</td>
                    </tr>
                    <tr>
                        <th>OYS</th>
                        <td>{oysO} </td>
                        <td>{oysI} </td>
                        <td>{oysU} </td>
                        <td>{oysE} </td>
                        <td>{oysL} </td>
                        <td>{percentage(oysE, oysI)}</td>
                    </tr>
                    <tr>
                        <th>TAYS</th>
                        <td>{taysO} </td>
                        <td>{taysI} </td>
                        <td>{taysU} </td>
                        <td>{taysE} </td>
                        <td>{taysL} </td>
                        <td>{percentage(taysE, taysI)}</td>
                    </tr>
                    <tr>
                        <th>TYKS</th>
                        <td>{tyksO}</td>
                        <td>{tyksI} </td>
                        <td>{tyksU} </td>
                        <td>{tyksE} </td>
                        <td>{tyksL} </td>
                        <td>{percentage(tyksE, tyksI)}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default HealthcareDistrict