const { shallow } = require('enzyme');
const { default: DCScreen } = require('../../../components/dc/DCScreen');

describe('Tests on <DCScreen /> component', () => {
	const wrapper = shallow(<DCScreen />);

	test('Should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});