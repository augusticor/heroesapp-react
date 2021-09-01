import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';

import AppRouter from '../../routers/AppRouter';

describe('Tests on <AppRouter/> component', () => {
	test('Should render login screen if user is NOT authenticated', () => {
		const contextProviderValue = {
			user: {
				logged: false,
			},
			dispatch: jest.fn(),
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextProviderValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('form').exists()).toBeTruthy();
		expect(wrapper.find('input').hasClass('inp-nickname')).toBeTruthy();
	});

	test('Should render marvel component if user is authenticated', () => {
		const contextProviderValue = {
			user: {
				nickname: 'Robin Mario Food',
				logged: true,
			},
			dispatch: jest.fn(),
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextProviderValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper.find('nav').exists()).toBeTruthy();
		expect(wrapper.find('nav span b').text()).toBe(contextProviderValue.user.nickname);
		expect(wrapper.find('h1').text()).toBe('Marvel SuperHeroes');
	});
});
