import React from "react";

const Jumbo = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A warm welcome!</h1>
			<p className="lead">
				Ut vehicula nisl vel congue cursus. Duis eu lacinia ligula.
				Morbi diam nisl, porta a metus et, interdum gravida dui.
				Praesent accumsan ut augue quis sagittis. Etiam feugiat ipsum et
				nisi aliquam feugiat. Ut enim urna, interdum aliquam finibus
				quis, luctus a nisl. Cras quam sem, consequat ac quam ut,
				laoreet commodo ex.
			</p>
			<hr className="my-4" />
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};

export default Jumbo;
