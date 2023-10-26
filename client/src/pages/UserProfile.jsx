import HelpFooter from "../components/HelpFooter.jsx";
import NavBar from "../components/NavBar.jsx";
import SuggestionFooter from "../components/SuggestionFooter.jsx";
import UProfile from "../components/UProfile";
import { useAuth } from "../context/AuthContext.jsx";
import { useGetUserQuery } from "../store/rtk-query.js";
import UserRegister from "../components/UserRegister.jsx";
import { useEffect, useState } from "react";

function UserProfile() {
  const { user, loading } = useAuth();
  const { data, isLoading } = useGetUserQuery(user.email);

  const [userData, setUserData] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    
    // if (!isLoading) {
      console.log(data)
      if (data && data.email === user.email) {
        // El usuario está registrado, no es necesario mostrar el componente de registro.
        setUserData(data);
        console.log(data)
        setShowRegister(false);
      } else {
        // El usuario no está registrado, muestra el componente de registro.
        setShowRegister(true);
      }
    // }
  }, [data, isLoading, user.email]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {showRegister ? (
        <UserRegister user={user} />
      ) : (
        <>
          <NavBar photoPerson={user.photoURL} />
          <UProfile 
            names={data.names}
            surname={data.surname}
            birthDate={data.birthDate}
            email={data.email}
            phone={data.phone}
            address={data.address}
            phoneUrgency={data.phoneUrgency}
            photoPerson={user.photoURL} />
          <HelpFooter />
          <SuggestionFooter />
        </>
      )}
    </div>
  );
}

export default UserProfile;