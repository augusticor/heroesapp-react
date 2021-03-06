import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: ComponentToRender, ...rest }) => {
	const lastPath = rest.location;

	if (lastPath.search !== '' && lastPath.pathname === '/search') {
		localStorage.setItem('lastLocation', lastPath.pathname + lastPath.search);
	} else {
		localStorage.setItem('lastLocation', lastPath.pathname);
	}

	return (
		<Route
			{...rest}
			component={(props) => {
				if (isAuthenticated) {
					return <ComponentToRender {...props} />;
				} else {
					return <Redirect to='/login' />;
				}
			}}
		/>
	);

	// same as:
	// return <Route {...rest} component={(props) => (isAuthenticated ? <ComponentToRender {...props} /> : <Redirect to='/login' />)} />;
};

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

export default PrivateRoute;
