import React, { useState } from 'react';
import styled from 'styled-components';
import vistasincreibles from "../assets/images/vistasincreibles.png";
import boats from "../assets/images/boats.png";
import lakefrontt from "../assets/images/lakefrontt.png";
import luxe from "../assets/images/luxe.png";
import treehouses from "../assets/images/treehouses.png";
import cabañas from "../assets/images/cabañas.png";
import impresionantes from "../assets/images/impresionantes.png";
import frentealaplaya from "../assets/images/frentealaplaya.png";
import esqui from "../assets/images/esquí.png";
import mansiones from "../assets/images/mansiones.png";
import pianosdecola from "../assets/images/pianosdecola.png";
import piletasincreibles from "../assets/images/piletasincreibles.png";
import filter from "../assets/images/filter.png";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: .4rem 0 0 0;
    padding: 1rem 2.5rem 0 2.5rem;
    gap: 1.5rem;
    background-color: #fff;
    position: sticky;
    top: 70px;
    z-index: 99;
    
    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
        padding: 0 1.5rem;
        margin: 0;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
        position: relative;
        top: 8px;
    }
`

const BoxFilters = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    overflow: hidden;
    flex-wrap: nowrap;
    flex-grow: 1;

    @media (max-width: 800px) {
        display: flex;
    }
`

const Filter = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    background-color: white; 
    padding: 1rem 0 0 0; 
    margin: 1rem 1rem 0 0; 
    gap: .2rem; 
    box-sizing: border-box; 
    cursor: pointer; 
    text-align: center;
    white-space: nowrap;
    font-size: 11.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    padding: 0 0 .5rem 0;
    color: #464646;
    border-bottom: 2px solid transparent;
    &:hover{
        transition: 0.2s;
        box-sizing: border-box; 
        border-bottom: 2px solid #dcd5d5;
        color: black;
        border-bottom-style: solid;
    }
    @media (max-width: 800px) {
        display: flex;
        margin: 0;
    }
`

const Box = styled.div`
    display: flex;
    padding: 15px 16px;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #DDD;
    background: #FFF;
    cursor: pointer;
    @media (max-width: 800px) {
        display: none;
    }
`

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

const Text = styled.h3`
    color:  #222;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  & input:checked + span {
    background-color: black;
  }

  & input:focus + span {
    box-shadow: 0 0 1px black;
  }

  & input:checked + span:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
`;



const Filtros = () => {


  return (
        <Container>
            <BoxFilters>
                <Filter>
                    <Icon src={vistasincreibles}/>
                    <h3>Vistas increíbles</h3>
                </Filter>
                <Filter>
                    <Icon src={luxe}/>
                    <h3>Luxe</h3>
                </Filter>
                <Filter>
                    <Icon src={frentealaplaya}/>
                    <h3>Frente a la playa</h3>
                </Filter>
                <Filter>
                    <Icon src={boats}/>
                     <h3>Barcos</h3>
                </Filter>
                <Filter>
                    <Icon src={lakefrontt}/>
                    <h3>En el lago</h3>
                </Filter>
                <Filter>
                    <Icon src={treehouses}/>
                    <h3>Casas del árbol</h3>
                </Filter>
                <Filter>
                            <Icon src={cabañas}/>
                            <h3>Cabañas</h3>
                </Filter>
                <Filter>
                            <Icon src={impresionantes}/>
                            <h3>¡Impresionantes!</h3>
                </Filter>
                {/* <Filter>
                            <Icon src={mansiones}/>
                            <h3>Mansiones</h3>
                </Filter>
                <Filter>
                            <Icon src={piletasincreibles}/>
                            <h3>Piletas increíbles</h3>
                </Filter>
                <Filter>
                            <Icon src={esqui}/>
                            <h3>Esquí</h3>
                </Filter>
                <Filter>
                            <Icon src={pianosdecola}/>
                            <h3>Pianos de cola</h3>
                </Filter> */}
            </BoxFilters>
            <Box>
                <img src={filter}/>
                <Text>Filtros</Text>
            </Box>
            <Box>
                <Text>Mostrar total (sin impuestos)</Text>
                <Switch>
                    <input type="checkbox" />
                    <span></span>
                </Switch>
            </Box>
        </Container>
  );
};

export default Filtros
