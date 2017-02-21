import React, {Component} from 'react' 
import { DataTable, TableHeader, Tooltip, Grid, Cell } from 'react-mdl'
import {hashHistory} from 'react-router' 
import request from 'request'

import Filter from '../Components/Filter'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: [{name: 'no data', description: 'no data', instrument: 'no data'}]
        }

        this.viewDetail = this.viewDetail.bind(this); 


        this.fetchList = this.fetchList.bind(this);
    }

    componentDidMount() {

        window.componentHandler.upgradeDom();

        // console.log(campaigns)
        this.fetchList(); 
    }

    viewDetail(e) {
// http://149.56.126.25:28864/api/campaigns/series/?campaign=ES_Bidirectional%20V3&amp;
// starting_date=2015-01-01&amp;end_date=2016-01-01&amp;include_price=1&amp;starting_capital=0&amp;performance_fee=0&amp;commission=3


  
    }
    fetchList() {
        var self = this;

        request('http://149.56.126.25:28864/api/campaigns/list/', (err, res, body) => {
            if (err) return; 
              self.setState({
                    campaigns: JSON.parse(body).campaigns
             })
        })


    }

    render() {

        return (
        <div>
            <Grid className="panel panel-primary">
                <Cell col={12}>
                    <Filter />
                </Cell>
            </Grid>
          
            <Grid>
                <Cell col={10} offset={1}>
                    <DataTable
                        selectable = {true}
                        onSelectionChanged={this.viewDetail} 
                        shadow={1}
                        rows={this.state.campaigns}
                        >

                        <TableHeader name="name" tooltip="Campaign name">Name</TableHeader>
                        <TableHeader name="description" tooltip="Campaign description">Description</TableHeader>
                        <TableHeader name="instrument" tooltip="Campaign details">Instrument</TableHeader>
                    </DataTable>
                </Cell>
            </Grid>

        </div>
    )}


}