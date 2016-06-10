import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
//import { browserHistory } from 'react-router'

export default class Home extends Component {
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.handleText = this.handleText.bind(this);
		this.state = {text: 'And'};
	}


	componentDidMount() {
		//this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
	}

	routerWillLeave() {
		let answer = window.confirm('Вы уверены?')
		if (!answer) return false
	}

	handleSubmit(e){
		e.preventDefault();
		const value = e.target.elements[0].value.toLowerCase()
		this.context.router.push(`/genre/${value}`) //this.context работает только при проверке context.Types

	}

	handleText(e){
		e.preventDefault();
		let text_n = ReactDOM.findDOMNode(this.refs.name).value;
		
		this.setState({text: text_n });
	}	
	render(){
		
		return (
			<div className='row'>
				<div className='col-md-12'>Раздел /</div>
				<form className = 'col-md-4' onSubmit={this.handleSubmit}>
					<input type='text' placeholder='genreName/' />
					<button type='submit'>Перейти</button>
					
				</form>
				{/*<input type='text' ref='name' placeholder='genreName/' />
				<button onClick={this.handleText}>Click</button>
				{this.state.text} 
				*/}
			</div>
		)
	}
}
Home.contextTypes = { //Для выполнения метода this.context
  router: PropTypes.object.isRequired
}
//Home.defaultProps = {initialText: 'Andy'}
//Home.propTypes = {initialText: React.PropTypes.string}