import {CrearPerfil} from "./pages/Pages-login-register/CrearPerfil";
import { FinishSigningUp } from "./pages/Pages-login-register/FinishSigningUp";
import { AccessPage1 } from "./pages/Pages-login-register/AccessPage1";
import { AccessPage2 } from "./pages/Pages-login-register/AccessPage2";
import {CreateYourProfile} from "./pages/Pages-login-register/CreateYourProfile";
import { CommunityLoginPage } from "./pages/Pages-login-register/CommunityLoginPage";
import { CaptchaNumber } from "./pages/Pages-login-register/CaptchaNumber";
import {AddPhoto} from "./pages/Pages-login-register/AddPhoto";

function App() {
  return (
    <>
      <AccessPage1 />
      <AccessPage2 />
      <FinishSigningUp />
      <CommunityLoginPage />
      <CrearPerfil />
      <CreateYourProfile />
      <CaptchaNumber />
      <AddPhoto />
      
    </>
  );
}

export default App;
