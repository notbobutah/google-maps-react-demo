import React, { Component } from 'react';
import logo from "./Omadi_Website_Logos_Horizontal.png";
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './MapContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" />
          <h1 className="App-title">Demo Weather Services</h1>
        </header>
        <div>
        <h1> Weather Map in React </h1> 
              
        <MapContainer google={this.props.google} />
        </div>          
      </div>
    );
  }
}

export default GoogleApiWrapper(
{  'apiKey': 'AIzaSyDPLt75gbB8oA9cZ1Z-Ufhblxw-PS_i-Mo'}
)(App)
