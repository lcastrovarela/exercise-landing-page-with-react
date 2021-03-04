import React from "react";
/*import { Jumbotron, Button } from "react-bootstrap";*/

export const MyJumbotron = () => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">A warm welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};

/*export const MyJumbotron = () => {
	return (
		<Jumbotron>
			<h1>A warm welcome!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
			</p>
			<p>
				<Button variant="primary">Call to action!</Button>
			</p>
		</Jumbotron>
	);
};*/
