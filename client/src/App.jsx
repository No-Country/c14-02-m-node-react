import { NavBar } from "./components/NavBar";
import { GaleriaPage } from "./pages/GaleriaPage";
import Filtros from "./components/Filtros"; 

function App() {
  return (
    <>
      <NavBar/>
      <Filtros/>
      <GaleriaPage />
    </>
  );
}

export default App;