import React, {Component} from 'react'; 
import {Navigation, Footer} from '../Components';
import './css/MyExos.css'; 

export default class MyExos extends Component {
    render() {
        return (
            <div className="my-exos">
                <div className="my-exos__navigation"></div>
                <div className="my-exos__content"></div>
                <div className="my-exos__footer"></div>
            </div>
        )
    }
}