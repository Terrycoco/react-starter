const A = require('./types').APP;

export function testAction(testObject) {
	return {		
    type: A.TEST_TYPE,
		payload: testObject
	}
};