import axios from 'axios';
import propTypes from 'prop-types';
import React, { useState } from 'react';

const AddTodo = ({ handleSend }) => {
	const [title, setTitle] = useState();
	const [content, setContent] = useState();

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
		setContent(setContent);
	};
	const handleContentChange = (event) => {
		setTitle(title);
		setContent(event.target.value);
	};
	const postItem = async (item) => {
		await axios.post('/api/items', item);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		postItem({ title, content });
		if (title !== '') {
			handleSend({ title, content });
		}
		setTitle('');
		setContent('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Add new mission:</label>
				<input type="text" onChange={handleTitleChange} value={title || ''} />
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
