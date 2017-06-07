import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MobileNav from './MobileNav';
import './css/Nav.css'; 
import request from 'request'; 
import {clientEndpoint} from '../config'; 

import onClickOutside from 'react-onclickoutside';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab, 
            isAuth: false, 
            menuOpen: false,
            hide_links:this.props.hide_links ? this.props.hide_links : false 
        }

        this.getAuthState = () => { 
            
            return new Promise((resolve, reject) => {

                request({
                    method: 'GET', 
                    uri: clientEndpoint + '/check-auth'
                }, (err, res, body) => {
                    if (err) reject(false); 
                    if (res.statusCode != 200) reject(false); 
                    
                    body = JSON.parse(body); 
                    let uid = body.uid; 
                    resolve(uid); 

                })
            })

        }

        this.switchTab = (tabname, e) => {

            if (typeof e != 'undefined') {

                if (!e.nativeEvent.relatedTarget) {
                    return false;
                }
                else if (e.nativeEvent.relatedTarget.classList.contains('nav-target') ||
                    e.nativeEvent.relatedTarget.parentNode.classList.contains('nav-target') ||
                    e.nativeEvent.relatedTarget.parentNode.parentNode.classList.contains('nav-target') ||
                    e.nativeEvent.relatedTarget.parentNode.parentNode.parentNode.classList.contains('nav-target')) {
                    return false;
                }
            }

            let menuOpen = false;

            if (tabname == 'products' || tabname == 'services') {
                menuOpen = true;
            }

            this.setState({
                activeTab: tabname,
                menuOpen: menuOpen
            })
        }

        this.handleClickOutside = evt => {
            this.setState({
                activeTab: this.props.activeTab,
                menuOpen: false
            })
        } 

        this.logout = () => {
            var host = location.protocol + '//' + location.hostname + (
                    location.port ? ':' + location.port : ''); 

            request({
                method: 'GET', 
                uri: host + '/logout'
            }, (err, res, body) => {
                if (err || res.statusCode != 200) {
                    return false; 
                } else {
                    if (window.location.pathname == '/' || 
                    window.location.pathname == '/home') {
                        window.location.reload(); 
                    } else {
                        this.props.self.isAuth = false; 
                        this.setState({
                            isAuth: false
                        }, () => {
                            browserHistory.push('/home'); 
                        })
                       
                    }
                }
            })
        } 

        this.logout = this.logout.bind(this); 

    } 

    componentWillMount() { 
        if (typeof this.props.self != 'undefined' && !this.props.self.isAuth) {
        this.getAuthState()
        .then(uid => { 
            console.log('uid', uid); 

            if (uid) {
                this.props.self.isAuth = true; 
                this.setState({isAuth: true}); 
            } else {
                this.props.self.isAuth = false;
                this.setState({isAuth: false}); 
            }

        })
        .catch(err => {
            console.log(err); 
            this.props.self.isAuth = false;
        })
        }
    }

    render() {

        let logo_src = (window.location.pathname == '/about-us' || window.location.pathname == '/' || window.location.pathname == '/home') ?
            (process.env.PUBLIC_URL + `/images/logo1.png`) : (process.env.PUBLIC_URL + `/images/logo2.png`)
        let mid_menu, right_menu;

        if (this.state.hide_links) {
            
        } else {
            mid_menu = (
                <div className="nav-middle">
                    {/*<div onMouseOut={(e) => { this.switchTab('home', e) } } onMouseOver={() => { this.switchTab('products') } } className={"nav-item nav-target " + (this.state.activeTab == 'products' ? 'active' : '')}>
                                <a>
                                    products
                                </a>
                            </div>*/}
                    <div onMouseOut={(e) => { this.switchTab('home', e) }} onMouseOver={() => { this.switchTab('services') }} className={"nav-item nav-target " + (this.state.activeTab == 'services' ? 'active' : '')}>
                        <a>
                            services
                                </a>

                    </div>
                    <Link to="/industrial-commodity-user"> <div className={"nav-item " + (this.state.activeTab == 'products' ? 'active' : '')}>
                        <a>
                            products
                            </a>
                    </div></Link>
                    {/*<Link to="/"><div className={"nav-item " + (this.state.activeTab == 'services' ? 'active' : '')}>

                                <a> services </a>

                            </div></Link>*/}

                    <Link to="/simulations"> <div className={"nav-item " + (this.state.activeTab == 'simulations' ? 'active' : '')}>
                        <a>
                            simulations
                            </a>
                    </div></Link>
                    <Link to="/technology"><div className={"nav-item " + (this.state.activeTab == 'technology' ? 'active' : '')}>

                        <a>  technology </a>

                    </div></Link>
                    <Link to="/value-propositions"><div className={"nav-item " + (this.state.activeTab == 'valuesprops' ? 'active' : '')}>

                        <a> value propositions </a>

                    </div></Link>
                    <Link to="/tell-about"><div className={"nav-item " + (this.state.activeTab == 'contact' ? 'active' : '')}>

                        <a> contact us </a>

                    </div> </Link> 
                      {this.state.isAuth || this.props.self.isAuth ?  
                    <Link to="/my-exos"><div className={"nav-item " + (this.state.activeTab == 'contact' ? 'active' : '')}>

                        <a> my exo<span style={{textTransform: 'lowercase'}}>s</span></a>

                      </div> </Link> : null}
                </div>
            )
            right_menu = (
                <div className="nav-right login-btn-container">
                     {this.state.isAuth || this.props.self.isAuth ?  
                        <div onClick={this.logout} className="login-btn">log out</div>
                     :<Link to="/login"><div className="login-btn">login</div></Link>}
                </div>
            )
        }

        return (
            <div>
                <MobileNav auth={this.props.self.isAuth} logout={this.logout}/>
                <div className="nav-container">
                    <div className="container-grid">
                        <div className="nav-left">
                            <Link to="/home"><div className="logo-container">
                                <img src={logo_src} />
                            </div></Link>
                        </div>
                        {mid_menu}
                        {right_menu}
                    </div>
                </div>

                <div className={"nav-options-container nav-target " +
                    (this.state.menuOpen ? 'active' : '')}
                    style={this.state.activeTab == 'products' ? { height: '75px' } : { height: '150px' }}
                >
                    <div className={"nav-option nav-target " + (this.state.activeTab == 'products' ? 'active' : '')}>
                        <div onMouseOut={(e) => { this.switchTab('home', e) }} className="container-grid nav-target">
                            <div><Link to="/">I represent an industrial commodity user </Link></div>
                            <div><Link to="/">I represent a FCM or Broker Dealer</Link></div>
                            <div><Link to="/">I represent a proprietary trading group</Link></div>
                        </div>
                    </div>
                    <div className={"nav-option  nav-target " + (this.state.activeTab == 'services' ? 'active' : '')}>
                        <div className="container-grid nav-target ">
                            <div className="option-sub bordered nav-target">
                                <h5>TM<span className="qr">QR</span> exo Index</h5>
                                <p><Link to="/services/exo-facts">TMQR Exo Index Facts / Attributes</Link></p>
                                <p><Link to="/services/indexation">Indexation Approach</Link></p>
                                <p><Link to="/services/portfolio-risk-themes">Portfolio Risk Themes</Link></p> 
                            </div>
                            <div className="option-sub bordered nav-target">
                                <h5><Link to="/alpha-project">TM<span className="qr">QR</span> Alpha Project</Link></h5>
                                <h5><Link to="/robo-hedger">TM<span className="qr">QR</span> Robo Hedger / TMQR Robo Manager</Link></h5>
                            </div>
                            <div className="option-sub nav-target">
                                <h5><Link to="/tech-services">TM<span className="qr">QR</span> Technology Services</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default onClickOutside(Navigation); 