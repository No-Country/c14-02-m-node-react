<<<<<<< HEAD
import NavBar from "./components/NavBar";
import Filtros from "./components/Filtros";
import { GaleriaPage } from "./pages/GaleriaPage";
import { CrearPerfil } from "./pages/Pages-login-register/CrearPerfil";
import { FinishSigningUp } from "./pages/Pages-login-register/FinishSigningUp";
import { AccessPage1 } from "./pages/Pages-login-register/AccessPage1";
import { AccessPage2 } from "./pages/Pages-login-register/AccessPage2";
import { CreateYourProfile } from "./pages/Pages-login-register/CreateYourProfile";
import { CommunityLoginPage } from "./pages/Pages-login-register/CommunityLoginPage";
import { CaptchaNumber } from "./pages/Pages-login-register/CaptchaNumber";
import { AddPhoto } from "./pages/Pages-login-register/AddPhoto";
import Login from "./pages/Login";
import SuggestionFooter from "./components/SuggestionFooter";

function App() {
  return (
    <>
      <NavBar />
      <Filtros />
      <GaleriaPage />
      <AccessPage1 />
      <AccessPage2 />
      <FinishSigningUp />
      <CommunityLoginPage />
      <CrearPerfil />
      <CreateYourProfile />
      <CaptchaNumber />
      <AddPhoto />
      {/* ///////// */}
      <Login />
      <SuggestionFooter />
    </>
=======
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
>>>>>>> 3d7d10874c44e2406e4490f2c9dd39cea106f467
  );
}

export default App;
