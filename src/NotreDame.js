import React, { Component } from 'react';
import MapCS from './Map';
import Weather from './Weather'
import {
  BrowserRouter
} from 'react-router-dom'
import Stats from'./Stats'

//Game Component for Notre dame
class NotreDame extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h2>Louisville vs Notre Dame @ Cardinal Stadium</h2>
        <Weather location="louisville" />
        <Stats />
        <MapCS />
      </div>
      </ BrowserRouter>
    )
  }
}

export default NotreDame;
