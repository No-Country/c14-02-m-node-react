import React from "react";

function Type({ data }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold">
				{data.offering}: {data.type}.
			</h2>
		</div>
	);
}

export default Type;
