import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/Home.css';
import { Navigation, Footer } from '../Components';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            activeSlide: 0,
            slides: [
                `preload1`,
                `preload2`,
                `preload3`,
                `preload4`,
                `preload5`,
                `preload6`,
                `preload7`
            ],
            manualControl: false, 
            interval: null
        }

        this.initSlider = this.initSlider.bind(this);
        this.setManual = this.setManual.bind(this); 
        this.slideFunc = this.slideFunc.bind(this); 
    }

    componentDidMount() {
        
        this.initSlider(); 

    }

    changeSlide(i) {

        if (i == 6) i = 0;
        else {
            i = ++i;
        }

        return i;
    }

    slideFunc() {
      
         if (!this.state.manualControl) {

            let next = this.changeSlide(this.state.activeSlide); 

            this.setState({
                activeSlide: next
            })

        } else {
            this.setState({
                manualControl: false
            })
        }
    }

    initSlider() {

        let self = this;
        let interval = setInterval(this.slideFunc, 7000); 

        this.setState({
            interval: interval
        })
    }

    setManual() {
        this.setState({
            manualControl: true
        });
    }



    componentWillUnmount() {
        if (this.state.interval) {
            clearInterval(this.state.interval);    
        }
        
    }

    render() {
        return (
            <div className="home-container">
            <div className="preload-container">
                <div id="preload1"></div>
                <div id="preload2"></div>
                <div id="preload3"></div>
                <div id="preload4"></div>
                <div id="preload5"></div>
                <div id="preload6"></div>
                <div id="preload7"></div>
            </div>
                <Navigation activeTab="home" />
                <div className="bg-container" id={this.state.slides[this.state.activeSlide]}>
                    <div className="title-aligner full-height">
                        <div className="title-container">
                        <h1 className={"main-title " + (this.state.activeSlide == 0 ? 'active' : 'fadeout')}><span>Enter the World of<br/>Modern Risk Management</span></h1>
                        <h1 className={"main-title-small " + (this.state.activeSlide == 1 ? 'active' : 'fadeout')}><span>We are changing the way <br /> food and beverage industry <br /> thinks about risk management.</span></h1>
                        <h1 className={"main-title-small " + (this.state.activeSlide == 2 ? 'active' : 'fadeout')}><span>We are changing the way <br /> transportation industry <br /> thinks about risk management.</span></h1>
                        <h1 className={"main-title-small " + (this.state.activeSlide == 3 ? 'active' : 'fadeout')}><span>We are changing the way <br /> family offices <br /> think about risk management.</span></h1>
                        <h1 className={"main-title-small " + (this.state.activeSlide == 4 ? 'active' : 'fadeout')}><span>We are changing the way <br /> CTAs <br /> think about risk management.</span></h1>
                        <h1 className={"main-title-small " + (this.state.activeSlide == 5 ? 'active' : 'fadeout')}><span>We are changing the way <br /> FCMs <br /> think about risk management.</span></h1>
                        <h1 className={"main-title-small " + (this.state.activeSlide == 6 ? 'active' : 'fadeout')}><span>We are changing the way <br /> proprietary trading groups <br /> think about risk management.</span></h1>
                            <button className="main-btn">get started</button>
                        </div>
                        <div className="slider-controls-wrap">
                            <div className="slider-controls">
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 0 }) } } className={this.state.activeSlide == 0 ? 'active' : ''}></div>
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 1 }) } } className={this.state.activeSlide == 1 ? 'active' : ''}></div>
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 2 }) } } className={this.state.activeSlide == 2 ? 'active' : ''}></div>
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 3 }) } } className={this.state.activeSlide == 3 ? 'active' : ''}></div>
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 4 }) } } className={this.state.activeSlide == 4 ? 'active' : ''}></div>
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 5 }) } } className={this.state.activeSlide == 5 ? 'active' : ''}></div>
                                <div onClick={() => { this.setManual(); this.setState({ activeSlide: 6 }) } } className={this.state.activeSlide == 6 ? 'active' : ''}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-container">
                    <div className="container-grid-block full-height">
                        <div className="list-aligner">
                            <div className="row flexed-row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12  full-height">
                                    <div className="list__item-wrapper">
                                        <div className="list__itemImage-wrapper">
                                            <div  className="list__itemImage-img" id="image-content-1"/>
                                        </div>
                                        <div className="list_itemText-font">
                                            TMQR focuses on systematic implementation of trading strategies which humans create through rigorous research.                                  
                                        </div>
                                    </div>
                                    <div className="list__item-wrapper">
                                        <div className="list__itemImage-wrapper">
                                            <div  className="list__itemImage-img" id="image-content-2"/>
                                        </div>
                                        <div className="list_itemText-font">
                                            TMQR relies on the research, analysis and development of trading strategies, as well as the technology, provided by Trend Management Limited.                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 single-col full-height">
                                   <div className="list__item-wrapper">
                                        <div className="list__itemImage-wrapper">
                                            <div  className="list__itemImage-img" id="image-content-3"/>
                                        </div>
                                        <div className="list_itemText-font">
                                            TMQR employs a scientific method that is aided by technology and specialized math to drive trading decisions. It is our goal to remove much of the subjectivity, arbitrariness and lack of discipline in trade selection, strategy development and assessment found in discretionary trading.                                        
                                        </div>
                                    </div>                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 full-height">
                                   <div className="list__item-wrapper">
                                        <div className="list__itemImage-wrapper">
                                            <div  className="list__itemImage-img" id="image-content-4"/>
                                        </div>
                                        <div className="list_itemText-font">
                                            TMQR searches for "Edge" through indepth and ongoing research. Of utmost importance is our team's ability to efficiently translate this research into actionable trading strategies.                                      
                                        </div>
                                    </div>
                                    <div className="list__item-wrapper">
                                        <div className="list__itemImage-wrapper">
                                            <div  className="list__itemImage-img" id="image-content-5"/>
                                        </div>
                                        <div className="list_itemText-font">
                                            TMQR's creative approach to problem solving emphasizes precision, deep thought and thoroughness.                                   
                                        </div>
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-container foo-home">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home; 