import React from "react";

//include images into your bundle

import NaviBar from "./navbar.jsx";
import Jumbo from "./jumbotron.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NaviBar />
			<div className="container">
				<Jumbo />
				<div className="card-group row row-cols-1 row-cols-md-3 g-4">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<div className="dark pagination justify-content-center">
				<Footer />
			</div>
			
		</div>
	);
};

export default Home;
