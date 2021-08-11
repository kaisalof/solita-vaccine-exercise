import React from 'react'

const Total = ({ totalOrders, totalInjections, ant, sol, zer, antInj, solInj, zerInj }) => {
    return (
        <div >
            <p>Total orders: {totalOrders}</p>
            <p>Total injections: {totalInjections}</p>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th> </th>
                            <th>Antiqua </th>
                            <th>SolarBuddhica </th>
                            <th>Zerpfy </th>
                        </tr>
                        <tr>
                            <th>orders </th>
                            <td>{ant.length} </td>
                            <td>{sol.length} </td>
                            <td>{zer.length} </td>
                        </tr>
                        <tr>
                            <th>injections </th>
                            <td>{antInj} </td>
                            <td>{solInj} </td>
                            <td>{zerInj} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Total

//How many orders/vaccines per producer?