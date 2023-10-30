import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPublications } from "../store/publicationSlice";
import { loadFavorites } from "../store/favoriteSlice";
import { fetchUsers } from "../store/userSlice";
import { Link } from "react-router-dom";

export const FavoritesPages = () => {
	const [favoriteCards, setFavoriteCards] = useState([]);

	// const { user } = useAuth();
	// console.log("user tengo? -->", user)
	// const user_id = user

	const { data, error, isLoading } = useGetAllFavoritesQuery();

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
				{favoriteCards.map(cardElement => {
					// Filtra las tarjetas favoritas de acuerdo a la lista de favoritas
					if (favoriteCards.some(favorite => favorite._id === cardElement.id)) {
						return <Card key={cardElement.id} cardElement={cardElement} />;
					}
					return null;
				})}
			</section>
		</section>
	);
  const { user } = useAuth();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchPublications());
    dispatch(loadFavorites(user?.email));
    dispatch(fetchUsers())

  }, [user, dispatch]);

  // Usar Redux para obtener las publicaciones y favoritos
  const { allPublications, filteredPublications, status } = useSelector((state) => state.publications);
  const allFavorites = useSelector((state) => state.favorites.allFavorites);
console.log("allFavorites -->", allFavorites)
  return (
  < div> 
  <div className="m-4 p-8 rounded-xl shadow-[5px_10px30px-3px_rgba(0,0,0,0.3)] flex items-center">
                <Link
                    to="/"
                    className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex items-center justify-center rounded-lg"
                >
                    &#8592;
                </Link>
                <div className="mx-auto">
                    <h2 className="text-3xl font-semibold">Tus Favoritos</h2>
                </div>
            </div>
                 
    <section className="containerCards flex flex-wrap w-full p-4">
       
       
      {status === "loading" ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900">
       
        </div>
      
      </div>
      ) : status === "failed" ? (
        <span>Error al cargar las publicaciones</span>
      ) : allFavorites.length > 0 ? (
        filteredPublications?.map((publication, index) => {
          const isFavorite = allFavorites.some(favorite => favorite.publicationId === publication._id);
          return isFavorite && <Card key={index} publication={publication} isFavorite={isFavorite} />;
        })
      ) : (
        <span >No tienes favoritos seleccionados</span>
      )}
    </section>
    </div>  
  );
};
