import { useState } from "react";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { LiaBedSolid } from "react-icons/lia";
import { CgGym } from "react-icons/cg";
import { MdOutlineBathtub } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { FaKitchenSet } from "react-icons/fa6";

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
  });
  console.log("esto llega de formulario", formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const amenities = formData.amenities.includes(name)
        ? formData.amenities.filter((opcion) => opcion !== name)
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

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/crear-publicacion", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Manejar una respuesta exitosa del servidor aquí
          console.log("Publicación creada con éxito");
        } else {
          // Manejar errores del servidor aquí
          console.error("Error al crear la publicación");
        }
      })
      .catch((error) => {
        // Manejar errores de red aquí
        console.error("Error de red", error);
      });
  };

  return (
    <div>
      <div className="m-4 p-8 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Tu Airbnb</h2>
        </div>
        <div className="text-center pb-8">
          <h2>Subir imágenes (próximamente)</h2>
          {/* código para subir imágenes */}
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <label
                htmlFor="direccion"
                className="text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-900"
              >
                Descripción
              </label>
              <textarea
                id="description"
                name="description"
                className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600 "
                value={formData.description}
                onChange={handleChange}
              ></textarea>

              <div>
                <label className="text-sm font-medium text-gray-900">
                  Ambientes
                </label>
                <div className="flex justify-between">
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
                  ].map((option) => (
                    <div key={option.id} className="mr-4">
                      {" "}
                      {/* Agregar margen a la derecha */}
                      <div className="flex items-center justify-around">
                        <input
                          type="checkbox"
                          id={option.id}
                          name="spaces"
                          value={option.id}
                          className="mr-2"
                          checked={formData.spaces.includes(option.id)}
                          onChange={handleChange}
                        />
                        <div>
                          {option.icon} {/* Mostrar el icono */}
                          <label htmlFor={option.id} className="text-sm">
                            {option.label}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <label
                htmlFor="featured"
                className="text-sm font-medium text-gray-900"
              >
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

              <select
                id="type"
                name="type"
                className="half-width rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:max-w-xs "
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Tipo de Alojamiento</option>
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
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                id="offering"
                name="offering"
                className="half-width rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:max-w-xs "
                value={formData.offering}
                onChange={handleChange}
              >
                <option value="">Tipo de Espacio</option>
                {[
                  "Un alojamiento entero",
                  "Una habitación",
                  "Una habitación compartida",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <label
                htmlFor="type_guest"
                className="text-sm font-medium text-gray-900"
              >
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

              <label className="text-sm font-medium text-gray-900 py-3">
                Amenities
              </label>

              <div className="flex items-center justify-between pb-5">
                {[
                  {
                    id: "wifi",
                    label: "Wifi",
                    icon: <AiOutlineWifi size={25} />,
                  },
                  {
                    id: "pool",
                    label: "Pool",
                    icon: <LiaSwimmingPoolSolid size={30} />,
                  },
                  { id: "gym", label: "Gym", icon: <CgGym size={30} /> },
                  {
                    id: "parking",
                    label: "Parking",
                    icon: <AiOutlineCar size={30} />,
                  },
                ].map((amenity) => (
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

              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-900"
              >
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

              <label
                htmlFor="discount"
                className="text-sm font-medium text-gray-900"
              >
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

              <select
                id="security"
                name="security"
                className="half-width rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-stone-600 sm:max-w-xs "
                value={formData.security}
                onChange={handleChange}
              >
                <option value="security">Seguridad</option>
                {[
                  "Guardia de seguridad",
                  "Cámara de vigilancia",
                  "Sistema de alarmas",
                ].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="flex flex-col">
                <label
                  htmlFor="extra_Security"
                  className="text-sm font-medium text-gray-900"
                >
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
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900"
                >
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
              <button className="bg-black text-white p-2 px-4 my-6 rounded-lg text-lg">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
