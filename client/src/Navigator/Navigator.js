import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));



const Navigator = () => {
	const [title, setTitle] = useState('C');
	const changeTitle = (title) => {
		setTitle(title);
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h1 className="center blue-text">{title}</h1>
			<Link to='/C'>
				<button onClick={()=> changeTitle('C')} className="btn waves-effect waves-light" type="submit" name="action">C</button>
			</Link>
			<Link to='/react'>
				<button onClick={()=> changeTitle('REACT')} className="btn waves-effect waves-light" type="submit" name="action">React</button>
			</Link>
		</div>
	);
};

export default Navigator;