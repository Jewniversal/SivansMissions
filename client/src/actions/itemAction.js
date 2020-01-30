import axios from 'axios';
import { GET_ITEMS } from './types';

export const getItems = () => {
	console.log('Entered');
	return async (dispatch) => {
		const res  = await axios.get('/api/items');
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		});
	};
};
