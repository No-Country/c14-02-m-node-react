import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	filterPublicationsByTitle,
	filterPublicationsByLocation,
	filterPublicationsByPrice,
} from "../store/publicationSlice";

export const Search = ({ selectedSearch, setShowInput }) => {
	const dispatch = useDispatch();
	const [titleFilter, setTitleFilter] = useState(""); // Estado local para el filtro por título
	const [price1Filter, setPrice1Filter] = useState(""); // Estado para el filtro de precio 1
	const [price2Filter, setPrice2Filter] = useState(""); // Estado para el filtro de precio 2

	// cambio título en el filtro
	const handleTitleFilterChange = event => {
		setTitleFilter(event.target.value);
	};

  // aplicar el filtro
  const applyTitleFilter = () => {
    if (selectedSearch === "title") {
      dispatch(filterPublicationsByTitle(titleFilter));
    }
    if (selectedSearch === "location") {
      dispatch(filterPublicationsByLocation(titleFilter));
    }
    if (selectedSearch === "price") {
      dispatch(filterPublicationsByPrice({ price1Filter, price2Filter }));
    }
  };

	// cancelar el filtro
	const cancelTitleFilter = () => {
		// Restablece el filtro de título y vuelve a cargar todas las publicaciones
		setTitleFilter("");
		dispatch(filterPublicationsByTitle(""));
		setShowInput(false);
	};

  const handlePrice1FilterChange = (event) => {
    setPrice1Filter(event.target.value);
  };
  
  const handlePrice2FilterChange = (event) => {
    setPrice2Filter(event.target.value);
  };
  
  const placeholderText = `Buscar alojamiento por ${selectedSearch==="title" ? "título" : "locación"}`;

  return (
    <form className="w-96 flex">
      {selectedSearch !== "price" ? ( 
        <input
          type="text"
          placeholder={placeholderText}
          className="p-2 border-none rounded-l-full w-full"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
      ) : (
        <>
        <input
            type="number"
            placeholder="U$S desde"
            className="ml-2 p-2 border-none rounded-1-full w-1/3 mr-2"
            value={price1Filter}
            onChange={handlePrice1FilterChange}
          />

          <input
            type="number"
            placeholder="U$S hasta"
            className="ml-2 p-2 border-none w-1/3 mr-2"
            value={price2Filter}
            onChange={handlePrice2FilterChange}
          />
        </>
      )}
      <button
        type="button"
        className="p-2 bg-red-500 text-white rounded-full mr-2"
        onClick={applyTitleFilter}
      >
        Buscar
      </button>
      <button
        type="button"
        className="p-1 bg-red-500 text-white rounded-full"
        onClick={cancelTitleFilter}
      >
        Cancelar
      </button>
    </form>
  );
  
};