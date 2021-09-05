import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import SearchScreen from '../../../components/search/SearchScreen';

describe('Tests on <SearchScreen /> component', () => {
	test('Should match snapshot', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<Route path='/search' component={SearchScreen} />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.alert-info').exists()).toBeTruthy();
		expect(wrapper.find('.alert-info').text()).toBe('Search a hero !');
	});

	test('Should show Wonder Woman and the hero name input with queryString value (man)', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?hero=man']}>
				<Route path='/search' component={SearchScreen} />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value')).toBe('man');
		expect(wrapper.find('img').length).toBe(6);
		expect(wrapper.find('img').last().prop('alt')).toBe('Iron Man from Marvel Comics');
	});

	test('Should show alert div if no hero found', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?hero=capitan%20calzoncillos']}>
				<Route path='/search' component={SearchScreen} />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value')).toBe('capitan calzoncillos');
		expect(wrapper.find('.alert-warning').text().trim()).toBe('No heroes found :');
		expect(wrapper.find('img').length).toBe(0);
	});

	test('Should call push function from history', () => {
		const historyMock = {
			push: jest.fn(),
		};

		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?hero=otror']}>
				<Route path='/search' component={() => <SearchScreen history={historyMock} />} />
			</MemoryRouter>
		);

		wrapper.find('input').simulate('change', {
			target: {
				name: 'superhero',
				value: 'Green',
			},
		});

		wrapper.find('form').prop('onSubmit')({ preventDefault() {} });

		expect(historyMock.push).toHaveBeenCalledWith('?hero=Green');
		expect(historyMock.push).toHaveBeenCalledTimes(1);
	});
});
