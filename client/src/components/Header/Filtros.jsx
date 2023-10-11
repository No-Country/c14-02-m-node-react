import styled from 'styled-components';
import boats from "../../assets/images/boats.png";
import lakefrontt from "../../assets/images/lakefrontt.png";
import luxe from "../../assets/images/luxe.png";
import treehouses from "../../assets/images/treehouses.png";
import izquierda from "../../assets/images/izquierda.png";
import derecha from "../../assets/images/derecha.png";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    margin: .4rem 0;
    padding: 1rem 2.5rem;
    gap: 2rem;
    height: auto;
`

const BoxFilter = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    background-color: white; 
    padding: 1rem 0 0 0; 
    margin: 1rem 1rem 1rem 0; 
    gap: .5rem; 
    box-sizing: border-box; 
    cursor: pointer; 
    height: calc(100% - 2px); 
    text-align: center;
    white-space: nowrap;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    padding: 0 0 .5rem 0;
    color: #464646;
    &:hover{
        box-sizing: border-box; 
        border-bottom: 2px solid #dcd5d5; 
        height: calc(100% - 4px);
        color: black;
    }
`

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

const Filtros = () => {
  return (
    <Container>
        <BoxFilter>
            <Icon src={luxe}/>
            <h3>Hotel</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={boats}/>
            <h3>Hotel Alojami</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={lakefrontt}/>
            <h3>Hotel Alojami</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={treehouses}/>
            <h3>Hotel Alojami</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={luxe}/>
            <h3>Hotel</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={boats}/>
            <h3>Hotel Alojami</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={lakefrontt}/>
            <h3>Hotel Alojami</h3>
        </BoxFilter>
        <BoxFilter>
            <Icon src={treehouses}/>
            <h3>Hotel Alojami</h3>
        </BoxFilter>
    </Container>
  );
};

export default Filtros
