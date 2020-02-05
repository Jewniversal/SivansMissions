import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeStateTitle, getAsyncTodosAction } from '../redux';


const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));



const Navigator = () => {
	const [title, setTitle] = useState('C');

	const dispatch = useDispatch();

	const changeTitle = (title) => {
		setTitle(title);
	};
	const onClickHandler = (title) => {
		changeTitle(title);
		dispatch(changeStateTitle(title));
		dispatch(getAsyncTodosAction(title));
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h1 className="center blue-text">{title}</h1>
			<Link to='/C'>
				<button onClick={()=> onClickHandler('C')} className="btn waves-effect waves-light" type="submit" name="action">C</button>
			</Link>
			<Link to='/react'>
				<button onClick={()=> onClickHandler('react')} className="btn waves-effect waves-light" type="submit" name="action">React</button>
			</Link>
		</div>
	);
};

export default Navigator;