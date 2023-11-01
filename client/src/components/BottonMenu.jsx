import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import menu from "../assets/images/menu.png";
import usuario from "../assets/images/usuario.png";
import { useAuth } from "../context/AuthContext";



const DivMenu = styled.div`
	display: flex;
	align-items: start;
	position: absolute;
	justify-content: space between;
	padding: 10px 0;
	margin-top: 10px;
	transform: translateX(-66%);
	width: auto;
	height: auto;
	flex-shrink: 0;
	border-radius: 14px;
	box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.17);
	background-color: white;
	z-index: 100;

	&:hover {
	}
`;


const Component = ({ photoPerson }) => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handlelogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeModal, setActiveModal] = useState(null);

	const [selected, setSelected] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const openModal = modalId => {
		setActiveModal(modalId);
	};

	const closeModal = () => {
		setActiveModal(null);
	};

	const renderModal = modalId => {
		// Lógica para renderizar el modal correspondiente según modalId
		// Aquí puedes tener componentes de modal diferentes y mostrarlos según el modalId.
		// Por ejemplo, puedes tener Modal1, Modal2, Modal3, etc.
	};

	return (
		<div>
			<button onClick={toggleMenu}>
				<div className="flex p-2  items-center gap-3 rounded-3xl border border-gray-300 bg-white cursor-pointer hover:shadow-lg hover:border-gray-400 md:z-50" selected={selected} onClick={() => setSelected(!selected)}>
					<img src={menu} />
					<img className="md:w-8 w-10 rounded-full" src={user ? photoPerson : usuario} /> {/* Aplica el estilo a la imagen aquí */}
				</div>
			</button>
			{isMenuOpen && (
				<div className="flex absolute translate-x-[-66%] w-auto h-auto shrink-0 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.17)] bg-[white] z-[100] mt-2.5 px-0 py-2.5 rounded-[14px]" >
					{/* 0 90px 0 10px */}
					<div className="p-2 flex flex-col m-0 ml-3 mr-20   gap-4">
						{user ? ( // Verifica si el usuario está autenticado
							<>
								<Link to="/user">
									<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70">Mi Perfil</p>
								</Link>
								<Link to="/favorites" className="mb-2">
									<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70">Favoritos</p>
								</Link>
								<Link to="/manageads" className="mb-2">
									<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70">Administrar anuncios</p>
								</Link>
								<Link to="/tuairbnb" className="mb-2">
									<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70">Poné tu Airbnb</p>
								</Link>
								{/* <Li onClick={() => openModal(3)}>Poné tu Airbnb</Li> */}
								{/* <div className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70" onClick={() => openModal(4)}>Centro de Ayuda</div> */}
								<div>
									<button className="text-red-600" onClick={handlelogout}>
										Cerrar Sesión
									</button>
								</div>
							</>
						) : (
							<>
								<Link to="/register">
									<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70" classNameName="mb-2 font-medium" onClick={() => openModal(1)}>
										Registrate
									</p>
								</Link>
								<Link to="/register">
									<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70" classNameName="border-b mb-2 pb-5" onClick={() => openModal(2)}>
										Inicia Sesión
									</p>
								</Link>
								<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70" onClick={() => openModal(3)}>Poné tu Airbnb</p>
								<p className="flex whitespace-nowrap m-0 text-base cursor-pointer hover:opacity-70" onClick={() => openModal(4)}>Centro de Ayuda</p>
							</>
						)}
					</div>
				</div>
			)}
			{activeModal && renderModal(activeModal)}
		</div>
	);
};

export default Component;
