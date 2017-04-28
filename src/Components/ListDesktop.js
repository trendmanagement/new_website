import React, { Component } from 'react';
import Check from './Check';
import Loader from './Loader';

export default class ListDesktop extends Component {
    render() {

        let {campaigns, displayed, checkdata, selectCampaign, self} = this.props;
        let props = this.props;
        let counter = 0;
        return (

            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th colSpan={2}>Description</th>
                        <th className="td-instrument" style={{ textAlign: 'right' }}>Instrument</th>
                    </tr>
                </thead>
                <tbody>

                    {campaigns.map((i, j) => {

                        if (i.instrument == props.displayed || props.displayed == "All") {
                            counter++;
                            if (window.innerWidth > 500) {
                                return (

                                    <tr key={Math.random() * 10000} className={checkdata[j] ? 'is-selected' : ''}>
                                        <td>
                                            {(i.hideCheck) ? null : <Check
                                                checked={checkdata[j] ? true : false}
                                                val={j}
                                                onChange={(e) => selectCampaign(e, i.name, i.description, self)}
                                                />}

                                        </td>
                                        <td>{i.name}</td>
                                        <td colSpan={2}>{i.description}</td>
                                        <td className="td-instrument" style={{ textAlign: 'right' }}>{i.instrument}</td>
                                    </tr>

                                )
                            }
                        }
                    })}


                    {counter == 0 ?
                        <tr key={Math.random() * 10000}>
                            <td></td>
                            <td>{'No data'}</td>
                            <td colSpan={2}>{'No data'}</td>
                            <td className="td-instrument" style={{ textAlign: 'right' }}>{'No data'}</td>
                        </tr>
                        : null}
                </tbody>
            </table>

        )
    }
}