import React, { useState } from "react";
import { useFetch } from "../api/useFecht";
import { CardSlider } from "./CardSlider";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CardInfo from "./CardInfo";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import { CgPlayPauseR } from "react-icons/cg";
import { fetchPublications, updatePublication, deletePublication } from "../store/publicationSlice";
import { useDispatch } from "react-redux";
import PropertyFormEdit from "../pages/PropertyFromEdit";

export const CardEdit = ({ publication }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
	const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
	const { user } = useAuth();

	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const images = publication.photos;

	const delPublication = () => {
		setIsDeleteModalOpen(true);
	};
	const onClose = () => {
		setIsEditModalOpen(false);
	};

	const editPublication = () => {
		setIsEditModalOpen(true);
	};

	const pausePublication = () => {
		setIsPauseModalOpen(true);
	};

	const playPublication = () => {
		setIsPlayModalOpen(true);
	};

	const isTitleGray = publication.title.startsWith("***");
	return (
		<>
			<article
				className={`z-5 w-[320px] md:w-[299px] h-[420px] md:p- mx-auto mt-8 rounded-xl ${
					isTitleGray ? "bg-rose-200" : "bg-white"
				}`}
			>
				<div className="w-full h-[280px] relative">
					<button
						className="z-10 h-0 w-0 absolute top-0 text-4xl ml-2 cursor-pointer text-white"
						onClick={isTitleGray ? playPublication : pausePublication}
					>
						{isTitleGray ? <BsPlayBtn className="bg-red-500" /> : <CgPlayPauseR />}
					</button>

					<button
						className={`z-10 h- w-0 absolute top-0 text-4xl right-9 cursor-pointer text-white mr-8`}
						onClick={() => {
							editPublication();
						}}
					>
						<BiSolidEdit />
					</button>

					<button
						className={`z-10 h- w-0 absolute top-0 text-4xl right-9 cursor-pointer text-white`}
						onClick={delPublication}
					>
						<MdOutlineDeleteForever />
					</button>
					{/* Componente para mostrar el slider */}
					<CardSlider images={images} />
				</div>

				{/* Componente para mostrar un breve resumen */}
				<div className="m-3" >
					<CardInfo info={publication} />
				</div>
				
				{/* </Link> */}
			</article>

			{isDeleteModalOpen ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/* content */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/* header */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										¿Está seguro que desea eliminar?{" "}
										{isTitleGray ? publication.title.slice(3) : publication.title}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setIsDeleteModalOpen(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/* body */}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
										Está a punto de eliminar su publicación de Airbnb, esta acción no se podrá
										deshacer, por eso le solicitamos que esté seguro de la eliminación. Recuerde que
										si tiene reservas pendientes, la eliminación no se puede realizar. En ese caso
										debe pausar la publicación.
									</p>
								</div>
								{/* footer */}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setIsDeleteModalOpen(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											console.log(publication._id);
											dispatch(deletePublication(publication._id));
											setIsDeleteModalOpen(false);
										}}
									>
										Eliminar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
			{isPauseModalOpen ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/* content */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/* header */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										¿Está seguro que desea pausar su publicación:? {publication.title}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setIsDeleteModalOpen(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/* body */}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
										Estaá a punto de pausar esta publicación, la misma no será eliminada sino que
										será retirada de las ofertas de publicaciones, usted puede revertir el proceso
										cuando lo desee.
									</p>
								</div>
								{/* footer */}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setIsPauseModalOpen(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											dispatch(
												updatePublication({ id: publication._id, title: `***${publication.title}` })
											);
											setIsPauseModalOpen(false);
											// navigate(-1);
										}}
									>
										Pausar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
			{isPlayModalOpen ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/* content */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/* header */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										¿Está seguro que desea activar su publicación:? {publication.title.slice(3)}
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setIsDeleteModalOpen(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/* body */}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
										Está a punto de volver a activar esta publicación, la misma volverá a ser
										visible para toda la comunidad de Airbnb.
									</p>
								</div>
								{/* footer */}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setIsPlayModalOpen(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											dispatch(
												updatePublication({
													id: publication._id,
													title: publication.title.slice(3),
												})
											);
											// window.location.reload();
											setIsPlayModalOpen(false);
										}}
									>
										Activar
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}

			{isEditModalOpen ? (
				<>
					<div className="justify-center items-center overflow-x-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto ">
							{/* Contenido */}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-auto">
								{/* Encabezado */}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<PropertyFormEdit onClose={onClose} publication={publication} />
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};
