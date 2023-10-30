import React from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../hook/useSearch";

const SearchFilter = () => {
	const { filteredLocations } = useSearch();
	const location = useLocation(); // Obtiene información sobre la ubicación actual de la aplicación, incluyendo la URL.
	const queryParams = new URLSearchParams(location.search); // Analiza los parámetros de consulta en la URL actual y los almacena en queryParams.
	const searchQuery = queryParams.get("query"); // Obtiene el valor del parámetro "query" de la URL actual, que generalmente se usa para recuperar la consulta de búsqueda.
	return (
		<div>
			<h2>Resultados de búsqueda para: {searchQuery}</h2>
			<ul>
				{filteredLocations &&
					filteredLocations.map((location, index) => <li key={index}>{location}</li>)}
			</ul>
		</div>
	);
};

export default SearchFilter;
