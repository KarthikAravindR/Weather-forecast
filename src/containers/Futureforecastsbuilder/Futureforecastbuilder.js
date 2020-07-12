import React, { Component } from 'react'
import axios from 'axios'

import './Futureforecastbuilder.css'
import Futureforecastlist from '../../../components/Futureforecastlist/Futureforecastlist'
import Hourlyforecastgraph from '../../../components/Hourlyforecastgraph/Hourlyforecastgraph'

class Futureforecast extends Component {
    state = {
        location: null,
        lat: null,
        long: null,
        searchlocation: null,
        dailytemp: [],
        dailydescription: [],
    }
    componentDidMount() {
                this.setState({ location: this.props.location,searchlocation: this.props.searchlocation,lat: this.props.lat,long: this.props.long }, () => this.APICallFunction())
    }
    APICallFunction = () => {
        let dailytemp = null
        let dailytemparray = []
        let dailydescriptionarray = []
        let hourlytemp = null
        let hourlytemparray = []
        let hourlydescriptionarray = []
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.state.lat+"&lon="+this.state.long+"&exclude=current,minutely&appid=95d527127ee09e92090c719ed269fe57&units=metric")
            .then(response => {
                console.log(response.data)
                dailytemp = response.data.daily
                hourlytemp = response.data.hourly
                for (let t in dailytemp){
                    dailytemparray.push(dailytemp[t].temp.day)
                    dailydescriptionarray.push(dailytemp[t].weather[0].description)
                }
                for (let t in hourlytemp){
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
    location = (event) => {
        event.preventDefault();
        const search = this.state.searchlocation
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.searchlocation + "&appid=95d527127ee09e92090c719ed269fe57&units=metric")
            .then(response => {
                console.log(response)
                this.setState({
                    location:search,
                })
            })
        console.log(this.state)
    }
    render() {
        return (
            <div className="futureforecast">
                <Futureforecastlist 
                    dailytemp={this.state.dailytemp}
                    dailydescription={this.state.dailydescription}
                    hourlytemp={this.state.hourlytemp}
                    hourlydescription={this.state.hourlydescription}/>
            </div>
        )
    }
}

export default Futureforecast