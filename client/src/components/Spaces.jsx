import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LuShowerHead } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { LuSofa } from "react-icons/lu";

function Spaces({ spaces }) {
  const spacesObj = {
    Dormitorios: LiaBedSolid,
    Baños: LuShowerHead,
    Living: LuSofa,
    Cocina: FaKitchenSet,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de tarjetas visibles a la vez
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="border-t">
        <Slider {...settings} className="py-5">
          {spaces.map((space, index) => (
            <div key={index} className="card">
              {spacesObj[space] && (
                <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
                  <span className="icon">
                    {React.createElement(spacesObj[space], { size: 35 })}
                  </span>
                  <p>{space}</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Spaces;
