import React from 'react'
import moment from 'moment'
import '../styles/date.css';

const Date = ({ date }) => {
    //const m = moment(date)
    console.log()

    return (
        <div id="date">
            <div className="dateTime" id="da">
                <p ><b>Date:</b> {moment(date).format('MMM Do YY')}</p>
            </div>
            <div className="dateTime" id="ti">
                <p ><b>Time:</b> {moment(date).format('hh:mm')}</p>
            </div>
        </div>
    );
}

export default Date