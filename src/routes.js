import React from 'react'
import {Route, IndexRoute /*IndexRedirect*/} from 'react-router'

import App from 'containers/App'
import LoginPage from './containers/LoginPage'

import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import List from './components/List'
import Relase from './components/Relase'
import requireAuthentication from './containers/AuthenticatedComponent'


export const routes = ( 
	<div>
		<Route path='/' component={App}> {/* Компонеты будут рендериться в середине указаной компоненты тоесть будут детьми App*/}
			<IndexRoute component={Home} /> {/* Задаёться роут для корня тоесть для / */}
				{/*<IndexRedirect to='/list' /> {/* Автоматический редирект на странцу при заходе на сайт */}
				<Route path='admin' component={requireAuthentication(Admin)} /> {/* Вложили admin в Route / чтобы компоненты были доступны по URL /admin */}
					<Route path='genre/:genre' component={Genre}> {/* Для react-router это <App/> + this.props.child в нашем случае это <App/> + <Genre/> */}
						<Route path='genre/:genre/:relase' component={Relase} />
				</Route>
			<Route path='list' component={List} />
			<Route path='login' component={LoginPage} />
		</Route>
		<Route path='*' component={NotFound} /> {/* Для роутов которые не подошли показываем страницу 404 */}
	</div>
)
