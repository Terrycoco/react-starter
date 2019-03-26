import * as actions from 'actions/appActions';
const A = require('actions/types').APP;

describe('appActions', () => {
	it('should create a test action', () => {
		const testObject = {completed: false, text: 'Test A'};
		const expectedAction = {
			type: A.TEST_TYPE,
			payload: testObject
		};
		expect(actions.testAction(testObject)).toEqual(expectedAction);
	})
})