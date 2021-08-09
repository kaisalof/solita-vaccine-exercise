import React from 'react';

// components
import SomeListItem from './SomeListItem';

const SomeList = ({title, data}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {
                    data.map(o => <SomeListItem key={o.id} order={o}/>)
                }
            </ul>
        </div>
    );
}

export default SomeList;