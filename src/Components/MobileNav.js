import React, { Component } from 'react'; 
import { Link } from 'react-router'; 
import './css/MobileNav.css'; 

export default class MobileNav extends Component { 

    constructor() {
        super() 

        this.state = {
            isOpen: false
        } 


    } 

    render () {
        return (
            <div className="mobile-nav">
            <div className="nav-trigger" 
            onClick={(e) => {this.setState({isOpen: !this.state.isOpen})}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={"nav-overlay " + (this.state.isOpen ? 'is-open' : '')}>
                <div className="mob-nav-container">
                <div className="logo-container">
                  <Link to="/home"><img src={process.env.PUBLIC_URL  + `/images/logo1.png`} /></Link>
                </div>
                <div className="mobile-nav=main">
                   <div className="mob-nav-item">
                        <Link to="/">
                            products
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <a onClick={()=>{this.setState({showServices: true})}}>
                            services
                        </a>
    
                        <div className="nav-service-options">
                            <hr />
                            <Link to="/services/indexation">Indexation Approach</Link>
                            <Link to="/services/portfolio-risk-themes">Portfolio Risk Themes</Link>
                            <Link to="/services/exo-facts">TMQR Exo Index Attributes</Link>
                            <hr /> 
                            <Link to="/industrial-commodity-user">Alpha Project</Link>
                            <Link to="/industrial-commodity-user">Robo Hedger / TMQR Robo Manager</Link>
                            <hr />
                            <Link to="tell-about">Technology Serivces</Link>
                        </div>
                        
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/simulations">
                            simulations 
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/technology">
                            technology
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/">
                            value propositions
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/">
                            contact us
                        </Link>
                    </div>
                </div>
                <div className="login-container login-btn-container">
                  <Link to="/login"><button className="mob-login-btn">login</button></Link>
                </div>
            </div>
            </div>
            </div>
        )
    }
}