import React from "react";

function Price({ data }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold mr-2">${data.data.price} USD</h2>
		</div>
	);
}

export default Price;
