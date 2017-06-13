import React, { Component } from 'react';
import './css/GetstartedSlider.css';
import { Navigation, Footer } from '../Components';

export default class Getstartedslider extends Component {
    render() {
        return (
            <div className="getstarted-slider-container" >
                <Navigation activeTab="home" self={this.props.self}/>
                <div className="iframe-wrapper">
                    <iframe src="//slides.com/nikolasjoyce/deck-3/embed" width="576" height="420" scrolling="no" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>     
                </div>
            </div>
		)
    }

}