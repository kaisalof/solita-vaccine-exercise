import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment'
import '../styles/homepage.css';

// data
import Antiqua from '../resources/Antiqua.json'
import SolarBuddhica from '../resources/SolarBuddhica.json'
import Zerpfy from '../resources/Zerpfy.json'
import vaccinations from '../resources/vaccinations.json'

// components
import All from '../components/All';
import Date from '../components/Date'
import HealthcareDistricts from '../components/HealthcareDistricts'
import TotalPerProducer from '../components/TotalPerProducer'
import Total from '../components/Total';
import ArrivedOrders from '../components/ArrivedOrders';

const HomePage = () => {
    const [dateTime] = useState('2021-04-12T11:10:06.473587Z')
    const [arrivedToday, setArrivedToday] = useState(0)

    const [totalOrders, setTotalOrders] = useState(0)
    const [totalInjections, setTotalInjections] = useState()
    const [usedInjections, setUsedInjections] = useState(0)

    const [expiresToday, setExpiresToday] = useState(0)
    const [expiredInjections, setExpiredInjections] = useState(0)

    const [antiquaData, setAntiquaData] = useState({
        usedInjections: 0,
        expiredInjections: 0,
        injectionsLeft: 0,
        arrivedToday: 0,
        injectionAmount: 0,
        totalAmountOfOrders: 0,
        expiresToday: 0
    })
    const [solarData, setSolarData] = useState({
        usedInjections: 0,
        expiredInjections: 0,
        injectionsLeft: 0,
        arrivedToday: 0,
        injectionAmount: 0,
        totalAmountOfOrders: 0,
        expiresToday: 0
    })
    const [zerpfyData, setZerpfyData] = useState({
        usedInjections: 0,
        expiredInjections: 0,
        injectionsLeft: 0,
        arrivedToday: 0,
        injectionAmount: 0,
        totalAmountOfOrders: 0,
        expiresToday: 0
    })

    const [hyksData, setHyksData] = useState({
        name: '',
        injectionAmount: 0,
        allOrders: [],
        expiredI: 0,
        usedI: 0,
        leftInjections: 0
    })
    const [kysData, setKysData] = useState({
        name: '',
        injectionAmount: 0,
        allOrders: [],
        expiredI: 0,
        usedI: 0,
        leftInjections: 0
    })
    const [oysData, setOysData] = useState({
        name: '',
        injectionAmount: 0,
        allOrders: [],
        expiredI: 0,
        usedI: 0,
        leftInjections: 0
    })
    const [taysData, setTaysData] = useState({
        name: '',
        injectionAmount: 0,
        allOrders: [],
        expiredI: 0,
        usedI: 0,
        leftInjections: 0
    })
    const [tyksData, setTyksData] = useState({
        name: '',
        injectionAmount: 0,
        allOrders: [],
        expiredI: 0,
        usedI: 0,
        leftInjections: 0
    })

    const districtData = useCallback((district, date) => {
        const allOrders = [
            ...Antiqua.orders,
            ...SolarBuddhica.orders,
            ...Zerpfy.orders].filter(o => {
                if (district === o.healthCareDistrict) {
                    return o
                }
            })

        const countExpired = allOrders.filter(o => {
            let arrivalDate = moment(o.arrived)
            let today = moment(date)
            let difference = today.diff(arrivalDate, 'days')
            if (difference > 30) {
                return o
            }
        })
        vaccinations.vaccinations.forEach(v => {
            const index = countExpired.findIndex(o => o.id === v.sourceBottle)
            if (index !== -1) {
                countExpired[index].injections--
            }
        })
        const allInjections = allOrders.map(o => o.injections)
        const injectionAmount = allInjections.reduce((a, b) => a + b, 0)

        const countAllExpired = countExpired.map(o => o.injections)
        const expiredI = countAllExpired.reduce((a, b) => a + b, 0)

        let usedI = 0
        vaccinations.vaccinations.map(v => {
            allOrders.map(a => {
                if (v.sourceBottle === a.id) {
                    usedI++
                }
            })
        })

        const leftInjections = injectionAmount - usedI - expiredI
        const name = district

        return {
            name,
            injectionAmount,
            allOrders,
            expiredI,
            usedI,
            leftInjections
        }
    }, []);

    const calculateVaccines = useCallback((dataSource, date) => {
        const allExpired = dataSource.filter(o => {
            let arrivalDate = moment(o.arrived)
            let today = moment(date)
            let difference = today.diff(arrivalDate, 'days')
            if (difference > 30) {
                return o
            }
        })

        const expiresToday = dataSource.filter(o => {
            let arrivalDate = moment(o.arrived)
            let today = moment(date)
            let difference = today.diff(arrivalDate, 'days')
            if (difference === 30) {
                return o
            }
        })

        vaccinations.vaccinations.forEach(v => {
            const index = allExpired.findIndex(o => o.id === v.sourceBottle)
            if (index !== -1) {
                allExpired[index].injections--
            }
        })

        const allInjections = dataSource.map(o => o.injections)
        const injectionAmount = allInjections.reduce((a, b) => a + b, 0)

        const allExpiredInjections = allExpired.map(o => o.injections)
        const expiredInjections = allExpiredInjections.reduce((a, b) => a + b, 0)

        let usedInjections = 0
        vaccinations.vaccinations.map(v => {
            dataSource.map(d => {
                if (v.sourceBottle === d.id) {
                    usedInjections++
                }
            })
        })

        const injectionsLeft = injectionAmount - expiredInjections - usedInjections

        const arrivedToday = dataSource.filter(o => {
            if (moment(o.arrived).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')) {
                return o
            }
        })

        return ({
            expiredInjections,
            usedInjections,
            injectionsLeft,
            arrivedToday,
            injectionAmount,
            totalAmountOfOrders: dataSource.length,
            expiresToday
        })
    }, []);

    useEffect(() => {
        const allAntiqua = calculateVaccines(Antiqua.orders, dateTime)
        const allSolar = calculateVaccines(SolarBuddhica.orders, dateTime)
        const allZerpfy = calculateVaccines(Zerpfy.orders, dateTime)
        setAntiquaData(allAntiqua)
        setSolarData(allSolar)
        setZerpfyData(allZerpfy)
        setArrivedToday(allAntiqua.arrivedToday.length + allSolar.arrivedToday.length + allZerpfy.arrivedToday.length)
        setExpiredInjections(allAntiqua.expiredInjections + allSolar.expiredInjections + allZerpfy.expiredInjections)
        setUsedInjections(allAntiqua.usedInjections + allSolar.usedInjections + allZerpfy.usedInjections)
        setTotalInjections(allAntiqua.injectionAmount + allSolar.injectionAmount + allZerpfy.injectionAmount)
        setTotalOrders(allAntiqua.totalAmountOfOrders + allSolar.totalAmountOfOrders + allZerpfy.totalAmountOfOrders)
        setExpiresToday(allAntiqua.expiresToday.length + allSolar.expiresToday.length + allZerpfy.expiresToday.length)
        setHyksData(districtData('HYKS', dateTime))
        setKysData(districtData('KYS', dateTime))
        setOysData(districtData('OYS', dateTime))
        setTaysData(districtData('TAYS', dateTime))
        setTyksData(districtData('TYKS', dateTime))
    }, [dateTime, districtData, calculateVaccines])

    return (
        <div id="home">
            <h1>Vaccinations</h1>
            <div className="topInfo">
                <div id="today" className="parts">
                    <div>
                        <Date date={dateTime} />
                    </div>

                    <div id="todayInfo">
                        <div id="arrived">
                            <p id="todays">Today has arrived {arrivedToday} vaccinations</p>

                            <ArrivedOrders
                                key={'antiqua'}
                                name={'Antiqua'}
                                todayArrived={antiquaData.arrivedToday.length}
                            />
                            <ArrivedOrders
                                key={'solarbuddhica'}
                                name={'SolarBuddhica'}
                                todayArrived={solarData.arrivedToday.length}
                            />
                            <ArrivedOrders
                                key={'zerpfy'}
                                name={'Zerpfy'}
                                todayArrived={zerpfyData.arrivedToday.length}
                            />
                        </div>

                        <div id="expires">
                            <p> {expiresToday} bottles expires today</p>
                        </div>
                    </div>
                </div>

                <div id="total" className="parts">
                    <div id="ordersInjections">
                        <h3>Total amount of orders and injections</h3>
                        <All
                            totalOrders={totalOrders}
                            totalInjections={totalInjections}
                        />
                    </div>
                    <div id="injections">
                        <h3>Vaccination amounts</h3>
                        <Total
                            usedInjections={usedInjections}
                            expiredInjections={expiredInjections}
                            totalInjections={antiquaData.injectionsLeft + solarData.injectionsLeft + zerpfyData.injectionsLeft}
                        />
                    </div>
                </div>
            </div>

            <div id="producers">
                <h3>Orders and vaccines per producer</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Producer</th>
                            <th>Total orders</th>
                            <th>Total vaccines</th>
                            <th>Used vaccines</th>
                            <th>Expired vaccines</th>
                            <th>Vaccines left</th>
                        </tr>

                        <TotalPerProducer
                            className="rowsInProducers"
                            key={'antiqua'}
                            name={'Antiqua'}
                            totalO={antiquaData.totalAmountOfOrders}
                            total={antiquaData.injectionAmount}
                            expired={antiquaData.expiredInjections}
                            used={antiquaData.usedInjections}
                            inj={antiquaData.injectionsLeft}
                        />
                        <TotalPerProducer
                            className="rowsInProducers"
                            key={'solarbuddhica'}
                            name={'SolarBuddhica'}
                            totalO={solarData.totalAmountOfOrders}
                            total={solarData.injectionAmount}
                            expired={solarData.expiredInjections}
                            used={solarData.usedInjections}
                            inj={solarData.injectionsLeft}
                        />
                        <TotalPerProducer
                            className="rowsInProducers"
                            key={'zerpfy'}
                            name={'Zerpfy'}
                            totalO={zerpfyData.totalAmountOfOrders}
                            total={zerpfyData.injectionAmount}
                            expired={zerpfyData.expiredInjections}
                            used={zerpfyData.usedInjections}
                            inj={zerpfyData.injectionsLeft}
                        />
                    </tbody>
                </table>

            </div>

            <div id="districts">
                <h3>Healthcare Districts</h3>
                <div id="hcd">
                    <HealthcareDistricts
                        hyksData={hyksData}
                        kysData={kysData}
                        oysData={oysData}
                        taysData={taysData}
                        tyksData={tyksData}
                    />
                </div>
            </div>
            <div>
                <footer>Coded by Kaisa &#129311;</footer>
            </div>
        </div>

    );
}

export default HomePage
