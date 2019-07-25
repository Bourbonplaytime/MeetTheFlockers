import React, { Component } from 'react';
import MapCS from './Map';
import Weather from './Weather'
import {
  BrowserRouter
} from 'react-router-dom'

/* Game component for Western Kentucky */
class WesternKy extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h2>Louisville vs Eastern Kentucky @ Nissan Stadium</h2>
        <Weather location="nashville"/>
        <h1> Statistical Data for 2019 Not Yet Available. Will Be Populated Once Available. </h1>
        <MapCS lat="36.166479" lon="86.7712898"/>
      </div>
      </ BrowserRouter>
    )
  }
}

export default WesternKy;
