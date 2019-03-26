import { createReducer } from 'redux-starter-kit'; 
const A = require('actions/types').APP;

//whatever structure your initial state is here
const state = {
   test: []
};


export default createReducer(state, {
//EXAMPLES
  // "ADD_TODO": (state, action) => {
  // 	//"mutate" state array by calling push
  // 	state.push(action.payload);
  // },
  // "TOGGLE_TODO": (state, action) => {
  // 	const todo = state[action.payload.index];
  // 	//"mutate" the object by overwriting a field
  // 	todo.completed = !todo.completed;
  // },
  // "REMOVE_TODO": (state, action) => {
  // 	//can still return an immutably-updated value if we want to
  // 	return state.filter((todo, i) => i !== action.payload.index);
  // }

  [A.TEST_TYPE]: (state, action) => {
    state.test.push(action.payload);
	}

});

//note state is now automagically mutated and a copy returned!