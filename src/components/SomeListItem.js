import React from 'react';

const SomeListItem = ({order}) => {
    return (
        <li>{order.responsiblePerson}</li>
    );
}

export default SomeListItem;