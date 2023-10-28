import noImage from "../assets/images/noImage.png"

function IvpGrid(photos) {
  const images = photos.images;

  return (

      <div className="p-4">
        <div className="grid grid-cols-4 gap-2 border rounded-lg overflow-hidden">
          <div className="col-span-4 lg:col-span-2 lg:row-span-2">
            <img
              src={photos.images[0] || noImage}
              alt="Imagen de ejemplo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block col-span-1">
            <img
              src={`${photos.images[1]}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block col-span-1">
            <img
              src={photos.images[2] || noImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block col-span-1">
            <img
              src={photos.images[3] || noImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block col-span-1">
            <img
              src={photos.images[4] || noImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
}

export default IvpGrid;
