import React from 'react';

const LoginScreen = ({ history }) => {
	const handleLogin = () => {
		// history.push('/dc');
		history.replace('/dc');
	};

	return (
		<div className='container mt-5'>
			<h1>Login</h1>
			<hr />

			<button className='btn btn-info' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
