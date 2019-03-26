import {App} from 'routes/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
	test('should match snapshot', () => {
		const app = shallow(<App test="testing" />);

		expect(app.find('h1').text()).toBe('testing');
		expect(app).toMatchSnapshot()
	})
})