import { useState } from "react";
import { CardSlider } from "./CardSlider";
import { CardInfo } from "./CardInfo";
import { Link } from "react-router-dom";

export const Card = ({ cardElement }) => {
  const [isHeartRed, setIsHeartRed] = useState(false);

  const toggleHeartColor = (e) => {
    e.preventDefault();
    setIsHeartRed(!isHeartRed);
  };

  return (
    <article className="w-[320px] h-[384px] md:w-[299px] md:h-[384px] mx-auto mt-8 rounded-xl">
      {/* Utiliza el componente Link en lugar de <a> para redirigir a /rooms */}
      <Link to="/rooms">
        <div className="w-full h-[280px] relative">
          <button
            className={`z-10 h- w-0 absolute top-0 text-4xl right-9 cursor-pointer ${
              isHeartRed ? "text-red-600" : "text-black "
            }`}
            onClick={toggleHeartColor}
          >
            ♥
          </button>

          {/* Componente para mostrar el slider */}
          <CardSlider cardElement={cardElement} />
        </div>

        {/* Componente para mostrar un breve resumen */}
        <CardInfo cardElement={cardElement} />
      </Link>
    </article>
  );
};