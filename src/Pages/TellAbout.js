import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navigation, Footer } from '../Components'

import Form from 'muicss/lib/react/form';
import Checkbox from 'muicss/lib/react/checkbox';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import 'muicss/dist/css/mui.min.css'
export default class TellAbout extends Component {

    render() {
        return (
            <div className="tellabout-container">
                <Navigation activeTab="tecnology" />
                <div className="tellabout-wrapper">
                    <Form className="mui-container">
                        <div className="mui-row">
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="First Name*" floatingLabel={true} required={true} />
                            </div>
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="Company name" floatingLabel={true} />
                            </div>
                        </div>
                        <div className="mui-row">
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="First Name*" floatingLabel={true} required={true} />
                            </div>
                            <div className="mui-col-lg-6 mui-col-md-6 mui-col-sm-6 mui-col-xs-12">
                                <Input label="Work email address*" floatingLabel={true} required={true} />
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
                                    <Option value="categoty0" label="How many empoyees do you have?" />
                                    <Option value="categoty1" label="Under 20" />
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
                    </Form>
                </div>
            </div>
        )
    }
}