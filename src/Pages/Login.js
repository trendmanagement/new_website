import React, {Component} from 'react';  
import {Navigation, Footer} from '../Components'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField'; 
import {Link, browserHistory} from 'react-router';  
import {clientEndpoint} from '../config'; 
import request from 'request'; 
import {
    cyan700,
    grey600,
    pinkA100, pinkA200, pinkA400,
    fullWhite,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator';

const styles = {
    block: {
        maxWidth: 450,
    },
    checkbox: {
        marginBottom: 16,
    },
    errorLabel: {
        position: "absolute",
        bottom: -12
    },
    floatLabel: {
        fontWeight: "lighter", 
        color: '#7f7f7f', 
        textTransform: 'uppercase'
    },
    floatLabelShrink: { 
        color: '#000', 
        fontWeight: 'normal', 
        textTransform: 'none'
    },  
    floatLabelFocus: {
        color: '#000', 
        fontWeight: 'normal', 
    },
    mui_theme: {
        palette: {
            primary1Color: '#2979ff',
            primary2Color: cyan700,
            primary3Color: grey600,
            accent1Color: cyan700,
            accent2Color: pinkA400,
            accent3Color: pinkA100,
            textColor: '#000',
            secondaryTextColor: fade('#ccc', 0.7),
            alternateTextColor: '#303030',
            canvasColor: '#303030',
            borderColor: fade('#ccc', 0.5),
            disabledColor: fade('#ccc', 0.5),
            pickerHeaderColor: fade('#ccc', 0.12),
            clockCircleColor: fade('#ccc', 0.12),

        }
    }
};


import './css/Login.css'; 

export default class Login extends Component {
    constructor() {
        super(); 

        this.state = {
            pass: '',
            email: '', 
            emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }

        this.handleChange = (val, ref, name) => {

            if (ref.state.errorText == 'Wrong password' || 
            ref.state.errorText == 'Email not found') {
                ref.setState({
                    errorText: false
                })
            }

             let obj = {}; 
             obj[name] = val; 

            if (!val) {
                ref.setState({
                    errorText: 'Field is required'
                })
            } else {
                ref.setState({
                    errorText: false
                })
            }

            if (!this.state.emailRegex.test(val) && name == 'email') {
                ref.setState({
                    errorText: 'Wrong email format'
                })
            } else if (name == 'email') {
                ref.setState({
                    errorText: false
                })
            } 

            this.setState(obj); 
        } 

        this.submitForm = () => {

            let data = {
                pass: this.state.pass, 
                email: this.state.email
            }

            request({
                method: 'POST', 
                url: clientEndpoint + '/login', 
                json: true,
                body: data
            }, (err, res, body) => {
                console.log('LOGIN', err, res, body); 
                    if (res.statusCode == 404) {
                        console.log('login error. user not found'); 
                    } else if (res.statusCode == 400) {
                        console.log('bad request');  
 
                    } else if (res.statusCode == 200) {
                        if (body && body.error) { 

                            if (body.error == 'password') {
                                this.refs.pass.setState({
                                    errorText: 'Wrong password'
                                }); 
                            } else if (body.error == 'email') {
                                this.refs.email.setState({
                                    errorText: 'Email not found'
                                }); 
                            }

                        } else if (body) {
                            browserHistory.push('/my-exos'); 
                        } 
        
                    }
                })
        }

    }
    render() {
        return (
            <div className="login">
                <div className="login__nav-container">
                    <Navigation self={this.props.self}/>
                </div>  
                <div className="login__content">
                    <div className="login-form">
                     <MuiThemeProvider muiTheme={getMuiTheme(styles.mui_theme)}> 
                        <form name="loginForm">
                        <div className="login-form__title">Log In</div>
                            <TextField 
                            floatingLabelText="Email"
                            fullWidth={true}
                            type="email"
                            ref="email"
                            floatingLabelStyle={styles.floatLabel}
                            floatingLabelFocusStyle={styles.floatLabelFocus}
                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                            errorText={false}
                            errorStyle={styles.errorLabel}
                            onChange={(e) => {this.handleChange(e.target.value, this.refs.email, 'email')}}
                            />
                            <TextField 
                            floatingLabelText="Password"
                            fullWidth={true}
                            type="password" 
                            ref="pass"
                            floatingLabelStyle={styles.floatLabel}
                            floatingLabelFocusStyle={styles.floatLabelFocus}
                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                            errorText={false}
                            errorStyle={styles.errorLabel} 
                            onChange={(e) => {this.handleChange(e.target.value, this.refs.pass, 'pass')}}
                            />
                            <p className="login-form__forgot-password">Forgot Your Password?</p>
                            <div className="login-form__btn-container">
                                <div className="login-form__btn-container_btn main-btn" onClick={this.submitForm}>
                                 LOG In
                                </div>
                           </div>
                           <p className="login-form__signup-prompt">Don't have an account? 
                           <Link to="/signup">
                           <span className="login-form__signup-prompt__blue-label"> Sign Up</span>
                           </Link>
                           </p>
                        </form>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="login__footer">
                    <Footer />
                </div>
            </div>
        )
    }
}