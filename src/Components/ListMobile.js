import React, { Component } from 'react';
import Check from './Check';
import Loader from './Loader';
import './css/List.css';

export default class ListMobile extends Component {
    render() {

        let {campaigns, displayed, checkdata, selectCampaign, self} = this.props;
        let props = this.props;
        let counter = 0;
        return (
            <div className="container-grid-block">
                {campaigns.map((i, j) => {
                    if (i.instrument == props.displayed || props.displayed == "All") {
                        counter++;
                        return (
                            <div key={Math.random() * 10000} className="campaign-container">
                                <div className="campaign-mobile-check">{i.hideCheck ? null :
                                    <Check
                                        checked={checkdata[j] ? true : false}
                                        val={j}
                                        onChange={(e) => selectCampaign(e, i.name, i.description, self)}
                                        />}
                                    <div>{i.instrument}, {i.name}</div>
                                    <div></div>
                                </div>

                                <div className="campaign-mobile-description">{i.description}</div>

                            </div>
                        )

                    }
                })}

                {counter == 0 ? <Loader /> : null}
            </div>
        )
    }
}