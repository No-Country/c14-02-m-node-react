import { useState } from "react";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { LiaBedSolid } from "react-icons/lia";
import { CgGym } from "react-icons/cg";
import { MdOutlineBathtub, MdOutlineLocalLaundryService } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { FaKitchenSet, FaFan } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";

import { useCreatePublicationMutation } from "../store/rtk-query";
import { Link } from "react-router-dom";

import UpImages from "../components/UpImages";

import Swal from "sweetalert2";

const PropertyForm = () => {
	const [formData, setFormData] = useState({
		type: "",
		offering: "",
		location: "",
		spaces: [],
		amenities: [],
		featured: "",
		security: [],
		title: "",
		description: "",
		type_guest: "",
		price: "",
		discount: "",
		extra_Security: [],
		email: "",
		photos: [],
	});

	const [createPublication] = useCreatePublicationMutation(formData);

	const handleChange = e => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			const amenities = formData.amenities.includes(name)
				? formData.amenities.filter(opcion => opcion !== name)
				: [...formData.amenities, name];
			setFormData({
				...formData,
				amenities,
			});
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const handleUploadImages = (uploadedUrls, callback) => {
		setFormData({
			...formData,
			photos: uploadedUrls,
		});
		// Llama al callback después de actualizar el estado
		callback(uploadedUrls);
	};

	const handleSpacesChange = e => {
		const { name, type, checked } = e.target;
		let updatedSpaces = formData.spaces;

		if (type === "checkbox") {
			if (checked) {
				updatedSpaces = [...updatedSpaces, name];
			} else {
				updatedSpaces = updatedSpaces.filter(item => item !== name);
			}
		}

		setFormData({
			...formData,
			spaces: updatedSpaces,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await createPublication(formData);

			// validar campos requeridos
			if (
				!formData.title ||
				!formData.location ||
				!formData.description ||
				!formData.price ||
				!formData.email
			) {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "Por favor, completa todos los campos obligatorios.",
				});
				return; // falta información
			}

			if (formData.photos.length === 0) {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "Debes subir al menos una imagen de la propiedad.",
				});
				return; // faltan imágenes
			}

			// validar el campo "description"
			if (formData.description.length < 10) {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "La descripción debe tener al menos 10 caracteres.",
				});
				return;
			}

			// validar el formato del correo electrónico
			const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
			if (!emailRegex.test(formData.email)) {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "El formato del correo electrónico no es válido.",
				});
				return; // falta el correo electrónico no es válido
			}

			// Validar el descuento
			const discountValue = parseFloat(formData.discount);
			if (isNaN(discountValue) || discountValue < 5 || discountValue > 100) {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "El descuento debe ser un número entre 5 y 100.",
				});
				return; // No envíes la solicitud si el descuento no es válido
			}

			if (response.data) {
				// la publicación se creó con éxito
				Swal.fire({
					icon: "success",
					title: "Éxito",
					text: "La propiedad se guardó con éxito.",
				});
			} else {
				// error al crear la publicación
				console.error("Error al crear la publicación");
			}
		} catch (error) {
			// manejar errores de la solicitud aquí
			console.error("Error al crear la publicación:", error);
		}
	};

	const updateImageUrls = imageUrls => {
		setFormData({
			...formData,
			photos: imageUrls,
		});
	};

	return (
		<div>
			<div className="m-4 p-8 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
				{/* El link esta listo para que se ponga a donde se quiere que lo llevemos atras seria el perifl o al home. */}
				<Link
					to="/"
					className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex flex-col items-center rounded-lg "
				>
					&#8592;
				</Link>
				<div className="text-center">
					<h2 className="text-3xl font-semibold">Tu Airbnb</h2>
				</div>
				{/* ==================UPLOAD IMAGES=============== */}
				<div className="text-center pb-8">
					<UpImages onImagesUploaded={updateImageUrls} />
				</div>

				<div className="w-full p-4">
					<form className="flex flex-col " onSubmit={handleSubmit}>
						<label htmlFor="title" className="text-sm font-medium text-gray-900">
							Nombre de tu Airbnb
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
							value={formData.title}
							onChange={handleChange}
						/>

						<label htmlFor="location" className="text-sm font-medium text-gray-900">
							Dirección
						</label>
						<input
							type="text"
							id="location"
							name="location"
							className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
							value={formData.location}
							onChange={handleChange}
						/>

						<label htmlFor="description" className="text-sm font-medium text-gray-900">
							Descripción
						</label>
						<textarea
							id="description"
							name="description"
							className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
							value={formData.description}
							onChange={handleChange}
						></textarea>

						<div className="flex justify-between pt-4">
							{[
								{
									id: "Dormitorios",
									label: "Habs.",
									icon: <LiaBedSolid size={25} />,
								},
								{
									id: "Baños",
									label: "Baños",
									icon: <MdOutlineBathtub size={25} />,
								},
								{
									id: "Living",
									label: "Living",
									icon: <LuSofa size={25} />,
								},
								{
									id: "Cocina",
									label: "Cocina",
									icon: <FaKitchenSet size={30} />,
								},
							].map(option => (
								<div key={option.id} className="mr-4">
									<div className="flex items-center justify-around">
										<input
											type="checkbox"
											id={option.id}
											name={option.id}
											value={option.id}
											className="mr-2"
											checked={formData.spaces.includes(option.id)}
											onChange={handleSpacesChange}
										/>
										<div>
											{option.icon}
											<label htmlFor={option.id} className="text-sm">
												{option.label}
											</label>
										</div>
									</div>
								</div>
							))}
						</div>

						<label htmlFor="featured" className="text-sm font-medium text-gray-900">
							Puntos Destacados
						</label>
						<input
							type="text"
							id="featured"
							name="featured"
							className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
							value={formData.featured}
							onChange={handleChange}
						/>

						<label htmlFor="type" className="text-sm font-medium text-gray-900">
							Tipo de Alojamiento
						</label>
						<select
							id="type"
							name="type"
							className="half-width rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:max-w-xs "
							value={formData.type}
							onChange={handleChange}
						>
							<option value="">Tipo de Espacio</option>
							{[
								"Casa",
								"Departamento",
								"Granero",
								"Bed and BreakFast",
								"Barco",
								"Cabaña",
								"Casa Rodante",
								"Casa Particular",
								"Castillo",
								"Cueva",
								"Contenedor",
								"Casa Griega",
								"Dammuso",
								"Domo",
								"Casa Ecológica",
								"Granja",
								"Casa de Huéspedes",
								"Hotel",
								"Casa Flotante",
								"Kezhan",
								"Minsu",
								"Riad",
								"Ryokan",
								"Casa de Pastor",
								"Carpa",
								"Mini Casa",
								"Torre",
								"Casa de Árbol",
								"Trullo",
								"Molino",
								"Yurta",
							].map(option => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>

						<label htmlFor="offering" className="text-sm font-medium text-gray-900">
							Tipo de Alojamiento
						</label>
						<select
							id="offering"
							name="offering"
							className="half-width rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:max-w-xs "
							value={formData.offering}
							onChange={handleChange}
						>
							<option value="">Tipo de Espacio</option>
							{["Un alojamiento entero", "Una habitación", "Una habitación compartida"].map(
								option => (
									<option key={option} value={option}>
										{option}
									</option>
								)
							)}
						</select>

						<label htmlFor="type_guest" className="text-sm font-medium text-gray-900">
							Tipo de Invitado
						</label>
						<input
							type="text"
							id="type_guest"
							name="type_guest"
							className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
							value={formData.type_guest}
							onChange={handleChange}
						/>

						<label className="text-sm font-medium text-gray-900 py-3">Amenities</label>

						<div className="flex flex-col">
							<div className="flex flex-wrap justify-between">
								{[
									{
										id: "Wifi",
										label: "Wifi",
										icon: <AiOutlineWifi size={25} />,
									},
									{
										id: "Piscina",
										label: "Pool",
										icon: <LiaSwimmingPoolSolid size={30} />,
									},
									{
										id: "Gimnasio",
										label: "Gym",
										icon: <CgGym size={30} />,
									},
									{
										id: "Estacionamiento",
										label: "Parking",
										icon: <AiOutlineCar size={30} />,
									},
								].map(amenity => (
									<div className="flex items-center" key={amenity.id}>
										<input
											type="checkbox"
											id={amenity.id}
											name={amenity.id}
											value={amenity.id}
											className="mr-3"
											checked={formData.amenities.includes(amenity.id)}
											onChange={handleChange}
										/>
										<div>
											{amenity.icon}
											<label htmlFor={amenity.id}>{amenity.label}</label>
										</div>
									</div>
								))}
							</div>
							<div className="flex flex-wrap justify-between">
								{[
									{
										id: "Tv",
										label: "Tv",
										icon: <FiMonitor size={30} />,
									},
									{
										id: "Lavarropas",
										label: "Washing",
										icon: <MdOutlineLocalLaundryService size={30} />,
									},
									{
										id: "Cocina",
										label: "Cocina",
										icon: <FaKitchenSet size={30} />,
									},
									{
										id: "Aire Acondicionado",
										label: "AC",
										icon: <FaFan size={30} />,
									},
								].map(amenity => (
									<div className="flex items-center" key={amenity.id}>
										<input
											type="checkbox"
											id={amenity.id}
											name={amenity.id}
											value={amenity.id}
											className="mr-3"
											checked={formData.amenities.includes(amenity.id)}
											onChange={handleChange}
										/>
										<div>
											{amenity.icon}
											<label htmlFor={amenity.id}>{amenity.label}</label>
										</div>
									</div>
								))}
							</div>
						</div>

						<label htmlFor="price" className="text-sm font-medium text-gray-900">
							Precio por noche
						</label>
						<input
							type="text"
							id="price"
							name="price"
							className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
							value={formData.price}
							onChange={handleChange}
						/>

						<label htmlFor="discount" className="text-sm font-medium text-gray-900">
							Descuento
						</label>
						<input
							type="text"
							id="discount"
							name="discount"
							placeholder="Entre 5% y 100%"
							className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
							value={formData.discount}
							onChange={handleChange}
						/>

						<label htmlFor="security" className="text-sm font-medium text-gray-900">
							Seguridad
						</label>

						<select
							id="security"
							name="security"
							className="half-width rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:max-w-xs "
							value={formData.security} // Convierte la matriz en una cadena
							onChange={handleChange}
						>
							<option value="security">Seguridad</option>
							{["Guardia de seguridad", "Cámara de vigilancia", "Sistema de alarmas"].map(
								option => (
									<option key={option} value={option}>
										{option}
									</option>
								)
							)}
						</select>

						<div className="flex flex-col">
							<label htmlFor="extra_Security" className="text-sm font-medium text-gray-900">
								Seguridad Adicional
							</label>
							<input
								type="text"
								id="extra_Security"
								name="extra_Security"
								className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
								value={formData.extra_Security}
								onChange={handleChange}
							/>
						</div>

						<div className="sm:col-span-4">
							<label htmlFor="email" className="text-sm font-medium text-gray-900">
								Email
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
						</div>
						<button className="bg-black text-white p-2 px-4 my-6 rounded-lg text-lg" type="submit">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PropertyForm;
