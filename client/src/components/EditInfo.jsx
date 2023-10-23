import React, { useState , useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { userData } from "../api/conn";

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

  const initialData = {
    foto: '',
    names: '',
    surname:'',
    birthDate: '',
    email: '',
    phone: '',
    address: '',
  };
  
  const [names, setNames] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [userData, setUserData] = useState(initialData);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    axios.get('https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  const handleEditar = () => {
    setEditando(true);
  };

  const handleGuardar = (event) => {
    event.preventDefault();
    const newNames = event.target.names.value;
    const newSurname = event.target.surname.value;
    const newBirthDate = event.target.birthDate.value;
    const newEmail = event.target.email.value;
    const newPhone = event.target.phone.value;
    const newAddress = event.target.address.value;
    const updatedUserData = {
      ...userData,
      names: newNames,
      surname: newSurname,
      birthDate: newBirthDate,
      email: newEmail,
      phone: newPhone,
      address: newAddress,
    };
  
    axios.put('https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/user', updatedUserData)
      .then(response => {
        console.log('Datos actualizados con éxito');
        setUserData(updatedUserData);
        setEditando(false);
      })
      .catch(error => {
        console.error('Error al actualizar los datos:', error);
      });
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
            <img className="w-full h-full object-cover" src={userData.foto} alt="Foto de perfil" />
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
              <div className="border-b py-2 px-4 flex flex-col mb-2">
                <label className="text-gray-900 text-lg" htmlFor="nombre">Nombre</label>
                <input className="text-gray-500 border rounded-md py-1 px-2" id="nombre" name="nombre" defaultValue={userData.names} />
              </div>
              <div className="border-b py-2 px-4 flex flex-col mb-2">
                <label className="text-gray-900 text-lg" htmlFor="apellido">Apellido</label>
                <input className="text-gray-500 border rounded-md py-1 px-2" id="apellido" name="apellido" defaultValue={userData.surname} />
              </div>
              <div className="border-b py-2 px-4 flex flex-col mb-2">
                <label className="text-gray-900 text-lg" htmlFor="birthDate">Fecha de nacimiento</label>
                <input className="text-gray-500 border rounded-md py-1 px-2" id="birthDate" name="birthDate" defaultValue={userData.birthDate} />
              </div>
              <div className="border-b py-2 px-4 flex flex-col mb-2">
                <label className="text-gray-900 text-lg" htmlFor="email">Dirección de correo electrónico</label>
                <input className="text-gray-500 border rounded-md py-1 px-2" id="email" name="email" defaultValue={userData.email} />
              </div> 
              <div className="border-b py-2 px-4 flex flex-col mb-2">
                <label className="text-gray-900 text-lg" htmlFor="phone">Número de teléfono</label>
                <input className="text-gray-500 border rounded-md py-1 px-2" id="phone" name="phone" defaultValue={userData.phone} />
              </div>
              <div className="border-b py-2 px-4 flex flex-col mb-2">
                <label className="text-gray-900 text-lg" htmlFor="address">Dirección</label>
                <input className="text-gray-500 border rounded-md py-1 px-2" id="address" name="address" defaultValue={userData.address} />
              </div>
              <div className="m-4">
                <button className="border rounded-md py-2 px-2 bg-black text-white hover:bg-gray-900" type="submit">Guardar Datos</button>
              </div>
            </form>
          ) : (
            <div>
              <div className="border-b py-2 px-4 mb-2">
                <p className="text-gray-900 text-lg">Nombre</p>
                <p className="text-gray-500">{userData.names}</p>
              </div>
              <div className="border-b py-2 px-4 mb-2">
                <p className="text-gray-900 text-lg">Apellido</p>
                <p className="text-gray-500">{userData.surname}</p>
              </div>
              <div className="border-b py-2 px-4 mb-2">
                <p className="text-gray-900 text-lg">Fecha de nacimiento</p>
                <p className="text-gray-500">{userData.birthDate}</p>
              </div>
              <div className="border-b py-2 px-4 mb-2">
                <p className="text-gray-900 text-lg">Dirección de correo electrónico</p>
                <p className="text-gray-500">{userData.email}</p>
              </div> 
              <div className="border-b py-2 px-4 mb-2">
                <p className="text-gray-900 text-lg">Número de teléfono</p>
                <p className="text-gray-500">{userData.phone}</p>
              </div>
              <div className="border-b py-2 px-4 mb-2">
                <p className="text-gray-900 text-lg">Dirección</p>
                <p className="text-gray-500">{userData.address}</p>
              </div>
              <div className="m-4">
                <button className="border rounded-md py-2 px-2 bg-black text-white hover:bg-gray-900" onClick={handleEditar}>Editar Datos</button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

  
export default EditInfo;
