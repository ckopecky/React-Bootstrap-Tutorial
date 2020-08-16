import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
const SampleJumbotron = () => {
	return (
		<Jumbotron className="sample-jumbotron">
			<h1>Welcome to the Educative Movie Application!</h1>
			<p>
				This is a simple application built to demonstrate how React works with React-Bootstrap. This is a Jumbotron component. 
			</p>
			<p>
				<Button variant='primary'>Learn more</Button>
			</p>
		</Jumbotron>
	);
};

export default SampleJumbotron;
