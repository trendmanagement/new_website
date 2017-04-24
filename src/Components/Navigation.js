import React, { Component } from 'react'; 
import { Link } from 'react-router'; 
import MobileNav from './MobileNav'; 

import onClickOutside from 'react-onclickoutside';

class Navigation extends Component {  

    constructor(props) {
        super(props); 

        this.state = {
            activeTab: props.activeTab, 
            menuOpen: false
        } 

        
        this.switchTab = (tabname) => { 

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
                    <div onMouseOut={()=> {this.switchTab('home')}} onMouseOver={() => {this.switchTab('products')}} className={"nav-item " + (this.state.activeTab == 'products' ? 'active' : '' )}>
                        <a>
                            products
                        </a>
                    </div>
                    <div onMouseOut={()=> {this.switchTab('home')}} onMouseOver={() => {this.switchTab('services')}} className={"nav-item " + (this.state.activeTab == 'services' ? 'active' : '' )}>
                        <a>
                            services
                        </a>
                    </div>
                   <Link to="/"> <div className={"nav-item " + (this.state.activeTab == 'simulations' ? 'active' : '' )}>
                        <a>
                            simulations 
                        </a>
                    </div></Link>
                     <Link to="/"><div className={"nav-item " + (this.state.activeTab == 'technology' ? 'active' : '' )}>
                       
                          <a>  technology </a>
                       
                    </div></Link>
                        <Link to="/"><div className={"nav-item " + (this.state.activeTab == 'valuesprops' ? 'active' : '' )}>
                    
                           <a> value propositions </a>
                        
                    </div></Link>
                    <Link to="/"><div className={"nav-item " + (this.state.activeTab == 'contact' ? 'active' : '' )}>
                        
                           <a> contact us </a>
                        
                    </div> </Link>
                
                 </div>
                <div className="nav-right">
                    <div className="login-btn">login</div>
                </div>
                </div>
            </div> 

            <div className={"nav-options-container "+ 
            (this.state.menuOpen ? 'active' : '')}
            style={this.state.activeTab == 'products' ? {height: '75px'} : {height: '150px'}} 
            >
                <div className={"nav-option " + (this.state.activeTab == 'products' ? 'active' : '')}>
                    <div className="container-grid">
                        <div><Link to="/">I represent an industrial commodity user </Link></div>
                        <div><Link to="/">I represent a FCM or Broker Dealer</Link></div>
                        <div><Link to="/">I represent a proprietary trading group</Link></div>
                    </div>
                </div>
                <div className={"nav-option " + (this.state.activeTab == 'services' ? 'active' : '')}>
                     <div className="container-grid">
                        <div className="option-sub bordered">
                            <h5>TM<span className="qr">QR</span> exo Index</h5> 
                            <p>Indexation Approach</p>
                            <p>Portfolio Risk Themes</p>
                            <p>TMQR Exo Index Attributes</p>
                        </div>
                        <div className="option-sub bordered">
                            <h5>TM<span className="qr">QR</span> Alpha Project</h5> 
                            <h5>TM<span className="qr">QR</span> Robo Hedger / TMQR Robo Manager</h5> 
                       </div>
                        <div className="option-sub">
                            <h5>TM<span className="qr">QR</span> Technology Serivces</h5>
                        </div>
                     </div>
                </div>
            </div>
            </div>
        ) 
    }
}

export default onClickOutside(Navigation); 