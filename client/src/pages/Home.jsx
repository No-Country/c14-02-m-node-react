import NavBar from "../components/NavBar";
import Filtros from "../components/Filtros";
import { GaleriaPage } from "./GaleriaPage";
import SuggestionFooter from "../components/SuggestionFooter";
import {MenuMovil} from "../components/MenuMovil";
export const Home = () => {
    return (
        <>
            <NavBar />
            <Filtros />
            <GaleriaPage/>
            <SuggestionFooter/>
            <MenuMovil/>
        </>
    )
};

export default NavBar;