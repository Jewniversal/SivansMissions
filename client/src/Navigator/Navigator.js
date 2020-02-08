/* eslint-disable react/jsx-key */
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAsyncTitleAction, changeStateTitle, getAsyncTodosAction, getAyncCategories } from '../redux';


const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			float: 'left'
		},
	},
}));

const Navigator = () => {
	useEffect(() => {
		dispatch(getAyncCategories());
		return () => {

		};
	}, []);
	const titles = useSelector(({ titles }) => titles);
	const [title, setTitle] = useState();
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const classes = useStyles();

	const dispatch = useDispatch();

	const addTitle = (title) => {
		console.log('title');
		dispatch(addAsyncTitleAction(title));
		setTitle('');
	};
	const onClickHandler = (title) => {
		dispatch(changeStateTitle(title));
		dispatch(getAsyncTodosAction(title));
	};
	const titleList = titles.length ? (
		titles.map((title) => (
			<div >

				<span><Link to={`/${title}`}>
					<button onClick={()=> onClickHandler(title)} className="btn waves-effect waves-light" type="submit" name="action">{title}</button>
				</Link></span>
			</div>
		))
	) : (
		<p className="center">Add a new title</p>
	);

	return (
		<div >
			<h1 className="center blue-text">Missions</h1>
			<form onSubmit={addTitle}>
				<label>Enter title here</label>
				<input onChange={handleTitleChange} type="text" value={title || ''}/>
			</form>
			<button onClick={()=> addTitle(title)}className="btn waves-effect waves-light" type="submit" name="action">Add new Title</button>
			<div className={classes.root}>
				{titleList}
				<br/>
			</div>
		</div>
	);
};

export default Navigator;




/* 			<h1 className="center blue-text">{title}</h1>
			<Link to='/C'>
				<button onClick={()=> onClickHandler('C')} className="btn waves-effect waves-light" type="submit" name="action">C</button>
			</Link>
			<Link to='/react'>
				<button onClick={()=> onClickHandler('React')} className="btn waves-effect waves-light" type="submit" name="action">React</button>
			</Link> */