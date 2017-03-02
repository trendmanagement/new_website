import React, {Component} from 'react'

import moment from 'moment'
import request from 'request'; 
import {hashHistory} from 'react-router'; 

export default class Container extends Component {
  constructor(props) {
      super(props)

      this.state = {
          campaignDataRetrieved: false,
		  campaign_detail: [], 
          err: null, 
          date: '' 
      } 

      this.viewCampaign = this.viewCampaign.bind(this); 
  }
     viewCampaign(data, campaign, use_default) { 

        var formData = Object.assign({}, data); 
        var d1 = formData.startDate.format('YYYY MM DD'), 
        d2 = formData.endDate.format('YYYY MM DD'); 

        d1 = d1.replace(/ /g, '-');
        d2 = d2.replace(/ /g, '-'); 

        var d3 = d2.split('-'); 


        console.log(this.state.date)
        campaign = encodeURI(campaign);


        var uri = `http://149.56.126.25:28864/api/campaigns/series/?campaign=${campaign}&amp;starting_date=${d1}&amp;end_date=${d2}&amp;include_price=1`
        if (use_default) {
            uri = `http://149.56.126.25:28864/api/campaigns/series/?campaign=${campaign}&include_price=1`
        }

        var self = this; 

        var req = request({
            type: 'GET',
            uri: uri
        }, (err, res, body) => {

            if (err) {
                self.setState({
                    err: {message: 'Api error'}
                }) 
                hashHistory.push('error'); 
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
                    hashHistory.push('error');
                    return;
                }



            }

            if (body.status == 'error') {
                self.setState({
                    err: {message: body.message}
                }); 

                hashHistory.push('error'); 
            }

            if (body.status == 'OK') {  

          
                body.starting_value = Math.floor(body.starting_value); 
                body.end_value = Math.floor(body.end_value);  
                body.max_drawdown = Math.floor(body.max_drawdown); 
                body.max_delta = body.max_delta.toFixed(4); 
                body.average_delta = body.average_delta.toFixed(4); 

                for (let i = 0; i < body.series.length; i++) {

                    body.series[i].equity = Math.floor(body.series[i].equity);  
                    body.series[i].delta =  body.series[i].delta.toFixed(4); 
                    body.series[i].change = body.series[i].change.toFixed(4); 
                    body.series[i].date = body.series[i].date.replace('T00:00:00', ''); 
                    if (i == body.series.length - 1) {

                        var d4 = body.series[i].date.split('-'); 
                        console.log(d4)
                        self.setState({
                            date: moment({year: d4[0], month: d4[1] - 1, day: d4[2]})
                        })
                    } 

                    
                    let d = body.series[i].date.split('-'); 
                    body.series[i].date = new Date(d[0], d[1] - 1, d[2], 0, 0, 0, 0); 


                }
                self.setState({
                    campaign_detail: body
                })

                self.setState({campaignDataRetrieved: true})
                hashHistory.push('campaign'); 
            }
        }) 

        console.log(req)

    

    }
		render () {
		return (
			<div>
				{React.cloneElement(this.props.children, { viewCampaign: this.viewCampaign, campaign_detail: this.state.campaign_detail, series_err: this.state.err, date: this.state.date })}
			</div>
		)
	}

}