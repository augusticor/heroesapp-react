import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';

const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container mt-3'>
				<Switch>
					<Route exact path='/marvel' component={MarvelScreen} />

					<Route exact path='/dc' component={DCScreen} />

					<Route exact path='/marvel/:heroId' component={HeroScreen} />

					<Redirect to='/marvel' />
				</Switch>
			</div>
		</>
	);
};

export default DashBoardRoutes;
