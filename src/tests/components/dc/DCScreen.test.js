import { shallow } from 'enzyme';

import DCScreen from '../../../components/dc/DCScreen';

describe('Tests on <DCScreen /> component', () => {
	test('Should match snapshot', () => {
		const wrapper = shallow(<DCScreen />);

		expect(wrapper).toMatchSnapshot();
	});
});
