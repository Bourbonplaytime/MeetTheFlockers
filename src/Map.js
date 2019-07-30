import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

//Map Styling
const mapStyles = {
  width: '100%',
  height: '500px'
};

// Map Component
class MapCS extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{
            lat: 38.2060804,
            lng: -85.7587539
        }}
        />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: <MapsAPIKey>
})(MapCS);
