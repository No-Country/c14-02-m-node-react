import IndividualViewPage from "./pages/IndividualViewPage";
import { GaleriaPage } from "./pages/GaleriaPage";
import Filtros from "./components/Filtros"; 
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Filtros/>
      <GaleriaPage />
      <IndividualViewPage />
    </>
  );
}

export default App;