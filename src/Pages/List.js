import React, { Component } from 'react';
import request from 'request';
import { Filter } from '../Components';
import { apiEndpoint } from '../config';
import './css/List.css';

Array.prototype.unique = function () {
    var a = [];
    for (let i = 0; i < this.length; i++) {
        var current = this[i];
        if (a.indexOf(current) < 0) a.push(current);
    }

    this.length = 0;
    for (let i = 0; i < a.length; i++) {
        this.push(a[i]);
    }

    return this;
}

export default class List extends Component {

    constructor(props) {

        super(props)

        this.state = {
            campaigns: [{ name: 'no data', description: 'no data', instrument: 'no data', hideCheck: true }],
            selectedCampaign: '',
            selectedDescription: '',
            checkdata: [false],
            btnDisabled: true,
            displayed: props.instr,
            response: ''
        }

        this.fetchList = this.fetchList.bind(this); 
        this.selectCampaign = props.selectCampaign.bind(this); 

    }

    componentDidMount() {

        window.componentHandler.upgradeDom();
        this.fetchList();

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
                                                    <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded " + 
                                                    (this.state.checkdata[j] ? "is-checked" : "")}><input type="checkbox" className="mdl-checkbox__input" 
                                                    value={j} 
                                                    onChange={(e) => this.selectCampaign(e, i.name, i.description, self)} 
                                                    />
                                                    <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label>
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