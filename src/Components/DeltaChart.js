import React, { Component } from 'react'; 
import AmCharts from "../../lib/amcharts3-react"; 
import "../../lib/responsive"; 
import "amstock3/amcharts/amstock"; 

export default class EquityBarChart extends Component { 

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
            "listeners": [{"event": "rendered", "method": function(e) {
                e.chart.invalidateSize(); 
            }}],
            
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