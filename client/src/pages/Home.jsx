import NavBar from "../components/NavBar";
import Filtros from "../components/Filtros";
import { GaleriaPage } from "./GaleriaPage";
import SuggestionFooter from "../components/SuggestionFooter";
import PropertyForm from "./PropertyFrom";

export const Home = () => {
    return (
        <>
            <NavBar />
            <Filtros />
            <GaleriaPage/>
            <SuggestionFooter/>
            <PropertyForm />
        </>
    )
};

export default NavBar;