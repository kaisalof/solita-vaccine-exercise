import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment'
import '../styles/homepage.css';

// data
import Antiqua from '../resources/Antiqua.json'
import SolarBuddhica from '../resources/SolarBuddhica.json'
import Zerpfy from '../resources/Zerpfy.json'
//import vaccinations from '../resources/vaccinations.json'

// components
//import SomeList from '../components/SomeList';
import Date from '../components/Date'
import Arrived from '../components/Arrived';
import HealthcareDistrict from '../components/HealthcareDistrict';

const HomePage = () => {
    const [dateTime, setDateTime] = useState('2021-04-11T11:10:06')
    const [arrivedToday, setArrivedToday] = useState(0)
    const smallAntiqua = Antiqua.orders.slice(0, 10)
    const smallSolar = SolarBuddhica.orders.slice(0, 10)
    const smallZerpfy = Zerpfy.orders.slice(0, 10)

    const [todayAntiqua, setTodayAntiqua] = useState(0)
    const [todaySolar, setTodaySolar] = useState(0)
    const [todayZerpfy, setTodayZerpfy] = useState(0)

    const [hyks, setHyks] = useState(0)
    const [kys, setKys] = useState(0)
    const [oys, setOys] = useState(0)
    const [tays, setTays] = useState(0)
    const [tyks, setTyks] = useState(0)

    const today = () => {
        let amount = 0
        smallAntiqua.map(s => {
            console.log(s.arrived)
            if (moment(s.arrived).format('YYYY-MM-DD') === moment(dateTime).format('YYYY-MM-DD')) {
                amount++
            }
        })
        setTodayAntiqua(amount)
        amount = 0

        smallSolar.map(s => {
            if (moment(s.arrived).format('YYYY-MM-DD') === moment(dateTime).format('YYYY-MM-DD')) {
                amount++
            }
        })
        setTodaySolar(amount)
        amount = 0

        smallZerpfy.map(s => {
            if (moment(s.arrived).format('YYYY-MM-DD') === moment(dateTime).format('YYYY-MM-DD')) {
                amount++
            }
        })
        setTodayZerpfy(amount)
        amount = 0

        setArrivedToday(todayAntiqua + todaySolar + todayZerpfy)
    }

    useEffect(() => today(), [today])

    return (
        <div id="home">
            <h1>Vaccinations</h1>
            <Date date={dateTime} />

            <Arrived arrived={arrivedToday} a={todayAntiqua} s={todaySolar} z={todayZerpfy} />

            {/*<SomeList data={Antiqua.orders.slice(0, 10)} title={'Antiqua'}/>*/}
            <HealthcareDistrict />
        </div>

    );
}

export default HomePage