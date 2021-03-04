import React from "react";

//include images into your bundle
import { MyNavbar } from "./Navbar";
import { MyJumbotron } from "./Jumbotron";
import { MyCard } from "./Card";
import { MyFooter } from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<MyNavbar />
			<MyJumbotron />
			<div className="container">
				<div className="row">
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
				</div>
			</div>
			<MyFooter />
		</div>
	);
}
