import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summary.css';

const ForecastSummary = (props) => {
  return (
    <div className="summaryForecast">
      <span className='forecast-summary__date'>{moment(props.date).format('ddd Do MMM')}</span>
      <br></br>
      <span className='forecast-summary__temperature'>{props.temperature}°C</span>
      <br></br>
      <span className='forecast-summary__description'>{props.description}</span>
      <br></br>
      <br></br>
      <br></br>
      <span className='forecast-summary__icon'><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span>
      <br></br>
      <br></br>
      <button onClick={() => props.onSelect(props.date)}>More details</button>
    </div>  
  )
}

export default ForecastSummary;