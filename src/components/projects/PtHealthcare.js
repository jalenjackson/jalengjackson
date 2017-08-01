import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Chalkboard extends React.Component {
    render(){
        return (
            <div>

                <div style={{background:"linear-gradient(rgba(0,0,0,0.4), black) , url(http://www.hsalam-bamako.com/wp-content/uploads/2016/12/o-HAPPY-PEOPLE-facebook.jpg) center center no-repeat", backgroundSize: "cover", overflow: "hidden"}} className="home-container">
                    <div className="side-view">
                        <img src="https://media.giphy.com/media/FI4mMqnV8yYNy/giphy.gif"/>
                    </div>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={2000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >

                        <div style={{background: "url('http://www.adrenalinmedia.com.au/Upload/AdrenalinMedia/Media/Insights/2015-05-Animated%20Interfaces/benefits03.gif') center center no-repeat", backgroundSize: "cover", filter: "grayscale(100%)"}} className="overlay-ani"></div>
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="new"
                        transitionEnterTimeout={6000}
                        transitionAppearTimeout={8000}
                        transitionLeaveTimeout={4000}
                        transitionAppear={true}
                    >
                        <h1><span>Pauline & Thomas</span></h1>
                        <h1 className="next"><span>Health Care</span></h1>
                    </ReactCSSTransitionGroup>
                    <a target="blank" href="https://pthealthcare.herokuapp.com/"><h5>Visit<img className="arrow" src="https://image.flaticon.com/icons/png/512/60/60934.png"/></h5></a>

                </div>
            </div>
        )
    }
}
