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

	Storage.prototype.setItem = jest.fn();

	test('Should display component if user is authenticated and save on localStorage', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={true} component={() => <span>Ready rendered</span>} {...restProps} />
			</MemoryRouter>
		);

		expect(wrapper.find('span').exists()).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastLocation', '/marvel');
	});

	test('Should not show the component (logging) if user is not authenticated', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={false} component={() => <span>Ready rendered</span>} {...restProps} />
			</MemoryRouter>
		);

		expect(wrapper.find('span').exists()).toBeFalsy();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastLocation', '/marvel');
	});

	test('Should save search query on localStorage', () => {
		restProps.location.pathname = '/search';
		restProps.location.search = '?hero=man';

		mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={true} component={() => <span>Ready rendered</span>} {...restProps} />
			</MemoryRouter>
		);

		expect(localStorage.setItem).toHaveBeenCalledWith('lastLocation', '/search?hero=man');
	});

	test('Should not save search param if path name is different to /search', () => {
		restProps.location.pathname = '/dc';
		restProps.location.search = '?hero=green';

		mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={true} component={() => <span>Ready rendered</span>} {...restProps} />
			</MemoryRouter>
		);

		expect(localStorage.setItem).not.toHaveBeenCalledWith('lastLocation', '/dc?hero=green');
		expect(localStorage.setItem).toHaveBeenCalledWith('lastLocation', '/dc');
	});
});
