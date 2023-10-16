import NavBar from "./components/NavBar";
import Filtros from "./components/Filtros"; 
import { GaleriaPage } from "./pages/GaleriaPage";
import SuggestionFooter from "./components/SuggestionFooter";
import { AccessPage1 } from "./pages/AccessPage1";
import { AccessPage2 } from "./pages/AccessPage2";
import { AccessPage3 } from "./pages/AccessPage3";
import { AccessPage4 } from "./pages/AccessPage4";
import Login from "./pages/Login.jsx"

function App() {
  return (
    <>

      <NavBar />
      <Filtros/>
      <GaleriaPage />
      <AccessPage1 />
      <AccessPage2 />
      <AccessPage3 />
      <AccessPage4 />
      
      <Login />

      <SuggestionFooter />
    </>
  );
}

export default App;