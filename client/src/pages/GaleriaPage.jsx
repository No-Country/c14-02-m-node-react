import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublications, filterPublicationsByTitle } from "../store/publicationSlice";
import { loadFavorites } from "../store/favoriteSlice";
// import { filterPublicationsByTitle } from "../store/publicationSlice";
import { fetchUsers } from "../store/userSlice";

export const GaleriaPage = () => {
	const { user } = useAuth();
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublications());
    dispatch(loadFavorites(user?.email));
    dispatch(fetchUsers())
  }, [user, dispatch]);

	// Usar Redux para obtener las publicaciones y favoritos
	const { allPublications, filteredPublications, status } = useSelector(
		state => state.publications
	);
	const allFavorites = useSelector(state => state.favorites.allFavorites);

  return (
    <section className="containerCards flex flex-wrap w-full p-4">


      {status === "loading" ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
      </div>
      ) : status === "failed" ? (
        <span>Error al cargar las publicaciones</span>
      ) : filteredPublications.length > 0 ? (
        filteredPublications?.map((publication, index) => {
          const isFavorite = allFavorites.some(favorite => favorite.publicationId === publication._id);
          return <Card key={index} publication={publication} isFavorite={isFavorite} />;
        })
      ) : (
        <span>No hay publicaciones disponibles</span>
      )}
    </section>
  );
};
