import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import DashBoardRoutes from '../../routers/DashBoardRoutes';

describe('Tests on <DashBoardRoutes /> component', () => {
	test('Should match snapshot', () => {
		const contextProviderValue = {
			user: {
				nickname: 'Peter Wayne',
				logged: true,
			},
			dispatch: jest.fn(),
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextProviderValue}>
				<MemoryRouter>
					<DashBoardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('nav').exists()).toBeTruthy();
		expect(wrapper.find('nav span b').text()).toBe(contextProviderValue.user.nickname);
		expect(wrapper.find('h1').text()).toBe('Marvel SuperHeroes');
	});
});
