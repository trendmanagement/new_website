import React, { Component } from 'react'; 
import { Link } from 'react-router'; 
import MobileNav from './MobileNav'; 

export default class Navigation extends Component {
    render () { 


        return (    
            <div>
            <MobileNav />
            <div className="nav-container">
                <div className="container-grid">
                <div className="nav-left">
                    <div className="logo-container">
                       <img src={process.env.PUBLIC_URL  + `/images/logo1.png`} />
                    </div>
                </div>
                <div className="nav-middle">
                    <div className="nav-item">
                        <Link to="/">
                            products
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            services
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            simulations 
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            technology
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            value propositions
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/">
                            contact us
                        </Link>
                    </div>
                 </div>
                <div className="nav-right">
                    <div className="login-btn">login</div>
                </div>
                </div>
            </div>
            </div>
        ) 
    }
}