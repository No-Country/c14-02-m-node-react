import React, { useState } from "react";
import menu from "../assets/images/menu.png";
import usuario from "../assets/images/usuario.png";

const Component = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModal = (modalId) => {
    // Lógica para renderizar el modal correspondiente según modalId
    // Aquí puedes tener componentes de modal diferentes y mostrarlos según el modalId.
    // Por ejemplo, puedes tener Modal1, Modal2, Modal3, etc.
  };

  return (
    <div className="relative flex justify-center items-center">
      <button
        className="w-24 h-12 rounded-3xl border-none bg-lightblue shadow-md outline-none cursor-pointer p-3 flex items-center justify-around"
        onClick={toggleMenu}
      >
        <img src={menu} className="w-30 h-30 rounded-full mr-2" alt="Image 1" />
        <img src={usuario} className="w-30 h-30 rounded-full" alt="Image 2" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-44 bg-white rounded-md shadow-md">
          <ul className="p-2">
            <li className="mb-2" onClick={() => openModal(1)}>Registrate</li>
            <li className="border-b mb-2" onClick={() => openModal(2)}>Inicia Sesión</li>
            <li className="mb-2" onClick={() => openModal(3)}>Poné tu Airbnb</li>
            <li className="mb-2" onClick={() => openModal(4)}>Centro de Ayuda</li>
          </ul>
        </div>
      )}
      {activeModal && renderModal(activeModal)}
    </div>
  );
};

export default Component;
