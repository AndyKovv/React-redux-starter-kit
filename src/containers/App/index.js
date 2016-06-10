import React, { Component } from 'react'
//import { Link } from 'react-router'
import NavLink from '../../components/NavLink'


export default class App extends Component {


	render() {
		
		return (
			<div className='container'>
				<h1>APP</h1>
				<ul className='nav nav-pills'>
					<li><NavLink to='/' onlyActiveOnIndex={true}>Главная </NavLink></li>
					<li><NavLink to='/admin'>Admin</NavLink></li>
					<li><NavLink to='/list'>Список жанров</NavLink></li>
					<li><NavLink to='/login'>Войти</NavLink></li>
				</ul>

				{/* вывод потомков, тоесть выводим содержимое компонетов Admin/List */}
				{ this.props.children } 
			</div>
		) 
	}
}
