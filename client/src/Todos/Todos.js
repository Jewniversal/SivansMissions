
import React from 'react';
import transform from 'css-to-react-native';

const divStle = {
	wordWrap: 'break-word'
}
const pre =  [
    ['background', '#f4f4f4'],
    ['border', '1px solid #ddd'],
	['border-left', '3px solid #f36d33'],
	['color', '#666'],
	['page-break-inside','avoid'],
	['font-family','monospace'],
	['font-size','15px'],
	['line-height','1.6'],
	['margin-bottom','1.6em'],
	['max-width','100%'],
	['overflow','auto'],
	['display','block'],
	['padding','1em 1.5em'],
	['word-wrap','break-word'],

]

const newStyle = transform(pre)
/*
const pre = [
    : ;
    padding: ;
    display: block;
    word-wrap: break-word;
] */

const Todos = ({ todos, deleteTodo }) => {


	const todoList = todos.length? (
		todos.map((todo) => (
			<div className="collection-item row" key={todo._id}S>
				<h6>Mission:</h6>
				<text>{todo.title}</text>
				<button onClick={() => { deleteTodo(todo); }} className="btn waves-effect waves-light" style={{ float: 'right' }} type="submit" name="action">delete</button>
				<h6>Mission Report:</h6>
				<div className="card-panel grey darken-2" style={newStyle}>
					<blockquote className="white-text text-light-green lighten-1">{todo.content}</blockquote>
				</div>
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
export default Todos;
