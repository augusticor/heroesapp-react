import React, { useContext } from 'react';

import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

import './login-styles.css';

const LoginScreen = ({ history }) => {
	const [{ nickname }, handleInputChange] = useForm({ nickname: '' });

	const { dispatch } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();

		// history.push('/dc');
		const loginAction = {
			type: types.login,
			payload: {
				nickname,
			},
		};

		dispatch(loginAction);

		history.replace('/dc');
	};

	return (
		<div className='login-container container mt-5'>
			<h1>Login</h1>
			<hr />

			<label htmlFor='inputnickname'>Your superhero nickname</label>

			<form className='formy' onSubmit={handleLogin}>
				<input
					required='required'
					value={nickname}
					onChange={handleInputChange}
					name='nickname'
					id='inputnickname'
					className='inp-nickname'
					type='text'
					placeholder='Starlight'
					autoComplete='off'
				/>

				<button className='btn-login'>Login</button>
			</form>
		</div>
	);
};

export default LoginScreen;
