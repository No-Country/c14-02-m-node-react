import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const ContactoSoporte = () => {

 	const [formData, setFormData] = useState({
    	name: "",
    	email: "",
    	mensaje: "",
  	});

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const dataToSend = {
        type: "contact us",
        email: formData.email,
        name: formData.name,
        mensaje: formData.mensaje,
      };
    
      const JsonData = JSON.stringify(dataToSend);
    
      Swal.fire({
        title: '¿Enviar el mensaje?',
        text: '¿Estás seguro de que deseas enviar este mensaje?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("https://clon-airbnb-api.onrender.com/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JsonData,
          })
            .then((response) => {
              if (response.ok) {
                Swal.fire('¡Mensaje enviado!', 'Tu mensaje se ha enviado con éxito.', 'success');
              } else {
                throw new Error("Error en la solicitud");
              }
            })
            .catch((error) => {
              Swal.fire('Error', 'Hubo un error al enviar el mensaje.', 'error');
            });
        }
      });
    };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between custom-width px-10 py-6 border border-gray-300">
          <Link
            to="/"
            className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex flex-col items-center rounded-lg "
          >
            &#8592;
          </Link>
          <h1 className="text-2xl font-bold">Centro de ayuda</h1>
        </div>
        <form className="flex flex-col custom-width-min" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-7 mt-7">Ponte en contacto con Airbnb</h1>
          <label className="text-gray-900 text-lg pb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="border border-gray-300 rounded-md mb-4"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="text-gray-900 text-lg pb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className="border border-gray-300 rounded-md mb-4"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="text-gray-900 text-lg pb-2" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            className="border border-gray-300 rounded-md h-24 w-full mb-4"
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="border rounded-md py-2 px-2 bg-black text-white hover:bg-gray-900 mt-4"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactoSoporte;
