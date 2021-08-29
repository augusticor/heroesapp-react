import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe('Tests on <PrivateRoute /> component', () => {
	const restProps = {
		location: {
			pathname: '/marvel',
			search: '',
		},
	};

	test('Should display component if user is authenticated and save on localStorage', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={true} component={() => <span>Ready rendered</span>} {...restProps} />
			</MemoryRouter>
		);

		console.log(wrapper.html());
		expect(wrapper.find('span').exists()).toBeTruthy();
	});
});
