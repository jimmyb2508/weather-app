import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => {
  return (
    <React.Fragment>
      <h1 className='forecast-summary__date'>{moment(props.date).format('ddd Do MMM')}</h1>
      <h2 className='forecast-summary__temperature'>{props.temperature}</h2>
      <h3 className='forecast-summary__description'>{props.description}</h3>
      <h4 className='forecast-summary__icon'><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></h4>
    </React.Fragment>  
  )
}

export default ForecastSummary;