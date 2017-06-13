import React, { Component } from 'react';
import { Navigation, Footer } from '../Components';
import request from 'request';
import { clientEndpoint } from '../config';
import './css/MyExos.css';
import { Link, browserHistory } from 'react-router';


function toMoney(val, neg) {
    if (neg) {
        return '-$' + val.replace('-', '');
    } else {
        return '$' + val;
    }
}


function numberWithCommas(x, toCash) {

    let neg = false;
    if (parseFloat(x) < 0) {
        neg = true;
    }

    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (toCash) {
        return toMoney(parts.join("."), neg);
    } else {
        return parts.join(".");
    }

}

class MyExos extends Component {

    constructor() {
        super();

        this.state = {
            exos: []
        }

        this.handleResize = this.handleResize.bind(this); 


    }

    componentDidMount() {

        this.handleResize(); 
        this.getExos();

        window.addEventListener('resize', this.handleResize); 

    } 

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize); 
    }

    handleResize() {

        let contentHeight = this.refs.contentWrap.offsetHeight; 
        if (contentHeight <= window.innerHeight - 120) {
            this.refs.footerWrap.style.position = 'absolute'; 
            this.refs.footerWrap.style.top = '100%'; 
        } else {

            this.refs.footerWrap.style.position = 'relative'; 
            this.refs.footerWrap.style.top = contentHeight + 125; 
        }


    }

    getExos() {

        request({
            method: 'GET',
            uri: clientEndpoint + '/exos'
        }, (err, res, body) => {

            if (err) return false;
            if (res.statusCode != 200) return false;

            body = JSON.parse(body);
            console.log('EXOS', body)
            this.setState({
                exos: body
            })
        })

    }

    delExo(id) {
        request({
            method: 'DELETE',
            uri: clientEndpoint + '/exos',
            json: true,
            body: { id: id }
        }, (err, res, body) => {
            if (err || res.statusCode != 200) {
                console.log('delete error');
            } else {
                this.getExos();
            }
        })
    }


    render() {
        const {exos} = this.state;
        return (
            <div className="my-exos">
                <div className="my-exos__navigation">
                    <Navigation self={this.props.self} />
                </div>
                <div className="my-exos__content" ref="contentWrap">
                    <div className="container-grid-block">
                        <div className="my-exos__content_title">My EXOs</div>
                        {exos.length > 0 ? 
                            <div style={{overflowX: 'auto'}}>
                            <table className="table my-exos-table-desktop">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>End Value</th>
                                        <th>Starting Value</th>
                                        <th>Starting Date</th>
                                        <th>End Date</th>
                                        <th className="exo-td-right">Max Delta</th>
                                        <th className="exo-td-right">Number of Trades</th>
                                        <th className="exo-td-right">Total Cost</th>
                                        <th className="exo-td-right">Average Delta</th>
                                        <th className="exo-td-right">Max Drawdown</th>
                                        <th colSpan={2}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exos.map(i => {

                                        return (<tr>

                                            <td>{i.exo_name.replace('_', ' ')}</td>
                                            <td>{numberWithCommas(parseFloat(i.end_value), true)}</td>
                                            <td>{numberWithCommas(parseFloat(i.starting_value), true)}</td>
                                            <td>{i.starting_date.replace('-', '/').replace('-', '/').replace('T00:00:00', '')}</td>
                                            <td>{i.end_date.replace('-', '/').replace('-', '/').replace('T00:00:00', '')}</td>
                                            <td className="exo-td-right">{parseFloat(i.max_delta).toFixed(4)}</td>
                                            <td className="exo-td-right">{numberWithCommas(parseFloat(i.total_number_of_trades), false)}</td>
                                            <td className="exo-td-right total-cost">({numberWithCommas(parseFloat(i.total_cost), true)})</td>
                                            <td className="exo-td-right">{parseFloat(i.avg_delta).toFixed(4)}</td>
                                            <td className="exo-td-right">{numberWithCommas(parseFloat(i.max_drawdown), true)}</td>
                                            <td className="exo-td-right"><Link to={`/simulations?campaign=${i.exo_name}&starting_date=${i.starting_date.replace('T00:00:00', '')}&end_date=${i.end_date.replace('T00:00:00', '')}&include_price=1&d=${i.description}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/icons/graph.png`} /></Link></td>
                                            <td className="exo-td-right"><span className="exo-del" style={{ whiteSpace: 'nowrap' }} onClick={() => this.delExo(i.exo_id)}><i className="fa fa-trash" aria-hidden="true"></i> Remove</span></td>

                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                             <div className="hide-scroll"></div>
                            </div>
                            : <span className="my-exos-table-desktop">No data</span>}
                        <div className="my-exos-table-mobile">
                            {exos.length > 0 ?
                                <div>
                                    {exos.map(i => {
                                        return <div className="my-exos-item">
                                            <div className="exo-item-content">
                                                <p><span>Name: </span>
                                                    {i.exo_name.replace('_', ' ')}</p>
                                                <p><span>End value: </span>
                                                    {numberWithCommas(parseFloat(i.end_value), true)}</p>
                                                <p><span>Starting value: </span>
                                                    {numberWithCommas(parseFloat(i.starting_value), true)}</p>
                                                <p><span>Starting date: </span>
                                                    {i.starting_date.replace('-', '/').replace('-', '/')}</p>
                                                <p><span>End date: </span>
                                                    {i.end_date.replace('-', '/').replace('-', '/')}</p>
                                                <p className="exo-p-right"><span>Max delta: </span>
                                                    {parseFloat(i.max_delta).toFixed(4)}</p>
                                                <p className="exo-p-right"><span>Number of trades: </span>
                                                    {numberWithCommas(parseFloat(i.total_number_of_trades), false)}</p>
                                                <p className="exo-p-right total-cost"><span>Total cost: </span>
                                                    {numberWithCommas(parseFloat(i.total_cost), true)}</p>
                                                <p className="exo-p-right"><span>Average delta: </span>
                                                    {parseFloat(i.avg_delta).toFixed(4)}</p>
                                                <p className="exo-p-right"><span>Max drawdown: </span>
                                                    {numberWithCommas(parseFloat(i.max_drawdown), true)}</p>
                                                <p className="exo-p-right"><Link to={`/simulations?campaign=${i.exo_name}&starting_date=${i.starting_date.replace('T00:00:00', '')}&end_date=${i.end_date.replace('T00:00:00', '')}&include_price=1&d={i.description}`}>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/graph.png`} /></Link></p>
                                                <p className="exo-p-right"><span className="exo-del" style={{ whiteSpace: 'nowrap' }} onClick={() => this.delExo(i.exo_id)}><i className="fa fa-trash" aria-hidden="true"></i> Remove</span></p>
                                            </div>
                                        </div>
                                    })} 
                               
                                </div>
                                : <span className="my-exos-table-mobile">No data</span>}
                        </div>
                    </div>
                </div>
                <div className="my-exos__footer" ref="footerWrap">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default MyExos; 