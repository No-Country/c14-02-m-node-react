import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import IndividualViewPage from './pages/IndividualViewPage.jsx';
import { AccessPage1 } from './pages/AccessPage1.jsx';
import { Home } from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/rooms', // Agregamos la nueva ruta
    element: <IndividualViewPage/>, // Aquí debes definir el componente correspondiente
  },
  {
    path: '/registro',
    element: <AccessPage1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
