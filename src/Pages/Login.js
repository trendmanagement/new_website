import React, {Component} from 'react';  
import {Navigation, Footer} from '../Components'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
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

    }
    render() {
        return (
            <div className="login">
                <div className="login__nav-container">
                    <Navigation />
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
                            floatingLabelStyle={styles.floatLabel}
                            floatingLabelFocusStyle={styles.floatLabelFocus}
                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                            errorText={false}
                            errorStyle={styles.errorLabel}
                            />
                            <TextField 
                            floatingLabelText="Password"
                            fullWidth={true}
                            type="email"
                            floatingLabelStyle={styles.floatLabel}
                            floatingLabelFocusStyle={styles.floatLabelFocus}
                            floatingLabelShrinkStyle={styles.floatLabelShrink}
                            errorText={false}
                            errorStyle={styles.errorLabel}
                            />
                            <p className="login-form__forgot-password">Forgot Your Password?</p>
                            <div className="login-form__btn-container">
                                <div className="login-form__btn-container_btn main-btn">
                                 LOG IN
                                </div>
                           </div>
                           <p className="login-form__signup-prompt">Don't have an account? 
                           <span className="login-form__signup-prompt__blue-label"> Sign Up</span></p>
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