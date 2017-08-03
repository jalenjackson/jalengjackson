import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Mpproductions extends React.Component {
    render(){
        return (
            <div>

                <div style={{background:"linear-gradient(rgba(0,0,0,0.4), black) , url(https://i0.wp.com/rebelmusic.info/wp-content/uploads/2014/09/o-THOM-YORKE-facebook.jpg?fit=2000%2C1000) center center no-repeat", backgroundSize: "cover", overflow: "hidden"}} className="home-container">
                    <div className="side-view">
                        <div className="loader"></div>

                        <img src="https://media.giphy.com/media/12LLRqg7KTjSlW/giphy.gif"/>
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
                        <h1><span>Calvin Productions</span></h1>
                    </ReactCSSTransitionGroup>
                    <a target="blank" href="http://www.calvinproductions.com/"><h5>Visit<img className="arrow" src="https://image.flaticon.com/icons/png/512/60/60934.png"/></h5></a>

                    <a target="blank" href="https://mpproductions.herokuapp.com/"><h5>Backup Link<img className="arrow" src="https://image.flaticon.com/icons/png/512/60/60934.png"/></h5></a>

                </div>
            </div>
        )
    }
}
