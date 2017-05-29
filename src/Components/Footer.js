import React, { Component } from 'react';
import Disclaimer from './Disclaimer'; 
import './css/Footer.css';
import { Link } from 'react-router';

export default class Footer extends Component {

    constructor() {
        super()

        this.state = {
            showDisclaimer: false,
            disclaimerShown: false, 
            hideDisclaimer: false
        }

        this.hideDisclaimer = this.hideDisclaimer.bind(this);
    }


    hideDisclaimer() {
        this.setState({
            showDisclaimer: false
        })
    } 

    componentDidMount() {
        console.log(this)
        if (window.location.pathname == '/' || 
        window.location.pathname == '/home') {
            if (!localStorage.getItem('disclaimer_shown')) {
                this.setState({
                    showDisclaimer: true,
                    disclaimerShown: true
                }) 

                localStorage.setItem('disclaimer_shown', '1'); 
            } 
        } else {
            this.setState({
                hideDisclaimer: true 
            })
        }
    }

    render() {
        return (
            <div className="footer" style={this.props.style}  ref="footerContainer">
            <Disclaimer hideDisclaimer={this.hideDisclaimer} isOpen={this.state.showDisclaimer} />
               { this.state.hideDisclaimer ? null : <div className="disclaimer">
                    <a onClick={() => { this.setState({ showDisclaimer: true, disclaimerShown: true }) } }>
                        Link to Terms of Use
                        </a>
               </div>} 

                <div className="who-we-are">
                    <div className="container-grid">
                        <div className="who-title">
                            <Link to="/about-us">
                                Who we are? 
                            </Link>
                            </div>
                        <div className="who-detail">
                            <div><i className="fa fa-phone" aria-hidden="true"></i>&nbsp; 604-984-7244 </div>
                            <div><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp; abcd@gmail.com</div>
                        </div>
                    </div>
                    <div className="container-grid-block">
                        <p>
                            It is not possible to invest directly in an index. Trend Management Limited does not sponsor, endorse, sell, or promote any investment fund or other investment vehicle that is offered by third parties or that seeks to provide an investment return based on the performance of any index. This document does not constitute an offer of services in jurisdictions where Trend Management Limited does not have the necessary licenses. Trend Management Limited receives compensation in connection with licensing its indices to third parties.
                            </p>
                        <p>
                            These materials have been prepared solely for informational purposes based upon information generally available to the public from sources believed to be reliable. No content contained in these materials (including index data, model, software or other application or output therefrom) or any part thereof (Content) may be modified, reverse-engineered, reproduced or distributed in any form by any means, or stored in a database or retrieval system, without the prior written permission of Trend Management Limited. The Content shall not be used for any unlawful or unauthorized purposes.
                            </p>
                    </div>
                    <div className="container-grid-block">
                        <div className="copyright">
                            © 2017 - TMQR EXO INDEX
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

