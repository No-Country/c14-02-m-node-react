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

	const handlePrice1FilterChange = event => {
		setPrice1Filter(event.target.value);
	};

	const handlePrice2FilterChange = event => {
		setPrice2Filter(event.target.value);
	};

	const placeholderText = `Buscar alojamiento por ${
		selectedSearch === "title" ? "título" : "locación"
	}`;

	return (
		<form className="w-full md:flex md:flex-row flex flex-col ">
			{selectedSearch !== "price" ? (
				<input
					type="text"
					placeholder={placeholderText}
					className="p-2 border-none rounded-l-lg w-[80%] "
					value={titleFilter}
					onChange={handleTitleFilterChange}
				/>
			) : (
				<>
					<input
						type="number"
						placeholder="U$S desde"
						className="w-full md:w-36 mb-4 md:mb-0"
						value={price1Filter}
						onChange={handlePrice1FilterChange}
					/>

					<input
						type="number"
						placeholder="U$S hasta"
						className="w-full md:w-36 md:mr-2"
						value={price2Filter}
						onChange={handlePrice2FilterChange}
					/>
				</>
			)}
			<div className="flex flex-col md:flex-row md:mt-0 mt-7 md:justify-between md:items-center md:w-[100px] ">
			<button
				type="button"
				className="border-b-4 md:border-none border-black p-2 md:p-0 md:bg-transparent text-green-900 text-xl md:text-lg font-semibold md:rounded-full "
				onClick={applyTitleFilter}
			>
				Buscar
			</button>
			<button
				type="button"
				className="mt-2 text-3xl md:mt-0 text-red-500 md:text-[24px] rounded-full"
				onClick={cancelTitleFilter}
			>
				&#128473;
			</button>
			</div>
		</form>
	);
};
