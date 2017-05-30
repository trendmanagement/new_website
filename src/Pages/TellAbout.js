import React, { Component } from 'react';
import { Navigation, Footer } from '../Components'
import './css/TellAbout.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {
    cyan700,
    grey600,
    pinkA100, pinkA200, pinkA400,
    fullWhite,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
        fontWeight: "lighter"
    },
    mui_theme: {
        palette: {
            primary1Color: cyan700,
            primary2Color: cyan700,
            primary3Color: grey600,
            accent1Color: cyan700,
            accent2Color: pinkA400,
            accent3Color: pinkA100,
            textColor: fullWhite,
            secondaryTextColor: fade(fullWhite, 0.7),
            alternateTextColor: '#303030',
            canvasColor: '#303030',
            borderColor: fade(fullWhite, 0.5),
            disabledColor: fade(fullWhite, 0.5),
            pickerHeaderColor: fade(fullWhite, 0.12),
            clockCircleColor: fade(fullWhite, 0.12),

        }
    }
};

export default class TellAbout extends Component {

    state = {
        employVal: null,
        comeFromVal: null,
        errorTrigger: false,
        emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        wordRegex: /[a-zA-Z]+/,
        numberRegex: /((\+)|(00[ ]?))(([\d][-. ]{0,1}){1}([-. ]{0,1}\(\d+\)[-. ]{0,1}){0,1}){7,30}/
    };

    employselectChange = (event, index, employVal) => this.setState({ employVal });
    comeFromselectChange = (event, index, comeFromVal) => this.setState({ comeFromVal });

    onFlyValidation = (event, newVal, fieldName) => {
        if (event.target.type === "email") {
            if (!this.state.emailRegex.test(newVal)) {
                this.refs[fieldName].setState({ errorText: '! Incorrect emai address' })
            } else {
                this.refs[fieldName].setState({ errorText: false })
            }
        }
        if (event.target.type === "text") {
            if (!this.state.wordRegex.test(newVal)) {
                this.refs[fieldName].setState({ errorText: '! Only characters allowed' })
            } else {
                this.refs[fieldName].setState({ errorText: false })
            }
        }
        if (event.target.type === "tel") {
            if (!this.state.numberRegex.test(newVal)) {
                this.refs[fieldName].setState({ errorText: '! Incorrect telephone number. Watch text hint' })
            } else {
                this.refs[fieldName].setState({ errorText: false })
            }
        }
        if (!newVal) {
            this.refs[fieldName].setState({ errorText: '! This field is required' })
        }
    }

    render() {
        return (
            <div className="tellabout-container">
                <Navigation activeTab="tecnology" />
                <MuiThemeProvider muiTheme={getMuiTheme(styles.mui_theme)}>
                    <div className="tellabout__form-wrapper">
                        <form className="tellabout__form-container container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <legend>Tell Us About Yourself</legend>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        ref="firstName"
                                        floatingLabelText="Fist Name*"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        type="text"
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'firstName')}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        floatingLabelText="Company name"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        ref="lastName"
                                        floatingLabelText="Last Name*"
                                        floatingLabelStyle={styles.floatLabel}
                                        type="text"
                                        fullWidth={true}
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'lastName')}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        floatingLabelText="Work email address*"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        type="email"
                                        ref="workEmail"
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'workEmail')}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <SelectField
                                        floatingLabelText="How many employees do you have?"
                                        floatingLabelStyle={styles.floatLabel}
                                        value={this.state.employVal}
                                        fullWidth={true}
                                    >
                                        <MenuItem value={null} primaryText="" />
                                        <MenuItem value={1} primaryText="Under 20" />
                                        <MenuItem value={2} primaryText="20 - 100" />
                                        <MenuItem value={3} primaryText="100 - 500" />
                                        <MenuItem value={4} primaryText="500 - 2000" />
                                        <MenuItem value={5} primaryText="Over 2000" />
                                    </SelectField>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        hintText="+12(34)56-78-912"
                                        floatingLabelText="Phone number"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        type="tel"
                                        ref="Phone"
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'Phone')}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <SelectField
                                        floatingLabelText="How did you hear about us?"
                                        floatingLabelStyle={styles.floatLabel}
                                        value={this.state.comeFromVal}
                                        onChange={this.comeFromselectChange}
                                        fullWidth={true}
                                    >
                                        <MenuItem value={null} primaryText="" />
                                        <MenuItem value={1} primaryText="Banner Ad" />
                                        <MenuItem value={2} primaryText="Search" />
                                        <MenuItem value={3} primaryText="Social Media" />
                                        <MenuItem value={4} primaryText="Podcasts" />
                                        <MenuItem value={5} primaryText="TV" />
                                        <MenuItem value={6} primaryText="Online Publication" />
                                        <MenuItem value={7} primaryText="Current Betterment Customer" />
                                        <MenuItem value={8} primaryText="Betterment Employee" />
                                        <MenuItem value={9} primaryText="Friend/Word of Mouth" />
                                        <MenuItem value={10} primaryText="Other" />
                                    </SelectField>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        floatingLabelText="Anything Else we should know?"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={styles.block}>
                                    <Checkbox
                                        label="Yes, I want to have bouns information on my email"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="submit" className="tellForm__submit-btn" value="find out more" /></div>
                            </div>
                        </form>
                    </div>
                </MuiThemeProvider>
                <Footer ref="footer" />
            </div>
        )
    }
}