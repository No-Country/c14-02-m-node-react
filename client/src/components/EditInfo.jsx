import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8rem;
  padding: 5rem 8rem;
  width: 80%;
`

const CircleImage = styled.div`
  width: 200px; /* Tamaño del círculo (ajusta según tus necesidades) */
  height: 200px; /* Tamaño del círculo (ajusta según tus necesidades) */
  border-radius: 50%; /* Hace que el elemento sea circular */
  overflow: hidden; /* Recorta la imagen que se desborda del círculo */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;


export const EditInfo = () => {
  const [foto, setFoto] = useState('url_de_la_foto_actual.jpg');
  const [nombre, setNombre] = useState('Juan');
  const [email, setEmail] = useState('JuanPedro@gmail.com');
  const [telefono, setTelefono] = useState('+234456781');
  const [direccion, setDireccion] = useState('Av. Alvear 345');
  const [editando, setEditando] = useState(false);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleGuardar = (event) => {
    event.preventDefault();
    const newNombre = event.target.nombre.value;
    const newEmail = event.target.email.value;
    const newTelefono = event.target.telefono.value;
    const newDireccion = event.target.direccion.value;
    setNombre(newNombre);
    setEmail(newEmail);
    setTelefono(newTelefono);
    setDireccion(newDireccion);
    setEditando(false);
  };

  const handleFotoChange = (event) => {
    const newFoto = URL.createObjectURL(event.target.files[0]);
    setFoto(newFoto);
  };

  return (
    <div>
      <Container>
        <div>
          <CircleImage>
            <img className="w-full h-full object-cover" src={foto} alt="Foto de perfil" />
          </CircleImage>
          {editando ? (
            <div>
              <input
                type="file"
                id="foto"
                name="foto"
                accept="image/*"
                onChange={handleFotoChange}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button className="py-2 px-4" onClick={handleEditar}>Editar Foto</button>
            </div>
          )}
        </div>
        <div>
          <h1 className="font-bold text-gray-900 text-3xl py-2 px-4">Datos Personales</h1>
          {editando ? (
            <form onSubmit={handleGuardar} encType="multipart/form-data">
              <label htmlFor="nombre">Nombre completo</label>
              <input id="nombre" name="nombre" defaultValue={nombre} />
              <label htmlFor="email">Dirección de correo electrónico</label>
              <input id="email" name="email" defaultValue={email} />
              <label htmlFor="telefono">Números de teléfono</label>
              <input id="telefono" name="telefono" defaultValue={telefono} />
              <label htmlFor="direccion">Dirección</label>

              <input id="direccion" name="direccion" defaultValue={direccion} />
              <button type="submit">Guardar Datos Personales</button>
            </form>
          ) : (
            <div>
              <div className="border-b py-2 px-4">
                <p className="text-gray-900 text-lg">Nombre legal</p>
                <p className="text-gray-500">{nombre}</p>
              </div>
              <div className="border-b py-2 px-4">
                <p className="text-gray-900 text-lg">Dirección de correo electrónico</p>
                <p className="text-gray-500">{email}</p>
              </div>
              <div className="border-b py-2 px-4">
                <p className="text-gray-900 text-lg">Números de teléfono</p>
                <p className="text-gray-500">{telefono}</p>
              </div>
              <div className="border-b py-2 px-4">
                <p className="text-gray-900 text-lg">Dirección</p>
                <p className="text-gray-500">{direccion}</p>
              </div>
              <button className="py-2 px-4" onClick={handleEditar}>Editar Datos Personales</button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

  
export default EditInfo;
