import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../hook/useSearch";

export const Search = () => {
  const { searchQuery, handleSearchChange } = useSearch();
  const navigate = useNavigate(); // Obtiene una función para cambiar de página en la aplicación.

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/searchfilter?query=${searchQuery}`);
    }
  };
  // La función handleSearch se ejecuta cuando el botón de búsqueda se hace clic. Verifica si searchQuery tiene un valor válido y, si es así, utiliza navigate para redirigir a la página de resultados de búsqueda con la consulta de búsqueda en la URL.
  
  return (
    <form className="w-96 flex">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Buscar alojamiento.."
        className="p-2 border-none rounded-l-full w-full"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="p-2 bg-red-500 text-white rounded-r-full"
      >
        Buscar
      </button>
    </form>
  );
};