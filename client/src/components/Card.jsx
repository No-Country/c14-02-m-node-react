import React from 'react';
import { useFetch } from "../api/useFecht";
import { useState } from "react";
import { CardSlider } from "./CardSlider";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Definición de CardInfo en el mismo archivo
const CardInfo = () => {
  // Contenido de CardInfo
};

export const Card = ({ cardElement }) => {
  const { data } = useFetch("http://localhost:3000/api/publication/");
  const [isHeartRed, setIsHeartRed] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleHeartColor = (e) => {
    if (user) {
      e.preventDefault();
      setIsHeartRed(!isHeartRed);
    } else {
      e.preventDefault();
      navigate("/register");
    }
  };

  return (
    <>
      <article className="w-[320px] h-[384px] md:w-[299px] md:h-[384px] mx-auto mt-8 rounded-xl">
        {/* Utiliza el componente Link en lugar de <a> para redirigir a /rooms */}
        <Link to="/rooms">
          <div className="w-full h-[280px] relative">
            <button
              className={`z-10 h- w-0 absolute top-0 text-4xl right-9 cursor-pointer  ${
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
          <CardInfo />
          
        </Link>
      </article>
    </>
    
  );
};
