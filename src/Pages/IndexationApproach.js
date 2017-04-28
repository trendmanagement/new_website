import React, { Component } from 'react';
import {Navigation, Footer} from '../Components'; 
import './css/Services.css'

export default class IndexationApproach extends Component {

    constructor() {
        super()

        this.state = {
            height: false,
            offset: false,
        }

        this.stickyFooter = () => {
            console.log(this)

            let cont_height = this.refs.footer.refs.footerContainer.offsetHeight;
            let pageHeight = this.refs.textContainer.offsetHeight + cont_height;


            if (pageHeight < window.innerHeight) {
                pageHeight = window.innerHeight
            }

            this.setState({
                offset: pageHeight - cont_height,
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.stickyFooter);
        this.stickyFooter();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.stickyFooter);
    }

    render() {
        return (
            <div>
            <Navigation activeTab="services" /> 
            <div className="nav-underlay"></div>
            <div 
                className="container-grid-block indexation-approach-container" 
                ref="textContainer">
                <h1 className="service-title">Indexation Approach</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" ref="text"> 
                        <p className="service-text">TMQR Exo Index covers the major exchange traded futures market complexes from equity index to energy with the ability to express nuanced market views from raging bull to neutral to raging bear. The EXO in TMQR EXO Index stands for exotic beta.</p>
                        <p className="service-text">TMQR EXO index aims to provide a means to measure the risk and return characteristic of commonly cited, sophisticated options strategies using the most liquid exchange traded derivatives.</p>
                        <p className="service-text">TMQR EXO index is unique in terms of its focus on sources of exotic beta within the exchange traded futures markets with coverage in all market complexes including:</p>
                        <ul className="service-list">
                            <li>Equity index</li> 
                            <li>Interest rates</li>
                            <li>FX/Currency</li>
                            <li>Energy</li>
                            <li>Agricultural</li>
                            <li>Volatility</li>
                        </ul> 
                        <p>TMQR EXO Index reveals a wide array of previously invisible or opaque sophisticated investment strategies which, newly documented, clarify the message when the market speaks.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" ref="text">
                        <p>If a bullish TMQR EXO Index is in the ascendancy then the prevailing market view is directionally positive. If the trend is down the bullish TMQR EXO Index will be descending. If a neutral TMQR EXO Index is in the ascendancy then the prevailing market view is directionless. If the trend is directionally positive or negative the neutral TMQR EXO Index will be descending. The ability to track these different market views gives trend following traders many new potentially profitable opportunities.</p>
                        <h4 className="service-subtitle">Liquidity and Transparency</h4> 
                        <p>Through the use of exchange traded products and gearing standardization TMQR EXO index has brought a level of liquidity and transparency previously unseen in the alternative investment and options space.</p> 
                        <h4 className="service-subtitle">Full Array of Risks</h4>
                        <p>Users can elect to explore open risk options positions with less leverage or closed risk options with more leverage or any combination in between.</p>
                     </div>
                </div>
            </div>
            <Footer ref="footer" style={this.state.offset ? {position: 'absolute', top: this.state.offset + 'px'} : {}}/>
            </div>
        )
    }
}