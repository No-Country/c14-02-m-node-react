import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { useGetAllFavoritesQuery } from "../store/rtk-query";
import { useAuth } from "../context/AuthContext";
export const FavoritesPages = () => {

  const [favoriteCards, setFavoriteCards] = useState([]);
  
  // const { user } = useAuth();
  // console.log("user tengo? -->", user)
  // const user_id = user

  const {data, error, isLoading} = useGetAllFavoritesQuery()

  // useEffect( ()=>{
  //   if(data){
  //     console.log("que pa tiene data? -->", data)
  //     console.log("que pa tiene error? -->", error)
  //     console.log("que pa tiene isLoading? -->", isLoading)
  //     console.log("useGetAllFavoritesQuery? -->", useGetAllFavoritesQuery)
  //   }
  // },[data])


  // useEffect(() => {
  //     fetch('https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/favorite/') // Endpoint de las tarjetas favoritas
  //       .then((response) => response.json())
  //       .then((data) => setFavoriteCards(data)) // Actualiza el estado con las tarjetas favoritas
  //       .catch((error) => console.error('Error al cargar tarjetas favoritas:', error));
  //   }, []);

  return (
    <section className="md:w-[70%] mx-auto">
      <div className="px-5 md:px-0 flex items-center justify-between mt-5">
        {/* El link esta listo para que se ponga a donde se quiere que lo llevemos atras seria el perifl o al home. */}
        <Link
          to="/"
          className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex flex-col items-center rounded-lg "
        >
          &#8592;
        </Link>
        <h2 className="text-xl md:text-3xl underline">Tus alojamientos favoritos</h2>
      </div>
      <section className="conteinerCards flex flex-wrap w-ful p-4">
        {favoriteCards.map((cardElement) => {
          // Filtra las tarjetas favoritas de acuerdo a la lista de favoritas
          if (favoriteCards.some((favorite) => favorite._id === cardElement.id)) {
            return <Card key={cardElement.id} cardElement={cardElement} />;
          }
          return null;
        })}
      </section>
    </section> 
  );
};


