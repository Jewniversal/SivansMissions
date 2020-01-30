import { GET_ITEMS } from '../actions/types';



const initialState = {
	items: [],
	item: {}
};


export default (state = initialState, action) => {
	action.type=GET_ITEMS;
	switch(action.type) {
	case GET_ITEMS:
		console.log('I AM HERE');
		console.log(action.payload);
		return {
			...state,
			items: action.payload
		};
	default:
		return state;
	}
};