import React from 'react';
import { useFetch } from "../api/useFecht";
import { useState } from "react";
import { CardSlider } from "./CardSlider";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CardInfo from './CardInfo';
import { useAddFavoriteMutation, useRemoveFavoriteMutation} from "../store/rtk-query";


export const Card = ({publication, isFavorite}) => {
  const navigate = useNavigate();

  const [addFav, {isLoadingAdd}] = useAddFavoriteMutation()
  const [DeleteFav, {isLoadingDelete}] = useRemoveFavoriteMutation()
  const [isHeartRed, setIsHeartRed] = useState(isFavorite);
  const { user } = useAuth();


  const images = publication.photos;

  const toggleHeartColor = (e) => {
    if (user) {
      if(isHeartRed){
        //si esta clickeado borrar de la base de datos/elimina
        DeleteFav(publication._id)
        e.preventDefault();
        setIsHeartRed(!isHeartRed);
      }else{
        //se crea un post osea un favorito
        const fav = {email: user.email ,publicationId: publication._id}
        addFav(fav)
        e.preventDefault();
        setIsHeartRed(!isHeartRed);
      }
    } else {
      e.preventDefault();
      navigate("/register");
    }
  };

    // const sendFavoriteStatusToServer = (publicationId, isFavorite) => {
    // const apiUrl = `https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/favorite/${publicationId}`;
    // const requestData = {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ isFavorite }),
    // };

  //   fetch(apiUrl, requestData)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Error en la respuesta del servidor');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     // Manejar la respuesta exitosa del servidor
  //   })
  //   .catch(error => {
  //     console.error('Error en la llamada al servidor:', error);
  //   });
  // }

  return (
    <>
      <article className="w-[320px] h-[384px] md:w-[299px] md:h-[384px] mx-auto mt-8 rounded-xl">
        {/* Utiliza el componente Link en lugar de <a> para redirigir a /rooms */}
        <Link to={`/publication/${publication._id}`}>
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
            <CardSlider images={images} />
          </div>

          {/* Componente para mostrar un breve resumen */}
          <CardInfo info={publication} />
        </Link>
      </article>
    </>
    
  );
};


