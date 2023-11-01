import React, { useState }  from "react";

const ContactoAnfitrion = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

	return (
		<div className="flex flex-row h-screen">
		 	<div className="flex flex-col w-full">
                <div>
                    <button onClick={openModal}>Abrir Modal</button>
                    {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <button onClick={closeModal}>X</button>
                            <form className="flex flex-col w-full">
                                <h1 className="text-3xl font-bold mb-7 mt-7">Contactá al anfitríon</h1>
                                <label className="text-gray-900 text-lg pb-2" htmlFor="name">Nombre</label>
                                <input className="border border-gray-300 rounded-md mb-4" type="text" id="name" name="name" required/>

                                <label className="text-gray-900 text-lg pb-2" htmlFor="email">Correo Electrónico</label>
                                <input className="border border-gray-300 rounded-md mb-4" type="email" id="email" name="email" required/>

                                <label className="text-gray-900 text-lg pb-2" htmlFor="message">Mensaje</label>
                                <textarea className="border border-gray-300 rounded-md h-24 w-full mb-4" id="message" name="message" required></textarea>

                                <button className="border rounded-md py-2 px-2 bg-black text-white hover:bg-gray-900 mt-4" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                    )}
                </div>			
			</div>
		</div>
	);
};

export default ContactoAnfitrion