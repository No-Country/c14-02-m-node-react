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

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0.4rem 0 0 0;
	padding: 1rem 2.5rem 0 2.5rem;
	gap: 1.5rem;
	background-color: #fff;
	position: sticky;
	top: 70px;
	z-index: 99;

	@media (max-width: 800px) {
		display: flex;
		justify-content: center;
		padding: 0 1.5rem;
		margin: 0;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
		position: relative;
		top: 8px;
	}
`;

const BoxFilters = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;
	overflow: hidden;
	flex-wrap: nowrap;
	flex-grow: 1;

	@media (max-width: 800px) {
		display: flex;
	}
`;

const Filter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	padding: 1rem 0 0 0;
	margin: 1rem 1rem 0 0;
	gap: 0.2rem;
	box-sizing: border-box;
	cursor: pointer;
	text-align: center;
	white-space: nowrap;
	font-size: 11.5px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	padding: 0 0 0.5rem 0;
	color: #464646;
	border-bottom: 2px solid transparent;
	&:hover {
		transition: 0.2s;
		box-sizing: border-box;
		border-bottom: 2px solid #dcd5d5;
		color: black;
		border-bottom-style: solid;
	}
	@media (max-width: 800px) {
		display: flex;
		margin: 0;
	}
`;

const Box = styled.div`
	display: flex;
	padding: 15px 16px;
	align-items: center;
	gap: 7px;
	flex-shrink: 0;
	border-radius: 12px;
	border: 1px solid #ddd;
	background: #fff;
	cursor: pointer;
	@media (max-width: 800px) {
		display: none;
	}
`;

const Icon = styled.img`
	width: 1.5rem;
	height: 1.5rem;
`;

const Text = styled.button`
	color: #222;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 16px;
`;

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

	return (
		<Container>
			<BoxFilters>
				<Filter>
					<Icon src={depto} />
					<button onClick={() => click("Departamento")}>Departamentos</button>
					{selectedFilter === "Departamento" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</Filter>

				<Filter>
					<Icon src={casas} />
					<button onClick={() => click("Casa")}>Casas</button>
					{selectedFilter === "Casa" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</Filter>

				<Filter>
					<Icon src={casacampo} />
					<button onClick={() => click("Granero")}>Casa de campo</button>
					{selectedFilter === "Granero" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</Filter>
				{/* ------------DE ACA PARA ABAJO NO ANDAN-------------- */}

				<Filter>
					<Icon src={cabañas} />
					<button onClick={() => click("Cabaña")}>Cabañas</button>
					{selectedFilter === "Cabaña" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Eliminar
						</button>
					)}
				</Filter>

				<Filter>
					<Icon src={lakefrontt} />
					<button onClick={() => click("Hotel")}>Hotel</button>
					{selectedFilter === "Hotel" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</Filter>

				<Filter>
					<Icon src={casarodante} />
					<button onClick={() => click("Casa Rodante")}>Casa rodante</button>
					{selectedFilter === "Casa Rodante" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</Filter>

				<Filter>
					<Icon src={piletasincreibles} />
					<button onClick={() => click("Castillo")}>Castillos</button>
					{selectedFilter === "Castillo" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</Filter>

				<Filter>
					<Icon src={boats} />
					<button onClick={() => click("Barco")}>Barcos</button>
					{selectedFilter === "Barco" && (
						<button
							onClick={handleDeleteClick}
							className="outline outline-red-600 px-1 text-red-950 rounded-sm"
						>
							Hotel
						</button>
					)}
				</Filter>
			</BoxFilters>
			<Box>
				<img src={filter} />
				<Text>Filtros</Text>
			</Box>
			<Box>
				<Text>Mostrar total (sin impuestos)</Text>
				<Switch>
					<input type="checkbox" />
					<span></span>
				</Switch>
			</Box>
		</Container>
	);
};

export default Filtros;
