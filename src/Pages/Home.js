import React, {Component} from 'react'; 
import './css/Home.css'; 
import { Navigation } from '../Components'; 

class Home extends Component { 

    constructor () {
        super() 

    }


    render () {
        return (
            <div className="home-container">    
                <Navigation /> 
                <div className="bg-container"></div>
                <div className="description-container">
                    <div className="container-grid-block full-height">
                        <div className="row full-height">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 full-height">
                                <div className="list-aligner">
                                <div className="list-container-home">
                                    <p>TMQR focuses on systematic implementation of trading strategies which humans create through rigorous research.</p>
                                    <p>TMQR's creative approach to problem solving emphasizes precision, deep thought and thoroughness.</p>
                                    <p>TMQR relies on the research, analysis and development of trading strategies, as well as the technology, provided by Trend Management Limited.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 full-height"> 
                                <div className="list-aligner">
                                <div className="list-container-home">
                                    <p>TMQR searches for "Edge" through indepth and ongoing research. Of utmost importance is our team's ability to efficiently translate this research into actionable trading strategies.</p>
                                    <p>TMQR employs a scientific method that is aided by technology and specialized math to drive trading decisions. It is our goal to remove much of the subjectivity, arbitrariness and lack of discipline in trade selection, strategy development and assessment found in discretionary trading.</p>   
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Home; 