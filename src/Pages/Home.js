import React, {Component} from 'react'; 
import {Link} from 'react-router'; 
import './css/Home.css'; 
import { Navigation, Disclaimer } from '../Components'; 

class Home extends Component { 

    constructor () {
        super()  

        this.state = {
            showDisclaimer: false 
        } 

        
        this.hideDisclaimer = this.hideDisclaimer.bind(this); 
    }


    hideDisclaimer() {
        this.setState({
            showDisclaimer: false 
        })
    }

    render () {
        return ( 
            <div className="home-container">    
                <Disclaimer hideDisclaimer={this.hideDisclaimer} isOpen={this.state.showDisclaimer} />
                <Navigation activeTab="home"/> 
                <div className="bg-container">
                    <div className="title-aligner full-height">
                        <div className="title-container">
                            <h1 className="main-title">Enter the World of Modern Risk Management</h1>
                            <button className="main-btn">get started</button>
                        </div>
                    </div>
                </div>
                <div className="description-container">
                    <div className="container-grid-block full-height">
                      <div className="list-aligner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 full-height">
                                <div className="list-container-home">
                                    <p>TMQR focuses on systematic implementation of trading strategies which humans create through rigorous research.</p>
                                    <p>TMQR's creative approach to problem solving emphasizes precision, deep thought and thoroughness.</p>
                                    <p>TMQR relies on the research, analysis and development of trading strategies, as well as the technology, provided by Trend Management Limited.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 full-height"> 
                                <div className="list-container-home">
                                    <p>TMQR searches for "Edge" through indepth and ongoing research. Of utmost importance is our team's ability to efficiently translate this research into actionable trading strategies.</p>
                                    <p>TMQR employs a scientific method that is aided by technology and specialized math to drive trading decisions. It is our goal to remove much of the subjectivity, arbitrariness and lack of discipline in trade selection, strategy development and assessment found in discretionary trading.</p>   
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="disclaimer">Lorem Ipsum dolor sit amet <a onClick={() => {this.setState({showDisclaimer: true})}}>Link to Disclaimer</a></div>
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
            </div>
        )
    }
} 

export default Home; 