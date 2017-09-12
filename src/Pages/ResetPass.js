import React, { Component } from 'react';
import { Navigation, Footer } from '../Components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, browserHistory } from 'react-router';
import { clientEndpoint } from '../config';
import request from 'request';
import {
    cyan700,
    grey600,
    pinkA100, pinkA200, pinkA400,
    fullWhite,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator';
import './css/ForgPass.css';

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



export default class ResetPass extends Component {
    constructor() {
        super();

        this.state = {
            pass1: '',
            pass2: '',
            haveExpired: false
        },
            this.handleChange = (val, ref, name) => {

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

                if (name == 'pass2' && val == '') {
                    ref.setState({
                        errorText: false
                    })
                } else if (name == 'pass2' && val !== this.state.pass1) {
                    ref.setState({
                        errorText: 'Did\'t match'
                    })
                }

                this.setState(obj);
            }
        this.submitForm = (e) => {
            e.preventDefault();
            let data = {
                password: this.state.pass1,
                hash: this.props.location.query.h
            }

            request({
                method: 'POST',
                url: clientEndpoint + '/reset',
                json: true,
                body: data
            }, (err, res, body) => {
                console.log('forgot-pass', err, res, body);
                if (res.statusCode == 404) {
                    console.log('pass request error. user not found');
                } else if (res.statusCode == 400) {
                    console.log('bad request');

                } else if (res.statusCode == 200) {
                    if (body && body.error) {

                        if (body.error == 'expired') {
                            this.refs.pass1.setState({
                                errorText: 'Token have expired'
                            });
                        }

                    } else if (body) {
                        browserHistory.push('/login');
                    }

                }
            })
        }

    }
    render() {
        return (
            <div className="forgotPassword">
                <div className="forgotPassword__nav-container">
                    <Navigation self={this.props.self} />
                </div>
                <div className="forgotPassword__content">
                    <div className="forgotPassword-form">
                        <MuiThemeProvider muiTheme={getMuiTheme(styles.mui_theme)}>
                            <form name="forgotPasswordForm" onSubmit={this.submitForm}>
                                <div className="forgotPassword-form__title">Reset your pass</div>
                                <TextField
                                    floatingLabelText="New password"
                                    fullWidth={true}
                                    type="text"
                                    ref="pass1"
                                    floatingLabelStyle={styles.floatLabel}
                                    floatingLabelFocusStyle={styles.floatLabelFocus}
                                    floatingLabelShrinkStyle={styles.floatLabelShrink}
                                    errorText={false}
                                    errorStyle={styles.errorLabel}
                                    onChange={(e) => { this.handleChange(e.target.value, this.refs.pass1, 'pass1') }}
                                />
                                <TextField
                                    floatingLabelText="Repeat new password"
                                    fullWidth={true}
                                    type="text"
                                    ref="pass2"
                                    floatingLabelStyle={styles.floatLabel}
                                    floatingLabelFocusStyle={styles.floatLabelFocus}
                                    floatingLabelShrinkStyle={styles.floatLabelShrink}
                                    errorText={false}
                                    errorStyle={styles.errorLabel}
                                    onChange={(e) => { this.handleChange(e.target.value, this.refs.pass2, 'pass2') }}
                                />
                                <div className="forgotPassword-form__btn-container">
                                    {/*<div className="forgotPassword-form__btn-container_btn main-btn" onClick={this.submitForm}>
                                 Send me password
                                </div>*/}
                                    <RaisedButton onClick={this.submitForm} label="Reset my pass" fullWidth={true} primary={true} />
                                </div>
                                <p className="forgotPassword-form__signup-prompt">Don't have an account?
                                    <Link to="/signup">
                                        <span className="forgotPassword-form__signup-prompt__blue-label"> Sign Up</span>
                                    </Link>
                                </p>
                            </form>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="forgotPassword__footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
