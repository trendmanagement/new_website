import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Container extends Component {

		render () {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}

}