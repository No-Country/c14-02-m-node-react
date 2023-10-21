import NavBar from "../components/NavBar";
import Filtros from "../components/Filtros";
import { GaleriaPage } from "./GaleriaPage";
import SuggestionFooter from "../components/SuggestionFooter";


export const Home = () => {
    return (
        <>
            <NavBar />
            <Filtros />
            <GaleriaPage/>
            <SuggestionFooter/>
        </>

    )
};

export default NavBar;