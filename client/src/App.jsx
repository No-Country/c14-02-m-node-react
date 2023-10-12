import IndividualViewPage from "./pages/IndividualViewPage";
import { GaleriaPage } from "./pages/GaleriaPage";
import Filtros from "./components/Filtros"; 

function App() {
  return (
    <>
    <IndividualViewPage />
      <NavBar/>
      <Filtros/>
      <GaleriaPage />
    </>
  );
}

export default App;