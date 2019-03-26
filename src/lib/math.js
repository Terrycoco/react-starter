export function sum(args) {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == 'number') {
    	result = result + arguments[i];
    }
	}
	return result;
}