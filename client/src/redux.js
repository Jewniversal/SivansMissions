import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	todos: [],
	stateTitle: 'C'
};
const reducer = (state, action) => {
	console.log(action.type);
	console.log(action.payload);
	switch(action.type) {
	case 'ADD_TODO':
		return {
			...state,
			todos: [...state.todos, action.payload]
		};
	case 'GET_TODOS':
		return {
			...state,
			todos: action.payload
		};
	case 'DELETE_TODO':
		return {
			...state,
			todos: state.todos.filter(todo => todo._id !== action.payload)
		};
	case 'CHANGE_TITLE':
		return {
			...state,
			stateTitle: action.payload
		};
	default:
		return state;
	}
};

export const store = createStore(
	reducer,
	initialState,
	applyMiddleware(thunk),
);

// ACTIONS

const addTodoAction = (todo) => ({
	type:'ADD_TODO',
	payload: todo
});

const getTodosAction = (todos) => {
	return {
		type: 'GET_TODOS',
		payload: todos
	};
};
const deleteTodoAction = todo => {
	return {
		type: 'DELETE_TODO',
		payload: todo._id
	};
};
export const changeStateTitle = title => {
	return {
		type: 'CHANGE_TITLE',
		payload: title
	};
};

export const getAsyncTodosAction = (collectionName) => {
	return async (dispatch) => {
		const collection = {
			collectionName: collectionName
		};
		const response = await axios.get('/api/items', { params: collection });
		dispatch(getTodosAction(response.data));
	} ;
};

export const deleteAsyncTodoAction = (todo,collectionName) => {
	return async (dispatch) => {
		const collection = {
			collectionName: collectionName,
			todoId: todo._id
		};
		await axios.delete('/api/items/', { params : collection});
		dispatch(deleteTodoAction(todo));
	};
};

export const addAsyncTodoAction = (item) => {
	console.log(item);
	return async (dispatch) => {
		const post = await axios.post('/api/items', item);
		dispatch(addTodoAction(post.data));
	};
};











// MY OWN cREATE STORE
/*
const createStore = (reducer, initialState) => {
	let state = initialState;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(subScribedListener => subScribedListener !== listener);
		};
	};
	dispatch({});
	return { getState, dispatch, subscribe };

};
*/
