import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { PiTelevisionBold } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";
import { MdSevereCold } from "react-icons/md";
import React, { useState } from "react";

function Amenities({ amenities }) {
  const amenitiesObj = {
    "Piscina": LiaSwimmingPoolSolid,
    "Cocina": TbToolsKitchen2,
    "Wifi": AiOutlineWifi,
    "Estacionamiento": AiOutlineCar,
    "Tv": PiTelevisionBold,
    "Gimnasio": CgGym,
    "Lavarropas": GiWashingMachine,
    'Aire Acondicionado': MdSevereCold
  };

  const initialAmenities = amenities.slice(0, 3);
  const [displayedAmenities, setDisplayedAmenities] = useState(initialAmenities);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setDisplayedAmenities(amenities);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setDisplayedAmenities(initialAmenities);
    setShowMore(true);
  };

  return (
    <div>
      <div className="border-b p-5">
        <p className="font-semibold text-2xl my-4">¿Qué ofrece este lugar?</p>

        {displayedAmenities.map((amenity, index) => (
          <div key={index} className="flex mb-4 items-center">
            {amenitiesObj[amenity] && (
              <span className="mr-2">
                {React.createElement(amenitiesObj[amenity], { size: 35 })}
              </span>
            )}
            <p>{amenity}</p>
          </div>
        ))}
      

      {showMore ? (
        <button
          className="font-semibold text-lg underline"
          onClick={handleShowMore}
        >
          Mostrar más
        </button>
      ) : (
        <button
          className="font-semibold text-lg underline"
          onClick={handleShowLess}
        >
          Mostrar menos
        </button>
      )}
    </div>
    </div>
  );
}

export default Amenities;
