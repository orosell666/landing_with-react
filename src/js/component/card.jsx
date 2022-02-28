import React from "react";

const Cards = () => {
	return (
		<div
			className="card my-3 m-auto lg border-light rounded-3  "
			style={{ width: "25 rem" }}>
			<svg
				class="bd-placeholder-img card-img-top"
				width="100%"
				height="150"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
				aria-label="Placeholder: Image cap"
				preserveAspectRatio="xMidYMid slice"
				focusable="false">
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#868e96"></rect>
				<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
					Image cap
				</text>
			</svg>
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
