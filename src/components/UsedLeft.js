import React from 'react'


const UsedLeft = ({ totalInjections, usedInjections }) => {
    return (
        <div>
            <p>Used: {usedInjections} </p>
            <p>Left: {totalInjections - usedInjections} </p>
        </div>
    );
}

export default UsedLeft