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
                  <img src={process.env.PUBLIC_URL  + `/images/logo1.png`} />
                </div>
                <div className="mobile-nav=main">
                   <div className="mob-nav-item">
                        <Link to="/">
                            products
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/">
                            services
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/">
                            simulations 
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/">
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
                <div className="login-container">
                  <button className="mob-login-btn">login</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}