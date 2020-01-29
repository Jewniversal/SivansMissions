/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
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
export default Todos;
