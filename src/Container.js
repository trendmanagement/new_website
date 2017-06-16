import React, { Component } from 'react'
import moment from 'moment'
import request from 'request';
import { browserHistory } from 'react-router'; 
import { apiEndpoint, clientEndpoint } from './config'; 

export default class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaignDataRetrieved: false,
            campaign_detail: [],
            err: null,
            date: '', 
            isNeg: false 
        }

        this.token = ''; 
        this.viewCampaign = this.viewCampaign.bind(this); 

    }



    viewCampaign(data, campaign, use_default, description, query_data) {

        if (typeof query_data == 'undefined') {
            var formData = Object.assign({}, data);

            var d1 = formData.startDate.format('YYYY MM DD'),
                d2 = formData.endDate.format('YYYY MM DD');

            d1 = d1.replace(/ /g, '-');
            d2 = d2.replace(/ /g, '-');

            var d3 = d2.split('-');

            campaign = encodeURI(campaign);


            query_data = `?campaign=${campaign}&starting_date=${d1}&end_date=${d2}&include_price=1`;

            if (use_default) {
                query_data = `?campaign=${campaign}&include_price=1`
            }
        }

        

        var uri = `${apiEndpoint}/api/campaigns/series/${query_data}` 

        console.log(uri)

        var self = this;

        return new Promise((resolve, reject) => { 
            var req = request({
                type: 'GET',
                uri: uri
            }, (err, res, body) => {

                if (err) {
                    self.setState({
                        err: { message: 'Api error' }
                    })
                    browserHistory.push('error');
                    return;
                }

                try {
                    body = JSON.parse(body);

                } catch (err) {

                    body = body.replace(/NaN/g, 0.0);
                    try {
                        body = JSON.parse(body);
                    } catch (err) {
                        self.setState({
                            err: { message: 'Api error. Invalid response data.' }
                        })
                        browserHistory.push('error');
                        return;
                    }

                }

                if (body.status == 'error') {
                    self.setState({
                        err: { message: body.message }
                    }, () => {
						console.log(body)
                        reject(self.state.err)
                    }); 

            
                }

                if (body.status == 'OK') {

                    console.log(body)
                    body.starting_value = Math.floor(body.starting_value);
                    body.end_value = Math.floor(body.end_value);
                    body.max_drawdown = Math.floor(body.max_drawdown);
                    body.max_delta = body.max_delta.toFixed(4);
                    body.average_delta = body.average_delta.toFixed(4); 
                    let counter = 0;

                    for (let i = 0; i < body.series.length; i++) {

                        body.series[i].equity = Math.floor(body.series[i].equity);
                        body.series[i].delta = body.series[i].delta.toFixed(4);
                        body.series[i].change = body.series[i].change.toFixed(4);
                        body.series[i].date = body.series[i].date.replace('T00:00:00', '');

                        if (body.series[i].c < 0) {
                            counter--; 
                        } else {
                            counter++ 
                        }

                        body.series[i].o = body.series[i].o.toFixed(4);
                        body.series[i].h = body.series[i].h.toFixed(4);
                        body.series[i].l = body.series[i].l.toFixed(4);
                        body.series[i].c = body.series[i].c.toFixed(4); 

                    

                        if (i == body.series.length - 1) {

                            var d4 = body.series[i].date.split('-');
                            console.log(d4)
                            self.setState({
                                date: moment({ year: d4[0], month: d4[1] - 1, day: d4[2] })
                            })
                        }

                        let d = body.series[i].date.split('-');


                        body.series[i].date = new Date(d[0], d[1] - 1, d[2], 0, 0, 0, 0);


                    }

                    self.setState({
                        campaign_detail: body, 
                        isNeg: counter < 0 ? true : false, 
                        campaignDataRetrieved: true
                    }, () => {
                        resolve({
                                campaign_detail: body, 
                                date: moment({ year: d4[0], month: d4[1] - 1, day: d4[2] }), 
                                description: description, 
                                query: `${query_data}&d=${description}` 
                            })
                        })
                }
            })
        })


    }


    render() { 
        console.log(this.props.children)
        return (
            <div>
                {React.cloneElement(this.props.children, 
                { viewCampaign: this.viewCampaign, 
                self: this,  
                isNeg: this.state.isNeg, 
                campaign_detail: this.state.campaign_detail, 
                series_err: this.state.err, 
                date: this.state.date, 
                description: this.state.description })}
            </div>
        )
    }

}