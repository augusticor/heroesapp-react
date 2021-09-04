import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';

import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Tests on <LoginScreen /> component', () => {
	const contextProviderValue = {
		dispatch: jest.fn(),
	};

	const historyMock = {
		replace: jest.fn(),
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextProviderValue}>
			<LoginScreen history={historyMock} />
		</AuthContext.Provider>
	);

	test('Should match snapshot', () => expect(wrapper).toMatchSnapshot());

	test('Should call dispatch login and navigate to principal route', () => {
		const nickname = 'Goku Visual H';
		const event = {
			target: {
				name: 'nickname',
				value: nickname,
			},
		};

		wrapper.find('input').simulate('change', event);
		const handleSubmit = wrapper.find('form').prop('onSubmit');
		handleSubmit({ preventDefault: () => {} });

		// Dispatch login function
		expect(contextProviderValue.dispatch).toHaveBeenCalledTimes(1);
		expect(contextProviderValue.dispatch).toHaveBeenCalledWith({
			type: types.login,
			payload: { nickname },
		});

		// History react router dom calling
		expect(historyMock.replace).toHaveBeenCalledWith('/');
		localStorage.setItem('lastLocation', '/search?hero=ev');
		handleSubmit({ preventDefault: () => {} });
		expect(historyMock.replace).toHaveBeenCalledWith('/search?hero=ev');
	});
});
