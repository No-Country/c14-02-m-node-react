
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import App from './App';
// import './index.css';
// import IndividualViewPage from './pages/IndividualViewPage.jsx';
// import { AccessPage1 } from './pages/AccessPage1.jsx';
// import { AccessPage2 } from './pages/AccessPage2.jsx';
// import { AccessPage3 } from './pages/AccessPage3.jsx';
// import { AccessPage4 } from './pages/AccessPage4.jsx';
// import { Home } from './pages/Home.jsx';
// import UserProfile from './pages/UserAccount';
// import UserAccount from './pages/UserProfile';
// import UserInfo from './pages/UserInfo';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: '/rooms', // Agregamos la nueva ruta
//     element: <IndividualViewPage/>, // Aquí debes definir el componente correspondiente
//   },
//   {
//     path: '/registro',
//     element: <AccessPage1 />,
//   },
//   {
//     path: '/login',
//     element: <AccessPage2 />,
//   },
//   {
//     path: '/completardatos',
//     element: <AccessPage3 />,
//   },
//   {
//     path: '/condiciones',
//     element: <AccessPage4 />,
//   },
//   {
//     path: '/cuenta/:usuario',
//     element: <UserProfile />,
//   },
//   {
//     path: '/perfil/:usuario',
//     element: <UserAccount />,
//   },
//   {
//     path: '/info/:usuario',
//     element: <UserInfo />,
//   },
// ]);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
    
      <App/>
    
    </BrowserRouter>

  </React.StrictMode>
);
