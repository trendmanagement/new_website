import React, { Component } from 'react'; 
import AmCharts from "amcharts3-react"; 
import "amstock3/amcharts/amstock"; 

export default class PayoffChart extends Component {

    render() {

        var self = this;
        function formatY(v, text, axis) {
            if (typeof self.props.data[0].expir == 'undefined') {
                if (v >= 0) {
                    return '$' + v 
                } else {
                    return '-$' + v.toString().replace('-', '');  
                }
            } else {
                return v; 
            }

        } 

        function formatBalloon(v) { 
             if (typeof self.props.data[0].expir == 'undefined') {
              if (parseFloat(v) >= 0) {
                    return '$' + parseInt(v).toString()
              } else {
                return '-$' + parseInt(v).toString().replace('-', '');  
              }
             } else {
                 return v.toFixed(4); 
             }
        }

        const config = {
            "path": "",
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "autoMarginOffset": 30,
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
            "graphs": [{
                "id": "g4",
                "balloonText": "[[title]]: [[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "precision": 4,
                "bulletColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "title": "Current",
                "valueField": "curr",
                "useLineColorForBulletBorder": true, 
                "lineColor": "#5353ea", 
                "balloon": {
                    "drop": false
                }
            },{
                "id": "g5",
                "balloonText": "[[title]]: [[value]]", 
                "precision": 4,
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "title": "At expiration", 
                "lineColor": "#f14c30", 
                "valueField": typeof this.props.data[0].expir == 'undefined' ? "exp" : "expir",
                "useLineColorForBulletBorder": true,
                "balloon": {
                    "drop": false
                }
            }], 
            "categoryField": "px",
            "categoryAxis": {
                "axisColor": "#DADADA",
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "legend": {
                "useGraphSettings": true, 
                "valueWidth": 200, 
                "valueAlign": "left"
            }, 
            "chartScrollbar": {
                "scrollbarHeight":2,
                "offset":-1,
                "backgroundAlpha":0.1,
                "backgroundColor":"#cacaca",
                "selectedBackgroundColor":"#a5a5a5",
                "selectedBackgroundAlpha":1
            }, 
            "chartCursor": {
                "cursorAlpha": 0,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": 0.5,
                "fullWidth": true

            },
        }

        return (
            <div className="series-chart-container">
            <h5 className="series-chart-heading">{this.props.title}</h5> 
             <div id="equity-payoff-chart" style={{width: "95%", height: "300px"}}>
                     <AmCharts.React {...config} />
             </div>
            </div>
        )
    }
}