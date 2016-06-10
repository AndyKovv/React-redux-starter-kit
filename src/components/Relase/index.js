import React, { Component } from 'react'

export default class Relase extends Component {
	render(){
		const relaseName = this.props.params.relase;
		return (
			<div className='col-md-12'>
			{relaseName}
			</div>
		)
	}
}