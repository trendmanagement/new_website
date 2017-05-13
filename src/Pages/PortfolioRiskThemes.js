import React, { Component } from 'react'; 
import {Navigation, Footer} from '../Components';
import Slider from 'react-slick'; 
import {closed_risk_slides, open_risk_slides} from '../config'; 

export default class PortfolioRiskThemes extends Component {

    constructor() {
        super() 

        this.state = {
            closed_risk_slides: closed_risk_slides, 
            open_risk_slides: open_risk_slides, 
            active_slide: closed_risk_slides[0] 
        } 


    } 

    render () { 

        const settings_close = {
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 2,
        responsive: [{ breakpoint: 1000, settings: { slidesToShow: 7 } }, 
        {breakpoint: 600, settings: {slidesToShow: 5}}, 
        {breakpoint: 400, settings: {slidesToShow: 3}}
        ]

        };  

        const settings_open = Object.assign({}, settings_close, {slidesToScroll: 1})

        const {closed_risk_slides, open_risk_slides} = this.state; 

        return (
            <div>
                <Navigation activeTab="services" /> 
                <div className="nav-underlay"></div> 
                <div className="container-grid-block portfolio-risk-themes-container">
                    <h1 className="service-title">Portfolio Risk Themes</h1> 
                    <p className="service-subtitle-sm">The portfolio risk type defines whether the exposure to the market is open or closed</p>
                
                <div className="row closed-risk">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 closed-risk-img"></div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12">
                    <div className="service-subtitle">Fabian : Closed Risk</div>
                    <p className="service-text">
                         EXO Fabian Porfolios : named after the Roman politician and general who defeated the Carthaginian Hannibal in the second Punic war. The Fabian defensive strategy of avoiding pitched battles is reflected thematically in the EXO portfolios by excluding outright futures postions. Portfolios may include Long Puts, Long Calls, Collars, Condors, Long Ratios Spreads, Long Strangles.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 open-risk-img"></div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12">
                    <div className="service-subtitle">Molotov : Open Risk</div>
                    <p className="service-text">
                        EXO Molotov Portfolios: named after the Soviet politician and diplomat Vyacheslav Molotov whose name became synonomus with an easily manufactured but highly combustable improvised incendiary weapon used by the Finnish resistance. The Molotov strategy is reflected thematically in EXO portfolios by limiting portfolios to the most volatile EXO indicies which include a short volatility component. Short and Long Straddles, Short Puts and Call, Short Ratio spreads.
                    </p>
                    </div>
                </div>

                <div className="risk-slide-description">
                <div className="delimiter">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <div className="active-risk-slide">
                            <div className="active-slide-wrap">
                                <img src={this.state.active_slide.src} />
                            </div>
                            <h2 className="service-subtitle-bold">{this.state.active_slide.picname || this.state.active_slide.name}</h2>
                        </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                            <div className="service-subtitle risk-subtitle">{this.state.active_slide.name}</div>
                            <div className="service-subtitle risk-subtitle">Index View:</div>
                            <ul className="service-list risk-list">
                                {this.state.active_slide.index_view1.map(i => {
                                    return (<li key={Math.random() * 10000}>{i}</li>)
                                })}
                            </ul>
                            <div className="service-subtitle risk-subtitle">Index View:</div>
                            <ul className="service-list risk-list">
                                {this.state.active_slide.index_view2.map(i => {
                                    return (<li key={Math.random() * 10000}>{i}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="risk-slider-container">
                    <div className="row">
                        <div className="col-lg-12 slide-row"> 
                        <div className="service-subtitle">
                            20 Fabian Spreads (Closed Risk)
                        </div>
                        <div className="risk-slides-container first-slides"> 
                            <Slider {...settings_close}>
                                {closed_risk_slides.map(i => {
                                return <div className="risk-slide" key={Math.random() * 10000}
                                    onMouseOver={
                                        () => {
                                            this.setState({
                                                active_slide: i
                                            })
                                        }
                                    }
                                    >
                                        <img src={i.src} alt={i.name} />
                                    </div>
                                })}
                            </Slider>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-subtitle">
                            10 Molotov Spreads (Open Risk)
                        </div>
                        <div className="risk-slides-container"> 
                            <Slider {...settings_open}>
                                {open_risk_slides.map(i => {
                                return <div className="risk-slide" key={Math.random() * 10000}
                                    onMouseOver={
                                        () => {
                                            this.setState({
                                                active_slide: i
                                            })
                                        }
                                    }
                                >
                                        <img src={i.src} alt={i.name} />
                                    </div>
                                })}
                            </Slider>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}