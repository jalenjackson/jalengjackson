import React, { Component } from 'react';

import Home from './Home'
import MainNav from './MainNav'
import SideNav from './SideNav'
import Chalkboard from './projects/Chalkboard'
import Cellltronics from './projects/Cellltronics'
import Tellafiction from './projects/Tellafiction'
import Critic from './projects/Critic'
import PtHealthcare from './projects/PtHealthcare'
import Vrartgo from './projects/Vrartgo'
import YoutubeApi from './projects/YoutubeApi'
import HairObsessionz from './projects/HairObsessionz'
import About from './About'
import Projects from './Projects'
import Mpproductions from './projects/Mpproductions'
import BlackHole from './projects/Blackhole'



import {Route, Router, BrowserRouter, withRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <div>

            <MainNav/>
            <SideNav/>

            <Route exact path='/' component={Home} />
            <Route path='/chalkboard' component={Chalkboard} />
            <Route path='/pthealthcare' component={PtHealthcare} />
            <Route path='/vrartgo' component={Vrartgo} />
            <Route path='/youtubeapi' component={YoutubeApi}/>
            <Route path='/hairobsessionz' component={HairObsessionz}/>
            <Route path='/cellltronics' component={Cellltronics}/>
            <Route path='/tellafiction' component={Tellafiction}/>
            <Route path='/critic' component={Critic}/>
            <Route path='/about' component={About}/>
              <Route path='/projects' component={Projects}/>
            <Route path='/mpproductions' component={Mpproductions}/>
            <Route path='/blackhole' component={BlackHole}/>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}
