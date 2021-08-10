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

    let healthcaredistricts = [
        { name: 'HYKS', orders: 0, injections: 0 },
        { name: 'KYS', orders: 0, injections: 0 },
        { name: 'OYS', orders: 0, injections: 0 },
        { name: 'TAYS', orders: 0, injections: 0 },
        { name: 'TYKS', orders: 0, injections: 0 }
    ]

    const vacsInHcd = () => {
        smallAntiqua.map(s => {
            healthcaredistricts.map(h => {
                if (h.name === s.healthCareDistrict) {
                    h.orders++
                    h.injections += s.injections
                }
            })
        })
        smallSolar.map(s => {
            healthcaredistricts.map(h => {
                if (h.name === s.healthCareDistrict) {
                    h.orders++
                    h.injections += s.injections
                }
            })
        })
        smallZerpfy.map(s => {
            healthcaredistricts.map(h => {
                if (h.name === s.healthCareDistrict) {
                    h.orders++
                    h.injections += s.injections
                }
            })
        })
    }
    //useEffect(() => vacsInHcd(), [vacsInHcd])

    const today = () => {
        let amount = 0
        smallAntiqua.map(s => {
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
            <div>
                <h3>Vaccinations per healthcare district</h3>
                {vacsInHcd()}
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Orders</th>
                            <th>Injections</th>
                        </tr>
                        {healthcaredistricts.map(h =>
                            <HealthcareDistrict
                                key={h.name}
                                name={h.name}
                                orders={h.orders}
                                injections={h.injections}
                            />)}
                    </tbody>
                </table>


            </div>
        </div>

    );
}

export default HomePage