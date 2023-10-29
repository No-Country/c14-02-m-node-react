import React, { useState, useEffect } from "react";
import { CardEdit } from "../components/CardEdit";
import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublications } from "../store/publicationSlice";
import { loadFavorites } from "../store/favoriteSlice";
import { Link } from "react-router-dom";

const PublicationsUser = () => {
	const { user } = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPublications());
		dispatch(loadFavorites(user?.email));
	}, [user, dispatch]);

	// Usar Redux para obtener las publicaciones y favoritos
	const { allPublications, filteredPublications, status } = useSelector(
		state => state.publications
	);
	const allFavorites = useSelector(state => state.favorites.allFavorites);

	return (
		<div>
			<div className="m-4 p-8 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
				<Link
					to="/"
					className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex flex-col items-center rounded-lg "
				>
					&#8592;
				</Link>
				<div className="text-center">
					<h2 className="text-3xl font-semibold">Tus Airbnb</h2>
				</div>
			</div>
			<section className="containerCards flex flex-wrap w-full p-4">
				{status === "loading" ? (
					<span>Cargando...</span>
				) : status === "failed" ? (
					<span>Error al cargar las publicaciones</span>
				) : filteredPublications.length > 0 ? (
					filteredPublications?.map((publication, index) => {
						if (user.email === publication.email) {
							return <CardEdit key={index} publication={publication} />;
						}
					})
				) : (
					<span>No hay publicaciones disponibles</span>
				)}
			</section>
		</div>
	);
};

export default PublicationsUser;
