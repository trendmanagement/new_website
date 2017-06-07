import React, { Component } from 'react';
import { Navigation, Footer } from '../Components';
import './css/About.css'
export default class About extends Component {

    render() {
        return (
            <div className="about-container ">
                <Navigation activeTab="technology" self={this.props.self}/>
                <div className="about__hero-img"></div>
                <div className="container-grid-block about-offset">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="about__heading-title">About Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p className="about__content-paragraph">TMQR has developed a team of experienced financial markets professionals with extensive experience in quantitative risk management, execution, automated trading, reporting, model development, implementation and deployment in global exchange traded derivatives markets.</p>
                            <p className="about__content-paragraph">Mr. Nikolas Joyce, head of research and trading, has  twenty years  experience trading financial markets and has worked as an associated person, registered investment advisor and Portfolio Manager for firms in both the futures and securities industry.</p>
                            <p className="about__content-paragraph">Nikolas joined Trend Management Limited (TML) in January 1996 as a registered Securities Advisor. In 2001 he became a principal of Trend Management Limited and was further registered as a Portfolio Manager.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <p className="about__content-paragraph">During this period he co-managed funds in excess of $350,000,000.  In 2007 Mr. Joyce became a NFA member registered with the CFTC as a principal and  registered CTA in commodity futures.<br/>Mr. Joyce holds a degree in Finance from the University of British Columbia - School of Commerce. As well as being a principal Nikolas Joyce is a director of Trend Management Limited.</p>
                            <p className="about__content-paragraph">Trend Management Limited (TML) was incorporated in 1969 to conduct business as investment managers. The firm was registered under the Securities Act of British Columbia on July 24, 1969. Since its establishment Trend Management Limited has developed quantitative trading models for risk management and asset management applications.</p>                            
                        </div>
                    </div>
                </div>
                <Footer ref="footer" />
            </div>
        )
    }
}
