<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 3d7d10874c44e2406e4490f2c9dd39cea106f467
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const handleSignInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        const email = user.email;
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  };

  return (
    <div>
      <h2>Iniciar sesión con Google</h2>
      <button onClick={handleSignInWithGoogle}>Ingresar con Google</button>
    </div>
  );
};

export default Login;
