import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import PublicRoute from '../../routers/PublicRoute';

describe('Tests on <PublicRoute/> component', () => {
	const restProps = {};

	const componentToRender = () => <section>Component to render !</section>;

	test('Should display component if user is not authenticated', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PublicRoute isAuthenticated={false} component={componentToRender} {...restProps} />
			</MemoryRouter>
		);

		expect(wrapper.find('section').exists()).toBeTruthy();
	});

	test('Should redirect to / if user is already authenticated', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PublicRoute isAuthenticated={true} component={componentToRender} {...restProps} />
			</MemoryRouter>
		);

		expect(wrapper.find('section').exists()).toBeFalsy();
		expect(wrapper.find('MarvelScreen').exists()).toBeFalsy();
	});
});
