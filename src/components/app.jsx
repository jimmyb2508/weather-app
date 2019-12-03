import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.css';
import ForecastDetails from './ForecastDetails';
import Axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester`).then(data => {
      const forecasts = data.data.forecasts.map(forecast => forecast);
      const locationDetails = {
        city: data.data.location.city,
        country: data.data.location.country,
      };

      this.setState({
        forecasts,
        location: locationDetails,
      });
    });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );

    return (
      <div className="forecast">
        <LocationDetails city={this.state.location.city} country={this.state.location.country} />

        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    );
  }
}

// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.array.isRequired,
// };

export default App;
