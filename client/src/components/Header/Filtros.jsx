// import styled from "styled-components";
import { React } from 'react';
import { useSwiper } from 'swiper/react';


// const DivIdioma = styled.div`

//     &:hover{
        
//     }
// `


export const Filtros = () => {
    const swiper = useSwiper();

    return(
        <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    );
}

