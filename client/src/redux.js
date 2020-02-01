import { createStore } from 'redux';



const initialState = {
	todos: []
};
const reducer = (state, action) => {
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
	default:
		return state;
	}
};

export const store = createStore(
	reducer,
	initialState,
	window.devToolsExtension && window.devToolsExtension()
);

// ACTIONS

export const addTodoAction = (todo) => ({
	type:'ADD_TODO',
	payload: todo
});

export const getTodosAction = (todos) => {
	return {
		type: 'GET_TODOS',
		payload: todos
	};
};
export const deleteTodoAction = todo => {
	return {
		type: 'DELETE_TODO',
		payload: todo._id
	};
};