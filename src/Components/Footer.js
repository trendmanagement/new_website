import React, { Component } from 'react';   
import Disclaimer from './Disclaimer'; 
import './css/Footer.css'; 

export default class Footer extends Component {
    render() {
        return (
                <div className="footer" ref="footerContainer" style={this.props.style}>
                    <div className="who-we-are">
                        <div className="container-grid"> 
                            <div className="who-title">
                                Who we are?
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