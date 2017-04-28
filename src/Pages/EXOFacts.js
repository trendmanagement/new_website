import React, { Component } from 'react'; 
import { Navigation, Footer } from '../Components'; 

export default class EXOFacts extends Component {
    render() {
        return <div className="exo-facts-container">
            <Navigation activeTab="services" /> 
            <div className="nav-underlay"></div>

            <Footer />
        </div>
    }
}