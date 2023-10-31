import { useState } from "react";

function Description({ description }) {
	const [showMore, setShowMore] = useState(false);

	const toggleText = () => {
		setShowMore(!showMore);
	};

	return (
		<div>
			<div className="m-5">
				<h1 className="text-2xl font-semibold my-3">Acerca de este lugar</h1>

				{!showMore && (
					<div className="show-all">
						<p>{description.substring(0, 200)}...</p>
					</div>
				)}

				{description.length > 200 && showMore && (
					<div className={`show-${showMore ? "all" : "more"}`}>
						<div className="my-3">
							<p>{description}</p>
						</div>
					</div>
				)}

				<button className="font-semibold text-lg underline" onClick={toggleText}>
					{showMore ? "Mostrar menos" : "Mostrar más"}
				</button>
			</div>
		</div>
	);
}

export default Description;
