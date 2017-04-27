import React, { Component } from 'react';
import request from 'request';
import { Check } from '../Components';
import { apiEndpoint } from '../config';
import './css/List.css';

export default class List extends Component {

    constructor(props) {

        super(props)

        this.state = {
            campaigns: [{ name: 'no data', description: 'no data', instrument: 'no data', hideCheck: true }],
            checkdata: [false],
            btnDisabled: true,
            displayed: props.instr,
            response: ''
        }

        this.fetchList = this.fetchList.bind(this); 
        this.selectCampaign = props.selectCampaign.bind(this); 

    }

    componentDidMount() {

        if (!this.props.location.query.campaign) {
            this.fetchList();
        }
    }

 


    fetchList() {

        var self = this;

        request(`${apiEndpoint}/api/campaigns/list/`, (err, res, body) => {
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
        let counter = 0;  
        let self = this.props.self;  

        return (

            <div className="list-container">
                <div className="row">
                    <div className="col-lg-12 list-wrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th className="td-instrument" style={{textAlign: 'right'}}>Instrument</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.campaigns.map((i, j) => {

                                    if (i.instrument == this.state.displayed || this.state.displayed == "All") { 
                                        counter++; 
                                        return (
                                            <tr key={Math.random() * 10000} className={this.state.checkdata[j] ? 'is-selected' : ''}>
                                                <td> 
                                                    {(i.hideCheck) ? null :<Check 
                                                    checked={this.state.checkdata[j] ? true : false} 
                                                    val={j} 
                                                    onChange={(e) => this.selectCampaign(e, i.name, i.description, self)} 
                                                    />}
                            
                                                </td>
                                                <td>{i.name}</td>
                                                <td>{i.description}</td>
                                                <td className="td-instrument" style={{textAlign: 'right'}}>{i.instrument}</td>
                                            </tr>

                                        )
                                    }
                                })} 
                                {counter == 0 ? 
                                    <tr key={Math.random() * 10000}>
                                                <td></td>
                                                <td>{'No data'}</td>
                                                <td>{'No data'}</td>
                                                <td className="td-instrument" style={{textAlign: 'right'}}>{'No data'}</td>
                                            </tr>
                                    : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }


}