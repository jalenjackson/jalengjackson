import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Chalkboard extends React.Component {
    render(){
        return (
            <div>

                <div style={{background:"linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)) , url(https://www.paidmodelingjobs.com/wp-content/uploads/2017/02/RSA-Promotional-Models.jpeg) center center no-repeat", overflow: "hidden"}} className="home-container">
                    <div className="side-view">
                        <div className="loader"></div>

                        <img src="https://media.giphy.com/media/ghRJwKf9ZrnkQ/giphy.gif"/>
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
                        <h1><span>Hair</span></h1>
                        <h1 className="next"><span>Obsessionz</span></h1>
                    </ReactCSSTransitionGroup>
                    <a target="blank" href="https://hairobsessionz101.com/"><h5>Visit<img className="arrow" src="https://image.flaticon.com/icons/png/512/60/60934.png"/></h5></a>

                </div>
            </div>
        )
    }
}
