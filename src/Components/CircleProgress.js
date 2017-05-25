import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/CircleProgress.css';
var $ = require('jquery');
require('jquery-circle-progress');

export default class CircleProgress extends Component {

    componentDidMount() {
        $('.circlewheels__circle-one').circleProgress(
            {
                size: 112,
                thickness: 17,
                startAngle: -Math.PI / 2,
                fill: {
                    gradient: ["rgb(0,78,203)", "rgb(117,167,255)"],
                    gradientAngle: Math.PI * 0.26
                },
                lineCap: 'round',
                animation: {
                    duration: 1000,
                    easing: "linear"
                }
            }
        )
        $('.circlewheels__circle-two').circleProgress(
            {
                size: 111,
                thickness: 16,
                startAngle: -Math.PI / 2,
                fill: {
                    gradient: ["rgb(255,215,64", "rgb(247,151,30)"],
                    gradientAngle: Math.PI * 0.83
                },
                lineCap: 'round',
                emptyFill: '#f3f3f3',
                animation: {
                    duration: 1000,
                    easing: "linear"
                }
            }
        )
    }

    render() {
        let circleWheels_content, title;
        if (this.props.radval2) {
            circleWheels_content = (
                <div className="circleWheels_conetnt">
                    <div className="circlewheels__wheelWrapper">
                        <div className="circlewheels__circle-one" data-value={this.props.radval1 / 100}>
                            <div className="circlewheels__circle-one-digit">{this.props.radval1 + "%"}</div>
                        </div>
                        <div className="circlewheels__circle-two" data-value={(parseFloat(this.props.radval1) + parseFloat(this.props.radval2)) / 100} >
                            <div className="circlewheels__circle-two-digit">{this.props.radval2 + "%"}</div>
                        </div>
                        <div className="circlewheels__circle-zero-digit">{(100 - this.props.radval1 - this.props.radval2) + "%"}</div>
                    </div>
                    <div className="circlewheels__attributeWrapper">
                        <p className="circlewheels__attrribute"><strong>{(100 - this.props.radval1 - this.props.radval2) + "%"}</strong> Dynamic Hedge</p>
                        <p className="circlewheels__attrribute"><strong>{this.props.radval2 + "%"}</strong> Dynamic futures hedge</p>
                        <p className="circlewheels__attrribute"><strong>{this.props.radval1 + "%"}</strong> static {this.props.textPart} futures</p>
                    </div>

                </div>
            )
        } else {
            circleWheels_content = (
                <div className="circleWheels_conetnt">
                    <div className="circlewheels__wheelWrapper">
                        <div className="circlewheels__circle-one" data-value={this.props.radval1 / 100}>
                            <div className="circlewheels__circle-one-digit" style={{ transform: "translate(-70px,70px)" }}>{this.props.radval1 + "%"}</div>
                        </div>
                        <div className="circlewheels__circle-zero-digit">{(100 - this.props.radval1) + "%"}</div>
                    </div>
                    <div className="circlewheels__attributeWrapper">
                        <p className="circlewheels__attrribute"><strong>{(100 - this.props.radval1) + "%"}</strong> Dynamic Hedge</p>
                        <p className="circlewheels__attrribute"><strong>{this.props.radval1 + "%"}</strong> static {this.props.textPart} futures</p>
                    </div>
                </div>
            )
        }
        if (this.props.title[1]) {
            title = (
                <p className="circlewheels__title"><span>{this.props.title[0]}</span><span>{this.props.title[1]}</span></p>
            )
        } else {
            title = (
                <p className="circlewheels__title">{this.props.title}</p>
            )
        }
        return (
            <div className="circlewheels__wrapper">
                {title}
                {circleWheels_content}
                <div className="circlewheels__select-btn">
                    <Link to="/">SELECT</Link>
                </div>
            </div>
        )
    }
}