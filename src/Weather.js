import React, { Component } from 'react';

const weatherapi = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}"
const DEFAULT_QUERY = 'redux';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {

    fetch(weatherapi + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render(){
    return ( 
        <div>
            
            <label value="this is the weather content result">
            this is the weather content result</label>
        </div>
        
      )
  }
}

export default Weather;