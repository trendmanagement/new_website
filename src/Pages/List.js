import React, { Component } from 'react';
import request from 'request';
import { apiEndpoint } from '../config';
import './css/List.css'; 
import {ListDesktop, ListMobile} from '../Components'; 

export default class List extends Component {

    constructor(props) {

        super(props)

        this.state = {
            campaigns: [{ name: '', description: '', instrument: '', hideCheck: true }],
            checkdata: [false],
            btnDisabled: true,
            displayed: props.instr,
            response: '', 
            isMobile: false
        }

        this.fetchList = this.fetchList.bind(this); 
        this.selectCampaign = props.selectCampaign.bind(this); 
        this.handleResize = this.handleResize.bind(this); 

    }

    componentDidMount() {

        if (!this.props.location.query.campaign) {
            this.fetchList();
        } 

        if (window.innerWidth < 600 && !this.state.isMobile) {
            this.setState({
                isMobile: true
            })
        } else if (window.innerWidth >= 600 && this.state.isMobile) {
            this.setState({
                isMobile: false
            })
        }

        window.addEventListener('resize', this.handleResize); 
    } 

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize); 
    }

    handleResize() {
        if (window.innerWidth < 600 && !this.state.isMobile) {
            this.setState({
                isMobile: true
            })
        } else if (window.innerWidth >= 600 && this.state.isMobile) {
            this.setState({
                isMobile: false
            })
        }
    }

    fetchList() {

        var self = this;

        request(`${apiEndpoint}/api/campaigns/list`, (err, res, body) => {
            if (err) {
                self.setState({ response: err });
                return;
            }

            body = JSON.parse(body);
        
            let campaigns = body.campaigns; 

            console.log('campaigns', campaigns)
            if (body.campaigns.length == 0) {
                 campaigns = [{ name: 'no data', description: 'no data', instrument: 'no data', hideCheck: true }]
            }

            self.setState({
                campaigns: campaigns,
                checkdata: new Array(body.campaigns.length).fill(false)
            })
        })
    } 

    componentWillReceiveProps(nextProps) {
        if (this.props.instr && this.props.instr != nextProps.instr) {
            this.setState({
                displayed: nextProps.instr 
            })
        }
    }

    render() {

        let self = this.props.self;  

        return (

            <div className="list-container">
                <div className="row">
                    <div className="col-lg-12 list-wrap">
                        { !this.state.isMobile ? 
                        <ListDesktop 
                            self = {self}
                            campaigns={this.state.campaigns}
                            selectCampaign={this.selectCampaign} 
                            displayed={this.state.displayed} 
                            checkdata={this.state.checkdata}
                        /> : 
                        <ListMobile 
                            self = {self}
                            campaigns={this.state.campaigns}
                            selectCampaign={this.selectCampaign} 
                            displayed={this.state.displayed} 
                            checkdata={this.state.checkdata}
                        /> 
                    }
                    </div>
                </div>
            </div>

        )
    }


}