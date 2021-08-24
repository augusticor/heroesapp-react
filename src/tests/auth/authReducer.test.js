import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Tests on auth reducer', () => {
	test('Should return default state', () => {
		const state = authReducer({ nickname: 'BatPep' }, {});
		expect(state).toEqual({ nickname: 'BatPep' });
	});

	test('Should authenticate and set the user name (login)', () => {
		const action = { type: types.login, payload: { nickname: 'Baron' } };
		const state = authReducer({}, action);

		expect(state).toEqual({
			nickname: 'Baron',
			logged: true,
		});
	});

	test('Should return only logged false (logout)', () => {
		const action = { type: types.logout };
		const state = authReducer({ nickname: 'Larieju', logged: true }, action);

		expect(state).toEqual({ logged: false });
	});
});
