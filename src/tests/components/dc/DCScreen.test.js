import { shallow } from 'enzyme';

import DCScreen from '../../../components/dc/DCScreen';

describe('Tests on <DCScreen /> component', () => {
	const wrapper = shallow(<DCScreen />);

	test('Should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
