import React, { useState } from "react";
import { useUpdateUserMutation } from "../store/rtk-query";
import SendPhoto from "./SendPhoto";
import Swal from "sweetalert2";

function UProfile({ names, surname, birthDate, email, phone, address, phoneUrgency, photo }) {
	const [editMode, setEditMode] = useState({
		names: false,
		surname: false,
		birthDate: false,
		email: false,
		phone: false,
		address: false,
		phoneUrgency: false,
	});
	const [newData, setNewData] = useState({
		names: names,
		surname: surname,
		birthDate: birthDate,
		email: email,
		phone: phone,
		address: address,
		phoneUrgency: phoneUrgency,
		photo: photo,
	});
	const [updateUser, { isLoading }] = useUpdateUserMutation();

	const handleEditClick = fieldName => {
		setEditMode({
			...editMode,
			[fieldName]: !editMode[fieldName],
		});
	};

	const isValidDate = dateString => {
		// Verifica si la cadena cumple con el formato dd/mm/aaaa
		const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

		if (!datePattern.test(dateString)) {
			return false;
		}

		// Divide la cadena en día, mes y año
		const parts = dateString.split("/");
		const day = parseInt(parts[0], 10);
		const month = parseInt(parts[1], 10);
		const year = parseInt(parts[2], 10);

		// Valida el rango de valores para día, mes y año
		if (
			year < 1900 ||
			year > new Date().getFullYear() ||
			month < 1 ||
			month > 12 ||
			day < 1 ||
			day > 31
		) {
			return false;
		}

		// Verifica febrero y los meses con 30 días
		if (
			(month === 2 && day > 29) ||
			((month === 4 || month === 6 || month === 9 || month === 11) && day > 30)
		) {
			return false;
		}

		return true;
	};

	const handleSaveClick = fieldName => {
		// Validaciones
		if (fieldName === "names" && newData.names.length < 2) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "El nombre debe contener al menos dos letras",
			});
			return;
		}

		if (fieldName === "surname" && newData.surname.length < 2) {
			Swal.fire({
				icon: "error",
				title: "Error",
				width: 300,
				text: "El apellido debe contener al menos dos letras",
			});
			return;
		}

		if (fieldName === "birthDate" && !isValidDate(newData.birthDate)) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "Fecha de nacimiento en formato no válido (dd/mm/aaaa)",
			});
			return;
		}

		if (fieldName === "address" && newData.address.length < 8) {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "La dirección debe contener al menos 8 letras",
			});
			return;
		}

		if (!email) {
			console.error("Email is null");
			return;
		}

		// llamando la mutacion
		updateUser({ email, update: { [fieldName]: newData[fieldName] } });

		// salir del modo editar
		setEditMode({
			...editMode,
			[fieldName]: false,
		});
	};

	const handlePhotoUpload = photoUrl => {
		updateUser({ email, update: { photo: photoUrl } });
	};

	return (
		<div className="  p-4">
			<div className="grid-cols-2 gap-8 md:flex md:justify-start ">
				{/* ===============LADO  IZQUIERDO=============== */}

				<div className="md:w-1/2  ">
					<div className="md:-order-1 md:w-full" >
						<div className="w-full p-10 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
							<div className="relative md:w-48 mx-auto ">
								<img
									src={photo}
									alt="Imagen"
									className="rounded-full w-[300px] md:h-40 md:w-40 object-cover mx-auto"
								></img>
								<SendPhoto onPhotoUpload={handlePhotoUpload} />
							</div>

							<h2 className="text-3xl font-bold text-center mt-4">{newData.names}</h2>
							<p className="card-content text-center">viajero</p>
						</div>
					</div>
				</div>

				{/* ===================LADO  DERECHO============= */}

				<div className="md:w-1/2 ">
					<div className="w-full p-6">
						<div className="border-b py-6">
							<h2 className="text-2xl font-semibold pb-4">Datos Personales</h2>
						</div>
						<div className="border-b py-2 ">
							<h2 className="font-bold">Nombres</h2>
							{editMode.names ? (
								<div className=" flex justify-around items-center ">
									<input
										type="text"
										className="rounded-md border-0 py-1.5 text-[#ef4444] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 my-3"
										value={newData.names}
										onChange={e => {
											setNewData({ ...newData, names: e.target.value });
										}}
									/>
									<button
										className="bg-gray-900 text-white rounded-md h-9 px-5"
										onClick={() => handleSaveClick("names")}
									>
										Guardar
									</button>
								</div>
							) : (
								<div>
									<p className="my-1">{newData.names}</p>
									<button
										className="bg-[#ef4444] mt-2 px-8  rounded-md text-white font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 "
										onClick={() => handleEditClick("names")}
									>
										Editar
									</button>
								</div>
							)}
						</div>
						<div className="border-b py-2">
							<h2 className="font-bold">Apellido</h2>
							{editMode.surname ? (
								<div className=" flex justify-around items-center ">
									<input
										type="text"
										className="rounded-md border-0 py-1.5 text-[#ef4444] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 my-3"
										value={newData.surname}
										onChange={e => {
											setNewData({ ...newData, surname: e.target.value });
										}}
									/>
									<button
										className="bg-gray-900 text-white rounded-md h-9 px-5"
										onClick={() => handleSaveClick("surname")}
									>
										Guardar
									</button>
								</div>
							) : (
								<div>
									<p className="my-1">{newData.surname}</p>
									<button
										className="bg-[#ef4444] mt-2 px-8  rounded-md text-white font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 "
										onClick={() => handleEditClick("surname")}
									>
										Editar
									</button>
								</div>
							)}
						</div>

						<div className="border-b py-2">
							<h2 className="font-bold">Fecha de Nacimiento</h2>
							{editMode.birthDate ? (
								<div className=" flex justify-around items-center ">
									<input
										type="text"
										className="rounded-md border-0 py-1.5 text-[#ef4444] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 my-3"
										value={newData.birthDate}
										onChange={e => {
											setNewData({ ...newData, birthDate: e.target.value });
										}}
									/>
									<button
										className="bg-gray-900 text-white rounded-md h-9 px-5"
										onClick={() => handleSaveClick("birthDate")}
									>
										Guardar
									</button>
								</div>
							) : (
								<div>
									<p className="my-1">{newData.birthDate}</p>
									<button
										className="bg-[#ef4444] mt-2 px-8  rounded-md text-white font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 "
										onClick={() => handleEditClick("birthDate")}
									>
										Editar
									</button>
								</div>
							)}
						</div>

						<div className="border-b py-2">
							<h2 className="font-bold">Teléfono</h2>
							{editMode.phone ? (
								<div className=" flex justify-around items-center ">
									<input
										type="text"
										className="rounded-md border-0 py-1.5 text-[#ef4444] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 my-3 "
										value={newData.phone}
										onChange={e => {
											setNewData({ ...newData, phone: e.target.value });
										}}
									/>
									<button
										className="bg-gray-900 text-white rounded-md h-9 px-5"
										onClick={() => handleSaveClick("phone")}
									>
										Guardar
									</button>
								</div>
							) : (
								<div>
									<p className="my-1 overflow-hidden">{newData.phone}</p>
									<button
										className="bg-[#ef4444] mt-2 px-8  rounded-md text-white font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 "
										onClick={() => handleEditClick("phone")}
									>
										Editar
									</button>
								</div>
							)}
						</div>

						<div className="border-b py-2">
							<h2 className="font-bold">Dirección</h2>
							{editMode.address ? (
								<div className=" flex justify-around items-center ">
									<input
										type="text"
										className="rounded-md border-0 py-1.5 text-[#ef4444] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 my-3"
										value={newData.address}
										onChange={e => {
											setNewData({ ...newData, address: e.target.value });
										}}
									/>
									<button
										className="bg-gray-900 text-white rounded-md h-9 px-5"
										onClick={() => handleSaveClick("address")}
									>
										Guardar
									</button>
								</div>
							) : (
								<div>
									<p className="my-1">{newData.address}</p>
									<button
										className="bg-[#ef4444] mt-2 px-8  rounded-md text-white font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 "
										onClick={() => handleEditClick("address")}
									>
										Editar
									</button>
								</div>
							)}
						</div>

						<div className="py-2">
							<h2 className="font-bold">Teléfono de Urgencia</h2>
							{editMode.phoneUrgency ? (
								<div className=" flex justify-around items-center ">
									<input
										type="text"
										className="rounded-md border-0 py-1.5 text-[#ef4444] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 my-3"
										value={newData.phoneUrgency}
										onChange={e => {
											setNewData({ ...newData, phoneUrgency: e.target.value });
										}}
									/>
									<button
										className="bg-gray-900 text-white rounded-md h-9 px-5"
										onClick={() => handleSaveClick("phoneUrgency")}
									>
										Guardar
									</button>
								</div>
							) : (
								<div>
									<p className="my-1">{newData.phoneUrgency}</p>
									<button
										className="bg-[#ef4444] mt-2 px-8  rounded-md text-white font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 "
										onClick={() => handleEditClick("phoneUrgency")}
									>
										Editar
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UProfile;
