import axios from 'axios';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemAction';

const Todos = ({ deleteTodo }) => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		console.log('LOL');
		getItems();
  		(async () => {
			const response = await axios.get('/api/items');
			setTodos(response.data);
		})();
		return () => {};
	},[]);
	console.log(todos);
	const todoList = todos.length? (
		todos.map((todo) => (
			<div className="collection-item" key={todo._id}>
				<h6>Mission:</h6>
				<samp>{todo.title}</samp>
				<button onClick={() => { deleteTodo(todo); }} className="btn waves-effect waves-light" style={{ float: 'right' }} type="submit" name="action">delete</button>
				<h6>Mission Report:</h6>
				<code>{todo.content}</code>
			</div>
		))
	) : (
		<p className="center"> You have no missions registered </p>
	);
	return (
		<div className="todos collection">
			{todoList}
		</div>
	);
};

Todos.propTypes = {
	deleteTodo: propTypes.func.isRequired,
};
export default connect(null, { getItems })(Todos);
