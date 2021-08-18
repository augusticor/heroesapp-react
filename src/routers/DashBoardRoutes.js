import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import NotFoundScreen from '../components/ui/NotFoundScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container mt-3'>
				<Switch>
					<Route exact path='/marvel' component={MarvelScreen} />

					<Route exact path='/dc' component={DCScreen} />

					<Route exact path='/search' component={SearchScreen} />

					<Route exact path='/hero/:heroId' component={HeroScreen} />

					<Route exact path='/heronotfound' component={NotFoundScreen} />

					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	);
};

export default DashBoardRoutes;
