import React, { Component } from 'react'; 
import { Navigation, Footer } from '../Components'; 

export default class EXOFacts extends Component {
    render() {

        let direction_data = [
            {index: 'Bullish Call', dir: 'b'},
            {index: 'Bullish Collar', dir: 'b'}, 
            {index: 'Bullish Direction Strangle', dir: 'bn'}, 
            {index: 'Bullish Direction Condor', dir: 'bn'}, 
            {index: 'Ratio Call Spread', dir: 'bn'}, 
            {index: 'Neutral Condor', dir: 'n'}, 
            {index: 'Ration Put Spread', dir: 'ben'}, 
            {index: 'Bearish Direction Strangle', dir: 'ben'}, 
            {index: 'Bearish Condor', dir: 'ben'}, 
            {index: 'Bearish Collar', dir: 'be'}, 
            {index: 'Bearish Put', dir: 'be'}
        ]; 
        let volatility_data = [
            {index: 'Bullish Call', vol: 'b'},
            {index: 'Bullish Collar', vol: 'n'}, 
            {index: 'Bullish volection Strangle', vol: 'be'}, 
            {index: 'Bullish volection Condor', vol: 'n'}, 
            {index: 'Ratio Call Spread', vol: 'be'}, 
            {index: 'Neutral Condor', vol: 'n'}, 
            {index: 'Ration Put Spread', vol: 'be'}, 
            {index: 'Bearish volection Strangle', vol: 'be'}, 
            {index: 'Bearish Condor', vol: 'n'}, 
            {index: 'Bearish Collar', vol: 'n'}, 
            {index: 'Bearish Put', vol: 'b'}

        ];

        let index_construction_data = [
            {index: 'Bullish Collar', spr: 'put, call, future', q: '+1, -1, +1', pos: 'OTM, OTM, Spot'}, 
            {index: 'Bearish Collar', spr: 'put, call, future', q: '-1,+1,-1', pos: 'OTM, OTM, Spot'}, 
            {index: 'Bullish Direction Strangle', spr: 'put, call', q: '-1,-1', pos: 'OTM, OTM'}, 
            {index: 'Bearish Direction Strangle', spr: 'put, call', q: '-1,-1', pos: 'OTM, OTM'}, 
            {index: 'Bullish Direction Condor', spr: 'put, put, call, call', q: '-1,+1,+1,-1', pos: 'OTM (lower strike), OTM, ITM, OTM'}, 
            {index: 'Neutral Condor', spr: 'put, put, call, call', q: '-1,+1,+1,-1', pos: 'OTM (lower strike), OTM, OTM, OTM (higher strike)'}, 
            {index: 'Bearish Direction Condor', spr: 'put, put, call, call', q: '-1,+1,+1,-1', pos: 'OTM, ITM, OTM, OTM (higher strike)'}, 
            {index: 'Bullish Call', spr: 'call', q: '+1', pos: 'ITM'}, 
            {index: 'Bearish Put', spr: 'put', q: '+1', pos: 'ITM'}, 
            {index: 'Ratio Call Spread', spr: 'call, call', q: '+1,-2', pos: 'ITM, OTM'}, 
            {index: 'Ratio Put Spread', spr: 'put, put', q: '+1,-2', pos: 'ITM, OTM'}
        ]

        return <div className="exo-facts-container">
            <Navigation activeTab="services" /> 
            <div className="nav-underlay"></div>
            <div className="exo-facts-content-container">
            <div className="container-grid-block">
                <h1 className="service-title">TMQR EXO Facts</h1>
                <p className="service-subtitle-lowercase">What are the attributes of TMQR EXO Index</p>
            </div>
            <div className="container-grid-block">
            <ul className="service-list exo">
            <li>TMQR EXO ® is an index concept based on a decade plus of research into quantitative trading/investing in the exchange traded derivatives markets. The indices were designed to meet the need for a benchmark in the futures options asset class.</li>
            <li>TMQR EXO® indices express the value of nuanced trading strategies from bullish option buying to neutral option selling linked to each exchange traded futures options product complex including : Interest Rate, FX, Agricultural, Precious Metals and Equity Index. The TMQR EXO® platform offers a fertile ground for sophisticated users to design products with the goals of extracting Exotic Beta or Alpha generation.</li>
            <li>TMQR EXO Index is a data platform that turns proven options strategies into liquid, quantifiable and investable indices for use in trading, asset allocation, R&D and bench-marking.</li>
            <li>EXO indices provide a means to measure the risk and return characteristic of commonly cited, sophisticated options strategies using the most liquid exchange traded derivatives.</li>
            <li>EXO indices facilitate a transparent, replicable method to probe and exploit advanced option strategies:</li>
            <li>EXO Indices reveal a wide array of previously invisible or opaque sophisticated investment strategies which, newly documented, clarify the message when the market speaks.</li>
            <li>The EXO Indices cover the full range of directional or volatility bias. The table below illustrates the degree with which the market operator can customize his strategy to his market outlook.</li>
            </ul>


            </div>
            <div className="container-grid-block">
            <div className="exo-table-container">
                <div className="direction">
                <h3 className="exo-table-title">DIRECTION</h3>
                <table className="exo-table table table-responsive">
                    <thead>
                        <tr>
                            <th>Exo Indices</th>
                            <th>Bullish</th>
                            <th>Bullish Neutral</th>
                            <th>Neutral</th>
                            <th>Bearish Neutral</th>
                            <th>Bearish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {direction_data.map(i => {
                        return <tr key={Math.random() * 10000}>
                            <td>{i.index}</td>
                            <td>{i.dir == 'b' ? <div className="check"></div> : null}</td>
                            <td>{i.dir == 'bn' ? <div className="check"></div> : null}</td>
                            <td>{i.dir == 'n' ? <div className="check"></div> : null}</td>
                            <td>{i.dir == 'ben' ? <div className="check"></div> : null}</td>
                            <td>{i.dir == 'be' ? <div className="check"></div> : null}</td>
                        </tr>
                        })}
                    </tbody>
                </table>
                </div>
                <div className="volatility">
                <h3 className="exo-table-title">VOLATILITY</h3>
                <table className="exo-table table table-responsive">
                 <thead>
                    <tr>    
                        <th className="tr_mobile_only">Exo Indices</th>
                        <th>Bullish</th>
                        <th>Neutral</th>
                        <th>Bearish</th>
                    </tr>
                 </thead>
                 <tbody>
                 {
                     volatility_data.map(i => {
                     return <tr key={Math.random() * 10000}>
                        <td className="tr_mobile_only">{i.index}</td>
                        <td>{i.vol == 'b' ? <div className="check"></div> : null}</td>
                        <td>{i.vol == 'n' ? <div className="check"></div> : null}</td>
                        <td>{i.vol == 'be' ? <div className="check"></div> : null}</td>
                     </tr>
                     })
                 }
                 </tbody>
                 </table>
                </div>
                </div>
            </div>
            <div className="container-grid-block">
                <p className="exo-table-delimiter">The chart below describes the construction of the various EXO indices. The algorithmic rules ensure that the benchmark components are consistent over time.</p>
            </div> 
            <div className="container-grid-block">
                <div className="exo-table-container">
                    <table className="exo-table table table-responsive">
                        <thead>
                            <tr>
                                <th>Exo Indices</th>
                                <th className="exo-right">Spread Construction</th>
                                <th className="exo-right">Quantity</th>
                                <th className="exo-right">Position  of Strikes on Roll Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            index_construction_data.map(i => {
                                return <tr key={Math.random() * 10000}>
                                    <td>{i.index}</td>
                                    <td className="exo-right">{i.spr}</td>
                                    <td className="exo-right">{i.q}</td>
                                    <td className="exo-right">{i.pos}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <p className="exo-prompt">Example of index construction</p>
            </div>
            <div className="container-grid-block">
                <p className="exo-legend">The EXO Bullish Collar consists of 1 ling put, 1 short call and 1 long future.</p>
                <p className="exo-legend">The call and put are each out of money.</p>
                <p className="exo-legend">"n" days before monthly expiration the expiring options are sold and the algorithmically determined new strikes and entered.</p>
                <p className="exo-legend">The transcation period occurs overa specified period in the last hour of the roll day.</p>
            </div>
            </div>
            <Footer />
        </div>
    }
}