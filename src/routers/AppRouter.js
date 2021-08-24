import React, { useContext } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

// Components
import LoginScreen from '../components/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<>
				<Switch>
					<PublicRoute exact path='/login' isAuthenticated={user.logged} component={LoginScreen} />

					<PrivateRoute path='/' isAuthenticated={user.logged} component={DashBoardRoutes} />
				</Switch>
			</>
		</Router>
	);
};

export default AppRouter;
