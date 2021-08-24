import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: PublicMainComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) => {
				return !isAuthenticated ? <PublicMainComponent {...props} /> : <Redirect to='/' />;
			}}
		/>
	);
};

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

PublicRoute.defaultPropTypes = {
	isAuthenticated: false,
};

export default PublicRoute;
