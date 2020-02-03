/* eslint-disable no-mixed-spaces-and-tabs */
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncTodoAction } from '../redux';

const AddTodo = () => {
	const [title, setTitle] = useState();
	const [content, setContent] = useState();

	const dispatch = useDispatch();

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (title !== '') {
			dispatch(addAsyncTodoAction({ title, content }));
		}
		setTitle('');
		setContent('');
	};

	return (
		<div >
			<form  onSubmit={handleSubmit} style={{flexDirection:'row', flex: 1, flexWrap: 'wrap'}}>
				<label>Add new mission:</label>
				<input  className="flow-text" type="text" onChange={handleTitleChange} value={title || ''}  />
			</form>
			<form onSubmit={handleSubmit}>
				<label>Mission Report:</label>
				<input type="text" onChange={handleContentChange} value={content || ''} />
				<button className="btn waves-effect waves-light" type="submit" name="action">Add Mission</button>
			</form>
		</div>
	);
};

AddTodo.propTypes = {
	handleSend: propTypes.func.isRequired,
};

export default AddTodo;
