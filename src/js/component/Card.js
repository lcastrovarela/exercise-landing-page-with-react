import React from "react";

export const MyCard = () => {
	return (
		<div className="card col text-center" style={{ width: "15rem" }}>
			<img
				src="http://placehold.it/500x325.jpg"
				className="card-img-top"
				alt="Your image here!"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris
				</p>
				<a href="#" className="btn btn-primary">
					Find Out more!
				</a>
			</div>
		</div>
	);
};
