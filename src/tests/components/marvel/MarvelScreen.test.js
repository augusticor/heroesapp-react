import { shallow } from 'enzyme';

import MarvelScreen from '../../../components/marvel/MarvelScreen';

describe('Testing <MarvelScreen /> component', () => {
	test('Should match snapshot', () => {
		const wrapper = shallow(<MarvelScreen />);

		expect(wrapper).toMatchSnapshot();
	});
});
