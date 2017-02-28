import React, { Component } from 'react';   
import AmCharts from "amcharts3-react"; 
import "amstock3/amcharts/amstock"; 
//import { LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

export default class Chart extends Component {

    render() {  

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
                "mouseWheelZoomEnabled": true,
                "graphs": [{
                    "id": "g1",
                    "balloonText": "[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "hideBulletsCount": 50,
                    "title": "equity",
                    "valueField": "equity",
                    "useLineColorForBulletBorder": true,
                    "balloon":{
                        "drop": false
                    }
                }, {
                    "id": "h",
                    "balloonText": "[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "hideBulletsCount": 50,
                    "title": "h",
                    "valueField": "h",
                    "useLineColorForBulletBorder": true,
                    "balloon":{
                        "drop": false
                    }
                }, {
                    "id": "l",
                    "balloonText": "[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "hideBulletsCount": 50,
                    "title": "l",
                    "valueField": "l",
                    "useLineColorForBulletBorder": true,
                    "balloon":{
                        "drop": false
                    }

                }, {
                    "id": "o",
                    "balloonText": "[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "hideBulletsCount": 50,
                    "title": "o",
                    "valueField": "o",
                    "useLineColorForBulletBorder": true,
                    "balloon":{
                        "drop": false
                    }

                }, {
                    "id": "c",
                    "balloonText": "[[value]]",
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "hideBulletsCount": 50,
                    "title": "c",
                    "valueField": "c",
                    "useLineColorForBulletBorder": true,
                    "balloon":{
                        "drop": false
                    }

                }],
                "chartScrollbar": {
                    "autoGridCount": true,
                    "graph": "g1",
                    "scrollbarHeight": 40
                },
                "chartCursor": {
                "limitToGraph":"g1",
                "cursorAlpha": 0,
                "valueLineEnabled":true,
                "valueLineBalloonEnabled":true,
                "valueLineAlpha":0.5,
                "fullWidth":true

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
                    "valueWidth": 140, 
                    "valueAlign": "left"
                },
                "export": {
                    "enabled": true
                }
            }

        console.log('config',config);


        return (
            <div className="equity-chart-container">
         
                <div id="main-chart" style={{width: "95%", height: "600px"}}>
                    <AmCharts.React {...config} />
                </div> 
            </div>
        )
    }
}