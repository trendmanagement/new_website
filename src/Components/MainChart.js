import React, { Component } from 'react';
import AmCharts from "amcharts3-react";
import "amstock3/amcharts/amstock";

export default class Chart extends Component {

    render() {

        let graph_id = 'g1'; 

        console.log(this.props.data)
        const config = {
            "path": "",
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "marginTop": 7,
            "dataProvider": this.props.data,
            "valueAxes": [{

                "axisAlpha": 0.2,
                "axisThickness": 2,
                "axisAlpha": 1,
                "position": "left"
            }],
            //"mouseWheelZoomEnabled": true,
            "graphs": [
            {
                "id": graph_id,
                "balloonText": "[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "title": "Equity",
                "valueField": "equity",
                "useLineColorForBulletBorder": true,
                "balloon": {
                    "drop": false
                }
            }
            ],
            "chartScrollbar": {
                "autoGridCount": true,
                "graph": graph_id,
                "scrollbarHeight": 40, 
                "backgroundColor": "#f3f3f3", 
                "selectedBackgroundColor":"#b7b9bb" 
            },
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueZoomable": true,
                "valueLineAlpha": 0.5
            },
            "valueScrollbar": {
                "scrollbarHeight":2,
                "offset":-1,
                "backgroundAlpha":0.1,
                "backgroundColor":"#cacaca",
                "autoGridCount": true,
                "color": "#000000", 
                "selectedBackgroundColor":"#a5a5a5",
                "selectedBackgroundAlpha":1
            },
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
            "legend": {
                "useGraphSettings": true,
                "valueWidth": 100,
                "valueAlign": "left"
            },
            "export": {
                "enabled": true
            }
        }

  
    const price_config =  {
            "path": "",
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "marginTop": 7,
            "dataProvider": this.props.data,
            "valueAxes": [{

                "axisAlpha": 0.2,
                "axisThickness": 2,
                "axisAlpha": 1,
                "position": "left"
            }],
            //"mouseWheelZoomEnabled": true,
            "graphs": [
            {
            
                "id": "eq",
                "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
                "closeField": "c",
                "fillColors": "#7f8da9",
                "highField": "h",
                "lineColor": "#7f8da9",
                "lineAlpha": 1,
                "fillAlphas": 0,
                "lineThickness": 2,
                "lowField": "l",
                "negativeFillColors": "#db4c3c",
                "negativeLineColor": "#db4c3c",
                "openField": "o",
                "title": "Price",
                "type": "ohlc",
                "valueField": "c",
                "balloon": {
                    "drop": false
                }
            
            }],
            "chartScrollbar": {
                "autoGridCount": true,
                "graph":  "eq",
                "scrollbarHeight": 40, 
                "backgroundColor": "#f3f3f3", 
                "selectedBackgroundColor":"#b7b9bb", 
            },
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": false,
                "valueZoomable": true,
                "valueLineAlpha": 0.5
            },
            "valueScrollbar": {
                "scrollbarHeight":2,
                "offset":-1,
                "backgroundAlpha":0.1,
                "backgroundColor":"#cacaca",
                "autoGridCount": true,
                "color": "#000000",
                "selectedBackgroundColor":"#a5a5a5",
                "selectedBackgroundAlpha":1
            },
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
            "legend": {
                "useGraphSettings": true,
                "valueWidth": 100,
                "valueAlign": "left"
            },
            "export": {
                "enabled": true
            }
        }

  
    
        return (
            <div className="equity-chart-container">
                <div id="main-chart" style={{ width: "95%", height: "500px" }}>
                    <AmCharts.React {...config} /> 
                </div>
                <div id="main-chart-price" style={{ width: "95%", height: "400px" }} className={this.props.include_price ? "visible" : "hidden"}> 
                    <h5 className="series-chart-heading">Price</h5>
                    <AmCharts.React {...price_config} />
                </div>
            </div>
        )
    }
}