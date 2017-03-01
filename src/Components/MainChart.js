import React, { Component } from 'react';
import AmCharts from "amcharts3-react";
import "amstock3/amcharts/amstock";

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
            //"mouseWheelZoomEnabled": true,
            "graphs": [{
                "id": "g1",
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
            }, {
                "id": "g2",
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
            }

            ],
            "chartScrollbar": {
                "autoGridCount": true,
                "graph": "g1",
                "scrollbarHeight": 40
            },
            "chartCursor": {
                "limitToGraph": "g1",
                "cursorAlpha": 0,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": 0.5,
                "fullWidth": true

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
                <h5 className="series-chart-heading">Equity series</h5>
                <div id="main-chart" style={{ width: "95%", height: "600px" }}>
                    <AmCharts.React {...config} />
                </div>
            </div>
        )
    }
}