import React, { useContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

// Components
import LoginScreen from '../components/login/LoginScreen';
import PrivateRoute from './PrivateRoute';
import DashBoardRoutes from './DashBoardRoutes';

const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<>
				<Switch>
					<Route exact path='/login' component={LoginScreen} />

					<PrivateRoute path='/' isAuthenticated={user.logged} component={DashBoardRoutes} />
				</Switch>
			</>
		</Router>
	);
};

export default AppRouter;
