import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navigation, Footer } from '../Components'

import Form from 'muicss/lib/react/form';
import Checkbox from 'muicss/lib/react/checkbox';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import 'muicss/dist/css/mui.min.css';
import './css/TellAbout.css';


export default class TellAbout extends Component {

    render() {
        return (
            <div className="tellabout-container">
                <Navigation activeTab="tecnology" />
                <div className="tellabout-wrapper">
                    <Form className="mui-container about__form-wrapper">
                        <legend>Tell Us About Yourself</legend>
                        <div className="mui-row">
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input className="mui--text-light-secondary" label="First Name*" floatingLabel={true} required={true} />
                            </div>
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input className="mui--text-light-secondary" label="Company name" floatingLabel={true} />
                            </div>
                        </div>
                        <div className="mui-row">
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="First Name*" floatingLabel={true} required={true} />
                            </div>
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input type="email" label="Work email address*" floatingLabel={true} required={true} />
                                <span class="form__error-empty">!Empty field</span>
                                <span class="form__error-invalid">!Invalid email</span>
                            </div>
                        </div>
                        <div className="mui-row">
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Select defaultValue="categoty0">
                                    <Option value="categoty0" label="How many empoyees do you have?" />
                                    <Option value="categoty2" label="20 - 100" />
                                    <Option value="categoty3" label="100 - 500" />
                                    <Option value="categoty4" label="500 - 2000" />
                                    <Option value="categoty5" label="Over 2000" />
                                </Select>
                            </div>
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="Phone number" floatingLabel={true} />
                            </div>
                        </div>
                        <div className="mui-row">
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Select defaultValue="categoty0">
                                    <Option value="categoty0" label="How did you hear about us?" />
                                    <Option value="banner" label="Banner Ad" />
                                    <Option value="search" label="Search" />
                                    <Option value="podcast" label="Podcast" />
                                    <Option value="tv" label="TV" />
                                    <Option value="publicat" label="Online Publication" />
                                    <Option value="bet_customer" label="Current Betterment Customer" />
                                    <Option value="bet_emplo" label="Betterment Employee" />
                                    <Option value="friend" label="Friend/Word of Moutn" />
                                    <Option value="other" label="Other" />
                                </Select>
                            </div>
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="Anything else we should know?" floatingLabel={true} />
                            </div>
                        </div>
                        <div className="mui-row">
                            <div className="mui-col-lg-12 mui-col-md-12 mui-col-sm-12 mui-col-xs-12">
                                <Checkbox name="subs" label="Yes, I want to have bouns information on my email" />
                            </div>
                        </div>
                        <div className="mui-row">
                            <div className="mui-col-lg-12 mui-col-md-12 mui-col-sm-12 mui-col-xs-12">
                                <input type="submit" className="about__submit-btn" value="Find out more"/>
                            </div>
                        </div>
                    </Form>
                </div>
                <Footer ref="footer" />
            </div>
        )
    }
}