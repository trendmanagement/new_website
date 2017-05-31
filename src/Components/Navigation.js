import React, { Component } from 'react';
import { Link } from 'react-router';
import MobileNav from './MobileNav';
import './css/Nav.css';

import onClickOutside from 'react-onclickoutside';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab,
            menuOpen: false,
            hide_links:this.props.hide_links ? this.props.hide_links : false 
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
                    <Link to="/"> <div className={"nav-item " + (this.state.activeTab == 'products' ? 'active' : '')}>
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
                    <Link to="/"><div className={"nav-item " + (this.state.activeTab == 'valuesprops' ? 'active' : '')}>

                        <a> value propositions </a>

                    </div></Link>
                    <Link to="/"><div className={"nav-item " + (this.state.activeTab == 'contact' ? 'active' : '')}>

                        <a> contact us </a>

                    </div> </Link>

                </div>
            )
            right_menu = (
                <div className="nav-right login-btn-container">
                     <Link to="/login"><div className="login-btn">login</div></Link>
                </div>
            )
        }

        return (
            <div>
                <MobileNav />
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
                                <h5><Link to="/">TM<span className="qr">QR</span> exo Index</Link></h5>
                                <p><Link to="/services/indexation">Indexation Approach</Link></p>
                                <p><Link to="/services/portfolio-risk-themes">Portfolio Risk Themes</Link></p>
                                <p><Link to="/services/exo-facts">TMQR Exo Index Attributes</Link></p>
                            </div>
                            <div className="option-sub bordered nav-target">
                                <h5><Link to="/industrial-commodity-user">TM<span className="qr">QR</span> Alpha Project</Link></h5>
                                <h5><Link to="/industrial-commodity-user">TM<span className="qr">QR</span> Robo Hedger / TMQR Robo Manager</Link></h5>
                            </div>
                            <div className="option-sub nav-target">
                                <h5><Link to="/tell-about">TM<span className="qr">QR</span> Technology Serivces</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default onClickOutside(Navigation); 