import React, { Component } from 'react'; 
import { Link, browserHistory } from 'react-router'; 
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
                <div className="logo-container-mobile">
                  <Link to="/home"><img src={process.env.PUBLIC_URL  + `/images/logo1.png`} /></Link>
                </div>
                <div className="mobile-nav=main">
                   <div className="mob-nav-item">
                        <Link to="/industrial-commodity-user">
                            products
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <a onClick={()=>{this.setState({showServices: true})}}>
                            services
                        </a>
    
                        <div className="nav-service-options">
                            <hr />
                            <Link to="/services/exo-facts">TMQR Exo Index Facts / Attributes</Link>
                            <Link to="/services/indexation">Indexation Approach</Link>
                            <Link to="/services/portfolio-risk-themes">Portfolio Risk Themes</Link>
        
                            <hr /> 
                            <a onClick={() => {
                                this.setState({
                                    isOpen: false
                                }, () => {
                                    browserHistory.push('/alpha-project'); 
                                })
                            }}>Alpha Project</a>
                            <a onClick={() => {
                                this.setState({
                                    isOpen: false
                                }, () => {
                                    browserHistory.push('/robo-hedger');      
                                })
                            }}>Robo Hedger / TMQR Robo Manager</a>
                            <hr />
                            <a onClick={() => {
                                this.setState({
                                    isOpen: false
                                }, () => {
                                    browserHistory.push('/tech-services'); 
                                })
                            }}>Technology Services</a>
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
                        <Link to="/value-propositions">
                            value propositions
                        </Link>
                    </div>
                    <div className="mob-nav-item">
                        <Link to="/tell-about">
                            contact us
                        </Link>
                    </div>
                    {this.props.auth ? 
                    <div className="mob-nav-item">
                        <Link to="/my-exos">
                            my exo<span style={{textTransform: 'lowercase'}}>s</span>
                        </Link>
                    </div>    
                    : null}
                </div>
                <div className="login-container login-btn-container">
                {this.props.auth ? <Link to="/logout" onClick={this.props.logout}><button className="mob-login-btn">log out</button></Link>
                : <Link to="/login"><button className="mob-login-btn">log in</button></Link>}
                </div>
            </div>
            </div>
            </div>
        )
    }
}