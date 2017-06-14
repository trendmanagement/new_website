import React, { Component } from 'react';
import { Navigation, Footer } from '../Components'
import './css/TellAbout.css' 
import swal from 'sweetalert2'; 
import request from 'request'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'; 
import {browserHistory} from 'react-router';  
import {clientEndpoint} from '../config'; 
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
        formData: {
            workEmail: '', 
            firstName: '', 
            lastName: '',  
            companyName: '', 
            pass: '', 
            passConfirm: '', 
            comeFromVal: null, 
            employVal: null, 
            phone: '', 
            detail: '', 
            want_info: true
        }, 

        btnDisabled: true, 
        errorTrigger: false,
        emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        wordRegex: /[a-zA-Z]+/,
        numberRegex: /((\+)|(00[ ]?))(([\d][-. ]{0,1}){1}([-. ]{0,1}\(\d+\)[-. ]{0,1}){0,1}){7,30}/
    }; 

    invalid = false;

    employselectChange = (event, index, employVal) => {

        this.setState({formData: Object.assign({}, this.state.formData, { employVal: employVal })}, () => {
            console.log(this.state)
        })
    };
    comeFromselectChange = (event, index, comeFromVal) => {
         this.setState({formData: Object.assign({}, this.state.formData, { comeFromVal: comeFromVal })}, () => {
            console.log(this.state)
        })
    };

    submitForm = (e) => { 
        e.preventDefault(); 

        let formData = this.state.formData; 
        request({
            method: 'POST', 
            url: clientEndpoint + '/signup', 
            json: true,
            body: formData
        }, (err, res, body) => {
            console.log('SIGNUP', err, res, body); 
            if (res.statusCode == 422) {
                console.log('signup error. user already exists'); 
                swal({
                    title: 'Error!',
                    text: 'User with this name already exists',
                    type: 'error',
                    confirmButtonText: 'Close'
                })
            } else if (res.statusCode == 400) { 
                swal({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    type: 'error',
                    confirmButtonText: 'Close'
                })
                console.log('bad request'); 
            } else if (res.statusCode == 200) { 
                console.log('success')
                swal({
                    title: 'Success!',
                    text: 'Signup successful',
                    type: 'success',
                    confirmButtonText: 'OK', 
                    onClose: () => browserHistory.push('/my-exos')
                }); 
            }
        })
    } 

    manageBtnState = (disabled) => {
    
       this.setState({
           btnDisabled: disabled
       })
        
    }

    onFlyValidation = (event, newVal, fieldName) => {

      

        if (event.target.type === "email") {
            if (!this.state.emailRegex.test(newVal)) { 
                this.refs[fieldName].setState({ errorText: '! Incorrect email address' }) 

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

        if (fieldName == 'pass') {
            if (newVal.length < 8) {

                this.refs[fieldName].setState({ errorText: '! Password must be at least 8 characters long'})

            } else {
                this.refs[fieldName].setState({ errorText: false}); 

            }
        } 

        if (fieldName == 'passConfirm') {
            if (newVal != this.state.formData.pass) {

                this.refs[fieldName].setState({ errorText: '! Passwords don\'t match' }); 
            } else {
                this.refs[fieldName].setState({ errorText: false }); 
            }
        }
        if (!newVal && fieldName != 'companyName' && fieldName != 'detail') {

            this.refs[fieldName].setState({ errorText: '! This field is required' })
        }  

        let formData = Object.assign({}, this.state.formData); 
        formData[fieldName] = newVal;

        this.setState({formData: formData}, () => {
            let formData = this.state.formData; 
                
            let keys = Object.keys(formData); 
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] != 'companyName' && keys[i] != 'detail' && keys[i] != 'want_info') {
                    
                    if (!this.state.formData[keys[i]]) {
                        this.manageBtnState(true); return; 
                    } 
                }
            }

            this.manageBtnState(false)
        });  

        
    }

    render() {
        return (
            <div className="tellabout-container">
                <Navigation activeTab="tecnology" self={this.props.self}/>
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
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 desktop-only">
                                    <TextField
                                        floatingLabelText="Company name" 
                                        ref="companyName"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'companyName')}
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
                                
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mob-only">
                                    <TextField
                                        floatingLabelText="Company name" 
                                        ref="companyName"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'companyName')}
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
                                        value={this.state.formData.employVal}
                                        fullWidth={true} 
                                        onChange={this.employselectChange}
                                    >
                                        <MenuItem value={null} primaryText="" />
                                        <MenuItem value={"Under 20"} primaryText="Under 20" />
                                        <MenuItem value={"20 - 100"} primaryText="20 - 100" />
                                        <MenuItem value={"100 - 500"} primaryText="100 - 500" />
                                        <MenuItem value={"500 - 2000"} primaryText="500 - 2000" />
                                        <MenuItem value={"Over 2000"} primaryText="Over 2000" />
                                    </SelectField>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        hintText="+12(34)56-78-912"
                                        floatingLabelText="Phone number"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        type="tel"
                                        ref="phone"
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'phone')}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <SelectField
                                        floatingLabelText="How did you hear about us?"
                                        floatingLabelStyle={styles.floatLabel}
                                        value={this.state.formData.comeFromVal}
                                        onChange={this.comeFromselectChange}
                                        fullWidth={true}
                                    >
                                        <MenuItem value={null} primaryText="" />
                                        <MenuItem value={"Banner Ad"} primaryText="Banner Ad" />
                                        <MenuItem value={"Search"} primaryText="Search" />
                                        <MenuItem value={"Social Media"} primaryText="Social Media" />
                                        <MenuItem value={"Podcasts"} primaryText="Podcasts" />
                                        <MenuItem value={"TV"} primaryText="TV" />
                                        <MenuItem value={"Online Publication"} primaryText="Online Publication" />
                                        <MenuItem value={"Current Betterment Customer"} primaryText="Current Betterment Customer" />
                                        <MenuItem value={"Betterment Employee"} primaryText="Betterment Employee" />
                                        <MenuItem value={"Friend/Word of Mouth"} primaryText="Friend/Word of Mouth" />
                                        <MenuItem value={"Other"} primaryText="Other" />
                                    </SelectField>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField 
                                        ref="detail" 
                                        type="text"
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'detail')}
                                        floatingLabelText="Anything Else we should know?"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                    />
                                </div>
                            </div> 
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        floatingLabelText="Password"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        type="password"
                                        ref="pass"
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'pass')}
                                    /> 
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <TextField
                                        floatingLabelText="Confirm Password"
                                        floatingLabelStyle={styles.floatLabel}
                                        fullWidth={true}
                                        type="password"
                                        ref="passConfirm"
                                        errorText={false}
                                        errorStyle={styles.errorLabel}
                                        onChange={(event, index) => this.onFlyValidation(event, index, 'passConfirm')}
                                    /> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={styles.block}>
                                    <Checkbox
                                    defaultChecked={true}
                                    onClick={() => {
                                 
                                        this.setState({formData: Object.assign({}, 
                                                    this.state.formData, 
                                                    {want_info: !this.state.formData.want_info})
                                            })
                                        }
                                    }
                                    label="Yes, I want to have bonus information on my email"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                                <div className="tellForm__submit-container">
                                <button className="tellForm__submit-btn" 
                                disabled={this.state.btnDisabled}
                                onClick={this.submitForm}>
                                find out more
                                </button>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </MuiThemeProvider>
                <Footer ref="footer" />
            </div>
        )
    }
}