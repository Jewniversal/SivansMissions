/* eslint-disable no-mixed-spaces-and-tabs */
import axios from 'axios';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, getTodosAction } from '../redux';

const Todos = () => {
	// const [todos, setTodos] = useState([]);
	const todos = useSelector(state => state).todos;
	const dispatch = useDispatch();
	const getItems = async () => {
		const response = await axios.get('/api/items');
		return dispatch(getTodosAction(response.data));
	};

	const deleteItem = async (todo) => {
		await axios.delete(`/api/items/${todo._id}`);
		return dispatch(deleteTodoAction(todo));
	};

	useEffect(() => {
		getItems();
		return () => {};
	},[]);
	const todoList = todos.length? (
		todos.map((todo) => (
			<div className="collection-item" key={todo._id}>
				<h6>Mission:</h6>
				<samp>{todo.title}</samp>
				<button onClick={() => deleteItem(todo)} className="btn waves-effect waves-light" style={{ float: 'right' }} type="submit" name="action">delete</button>
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

export default connect()(Todos);
