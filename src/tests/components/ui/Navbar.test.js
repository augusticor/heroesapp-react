import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';

import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Tests on <NavBar /> component', () => {
	const historyMock = {
		listen: jest.fn(),
		createHref: jest.fn(),
		push: jest.fn(),
		location: {},
		replace: jest.fn(),
	};

	const authContextValue = {
		user: {
			nickname: 'Doctor Extranio',
		},
		dispatch: jest.fn(),
	};

	const wrapper = mount(
		<AuthContext.Provider value={authContextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<Navbar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should display user nickname', () => {
		expect(wrapper.find('b').text().trim()).toBe(authContextValue.user.nickname);
	});

	test('Logout button should call dispatch function with type logout', () => {
		wrapper.find('button').simulate('click');

		expect(authContextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
	});

	test('Logout button should call replace from useHistory react-router-dom hook (redirect to login)', () => {
		wrapper.find('button').simulate('click');

		// replace from useHistory react router dom mock for test
		expect(historyMock.replace).toHaveBeenCalledWith('/login');
	});
});
