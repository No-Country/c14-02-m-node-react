import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/airbnblogo.png";
import search from "../assets/images/search.png";
import idioma from "../assets/images/idioma.png";
import searchmovil from "../assets/images/searchmovil.png";
import logosintexto from "../assets/images/logosintexto.png";
import filter from "../assets/images/filter.png";
import BottonMenu from "../components/BottonMenu.jsx";
import { GrBottomCorner } from "react-icons/gr";
import { useAuth } from "../context/AuthContext";
import { Search } from "./Search";


export const NavBar = ({ photoPerson }) => {
	const { user } = useAuth();
	const [showInput, setShowInput] = useState(false);
	const [selectedSearch, setSelectedSearch] = useState("");

	const toggleInput = () => {
		if (!showInput) {
			setShowInput(true);
		}
	};
	const handleLocationClick = () => {
		setSelectedSearch("location"); // Cambia el estado a "location" cuando se hace clic en "Locación"
	};

	const handleTitleClick = () => {
		setSelectedSearch("title"); // Cambia el estado a "title" cuando se hace clic en "Título"
	};
	const handlePriceClick = () => {
		setSelectedSearch("price"); // Cambia el estado a "price" cuando se hace clic en "Título"
	};

	const handleReloadHomePage = () => {
		window.location.href = "/"; // Navega a la página de inicio flex flex-row justify-between items-center pt-4 px-10 bg-white sticky top-0 z-50
	};
	return (
		<div className="md:flex md:flex-row md:justify-between md:items-center md:pt-4 md:px-10 md:bg-white md:sticky md:top-0 md:z-50 flex flex-col ">	
			<Link to="/" style={{ cursor: "pointer" }} onClick={handleReloadHomePage}>
				<div className="flex flex-row items-center cursor-pointer">
					<img src={logo} alt="Logo" className="mx-auto p-3 md:mx-0" />
				</div>
				{/* <LogoResponsive src={logosintexto} alt="New Logo" className="new-logo" /> */}
			</Link>

			<div className="md:p-2 p-4 md:h-[60px] md:w-[400px] flex justify-around items-center rounded-xl border border-gray-300 shadow-md cursor-pointer hover:shadow-lg hover:border-gray-400_outline-none order-2 md:order-1 mb-5 md:mb-0" onClick={toggleInput}>
				{showInput ? (
					<Search selectedSearch={selectedSearch} setShowInput={setShowInput} />
				) : (
					<>
						<p className=" m-0 text-sm font-medium  px-4 border-r border-gray-300" onClick={handleLocationClick}>Locación</p>
						<p className="whitespace-nowrap m-0 text-sm font-medium leading-22 px-4 border-r border-gray-300"  onClick={handleTitleClick}>Título</p>
						<p className="whitespace-nowrap m-0 text-sm font-medium leading-22 px-4 border-r border-gray-300"  onClick={handlePriceClick}>Precio</p>
						<div className="rounded-full p-2 flex justify-center items-center bg-red-500 " >
							<img src={search} alt="Search Icon" />
						</div>
					</>
				)}
			</div>
			
							{/* flex flex-row items-center gap-2 */}
			<div className=" flex flex-row items-center md:justify-center justify-between px-2 mx:px-0 md:p-3 py-4 gap-2 order-1 md:order-2">
				<div className="flex items-center justify-between  w-[150px]">
						<Link to="/tuairbnb">
						<p className="whitespace-nowrap m-0 md:text-sm text-md font-medium leading-22 text-lg">Poné tu Airbnb</p>
						</Link>
					
						{/* <img src={idioma} alt="Idioma Icon" /> */}
					
				</div>
				<BottonMenu photoPerson={user ? user.photoURL : photoPerson} />
			</div>
			{/* <FilterResponsive>
				<img src={filter} className="w-4 h-4 transform scale-90" alt="Filter Icon" />
			</FilterResponsive> */}
		</div>
	);
};

export default NavBar;
