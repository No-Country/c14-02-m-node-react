import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateUserMutation } from "../store/rtk-query";

const UserForm = user => {
	// console.log(user.user.photoURL)
	const [createUser, { isLoading }] = useCreateUserMutation();
	const [formData, setFormData] = useState({
		names: "",
		surname: "",
		birthDate: "",
		email: user.user.email,
		phone: "+1234567890",
		address: "mi domicilio",
		phoneUrgency: "+1234567890",
		photo: user.user.photoURL,
		role: "user",
	});
	const navigate = useNavigate();
	// console.log("FORMDATAAAAA",formData)
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		createUser(formData);
		navigate("/");
	};

	return (
		<div className="m-4 p-8 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
			<div className="max-w-screen-xl p-10 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)] ">
				<div className="text-center">
					<h2 className="text-3xl font-semibold">Tu Airbnb</h2>
				</div>
				<div className="text-center pb-8">
					<h2>Hola {user.user.displayName}, ingresa tus datos</h2>
				</div>
				<img
					src={formData.photo}
					alt="Imagen"
					className="rounded-full h-24 w-24 object-cover mx-auto"
				></img>
			</div>

			<div className="w-full p-4">
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<label htmlFor="names" className="text-sm font-medium text-gray-900">
						Nombre
					</label>
					<input
						type="text"
						id="names"
						name="names"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.names}
						onChange={handleChange}
						required
					/>

					<label htmlFor="surname" className="text-sm font-medium text-gray-900">
						Apellido
					</label>
					<input
						type="text"
						id="surname"
						name="surname"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.surname}
						onChange={handleChange}
						required
					/>

					<label htmlFor="birthDate" className="text-sm font-medium text-gray-900">
						Fecha de Nacimiento (DD/MM/YYYY)
					</label>
					<input
						type="text"
						id="birthDate"
						name="birthDate"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.birthDate}
						onChange={handleChange}
						required
					/>

					<label htmlFor="email" className="text-sm font-medium text-gray-900">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.email}
						onChange={handleChange}
						required
					/>

					<label htmlFor="phone" className="text-sm font-medium text-gray-900">
						Teléfono
					</label>
					<input
						type="phone"
						id="phone"
						name="phone"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.phone}
						onChange={handleChange}
						required
					/>

					<label htmlFor="address" className="text-sm font-medium text-gray-900">
						Domicilio
					</label>
					<input
						type="address"
						id="address"
						name="address"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.address}
						onChange={handleChange}
						required
					/>

					<label htmlFor="phoneUrgency" className="text-sm font-medium text-gray-900">
						Teléfono de Urgencias
					</label>
					<input
						type="phoneUrgency"
						id="phoneUrgency"
						name="phoneUrgency"
						className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
						value={formData.phoneUrgency}
						onChange={handleChange}
						required
					/>

					<button className="bg-black text-white p-2 px-4 my-6 rounded-lg text-lg">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default UserForm;
