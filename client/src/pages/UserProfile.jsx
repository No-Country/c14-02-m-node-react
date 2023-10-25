import HelpFooter from "../components/HelpFooter.jsx";
import NavBar from "../components/NavBar.jsx";
import SuggestionFooter from "../components/SuggestionFooter.jsx";
import UProfile from "../components/UProfile";
import { useAuth } from "../context/AuthContext.jsx";

function UserProfile() {

  const { user, loading } = useAuth();

  if (loading) {
    return console.log("Cargando..."); // Muestra un mensaje de carga mientras se carga el estado de autenticación.
  }

  if (!user) {
    return console.log("User not authenticated"); // O puedes redirigir al usuario a la página de inicio de sesión.
  }

  // console.log(user);
  return (
    <div>
      <NavBar photoPerson = {user.photoURL}/>
      <UProfile namePerson = {user.displayName} photoPerson = {user.photoURL}/>
      <HelpFooter />
      <SuggestionFooter />
    </div>
  );
}

export default UserProfile;
