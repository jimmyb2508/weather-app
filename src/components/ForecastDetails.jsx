import React from 'react';
import moment from 'moment';

const ForecastDetails = props => {
  return <div>
    <span className="formattedDate">{moment(props.forecast.date).format('ddd Do MMM')}</span>
    <span className="minTemp">{props.forecast.temperature.max}</span>
    <span className="maxTemp">{props.forecast.temperature.min}</span>
    <span className="windSpeed">{props.forecast.wind.speed}</span>
    <span className="windDirection">{props.forecast.wind.direction}</span>
    <span className="humidity">{props.forecast.humidity}</span>
  </div>;
};

export default ForecastDetails;