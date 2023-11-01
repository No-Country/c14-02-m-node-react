import { AiFillStar } from "react-icons/ai";

const IvpReviews = () => {
	return (
		<div className=" m-8">
			{/* CALIFICACION */}
			<div className="flex items-center my-5">
				<AiFillStar size={30} className="mr-3" />
				<h2>4,89 · 45 evaluaciones</h2>
			</div>

			<div className="flex flex-col sm:flex-row mb-5">
				{/* ------------------PRIMERA COLUMNA------------------- */}

				<div className="flex-1">
					<div className="flex items-center rounded-md mb-5">
						<div className="w-1/2">
							<p>Limpieza</p>
						</div>
						<div className="w-2/5">
							{" "}
							{/* Cambié w-[40%] a w-2/5 */}
							<div className="h-1 bg-black rounded-md">
								<div className="h-full bg-black rounded-md"></div>
							</div>
						</div>
					</div>
					<div className="flex items-center rounded-md mb-5">
						<div className="w-1/2">
							<p>Comunicación</p>
						</div>
						<div className="w-2/5">
							{" "}
							{/* Cambié w-[40%] a w-2/5 */}
							<div className="h-1 bg-black rounded-md">
								<div className="h-full bg-black rounded-md"></div>
							</div>
						</div>
					</div>
					<div className="flex items-center rounded-md">
						<div className="w-1/2">
							<p>Check-in</p>
						</div>
						<div className="w-2/5">
							{" "}
							{/* Cambié w-[40%] a w-2/5 */}
							<div className="h-1 bg-black rounded-md">
								<div className="h-full bg-black rounded-md"></div>
							</div>
						</div>
					</div>
				</div>

				{/* ------------------SEGUNDA COLUMNA------------------- */}

				<div className="flex-1">
					<div className="flex items-center rounded-md mb-5 sd:my-5">
						<div className="w-1/2">
							<p>Veracidad</p>
						</div>
						<div className="w-2/5">
							{" "}
							{/* Cambié w-[40%] a w-2/5 */}
							<div className="h-1 bg-black rounded-md">
								<div className="w-2/5 h-full bg-black rounded-md"> {/* Cambié w-70 a w-2/5 */}</div>
							</div>
						</div>
					</div>
					<div className="flex items-center rounded-md mb-5">
						<div className="w-1/2">
							<p>Ubicación</p>
						</div>
						<div className="w-2/5">
							{" "}
							{/* Cambié w-[40%] a w-2/5 */}
							<div className="h-1 bg-black rounded-md">
								<div className="w-2/5 h-full bg-black rounded-md"> {/* Cambié w-40 a w-2/5 */}</div>
							</div>
						</div>
					</div>
					<div className="flex items-center rounded-md">
						<div className="w-1/2">
							<p>Precio según calidad</p>
						</div>
						<div className="w-2/5">
							{" "}
							{/* Cambié w-[40%] a w-2/5 */}
							<div className="h-1 bg-black rounded-md">
								<div className="w-2/5 h-full bg-black rounded-md"> {/* Cambié w-40 a w-2/5 */}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IvpReviews;
