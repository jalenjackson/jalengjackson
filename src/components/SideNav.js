import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { NavLink } from 'react-router-dom'

export default class SideNav extends React.Component {
    render(){
        return (
            <div>
                <div className="side-nav-container">

                    <div className="side-nav-a">
                        <h1>Client Projects</h1>
                        <NavLink activeClassName="active-ness" to="/pthealthcare">Health Care Corp</NavLink><br/>
                        <NavLink activeClassName="active-ness" to="/hairobsessionz">Hair Obsessionz</NavLink><br/>

                        <NavLink activeClassName="active-ness" to="/cellltronics">Cellltronics</NavLink><br/>
                        <NavLink activeClassName="active-ness" to="/chalkboard">Chalkboard</NavLink><br/>
                    <NavLink activeClassName="active-ness" to="/tellafiction">TellAFiction</NavLink><br/>
                    <NavLink activeClassName="active-ness" to="/youtubeapi">youtube api</NavLink><br/>
                    <NavLink activeClassName="active-ness" to="/vrartgo">Vrartgo</NavLink><br/>
                    <h1 style={{marginTop: "30px"}}>New Client Projects Under Development</h1>
                        <NavLink activeClassName="active-ness" to="/mpproductions">Mpproductions</NavLink><br/>
                        <NavLink activeClassName="active-ness" to="/critic">Critic</NavLink><br/>

                    </div>
                </div>

            </div>
        )
    }
}
