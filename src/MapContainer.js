import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker} from 'google-maps-react';
import weather from "./Weather"

export default class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onMapClicked(){
        console.log("map was clicked........")
        // return (
        //     <Marker
        //     title={'The marker`s title will appear as a tooltip.'}
        //     name={'SOMA'}
        //     position={{lat: 37.778519, lng: -122.405640}} />
        // )
    }

    onInfoWindowClose(){
        console.log("inrfo closed........")
    }

  render() {
    this.props.google.lat = 40.408247
    this.props.google.lng = -111.838159
    const style = {
        align:"center" ,
        width: '100%',
        height: '60%'
        
      }      
    console.log("google props:"+JSON.stringify(this.props.google))

    return ( 
      <div  ref="map" >
            <Map style={style} google={this.props.google} zoom={14}
             initialCenter={{
                lat: 40.430614,
                lng: -111.881646
            }}
            onClick={this.onMapClicked}>

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow >
                    <div>
                    <h1>weather</h1>
                    </div>
                    </InfoWindow>

                </Map>
        </div>
    )
  }
  
}
