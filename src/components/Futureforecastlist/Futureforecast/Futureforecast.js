import React, { Component } from 'react'

import './Futureforecast.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

import {  } from '@fortawesome/free-regular-svg-icons';
import { faCloud as facloud,faCloudRain as facloudrain,faCloudShowersHeavy as faheavyrain,faCloudSunRain as facloudsunrain,faSun as fasun } from '@fortawesome/free-solid-svg-icons';

library.add(
    facloud,
    facloudrain,  // light
    faheavyrain,  // heavy
    facloudsunrain, // moderate
    fasun
);

class Futureforecast extends Component {
    state = {
        count: 1,
        day: ""
    }

    componentDidMount() {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        let dayno = (date.getDay())
        let day = ""
        if(dayno === 0) {
            day = 'SUN'
        } else if (dayno === 1) {
            day = 'MON'
        } else if (dayno === 2) {
            day = 'TUE'
        } else if (dayno === 3) {
            day = 'WED'
        } else if (dayno === 4) {
            day = 'THUR'
        } else if (dayno === 5) {
            day = 'FRI'
        } else if (dayno === 6){
            day = 'SAT'
        }
        this.setState(prevState => {
            return{
                count: prevState.count + 1,
                day: day,
            }
        },() => console.log(this.state.count))
    }
    render() {
        let icon = null
        if(Object.values(this.props.dailydetails)[0] === "light rain") {
            icon=(<FontAwesomeIcon icon={facloudrain}/>)
        } else if (Object.values(this.props.dailydetails)[0] === "moderate rain") {
            icon =(<FontAwesomeIcon icon={facloudsunrain}/>) 
        } else if (Object.values(this.props.dailydetails)[0] === "heavy intensity rain") {
            icon =(<FontAwesomeIcon icon={faheavyrain}/>) 
        }else if (Object.values(this.props.dailydetails)[0] === "broken clouds" || "overcast clouds" || "scattered clouds" ) {
            icon =(<FontAwesomeIcon icon={facloud}/>) 
        }else if (Object.values(this.props.dailydetails)[0] === "clear sky") {
            icon =(<FontAwesomeIcon icon={fasun}/>) }
        return (
            <div className="futureforecastlist">
                <div className="card">
                    {/* <div>
                        {this.state.day}
                    </div> */}
                    <p  style={{fontSize:"4rem"}}>
                        {icon}
                    </p>
                    <p style={{fontSize:"1.7rem"}}>{Object.keys(this.props.dailydetails)}°C</p>
                </div>
            </div>
        )
    }
}

export default Futureforecast