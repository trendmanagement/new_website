import React, { Component } from 'react';
import AmCharts from "amcharts3-react";
import "amstock3/amcharts/amstock";

export default class Chart extends Component {

    render() {

        let graph_id = 'g1'; 

        console.log(this.props.data) 

        function formatY(v, text, axis) {
           
                if (v >= 0) {
                    return '$' + v 
                } else {
                    return '-$' + v.toString().replace('-', '');  
                }
        
        }   

        function formatBalloon(v) { 
            
              if (parseFloat(v) >= 0) {
                    return '$' + parseInt(v).toString()
              } else {
                return '-$' + parseInt(v).toString().replace('-', '');  
              }
             
        }


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
                "position": "left", 
                "labelFunction": formatY, 
                "balloonTextFunction": formatBalloon
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
            
            }],
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
                "switchable": true, 
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
            "synchronizeGrid": true, 
            "dataProvider": this.props.data,
            "valueAxes": [{
                "id": "v1", 
                "axisAlpha": 0.2,
                "axisThickness": 2,
                "axisAlpha": 1,
                "position": "left", 
                "labelFunction": formatY, 
                "balloonTextFunction": formatBalloon
            }, {
                 
                "id": "v2",
                "axisColor": "#FCD202",
                "axisThickness": 2,
                "axisAlpha": 1,
                "position": "right"
            
            }],
            //"mouseWheelZoomEnabled": true,
            "graphs": [   {
                "id": graph_id,
                "valueAxis": "v1", 
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
            }, 
            {
            
                "id": "eq",
                "valueAxis": "v2", 
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
                "title": "Underlying future",
                "type": "ohlc",
                "valueField": "c",
                "balloon": {
                    "drop": false
                }
            
            }],
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
                <div id="main-chart" style={{ width: "95%", height: "500px" }}  className={this.props.include_price ? "hidden" : "visible"}>
                    <AmCharts.React {...config} /> 
                </div>
                <div id="main-chart-price" style={{ width: "95%", height: "500px" }} className={this.props.include_price ? "visible" : "hidden"}> 
                    <AmCharts.React {...price_config} />
                </div>
            </div>
        )
    }
}