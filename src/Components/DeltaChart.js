import React, { Component } from 'react'; 
import AmCharts from "../../lib/amcharts3-react"; 
import "../../lib/responsive"; 
import "amstock3/amcharts/amstock"; 

export default class EquityBarChart extends Component { 

    constructor() {
        super(); 
        this.state = {
            drawn: false 
        } 

        this.showPayoff = this.showPayoff.bind(this); 
    }

    showPayoff() {

        if (!this.state.drawn) {
            this.setState({drawn: true}, () => {
                const {self} = this.props; 
                self.updatePayoffChart(self.state.date)
                .then(() => {
                    self.setState({
                       isLoading: false,
                       err: null
                    }); 
                })
                .catch(err => {
                    console.log('err', err); 

                    self.setState({
                        isLoading: false, 
                        err: 'No payoff series data'
                    })
                })
            })
        }
    }

    render() { 
       
        const config = {
            "path": `${process.env.PUBLIC_URL}/`, 
            "type": "serial", 
            "theme": "light", 
            "autoMarginOffset": 20,
            "marginTop": 7,
            "dataProvider": this.props.data, 
             "valueAxes": [ {
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0
            } ], 
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [ { 
                 id: "g3", 
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "delta", 
                "title": "Delta",
            } ],                  
            "balloon": {
                "cornerRadius": 5,
                "fillColor": "#FFFFFF", 
                "verticalPadding": 1
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "axisColor": "#DADADA",
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "chartScrollbar": {
                    "autoGridCount": true,
                    "scrollbarHeight": 20, 
                    "backgroundColor": "#f3f3f3", 
                    "selectedBackgroundColor":"#b7b9bb", 
                    "backgroundAlpha": 1
                },
            "legend": {
                "useGraphSettings": true, 
                "valueWidth": 200, 
                "valueAlign": "left"
            }, 
            //"mouseWheelZoomEnabled": true, 
            "chartCursor": {
                "cursorAlpha": 0,
                "valueLineEnabled":true,
                "valueLineBalloonEnabled":true,
                "valueLineAlpha":0.5,
                "fullWidth":true

            },
            "responsive": {
                "enabled": true,  
                "rules": [{
                    "maxWidth": 950,
                    "overrides": {
                    "valueAxes": {
                        "inside": true, 
                        "fontSize": 10
                        }
                    }   
                }]
            }, 
            "processTimeout": 1, 
            "listeners": [{"event": "drawn", "method": this.showPayoff}], 
            "export": {
                "enabled": true
            }
        }
        return (
            <div className="barchart-container">
                <h5 className="series-chart-heading">Campaign delta</h5> 
                 <div id="delta-series-chart" style={{width: "100%", height: "400px"}}>
                     <AmCharts.React {...config} />
                 </div>
            </div>
        )
    }
}