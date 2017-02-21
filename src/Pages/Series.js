import React, {Component} from 'react'  
import {Grid, Cell} from 'react-mdl'


export default class Series extends Component {
    render() {
        return (
            <div>
                <Grid className="top">
                    <Cell col={8} offset={2} className="top"></Cell>
                </Grid>
                <Grid>
                    <Cell col={8} offset={2}></Cell>
                </Grid>
            </div>
        )
    }
}