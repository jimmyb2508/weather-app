import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.css';
import ForecastDetails from './ForecastDetails';

// const App = props => {
//   return (
//     <div className="forecast">
//       <LocationDetails
//       city={props.location.city} 
//       country={props.location.country} 
//       />

//       <ForecastSummaries forecasts={props.forecasts} />
//       <ForecastDetails forecast={props.forecasts[0]} />
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const selectedForecast = this.props.forecasts.find(forecast => forecast.date === this.state.selectedDate);

    return (
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <ForecastSummaries forecasts={props.forecasts} />
      <ForecastDetails forecast={selectedForecast} />
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
