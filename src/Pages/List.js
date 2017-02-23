import React, { Component } from 'react'
//import { DataTable, TableHeader } from '../../lib/react-mdl'
import { hashHistory } from 'react-router'
import request from 'request'

import Filter from '../Components/Filter'

export default class List extends Component {

    constructor(props) {

        super(props)

        this.state = {
            campaigns: [{ name: 'no data', description: 'no data', instrument: 'no data' }],
            selectedCampaign: '', 
            checkdata: [false], 
            btnDisabled: true 
        }

        this.selectCampaign = this.selectCampaign.bind(this);
        this.fetchList = this.fetchList.bind(this); 
    
    }

    componentDidMount() {

        window.componentHandler.upgradeDom();
        this.fetchList();

    }

    selectCampaign(e) {
      
        console.log(e.target.value) 

        var checkdata = this.state.checkdata.slice(); 
        checkdata = checkdata.fill(false); 

        checkdata[e.target.value] = true; 

        this.setState({
            checkdata: checkdata, 
            selectedCampaign: this.state.campaigns[e.target.value], 
            btnDisabled: false
        })

    }

    fetchList() {

        var self = this;

        request('http://149.56.126.25:28864/api/campaigns/list/', (err, res, body) => {
            if (err) return;
            self.setState({
                campaigns: JSON.parse(body).campaigns, 
                checkdata: new Array(JSON.parse(body).campaigns.length).fill(false)
            })
        })


    }



    render() {

        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 filter-panel panel">

                            <Filter btnDisabled={this.state.btnDisabled} campaign={this.state.selectedCampaign.name} viewCampaign={this.props.viewCampaign}/>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Instrument</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.campaigns.map((i,j) => {
                                        return ( 
                                        <tr key={Math.random() * 10000} className={this.state.checkdata[j] ? 'is-selected' : ''}>
                                                <td>
                                                <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded " + (this.state.checkdata[j] ? "is-checked" : "")}><input type="checkbox" className="mdl-checkbox__input" value={j} onChange={this.selectCampaign}/>
                                                <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label>
                                                </td>
                                                <td>{i.name}</td>
                                                <td>{i.description}</td>
                                                <td>{i.instrument}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }


}