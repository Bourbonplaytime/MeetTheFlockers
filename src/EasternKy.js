import React, { Component } from 'react';
import MapCS from './Map';
import Weather from './Weather'
import {
  BrowserRouter
} from 'react-router-dom'

// Game component for Eastern Kentucky
class EasternKy extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h2>Louisville vs Eastern Kentucky @ Cardinal Stadium</h2>
        <Weather location="louisville"/>
        <h1> Statistical Data for 2019 Not Yet Available. Will Be Populated Once Available. </h1>
        <MapCS lat="38.2060804" lon="85.7587539"/>
      </div>
      </ BrowserRouter>
    )
  }
}

export default EasternKy;
