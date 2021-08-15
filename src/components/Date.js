import React from 'react'
import moment from 'moment'
import '../styles/date.css';

const Date = ({ date }) => {

    return (
        <div id="date">
            <p>{moment(date).format('MMMM Do YYYY')}</p>
        </div>
    );
}

export default Date