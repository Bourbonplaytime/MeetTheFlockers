import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    /* state declaration */
    this.state = {
      temperature: undefined,
      high: undefined,
      low: undefined,
      humidity: undefined,
      wind: undefined,
      conditions: undefined
    };
  }

  /*api call and state population */
  componentDidMount(props) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.location}&appid=<WeatherAPIKey>&units=imperial`)
      .then(response => response.json())
      .then(data => {
         this.setState({ temperature: data.main.temp, high: data.main.temp_max, low: data.main.temp_min, humidity: data.main.humidity,
        wind: data.wind.speed, conditions: data.weather[0].description })
      })
  }

  /* Mounting state in DOM */
  render() {
    return (
      <div>
        <ul>
          <li>Temperature: {this.state.temperature} degrees</li>
          <li>Humidity: {this.state.humidity}%</li>
          <li>High: {this.state.high} degrees</li>
          <li>Low: {this.state.low} degrees</li>
          <li>Wind Speed: {this.state.wind} mph</li>
          <li>Conditions: {this.state.conditions}</li>
        </ul>
      </div>
    )
  }
}

export default Weather;
