import React from 'react';
import moment from 'moment';
import '../styles/forecast-details.css';

const ForecastDetails = props => {
  return <div className="detailedForecast" >
    <span className="formattedDate">Date: {moment(props.forecast.date).format('ddd Do MMM')}</span>
    <br></br>
    <span className="maxTemp">Max Temperature:{props.forecast.temperature.max}°C</span>
    <br></br>
    <span className="minTemp">Min Temperature: {props.forecast.temperature.min}°C</span>
    <br></br>
    <span className="windSpeed">Wind Speed: {props.forecast.wind.speed}mph</span>
    <br></br>
    <span className="windDirection">Wind Direction: {props.forecast.wind.direction}</span>
    <br></br>
    <span className="humidity">Humidity: {props.forecast.humidity}%</span>
  </div>;
};

export default ForecastDetails;