import React, { useState } from "react";
import styled from "styled-components";
import menu from "../assets/images/menu.png";
import usuario from "../assets/images/usuario.png";


const DivLogin = styled.div`
    display: flex;
    padding: 8px 8px 8px 14px;
    align-items: center;
    gap: 12px;
    border-radius: 24px;
    border: 1px solid #DDD;
    background: #FFF;
    cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09),
      0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1150px) {
    transform: scale(0.9);
  }

  ${({ selected }) =>
    selected &&
    `
    box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09),
    0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    `};
`;

const DivMenu = styled.div`
  display: flex;
  align-items: start;
  position: absolute;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 10px;
  transform: translateX(-66%);
  width: auto;
  height: auto;
  flex-shrink: 0;
  border-radius: 14px;
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.17);
  background-color: white;
  z-index: 100;

  &:hover {
  
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 90px 0 10px;
  gap: 15px;
`;

const Li = styled.li`
  display: flex;
  white-space: nowrap;
  margin: 0;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;


const Component = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const [selected, setSelected] = useState(false);

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
    <div>
      <button onClick={toggleMenu}>
        <DivLogin selected={selected}
        onClick={() => setSelected(!selected)}>
            <img src={menu}/>
            <img src={usuario}/>
        </DivLogin>
      </button>
      {isMenuOpen && (
        <DivMenu>
          <Ul className="p-2">
            <Li className="mb-2 font-medium" onClick={() => openModal(1)}>Registrate</Li>
            <Li className="border-b mb-2 pb-5" onClick={() => openModal(2)}>Inicia Sesión</Li>
            <Li className="mb-2" onClick={() => openModal(3)}>Poné tu Airbnb</Li>
            <Li className="mb-2" onClick={() => openModal(4)}>Centro de Ayuda</Li>
          </Ul>
        </DivMenu>
      )}
      {activeModal && renderModal(activeModal)}
    </div>
  );
};

export default Component;
