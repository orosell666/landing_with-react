import React from "react";

const Cards = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					tellus enim.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Cards;
