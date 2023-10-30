import React from "react";
import styled from "styled-components";
import search from "../assets/images/searchmm.png";
import heart from "../assets/images/heart.png";
import user from "../assets/images/user.png";

const Container = styled.div`
	display: none;

	@media (max-width: 800px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 5% 25%;
		position: fixed;
		bottom: 1px;
		background-color: #fff;
		z-index: 99;
		gap: 2rem;
	}
`;

const Box = styled.div`
	display: none;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		white-space: nowrap;
	}
`;

export const MenuMovil = () => {
	return (
		<Container>
			<Box>
				<img src={search} className="w-7 h-7 mb-1" />
				<h1 className="text-sm font-medium text-gray-400">Descubrí</h1>
			</Box>
			<Box>
				<img src={user} className="w-8 h-8" />
				<h1 className="text-sm font-medium text-gray-400">Iniciar sesión</h1>
			</Box>
			<Box>
				<img src={heart} className="w-7 h-7 mb-1" />
				<h1 className="text-sm font-medium text-gray-400">Favoritos</h1>
			</Box>
		</Container>
	);
};
