import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigator from './Navigator/Navigator';
import { store } from './redux';
import Todos from './Todos/Todos';

const App = () => {

	return (
		<Provider store={store}>
			<Router>
				<div className="todo=app container">
					<Navigator />
					<Route path="/react" component={Todos} />
					<Route path="/C" component={Todos} />
				</div>
			</Router>
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
