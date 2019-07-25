import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import NotreDame from './NotreDame'
import EasternKy from './EasternKy'
import WesternKy from './WesternKentucky'
import FloridaState from './FloridaState'
import BostonCollege from './BostonCollege'
import WakeForest from './WakeForest'
import Clemson from './Clemson'
import Virginia from './Virginia'
import Miami from './Miami'
import NCState from './NCState'
import Syracuse from './Syracuse'
import Kentucky from './Kentucky'
import NotFound from './NotFound'
import App from'./App'

//Component that mounts all the navigation, routing, and introductory text 
class Header extends Component {
  render () {
    return (

      <BrowserRouter>
        <header>
        <h1 className="MTF">
          Build The Flock: Meet The Flockers
        </h1>
        <h3>
          A Tailgate Meetup App
        </h3>
        <ul className="navigation">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/NotreDame">Louisville vs Notre Dame</NavLink></li>
          <li><NavLink to="/EasternKy">Louisville vs Eastern Kentucky</NavLink></li>
          <li><NavLink to="/WesternKy">Louisville vs Western Kentucky</NavLink></li>
          <li><NavLink to="/FloridaState">Louisville @ FSU</NavLink></li>
          <li><NavLink to="/BostonCollege">Louisville vs Boston College</NavLink></li>
          <li><NavLink to="/WakeForest">Louisville @ Wake Forest</NavLink></li>
          <li><NavLink to="/Clemson">Louisville vs Clemson</NavLink></li>
          <li><NavLink to="/Virginia">Louisville vs Virginia</NavLink></li>
          <li><NavLink to="/Miami">Louisville @ Miami</NavLink></li>
          <li><NavLink to="/NCState">Louisville @ NC State</NavLink></li>
          <li><NavLink to="/Syracuse">Louisville vs Syracuse</NavLink></li>
          <li><NavLink to="/Kentucky">Louisville @ Kentucky</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/NotreDame" component={NotreDame} />
          <Route path="/EasternKy" component={EasternKy} />
          <Route path="/WesternKy" component={WesternKy} />
          <Route path="/FloridaState" component={FloridaState} />
          <Route path="/BostonCollege" component={BostonCollege} />
          <Route path="/WakeForest" component={WakeForest} />
          <Route path="/Clemson" component={Clemson} />
          <Route path="/Virginia" component={Virginia} />
          <Route path="/Miami" component={Miami} />
          <Route path="/NCState" component={NCState} />
          <Route path="/Syracuse" component={Syracuse} />
          <Route path="/Kentucky" component={Kentucky} />
          <Route path="*"component={NotFound} />
        </Switch>
        </header>
      </BrowserRouter>
    )
  }
}

export default Header
