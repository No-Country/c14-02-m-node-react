import React from "react";
import { useFetch } from "../api/useFecht";
import { useState } from "react";
import { CardSlider } from "./CardSlider";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CardInfo from "./CardInfo";
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from "../store/rtk-query";
import { BiSolidEdit } from "react-icons/bi";

export const CardEdit = ({ publication }) => {
	const navigate = useNavigate();

	const { user } = useAuth();

	const images = publication.photos;

	return (
		<>
			<article className="w-[320px] h-[384px] md:w-[299px] md:h-[384px] mx-auto mt-8 rounded-xl">
				{/* Utiliza el componente Link en lugar de <a> para redirigir a /rooms */}
				<Link to={`/publication/${publication._id}`}>
					<div className="w-full h-[280px] relative">
						<button
							className={`z-10 h- w-0 absolute top-0 text-4xl right-9 cursor-pointer text-white`}
						>
							<BiSolidEdit />
						</button>
						{/* Componente para mostrar el slider */}
						<CardSlider images={images} />
					</div>

					{/* Componente para mostrar un breve resumen */}
					<CardInfo info={publication} />
				</Link>
			</article>
		</>
	);
};
