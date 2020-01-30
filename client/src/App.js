import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo/AddTodo';
import store from './store';
import Todos from './Todos/Todos';

const App = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		// componentDidMount
		// getItems();
		return () => {
			// componentWillUnmount
		};
	}, [
		/*
    Dependencies array
    componentWillRecieveProps
    */
	]);
	const getItems = async () => {
		console.log('called');
		const res  = await axios.get('/api/items');
		setTodos(res.data);
	};
	const deleteItem = async (id) => {
		await axios.delete(`/api/items/${id}`);
		getItems();
	};
	const deleteTodo = (todo) => {
		deleteItem(todo._id);
	};
	const addTodo = (todo) => {
		/*  If the new state is computed using the previous state,
    you can pass a function to setState. The function will receive
     the previous value, and return an updated value.
     Here’s an example of a counter component that uses both forms of setState: */
		setTodos((prevTodos) => [...prevTodos, todo]);
	};


	return (
		<Provider store={store}>
			<div className="todo=app container">
				<h1 className="center blue-text">Allmighty Chunts Missions </h1>
				<AddTodo handleSend={getItems} />
				<Todos AddTodo={addTodo} deleteTodo={deleteTodo} />
			</div>
		</Provider>
	);
};

export default App;



/*
Unused Functions

*/