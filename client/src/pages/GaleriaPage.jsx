import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPublications } from "../store/publicationSlice";
import { loadFavorites } from "../store/favoriteSlice";
import { filterPublicationsByTitle } from "../store/publicationSlice";

export const GaleriaPage = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchPublications());
    dispatch(loadFavorites(user?.email));
  }, [user, dispatch]);

  // Usar Redux para obtener las publicaciones y favoritos
  const { allPublications, filteredPublications, status } = useSelector((state) => state.publications);
  const allFavorites = useSelector((state) => state.favorites.allFavorites);

  return (
    <section className="containerCards flex flex-wrap w-full p-4">


      {status === "loading" ? (
        <span>Cargando...</span>
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
