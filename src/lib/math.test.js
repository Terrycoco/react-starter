import * as math from './math';

describe('math.js', () => {
	test('should add 2 numbers' , () => {
		expect(math.sum(1,2)).toBe(3);
	})
	test('should add 3 numbers' , () => {
		expect(math.sum(1,2,3)).toBe(6);
	})
	test('should ignore non-numbers' , () => {
		expect(math.sum(1,2,'a', 3)).toBe(6);
	})
});