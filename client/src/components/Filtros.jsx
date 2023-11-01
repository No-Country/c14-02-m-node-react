import styled from "styled-components";
import boats from "../assets/images/boats.png";
import lakefrontt from "../assets/images/lakefrontt.png";

import cabañas from "../assets/images/cabanas.png";

import piletasincreibles from "../assets/images/piletasincreibles.png";
import casas from "../assets/images/casa.png";
import depto from "../assets/images/departamento.png";
import casarodante from "../assets/images/casarodante.png";
import casacampo from "../assets/images/campo.png";
import filter from "../assets/images/filter.png";
import { filterNav } from "../store/publicationSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 30px;
	height: 17px;

	& input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	& span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	& span:before {
		position: absolute;
		content: "";
		height: 13px;
		width: 13px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	& input:checked + span {
		background-color: black;
	}

	& input:focus + span {
		box-shadow: 0 0 1px black;
	}

	& input:checked + span:before {
		-webkit-transform: translateX(13px);
		-ms-transform: translateX(13px);
		transform: translateX(13px);
	}
`;

const Filtros = () => {
	const [selectedFilter, setSelectedFilter] = useState(null);
	const [showDeleteButton, setShowDeleteButton] = useState(false);
	const dispatch = useDispatch();

	const click = nombre => {
		const filter = nombre;
		console.log(filter);
		dispatch(filterNav(filter));

		setSelectedFilter(nombre);
		// Mostrar el botón "Eliminar"
		setShowDeleteButton(true);
	};

	const handleDeleteClick = () => {
		if (selectedFilter) {
			setSelectedFilter(null);
			setShowDeleteButton(false);
			dispatch(filterNav(""));
		}
	};
// 
	return (
		<div className="w-full md:flex md:flex-row md:justify-around md:items-center md:mb-7 md:px-10 md:gap-6 md:bg-white  md:z-40 md:sticky md:top-20 ">
			<div className="flex gap-4 overflow-y-hidden md:flex items-center md:gap-2 ">

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={depto} />
					<button onClick={() => click("Departamento")}>Departamentos</button>
					{selectedFilter === "Departamento" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm "
						>
							Eliminar
						</button>
					)}
				</div>

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer    font-medium   text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={casas} />
					<button onClick={() => click("Casa")}>Casas</button>
					{selectedFilter === "Casa" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600  text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</div>

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={casacampo} />
					<button onClick={() => click("Granero")}>Campo</button>
					{selectedFilter === "Granero" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</div>
				{/* ------------DE ACA PARA ABAJO NO ANDAN-------------- */}

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={cabañas} />
					<button onClick={() => click("Cabaña")}>Cabañas</button>
					{selectedFilter === "Cabaña" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</div>

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={lakefrontt} />
					<button onClick={() => click("Hotel")}>Hotel</button>
					{selectedFilter === "Hotel" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</div>

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={casarodante} />
					<button onClick={() => click("Casa Rodante")}>Casa rodante</button>
					{selectedFilter === "Casa Rodante" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</div>

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={piletasincreibles} />
					<button onClick={() => click("Castillo")}>Castillos</button>
					{selectedFilter === "Castillo" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</div>

				<div className="flex flex-col items-center bg-white m-4  cursor-pointer text-center   font-medium text-gray-600 border-b-2 border-transparent hover:transition duration-200 hover:border-solid  hover:border-gray-300 hover:text-black ">
					<img class="w-11 md:w-6 md:h-6" src={boats} />
					<button onClick={() => click("Barco")}>Barcos</button>
					{selectedFilter === "Barco" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</div>
			</div>
			<div className="hidden md:flex p-4 items-center gap-7 rounded-lg border border-gray-300 bg-white cursor-pointer">
				<img src={filter} />
				<button className="text-gray-700 text-base font-semibold ">Filtros</button>
			</div>
			<div className="hidden md:flex p-4  items-center gap-7  rounded-lg border border-gray-300 bg-white cursor-pointer">
				<button className="text-gray-700  text-base">Mostrar total (sin impuestos)</button>
				<Switch>
					<input type="checkbox" />
					<span></span>
				</Switch>
			</div>
		</div>
	);
};

export default Filtros;
