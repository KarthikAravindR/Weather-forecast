import React, { Component } from 'react'
import axios from 'axios'

import Currentforecast from '../../components/Currentforecast/Currentforecast'
import Search from '../../components/UI/Search/Search'
// import Futureforecast from './Futureforecastsbuilder/Futureforecastbuilder'
import './Weatherapp.css'
import Futureforecastlist from '../../components/Futureforecastlist/Futureforecastlist'
// import ParentSize from '@vx/responsive/lib/components/ParentSize';
// import Hourlyforecastgraph from '../../components/Hourlyforecastgraph/Hourlyforecastgraph'

class Weatherapp extends Component {
    state = {
        location: null,
        locationcountry: null,
        lat: null,
        long: null,
        searchlocation: null,
        weatherdetails: null, //[feels_like,humidity,pressure,temp,temp_max,temp_min]
        weatherdescription: null, //[description,icon,id,main]
        winddescription: null, //[deg,speed]
        hourlytemp: [],
        hourlydescription: [],
        dailytemp: [],
        dailydescription: [],
    }
    componentDidMount() {
        axios.get("http://ip-api.com/json")
            .then(response => {
                console.log(response)
                this.setState({ location: response.data.city, lat: response.data.lat, long: response.data.lon,locationcountry:response.data.countryCode }, () => this.APICallFunction())
                console.log(this.state)
            })
    }
    APICallFunction = () => {
        let dailytemp = null
        let dailytemparray = []
        let dailydescriptionarray = []
        let hourlytemp = null
        let hourlytemparray = []
        let hourlydescriptionarray = []
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.location + "&appid=95d527127ee09e92090c719ed269fe57&units=metric")
            .then(response => {
                console.log(response.data)
                this.setState({
                    weatherdetails: response.data.main,
                    weatherdescription: response.data.weather,
                    winddescription: response.data.wind,
                })
            })
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + this.state.lat + "&lon=" + this.state.long + "&exclude=current,minutely&appid=95d527127ee09e92090c719ed269fe57&units=metric")
            .then(response => {
                console.log(response.data)
                hourlytemp = response.data.hourly
                dailytemp = response.data.daily
                for (let t in dailytemp) {
                    dailytemparray.push(dailytemp[t].temp.day)
                    dailydescriptionarray.push(dailytemp[t].weather[0].description)
                }
                for (let t in hourlytemp) {
                    hourlytemparray.push(hourlytemp[t].temp)
                    hourlydescriptionarray.push(hourlytemp[t].weather[0].description)
                }
                this.setState({
                    dailytemp: dailytemparray,
                    dailydescription: dailydescriptionarray,
                    hourlytemp: hourlytemparray,
                    hourlydescription: hourlydescriptionarray
                })
            })

    }
    citynameChanged = (event) => {
        this.setState({
            searchlocation: event.target.value
        })
    }
    APIScall = () => {
        let dailytemp = null
        let dailytemparray = []
        let dailydescriptionarray = []
        let hourlytemp = null
        let hourlytemparray = []
        let hourlydescriptionarray = []
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + this.state.lat + "&lon=" + this.state.long + "&exclude=current,minutely&appid=95d527127ee09e92090c719ed269fe57&units=metric")
        .then(response => {
            console.log(response.data)
            hourlytemp = response.data.hourly
            dailytemp = response.data.daily
            for (let t in dailytemp) {
                dailytemparray.push(dailytemp[t].temp.day)
                dailydescriptionarray.push(dailytemp[t].weather[0].description)
            }
            for (let t in hourlytemp) {
                hourlytemparray.push(hourlytemp[t].temp)
                hourlydescriptionarray.push(hourlytemp[t].weather[0].description)
            }
            this.setState({
                dailytemp: dailytemparray,
                dailydescription: dailydescriptionarray,
                hourlytemp: hourlytemparray,
                hourlydescription: hourlydescriptionarray
            })
        })
    }
    location = (event) => {
        event.preventDefault();
        const search = this.state.searchlocation
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.searchlocation + "&appid=95d527127ee09e92090c719ed269fe57&units=metric")
            .then(response => {
                console.log(response.data)
                this.setState({
                    weatherdetails: response.data.main,
                    weatherdescription: response.data.weather,
                    winddescription: response.data.wind,
                    location: search,
                    locationcountry: response.data.sys.country,
                    lat: response.data.coord.lat,
                    long: response.data.coord.lon
                },() => this.APIScall())
            })
            
        console.log(this.state)
    }
    render() {
        let currentforecast = null
        let futureforecast = null
        if (this.state.weatherdetails) {
            currentforecast = (<Currentforecast
                currentlocation={this.state.location}
                locationcountry={this.state.locationcountry}
                currenttemp={this.state.weatherdetails.temp}
                feelsliketemp={this.state.weatherdetails.feels_like}
                weatherdescription={this.state.weatherdescription[0].description}
                windspeed={this.state.winddescription.speed}
            />)
        } if (this.state.dailytemp && this.state.dailydescription && this.state.hourlytemp && this.state.hourlydescription) {
            console.log(this.state)
            futureforecast = (
                <Futureforecastlist
                    dailytemp={this.state.dailytemp}
                    dailydescription={this.state.dailydescription}
                    hourlytemp={this.state.hourlytemp}
                    hourlydescription={this.state.hourlydescription} />)
        }
        return (
            <div>
                <div className="weatherapp1">
                    <div className="currentforecast">{currentforecast}</div>
                    <div className="searchbar1">
                        <Search Changed={this.citynameChanged}
                            clicked={this.location} />
                        {/* <ParentSize>{({ width, height }) => <Hourlyforecastgraph width={width} height={height} />}</ParentSize> */}
                    </div>
                </div>
                <div>
                    {futureforecast}
                </div>
            </div>
        )
    }
}

export default Weatherapp