import React, { Component } from 'react';
import MapCS from './Map';
import Weather from './Weather'
import {
  BrowserRouter
} from 'react-router-dom'

/* Game component for Virginia */
class Virginia extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h2>Louisville vs Virginia @ Cardinal Stadium</h2>
        <Weather location="louisville"/>
        <h1> Statistical Data for 2019 Not Yet Available. Will Be Populated Once Available. </h1>
        <MapCS />
      </div>
      </ BrowserRouter>
    )
  }
}

export default Virginia;
