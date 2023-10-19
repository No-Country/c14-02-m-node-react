import NavBar from "../components/NavBar";
import Filtros from "../components/Filtros";
import { GaleriaPage } from "./GaleriaPage";
import SuggestionFooter from "../components/SuggestionFooter";
import HelpFooter from "../components/HelpFooter";

export const Home = () => {
    return (
        <>
            <NavBar />
            <Filtros />
            <GaleriaPage/>
            <HelpFooter/>
            <SuggestionFooter/>
        </>

    )
};

export default NavBar;