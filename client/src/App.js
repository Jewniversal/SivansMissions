import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import Todos from './Todos/Todos';

const App = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		// componentDidMount
		getItems();
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
		const res  = await axios.get('/api/items');
		console.log(res)
		setTodos(res.data);
	};
	const deleteItem = async (id) => {
		console.log(id);
		const { res } = await axios.delete(`/api/items/${id}`);
		console.log(res);
	};
	const deleteTodo = (todo) => {
		console.log(todo._id);
		deleteItem(todo._id);
		getItems();
	};
	const addTodo = (todo) => {
		/* If the new state is computed using the previous state,
     you can pass a function to setState. The function will receive
      the previous value, and return an updated value.
      Here’s an example of a counter component that uses both forms of setState:
       */
		setTodos((prevTodos) => [...prevTodos, todo]);
	};

	return (
		<div className="todo=app container">
			<h1 className="center blue-text">Allmighty Chunts Missions </h1>
			<AddTodo handleSend={addTodo} />
			<Todos todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
