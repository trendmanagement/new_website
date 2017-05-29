import React, {Component} from 'react';
import './css/Welcome.css';
import {Navigation, Footer} from '../Components';

export default class WelcomePage extends Component{

    render() {
        return (
            <div className="welcome-container">
                <div className="welcome__logo-img"></div>
                <div className="welcome__herotxt-wrapper fade-in">
                    <p className="welcome__herotxt-text">Wellcome to the world </p>
                    <p className="welcome__herotxt-text">of modern hedging</p>
                </div>
            </div>
        )
    }

}