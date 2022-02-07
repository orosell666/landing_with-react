import React from "react";

//include images into your bundle

import NaviBar from "./NaviBar.jsx";
import Jumbo from "./Jumbo.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NaviBar />
			<div className="container">
				<Jumbo />
				<div className="in-flex">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default Home;

