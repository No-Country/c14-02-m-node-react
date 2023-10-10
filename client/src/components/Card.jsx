import { useState } from "react";
import { CardSlider } from "./CardSlider";
import { CardInfo } from "./CardInfo";


export const Card = () => {
  const [isHeartRed, setIsHeartRed] = useState(false);

  const toggleHeartColor = (e) => {
    e.preventDefault();
    setIsHeartRed(!isHeartRed);
  };

  return (
    <article className=" w-[320px] h-[384px] md:w-[299px] md:h-[384px] mx-auto mt-8 rounded-xl ">
      {/* Se esta utilizando la etiqueta a por el motivo de no tener todavia las rutas definidas, una vez lista se cambiara a Link. */}
      <a href="#">
        <div className="w-full h-[280px] relative ">
          <button
            className={`z-10 h- w-0 absolute top-0 text-5xl right-11  cursor-pointer ${
              isHeartRed ? "text-red-600" : "text-black "
            }`}
            onClick={toggleHeartColor}
          >
            ♡
          </button>

        {/* Componente para mostrar el slider */}

          <CardSlider />
        </div>

        {/* Componente para mostrar un breve resumen */}

        <CardInfo />
      </a>
    </article>
  );
};
