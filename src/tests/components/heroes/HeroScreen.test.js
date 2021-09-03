import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import HeroScreen from '../../../components/heroes/HeroScreen';
import { getHeroById } from '../../../selectors/getHeroById';

describe('Tests on <HeroScreen /> component', () => {
	const heroName = 'marvel-thor';

	afterEach(() => {
		jest.clearAllMocks();
	});

	const historyMock = {
		length: 8,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	test('Should display redirect component if no arguments on URL', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<HeroScreen history={historyMock} />
			</MemoryRouter>
		);

		expect(wrapper.find('Redirect').exists()).toBeTruthy();
	});

	test('Should display a hero if heroparam exists and hero exists (marvel-thor)', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[`/hero/${heroName}`]}>
				<Route path={'/hero/:heroId'} component={HeroScreen} />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.row').exists()).toBe(true);

		const { superhero, publisher, characters } = getHeroById(heroName);

		expect(wrapper.find('img').prop('alt')).toBe(`${superhero} from ${publisher}`);
		expect(wrapper.find('h1').text()).toBe(superhero);
		expect(wrapper.find('.list-group-item').length).toBe(3);
		expect(wrapper.find('p').text()).toBe(characters);
	});

	test('When goBack button is pressed: If history.length<=2 should push to / route', () => {
		const mockHistory = { ...historyMock, length: 1 };

		const wrapper = mount(
			<MemoryRouter initialEntries={[`/hero/${heroName}`]}>
				<Route path={'/hero/:heroId'} component={(props) => <HeroScreen history={mockHistory} />} />
			</MemoryRouter>
		);

		wrapper.find('button').prop('onClick')();
		expect(mockHistory.push).toHaveBeenCalledWith('/');
		expect(mockHistory.goBack).not.toHaveBeenCalled();
	});

	test('When goBack button is pressed: If history.length>2 goBack function from history Should be called', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={[`/hero/${heroName}`]}>
				<Route exact path={'/hero/:heroId'} component={(p) => <HeroScreen history={historyMock} />} />
			</MemoryRouter>
		);

		wrapper.find('button').simulate('click');
		expect(historyMock.goBack).toHaveBeenCalled();
		expect(historyMock.goBack).toHaveBeenCalledWith();
		expect(historyMock.goBack).toHaveBeenCalledTimes(1);
		expect(historyMock.push).toHaveBeenCalledTimes(0);
	});

	test('Should call redirect if path hero does not exist', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/capitancalzoncillos']}>
				<Route exact path={'/hero/:heroId'} component={HeroScreen} />
			</MemoryRouter>
		);

		expect(wrapper.html()).toBe('');
		expect(wrapper.find('Redirect').exists()).toBe(false);
	});
});
