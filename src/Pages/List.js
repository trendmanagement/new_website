import React, { Component } from 'react'
import request from 'request'
import { Filter } from '../Components'

Array.prototype.unique = function() {
    var a = [];
    for (let i = 0; i < this.length; i++ ) {
        var current = this[i];
        if (a.indexOf(current) < 0) a.push(current);
    }

    this.length = 0;
    for (let i = 0; i < a.length; i++ ) {
        this.push( a[i] );
    }

    return this;
}

export default class List extends Component {

    constructor(props) {

        super(props)

        this.state = {
            campaigns: [{ name: 'no data', description: 'no data', instrument: 'no data' }],
            selectedCampaign: '', 
            selectedDescription: '', 
            checkdata: [false],
            btnDisabled: true, 
            instr: ['All'], 
            displayed: 'All', 
            response: '' 
        }

        this.selectCampaign = this.selectCampaign.bind(this);
        this.fetchList = this.fetchList.bind(this); 
        this.filterCampaigns = this.filterCampaigns.bind(this); 

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
            selectedDescription: this.state.campaigns[e.target.value].description,
            btnDisabled: false
        })
    }



    fetchList() {

        var self = this;

        request('http://149.56.126.25:28864/api/campaigns/list/', (err, res, body) => {
            if (err) {
                self.setState({response: err}); 
                return; 
            }
            
            body = JSON.parse(body); 

            let instr = [], filtered = [];

            
            for (let i = 0; i < body.campaigns.length; i++) {
                instr.push(body.campaigns[i].instrument); 
               
                
            } 

            filtered = instr.unique(); 
            console.log(filtered)

            self.setState({
                instr: filtered, 
                campaigns: body.campaigns,
                checkdata: new Array(body.campaigns.length).fill(false)
            }) 
        })
    } 

    filterCampaigns(str) {
        this.setState({
            displayed: str
        })
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 filter-panel panel-tab">

                        <Filter description={this.state.selectedDescription} btnDisabled={this.state.btnDisabled} show_selected={this.filterCampaigns} instrument={this.state.instr} campaign={this.state.selectedCampaign.name} viewCampaign={this.props.viewCampaign} />

                    </div>
                </div>
                <div className="container list-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th className="td-instrument">Instrument</th> 
                                    </tr>
                                </thead>
                                <tbody>
                              
                                    {this.state.campaigns.map((i, j) => {

                                        if (i.instrument == this.state.displayed ||  this.state.displayed == "All") {
                                        return (
                                            
                                            
                                            <tr key={Math.random() * 10000} className={this.state.checkdata[j] ? 'is-selected' : ''}>
                                                <td>
                                                    <label className={"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select is-upgraded " + (this.state.checkdata[j] ? "is-checked" : "")}><input type="checkbox" className="mdl-checkbox__input" value={j} onChange={this.selectCampaign} />
                                                        <span className="mdl-checkbox__focus-helper"></span><span className="mdl-checkbox__box-outline"><span className="mdl-checkbox__tick-outline"></span></span></label>
                                                </td>
                                                <td>{i.name}</td>
                                                <td>{i.description}</td>
                                                <td className="td-instrument">{i.instrument}</td> 
                                            </tr>
                                           
                                        ) } 
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