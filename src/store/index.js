import  { configureStore } from 'redux-starter-kit';
import appReducer from './appReducer';

const store = configureStore({
	reducer: {
		app: appReducer
		//add more reducers
	}
});

export default store;