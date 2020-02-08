/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigator from './Navigator/Navigator';
import Todos from './Todos/Todos';

const App = () => {
	const titles = useSelector(({ titles }) => titles);
	const titleList= titles.length ? (
		titles.map((title)=> (
			<div>
				<Route path={`/${title}`} component={Todos} />
			</div>
		))
	):(
		<p className="center">Missing titles!</p>
	);
	return (
		<Router>
			<div className="todo=app container">
				<Navigator />
				<br/>
				{titleList}
			</div>
		</Router>

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
