import React, { Component } from 'react';
import Buildtheflock from './Images/buildtheflock.jpg'

/* Home page component */
class App extends Component {
  render() {
    return (
      /* Introductory Content */
      <div>
        <p className="Hometext">Welcome to Meet The Flockers a Build The Flock web app designed to facilitate and promote networking at Louisville Football tailgates.</p>
        <img className="Buildtheflock" src={Buildtheflock} alt="Buildtheflock logo" />
        <p className="Hometext">Ever wanted to meet some tweeps irl you have met through #BTF? What better place to do it than at a Louisville football tailgate? This app will allow you to pin your tailgate on a google map so that people can find you in a tailgate lot. If you're a tailgate nomad like I am just pull up the app to see where your friends are partying. It's been something that has come up repeatedly since I started #BTF that people want meetups. This is my response to opening that door and hopefully bringing the flock even closer together. Go Cards!</p>
      </div>
    )
  }
}

export default App;
