import React, { useState } from "react";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    precio: "",
    descripcion: "",
    menu: "",
    opciones: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const opciones = formData.opciones.includes(name)
        ? formData.opciones.filter((opcion) => opcion !== name)
        : [...formData.opciones, name];
      setFormData({
        ...formData,
        opciones,
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
      <div className="flex m-3 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
        <div className="flex-1 p-20">
          <h2>Subir imágenes</h2>
          {/* Code for image upload section */}
        </div>

        <div className="flex-1 p-20">
          <h2>Agregar información</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={formData.nombre}
              onChange={handleChange}
            />

            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

            <label htmlFor="precio">Precio</label>
            <input
              type="text"
              id="precio"
              name="precio"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>

            <label htmlFor="menu">Tipo de alojamiento</label>
            <select
              id="menu"
              name="menu"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Casa</option>
              <option>Habitación</option>
            </select>

            <label>Amenities</label>
            <div className="flex">
              <input
                type="radio"
                id="opcion1"
                name="opciones"
                className="mb-5"
              />
              <label htmlFor="opcion1">Opción 1</label>
              <br />

              <input
                type="radio"
                id="opcion2"
                name="opciones"
                className="mb-5"
              />
              <label htmlFor="opcion2">Opción 2</label>
              <br />

              <input
                type="radio"
                id="opcion3"
                name="opciones"
                className="mb-5"
              />
              <label htmlFor="opcion3">Opción 3</label>
              <br />

              <input
                type="radio"
                id="opcion4"
                name="opciones"
                className="mb-5"
              />
              <label htmlFor="opcion4">Opción 4</label>
              <br />

              <input type="radio" id="opcion5" name="opciones" />
              <label htmlFor="opcion5">Opción 5</label>
            </div>

            <br />

            <button className="bg-black text-white p-2 px-4 rounded-lg text-lg">
              Click Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
