import React from 'react'

const HealthcareDistrict = () => {

    return (
        <div>
            <h3>Vaccinations per healthcare district</h3>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Orders</th>
                        <th>Injections</th>
                    </tr>
                    <tr>
                        <th>HYKS</th>
                        <td>tähän luku</td>
                        <td>tähän luku</td>
                    </tr>
                    <tr>
                        <th>KYS</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>OYS</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>TAYS</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>TYKS</th>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HealthcareDistrict