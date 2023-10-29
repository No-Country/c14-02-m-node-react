import React, { useState } from 'react';
import styled from "styled-components";
import logo from "../assets/images/airbnblogo.png";
import search from "../assets/images/search.png";
import idioma from "../assets/images/idioma.png";
import searchmovil from "../assets/images/searchmovil.png";
import logosintexto from "../assets/images/logosintexto.png";
import filter from "../assets/images/filter.png";
import BottonMenu from "../components/BottonMenu.jsx";
import { Link } from "react-router-dom";
import { GrBottomCorner } from "react-icons/gr";
import { useAuth } from "../context/AuthContext";
import { Search } from './Search';

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    box-shadow: none;
    padding: 15px 0;
    transform: scale(0.9);
    margin: 0;
    position: relative;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const Container2 = styled.div`
  display: flex;
  padding: 8px;
  margin: 0 0 0 10rem;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.05),
    0px 1px 2px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09),
      0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1150px) {
    margin: 0;
    transform: scale(0.9);
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Container2Movil = styled.div`
  display: none;

  &:hover {
    box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09),
      0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 10px;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.05),
      0px 1px 2px 0px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transform: scale(0.9);
    overflow: hidden;
  }
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media (max-width: 1500px) {
    gap: 4px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const DivSearch = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: 10px;
  align-items: center;
  background-color: #ff385c;
`;

const Div = styled.div`
  display: flex;
`;

const DivIdioma = styled.div`
  display: flex;
  height: 40px;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }

  @media (max-width: 1150px) {
    padding: 10px;
  }
`;

const DivMovil = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  white-space: nowrap;
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding: 0px 16px;
  border-right: 1px solid #ddd;

  @media (max-width: 800px) {
    display: flex;
    border-right: none;
    font-size: 15px;
    line-height: 12px;
  }
`;

const Text2 = styled.p`
  white-space: nowrap;
  margin: 0;
  color: #717171;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 0px 16px;

  @media (max-width: 800px) {
    display: flex;
    font-size: 12px;
    padding: 0 5px 0 16px;
    font-weight: 400;
  }
`;

const Text3 = styled.p`
  white-space: nowrap;
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  @media (max-width: 800px) {
    display: flex;
    font-weight: 400;
    font-size: 12px;
    color: #717171;
    padding: 0 2px;
  }
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const LogoResponsive = styled.img`
  display: none;

  @media (max-width: 1150px) {
    display: flex;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const FilterResponsive = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    margin: 0 3% 0 0;
    transform: scale(0.9);
    padding: 17px;
    border-radius: 30px;
    border: 2px solid #ddd;
    cursor: pointer;
  }
`;

export const NavBar = ({ photoPerson }) => {
  const { user } = useAuth();
  const [showInput, setShowInput] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState("");

  
  const toggleInput = () => {
    if (!showInput) {
      setShowInput(true);
    }
  };
  const handleLocationClick = () => {
    setSelectedSearch("location"); // Cambia el estado a "location" cuando se hace clic en "Locación"
  };

  const handleTitleClick = () => {
    setSelectedSearch("title"); // Cambia el estado a "title" cuando se hace clic en "Título"
  };
  const handlePriceClick = () => {
    setSelectedSearch("price"); // Cambia el estado a "price" cuando se hace clic en "Título"
  };

  
  return (
    <Navbar>
      <Link to="/" style={{ cursor: "pointer" }}>
        <Container>
          <img src={logo} alt="Logo" className="logo" />
        </Container>
        <LogoResponsive src={logosintexto} alt="New Logo" className="new-logo" />
      </Link>
      <Container2 onClick={toggleInput}>
        {showInput ? (
          <Search selectedSearch={selectedSearch} setShowInput={setShowInput} />
        ) : (
          <>
            <Text onClick={handleLocationClick}>Locación</Text>
            <Text onClick={handleTitleClick}>Título</Text>
            <Text onClick={handlePriceClick}>Precio</Text>
            <DivSearch className="ml-2">
              <img  src={search} alt="Search Icon" />
            </DivSearch>
          </>
        )}
      </Container2>
      <Container3>
        <Div>
          <DivIdioma>
            <Text3>Poné tu Airbnb</Text3>
          </DivIdioma>
          <DivIdioma>
            <img src={idioma} alt="Idioma Icon" />
          </DivIdioma>
        </Div>
        <BottonMenu photoPerson={user ? user.photoURL : photoPerson} />
      </Container3>
      <FilterResponsive>
        <img src={filter} className="w-4 h-4 transform scale-90" alt="Filter Icon" />
      </FilterResponsive>
    </Navbar>
  );
  
};

export default NavBar;
