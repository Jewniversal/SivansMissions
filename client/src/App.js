import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo/AddTodo';
import { store } from './redux';
import Todos from './Todos/Todos';

const App = () => {

	return (
		<Provider store={store}>
			<div className="todo=app container">
				<h1 className="center blue-text">Allmighty Chunts Missions </h1>
				<AddTodo />
				<Todos />
			</div>
		</Provider>
	);
};

export default App;




/*
  Unused Functions
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

  ]);
  */
// const getItems = async () => {
// 	console.log('called');
// 	const res  = await axios.get('/api/items');
// 	// setTodos(res.data);
// };
/*
	const addTodo = (todo) => {
		/*  If the new state is computed using the previous state,
    you can pass a function to setState. The function will receive
     the previous value, and return an updated value.
     Here’s an example of a counter component that uses both forms of setState:
		// setTodos((prevTodos) => [...prevTodos, todo]);
  };
  */
