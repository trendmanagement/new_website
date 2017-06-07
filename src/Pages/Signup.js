import React, { Component } from 'react';
import { Navigation, Footer } from '../Components';
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


import './css/Signup.css';

export default class Signup extends Component {
    constructor() {
        super();

        this.state = {
            pass: '',
            email: '',
            pass2: '', 
            emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }



        this.submitForm = () => {

            let data = {
                pass: this.state.pass, 
                email: this.state.email
            }


            request({
                method: 'POST', 
                url: clientEndpoint + '/signup', 
                json: true,
                body: data
            }, (err, res, body) => {
                console.log('SIGNUP', err, res, body); 
                if (res.statusCode == 422) {
                    console.log('signup error. user already exists'); 
                } else if (res.statusCode == 400) {
                    console.log('bad request'); 
                } else if (res.statusCode == 200) { 

                    browserHistory.push('/my-exos'); 
                //  console.log('token', body.token); 
                //   localStorage.setItem('tmqrexo:user', body.token); 
                //   browserHistory.push('/my-exos'); 
                }
            })
        }

        this.handleChange = (val, ref, name) => {


            let obj = {}
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

            this.setState(obj, () => {
                if (name == 'pass2') {
                    if (this.state.pass != this.state.pass2) {
                        ref.setState({
                            errorText: 'Passwords don\'t match'
                        })
                    } else {
                        ref.setState({
                            errorText: false
                        })
                    }
                }
            });

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
                            <div className="login-form__title">Sign Up</div>
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
                            <TextField
                                floatingLabelText="Confirm password"
                                fullWidth={true}
                                type="password"
                                ref="pass2"
                                floatingLabelStyle={styles.floatLabel}
                                floatingLabelFocusStyle={styles.floatLabelFocus}
                                floatingLabelShrinkStyle={styles.floatLabelShrink}
                                errorText={false}
                                errorStyle={styles.errorLabel}
                                onChange={(e) => {this.handleChange(e.target.value, this.refs.pass2, 'pass2')}}
                                />
                            <div className="login-form__btn-container">
                                <div className="login-form__btn-container_btn main-btn" style={{width: 112}}
                                onClick={this.submitForm}>
                                    SIGN UP
                                </div>
                            </div>
                            <p className="login-form__signup-prompt">Already have an account?
                           <Link to="/login"><span className="login-form__signup-prompt__blue-label"> Log In</span></Link></p>
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