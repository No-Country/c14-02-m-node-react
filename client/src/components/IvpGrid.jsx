import noImage from "../assets/images/noImage.png";

function IvpGrid(photos) {
	const images = photos.images;

	return (
		<div className="md:mb-8">
			<div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 grid gap-4 ">
				<div className="md:col-span-2 md:row-span-2">
					<img
						src={photos.images[0] || noImage}
						alt="Imagen de ejemplo"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="md:col-start-3">
					<img src={`${photos.images[1]}`} alt="" className="w-full h-full object-cover" />
				</div>

				<div className="md:col-start-3 md:row-start-2">
					<img src={photos.images[2] || noImage} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="md:col-start-4 md:row-start-1">
					<img src={photos.images[3] || noImage} alt="" className="w-full h-full object-cover" />
				</div>
				<div className="md:col-start-4 md:row-start-2 mb-14 md:mb-0">
					<img src={photos.images[4] || noImage} alt="" className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	);
}

export default IvpGrid;
