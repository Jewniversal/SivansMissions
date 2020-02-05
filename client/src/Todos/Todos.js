/* eslint-disable react/jsx-key */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from '../AddTodo/AddTodo';
import { deleteAsyncTodoAction, getAsyncTodosAction } from '../redux';

const Todos = () => {
	const todos = useSelector(({ todos }) => todos);
	const stateTitle = useSelector(({stateTitle}) => stateTitle);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAsyncTodosAction(stateTitle));
		return () => {};
	},[]);
	const todoList = todos.length? (
		todos.map((todo) => (
			<div className="collection-item" key={todo._id}>
				<h6>Mission:</h6>
				<samp>{todo.title}</samp>
				<button onClick={() => dispatch(deleteAsyncTodoAction(todo,stateTitle))} className="btn waves-effect waves-light" style={{ float: 'right' }} type="submit" name="action">delete</button>
				<h6>Mission Report:</h6>
				<code>{todo.content}</code>
			</div>
		))
	) : (
		<p className="center"> You have no missions registered </p>
	);
	return (
		<div>
			<AddTodo />
			<div className="todos collection">
				{todoList}
			</div>
		</div>
	);
};

export default Todos;
