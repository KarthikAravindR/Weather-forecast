import React from 'react'
import './Currentforecast.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
// import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faSnowflake as fasnow } from '@fortawesome/free-regular-svg-icons';
import { faCloud as facloud,faMapMarkerAlt as falocation, faWind as fakaathu,faCloudRain as facloudrain,faCloudShowersHeavy as faheavyrain,faCloudSunRain as facloudsunrain,faSun as fasun} from '@fortawesome/free-solid-svg-icons';

library.add(
    facloud,
    falocation,
    fasnow,
    fakaathu,
    facloudrain,  // light
    faheavyrain,  // heavy
    facloudsunrain, // moderate
    fasun
    // more icons go here
);

const currentforecast = (props) => {
    console.log(props.weatherdescription)
    let icon = null
        if(props.weatherdescription === "light rain") {
            icon=(<FontAwesomeIcon icon={facloudrain}/>)
        } else if (props.weatherdescription === "moderate rain") {
            icon =(<FontAwesomeIcon icon={facloudsunrain}/>) 
        } else if (props.weatherdescription === "heavy intensity rain") {
            icon =(<FontAwesomeIcon icon={faheavyrain}/>) 
        }else if (props.weatherdescription === "broken clouds" || "overcast clouds" || "scattered clouds" ) {
            icon =(<FontAwesomeIcon icon={facloud}/>) 
        }else if (props.weatherdescription === "clear sky") {
            icon =(<FontAwesomeIcon icon={fasun}/>) }
    return(
        <div className="currentforecast">
            <div className="currentlocation">
                <FontAwesomeIcon icon={falocation} className="location"/>
                <div className="locationname">
                    {props.currentlocation},{props.locationcountry}
                <p className="weatherdescription"><span style={{fontSize:"1rem",marginRight:"8px"}}>{icon}</span>{props.weatherdescription}</p>
                </div>
            </div>
            <div className="weatherdetails">
                {/* <p className="weatherdescription">{props.weatherdescription}</p> */}
                <p className="currenttemp">{props.currenttemp}<span>°C</span></p>
                <div className="feelsliketemp"><FontAwesomeIcon icon={fasnow} style={{fontSize:"2rem",marginRight:"8px"}}/>{props.feelsliketemp}<span>°C</span></div>
                <div  className="windspeed"><FontAwesomeIcon icon={fakaathu} style={{fontSize:"2rem",marginRight:"8px"}}/>{props.windspeed} <span>km/hr</span></div>
            </div>
        </div>
    )
}

export default currentforecast