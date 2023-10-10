import React, { useState } from 'react';
import styled from "styled-components";
import boats from "../../assets/images/boats.png";
import lakefrontt from "../../assets/images/lakefrontt.png";
import luxe from "../../assets/images/luxe.png";
import treehouses from "../../assets/images/treehouses.png";
import izquierda from "../../assets/images/izquierda.png";
import derecha from "../../assets/images/derecha.png";

const DivCarrousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  scroll-behavior: smooth;
  transition: transform 1s ease;
  width: 100%;
`;

const Elemento = styled.div`
  flex: initial;
  margin: 1rem;
  align-items: center;
  justify-content: center;
`;

const Flecha = styled.img`
  width: auto;
`;

export default function Filtros() {

  const [slideActual, setSlideActual] = useState(0);

  const cambiarSlide = (direccion) => {
    if (direccion === "izquierda") {
      setSlideActual(slideActual - 1);
    } else if (direccion === "derecha") {
      setSlideActual(slideActual + 1);
    }
  };

  const elementos = [
    <Elemento>
      <img src={boats} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
      <img src={lakefrontt} />
      <p>Playas</p>
    </Elemento>,
    <Elemento>
      <img src={luxe} />
      <p>Playas</p>
    </Elemento>,
    <Elemento>
      <img src={treehouses} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
      <img src={boats} />
      <p>Playas</p>
    </Elemento>,
    <Elemento>
      <img src={lakefrontt} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
      <img src={luxe} />
      <p>Playas</p>
    </Elemento>,
    <Elemento>
      <img src={treehouses} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
    <img src={treehouses} />
        <p>Playas</p>
    </Elemento>,
    <Elemento>
        <img src={boats} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
        <img src={lakefrontt} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
        <img src={luxe} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
        <img src={treehouses} />
      <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
    <img src={treehouses} />
    <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
    <img src={boats} />
    <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
    <img src={lakefrontt} />
    <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
    <img src={luxe} />
    <p>Vistas Increibles</p>
    </Elemento>,
    <Elemento>
    <img src={treehouses} />
    <p>Vistas Increibles</p>
    </Elemento>
  ];

  return (
    <>
      <DivCarrousel>
        {slideActual > 0 && (
          <button onClick={() => cambiarSlide("izquierda")}>
            <Flecha src={izquierda}/>
          </button>
        )}
        {elementos.slice(slideActual, slideActual + 8)}
        {slideActual + 4 < elementos.length && (
          <button onClick={() => cambiarSlide("derecha")}>
            <Flecha src={derecha}/>
          </button>
        )}
      </DivCarrousel>
    </>
  );
}
