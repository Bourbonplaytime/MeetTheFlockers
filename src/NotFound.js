import React, { Component } from 'react'
import FlyTogether from './Images/Flytogether.jpg'

// 404 error component 
class NotFound extends Component {
  render () {
    return (
      <div className="NotFound">
        <p className="notfoundtext">File not found. Please check the url and try again.</p>
        <img className="NotFoundPic" src={FlyTogether} alt="Fly Together" />
      </div>
    )
  }
}

export default NotFound
