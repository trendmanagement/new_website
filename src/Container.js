import React, {Component} from 'react'

import request from 'request'; 
import {hashHistory} from 'react-router'; 

export default class Container extends Component {
  constructor(props) {
      super(props)

      this.state = {
          campaignDataRetrieved: false,
		  campaign_detail: [] 
      } 

      this.viewCampaign = this.viewCampaign.bind(this); 
  }
     viewCampaign(data, campaign) { 

        var formData = Object.assign({}, data); 
        var d1 = formData.startDate.format('YYYY MM DD'), 
        d2 = formData.endDate.format('YYYY MM DD'); 

        d1 = d1.replace(' ', '-');
        d1 = d1.replace(' ', '-');

        d2 = d2.replace(' ', '-'); 
        d2 = d2.replace(' ', '-'); 

        campaign = encodeURI(campaign);

        var uri = `http://149.56.126.25:28864/api/campaigns/series/?campaign=${campaign}&amp;starting_date=${d1}&amp;end_date=${d2}&amp;include_price=${formData.include_price}&amp;starting_capital=${formData.starting_capital}&amp;performance_fee=${formData.performance_fee}&amp;commission=${formData.commission}`;
							
        request({
            type: 'GET',
            uri: uri
        }, (err, res, body) => {

            console.log('-------err-------')
            console.log(err);

            console.log('-------res-------')
            console.log(res); 

            console.log('-------body-------')
            console.log(JSON.parse(body)); 

            
        }) 

        this.setState({campaignDataRetrieved: true})
        hashHistory.push('campaign'); 
    

    }
		render () {
		return (
			<div>
				{React.cloneElement(this.props.children, { viewCampaign: this.viewCampaign, campaign_detail: this.state.campaign_detail })}
			</div>
		)
	}

}