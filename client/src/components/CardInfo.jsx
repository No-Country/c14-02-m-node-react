import React from 'react';
import { useFetch } from "../api/useFecht";

const CardInfo = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3000/api/publication/");

  console.log('Data:', data);

  if (isLoading) {
    return <p>Loading...</p>; // Muestra un mensaje de carga mientras se obtienen los datos.
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Muestra un mensaje de error si la solicitud falla.
  }

 
  return (
    <div className="card">
      {data.map((item, email) => (
        <div className="card-item" key={email}>
          <p className="location">{item.location}</p>
          <p className="price">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;
