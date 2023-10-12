import styled from 'styled-components';
import logo from "../assets/images/airbnblogo.png";
import search from "../assets/images/search.png";
import idioma from "../assets/images/idioma.png";
import menu from "../assets/images/menu.png";
import usuario from "../assets/images/usuario.png";
import searchmovil from "../assets/images/searchmovil.png";


const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);
    background-color: #fff;

    @media (max-width: 800px) {
        display: flex;
        justify-content: center;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 258px;
    height: 32px;
    cursor: pointer;

    @media (max-width: 800px) {
        display: none;
    }
`

const Container2 = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    border-radius: 24px;
    border: 1px solid #DDD;   
    box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.05), 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
    cursor: pointer;

    &:hover{
        box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09), 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 800px) {
        display: none;
    }
`

const Container2Movil = styled.div`

    display: none;

    &:hover{
        box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09), 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: row;
        padding: 8px 10px;
        align-items: center;
        border-radius: 24px;
        border: 1px solid #DDD;   
        box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.05), 0px 1px 2px 0px rgba(0, 0, 0, 0.08);
        cursor: pointer;
    }
`

const Container3 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    @media (max-width: 800px) {
        display: none;
    }
`

const DivSearch = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    padding: 10px;
    align-items: center;
    background-color: #FF385C;
`

const DivLogin = styled.div`
    display: flex;
    padding: 6px 6px 6px 12px;
    align-items: center;
    gap: 12px;
    border-radius: 24px;
    border: 1px solid #DDD;
    background: #FFF;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 4px 12px 0px rgba(73, 32, 32, 0.09), 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
    }
`

const Div = styled.div`
    display: flex;
`

const DivIdioma = styled.div`
    display: flex;
    height: 40px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;

    &:hover{
        background: #F7F7F7;
    }
`

const DivMovil = styled.div`
    display:flex;
    flex-direction: row;
`

const Text = styled.p`
    white-space: nowrap;
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    padding: 0px 16px;
    border-right: 1px solid #DDD;

    @media (max-width: 800px) {
        display: flex;
        border-right: none;
    }
`

const Text2 = styled.p`
    white-space: nowrap;
    margin: 0;
    color:  #717171;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    padding: 0px 16px;

    @media (max-width: 800px) {
        display: flex;
        font-size: 12px;
        padding: 0 5px 0 16px;
    }

`

const Text3 = styled.p`
    white-space: nowrap;
    margin: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;

    @media (max-width: 800px) {
        display: flex;
        font-size: 12px;
        color:  #717171;
        padding: 0 5px;
    }
`
const Icon = styled.img`
    width: 2rem;
    height: 2rem;
`



export const NavBar = () => {
    return(
        <Navbar>
            <Container>
                <img src={logo}/>
            </Container>
            <Container2>
                <Text>A cualquier lugar</Text>
                <Text>semana (en cualquier fecha)</Text>
                <Text2>¿Cuantos?</Text2>
                <DivSearch>
                    <img src={search}/>
                </DivSearch>
            </Container2>
            <Container2Movil>
                <Icon src={searchmovil}/>
                <div>
                <Text>A cualquier lugar</Text>
                <DivMovil>
                    <Text2>semana (en cualquier fecha)</Text2>
                    <Text3>●</Text3>
                    <Text3>¿Cuantos?</Text3>
                </DivMovil>
                </div>
            </Container2Movil>
            <Container3>
                <Div>
                    <DivIdioma>
                        <Text3>Poné tu Airbnb</Text3>
                    </DivIdioma>
                    <DivIdioma>
                        <img src={idioma}/>
                    </DivIdioma>
                </Div>
                    <DivLogin>
                        <img src={menu}/>
                        <img src={usuario}/>
                    </DivLogin>
            </Container3>
        </Navbar>
    )
}
