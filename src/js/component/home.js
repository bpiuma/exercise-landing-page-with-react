import React from "react";

import { NavBar } from "./navBar.js";
import { Jumbotron } from "./jumbotroon";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
