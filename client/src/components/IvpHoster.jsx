import React, { useState } from "react";
import { GiGlobe } from "react-icons/gi";

function IvpHoster({ data , dataUser }) {

	const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setShowForm(true);
    };

    const [formData, setFormData] = useState({
      nameH: "",
      emailH: "",
      mensaje: "",
    });


  const handleSubmit = (e) => {
  e.preventDefault();

    const dataToSend = {
        type: "contact p2p",
        emailH: formData.emailH,
        emailP: dataUser.email,
        nameP: dataUser.names,
        nameH: formData.nameH,
        mensaje: formData.mensaje,
        title: data.title,
      };

    const JsonData = JSON.stringify(dataToSend)
      console.log(JsonData);

      // Esto es para limpiar el form y aparecer el cartel de enviado
      setFormData({
        nameH: "",
        emailH: "",
        mensaje: "",
      });

      setShowForm(false);
      setTimeout(() => {
      setShowForm(true);
      }, 8000);
      // Fin

      fetch("https://clon-airbnb-api.onrender.com/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JsonData,
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


	return (
		<div className="border-b">
			<h2 className="text-2xl font-semibold m-5">Conocé al anfitrión</h2>
			<div className="p-12 my-3 bg-stone-200 rounded-lg">
				{/* CARD ANFITRION  */}
				<div className="flex items-center justify-around bg-white rounded-3xl drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] my-3 p-5 w-400">
					<div>
						<img
							src={dataUser?.photo}
							alt="Imagen"
							className="rounded-full h-40 w-40 object-cover mr-4"
						/>
						<div className="text-center my-2">
							<h2 className="text-2xl font-semibold mb-0">{dataUser?.names}</h2>
							<p className="text-gray-600 my-2">Anfitrion</p>
						</div>
					</div>

					{/* <div>
            <div className="border-b">
              <h2 className="text-2xl font-bold mb-0">162</h2>
              <p className="text-xs text-gray-600 my-2">Evaluaciones</p>
            </div>
            <div className="border-b">
              <h2 className="text-2xl font-bold mb-0">4,88</h2>
              <p className="text-xs text-gray-600 my-2">Calificación</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-0">7</h2>
              <p className="text-xs text-gray-600 my-2">
                Años de experiencia como anfitrión
              </p>
            </div>
          </div> */}
				</div>

				{/* DESCRIPCION AMPLIA DEL ANFITRION */}

				<div className="border-b-2 border-stone-300">
					<div className="py-5">
						{/* <ul className="my-4">
              <li className="flex items-center">
                <HiOutlineChatBubbleLeftRight size={35} />
                Habla Inlgés y Japones
              </li>
              <li className="flex items-center my-4">
                <GiGlobe size={35} />
                <p className="ml-3">Vive en Tokio</p>
              </li>
            </ul> */}
						<div>
							Hola! El verdadero propietario de este tradicional me pidió que activara esta casa.
							Estoy tratando de compartir el atractivo de esta casa y de esta zona para muchas
							personas, tanto como sea posible, no solo la gente local, sino también los
							extranjeros. Me encanta ver las caras satisfechas de las personas que se han alojado
							en esta casa
						</div>
						<span className="text-lg font-semibold underline">Mostrar más</span>
					</div>

					<button onClick={openModal} className="bg-stone-900 text-white px-10 py-2 my-4 rounded-lg border-none">
						Escribile al anfitrión
					</button>
					{isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <button onClick={closeModal}>X</button>
                            {showForm ? (
                            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                                <h1 className="text-3xl font-bold mb-7 mt-7">Contactá al anfitrión {dataUser.names}</h1>
                                <h1 className="text-lg font-bold text-gray-600 mb-7"> Propiedad: {data.title}</h1>
                                <label className="text-gray-900 text-lg pb-2" htmlFor="nameH">Nombre</label>
                                <input className="border border-gray-300 rounded-md mb-4" type="text" id="nameH" name="nameH" value={formData.nameH} onChange={handleChange} required/>

                                <label className="text-gray-900 text-lg pb-2" htmlFor="emailH">Correo Electrónico</label>
                                <input className="border border-gray-300 rounded-md mb-4 p-2" type="emailH" id="emailH" name="emailH" value={formData.emailH} onChange={handleChange} required/>

                                <label className="text-gray-900 text-lg pb-2" htmlFor="mensaje">Mensaje</label>
                                <textarea className="border border-gray-300 rounded-md h-24 w-full mb-4" id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>

                                <button className="border rounded-md py-2 px-2 bg-black text-white hover:bg-gray-900 mt-4 mb-2" type="submit">Enviar</button>
                            </form>
                            ) : (
                              <h1 className="text-3xl font-semibold text-gray-600 text-center p-10">Su mensaje fue enviado correctamente, el anfitrión le respondera a la brevedad.</h1>
                            )}
                        </div>
                    </div>
                    )}
				</div>
				<div className="my-2">
					<p className="text-xs text-gray-600 my-2">
						Para proteger tus pagos, nunca transfieras dinero ni te comuniques fuera del sitio web o
						la app de Airbnb.
					</p>
				</div>
			</div>
		</div>
	);
}

export default IvpHoster;
