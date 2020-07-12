import React from 'react'

import './Futureforecastlist.css'
import Futureforecast from './Futureforecast/Futureforecast'

const futureforecastlist = (props) => {
    const dailytemp = props.dailytemp
    const dailydescription = props.dailydescription
    // const dailytemp = Object.assign({},props.dailytemp)
    // const dailydescription = Object.assign({},props.dailydescription)
    // const hourlytemp = Object.assign({},props.hourlytemp)
    // const hourlydescription = Object.assign({},props.hourlydescription)

    // const dailyweather = []
    // dailyweather.push(dailytemp,dailydescription)
    // const hourlyweather = []
    // hourlyweather.push(hourlytemp,hourlydescription)
    

    // console.log(dailyweather)
    // console.log(hourlyweather) 

    let dailyweather = []   
    dailytemp.forEach((e, i) => {
        dailyweather.push({
            [e]: dailydescription[i]
        })

    })
    
    console.log(dailyweather)
    return (
        <div className="futureforecast">
            <div className="title">↓ Next 8 Days Forecast ↓</div>
            <div className="futureforecastlist">
                {dailyweather.map(dailydetails => {
                    return <Futureforecast dailydetails={dailydetails} date={new Date()}/>
                })}
            </div>
        </div>
    )
}

export default futureforecastlist