/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteAsyncTodoAction, getAsyncTodosAction, store } from '../redux';

const Todos = () => {
	const todos = useSelector(state => state).todos;
	const dispatch = useDispatch();
 
	useEffect(() => {
		console.log(store);
		dispatch(getAsyncTodosAction());
		return () => {};
	},[]);
	const todoList = todos.length? (
		todos.map((todo) => (
			<div className="collection-item" key={todo._id}>
				<h6>Mission:</h6>
				<samp>{todo.title}</samp>
				<button onClick={() => dispatch(deleteAsyncTodoAction(todo))} className="btn waves-effect waves-light" style={{ float: 'right' }} type="submit" name="action">delete</button>
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
