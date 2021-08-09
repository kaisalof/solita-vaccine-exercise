import React from 'react'

const Arrived = ({ arrived, a, s, z }) => {
    //const m = moment(date)

    return (
        <div>
            <p>Today has arrived {arrived} vaccinations</p>
            <p>Antiqua {a}</p>
            <p>SolarBuddhica {s}</p>
            <p>Zerpfy {z}</p>
        </div>
    );
}

export default Arrived