import React, {useState} from "react";
import { useUpdateUserMutation } from "../store/rtk-query";
import SendPhoto from "./SendPhoto";
import { Link } from "react-router-dom";

function UProfile({names, surname, birthDate, email, phone, address, phoneUrgency, photo}) {
  const [editMode, setEditMode] = useState({
    names: false,
    surname: false,
    birthDate: false,
    email: false,
    phone: false,
    address: false,
    phoneUrgency: false,
  });
  const [newData, setNewData] = useState({
    names: names,
    surname: surname,
    birthDate: birthDate,
    email: email,
    phone: phone,
    address: address,
    phoneUrgency: phoneUrgency,
    photo: photo,
  });
  const [updateUser, { isLoading}] = useUpdateUserMutation();
  
  const handleEditClick = (fieldName) => {
    setEditMode({
      ...editMode,
      [fieldName]: !editMode[fieldName],
    });
  };

  const handleSaveClick = (fieldName) => {
    // Call the updateUser mutation to save the data to the database
    console.log(email, {[fieldName] : newData[fieldName]})
    //            
    updateUser( {email, update : {[fieldName] : newData[fieldName]} });

    // Exit edit mode
    setEditMode({
      ...editMode,
      [fieldName]: false,
    });
  };

  const handlePhotoUpload = (photoUrl) => {
    updateUser({ email, update: { photo: photoUrl } });
  };



  return (
    <div className="flex justify-center p-16">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {/* ===============LADO  IZQUIERDO=============== */}
        <div className="lg:mr-24">
          
          <div className="md:border rounded-2xl p-6">
            <div className="border-b py-12">
              <h2 className="text-4xl font-semibold pb-4">
                Datos Personales
              </h2>
            </div>
            <div className="border-b py-2">
              <h2 className="text-2xl font-semibold">Nombres</h2>
              {editMode.names ? (
                <div>
                  <input
                    type="text"
                    value={newData.names}
                    onChange={(e) => {
                      setNewData({ ...newData, names: e.target.value });
                    }}
                  />
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleSaveClick("names")}
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <p className="my-1">{newData.names}</p>
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleEditClick("names")}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>
            <div className="border-b py-2">
              <h2 className="text-2xl font-semibold">Apellido</h2>
              {editMode.surname ? (
                <div>
                  <input
                    type="text"
                    value={newData.surname}
                    onChange={(e) => {
                      setNewData({ ...newData, surname: e.target.value });
                    }}
                  />
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleSaveClick("surname")}
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <p className="my-1">{newData.surname}</p>
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleEditClick("surname")}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>

                        <div className="border-b py-2">
              <h2 className="text-2xl font-semibold">Fecha de Nacimiento</h2>
              {editMode.birthDate ? (
                <div>
                  <input
                    type="text"
                    value={newData.birthDate}
                    onChange={(e) => {
                      setNewData({ ...newData, birthDate: e.target.value });
                    }}
                  />
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleSaveClick("birthDate")}
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <p className="my-1">{newData.birthDate}</p>
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleEditClick("birthDate")}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>

            <div className="border-b py-2">
              <h2 className="text-2xl font-semibold">Teléfono</h2>
              {editMode.phone ? (
                <div>
                  <input
                    type="text"
                    value={newData.phone}
                    onChange={(e) => {
                      setNewData({ ...newData, phone: e.target.value });
                    }}
                  />
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleSaveClick("phone")}
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <p className="my-1">{newData.phone}</p>
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleEditClick("phone")}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>

            <div className="border-b py-2">
              <h2 className="text-2xl font-semibold">Dirección</h2>
              {editMode.address ? (
                <div>
                  <input
                    type="text"
                    value={newData.address}
                    onChange={(e) => {
                      setNewData({ ...newData, address: e.target.value });
                    }}
                  />
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleSaveClick("address")}
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <p className="my-1">{newData.address}</p>
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleEditClick("address")}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>

            <div className="border-b py-2">
              <h2 className="text-2xl font-semibold">Teléfono de Urgencia</h2>
              {editMode.phoneUrgency ? (
                <div>
                  <input
                    type="text"
                    value={newData.phoneUrgency}
                    onChange={(e) => {
                      setNewData({ ...newData, phoneUrgency: e.target.value });
                    }}
                  />
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleSaveClick("phoneUrgency")}
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <p className="my-1">{newData.phoneUrgency}</p>
                  <button
                    className="bg-white border border-black px-2 py-0 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover-bg-gray-200 mx-2"
                    onClick={() => handleEditClick("phoneUrgency")}
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* ===================LADO  DERECHO============= */}

        <div className="py-12">
            <div className="w-full p-10 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
            <img
                  src={photo}
                  alt="Imagen"
                  className="rounded-full h-24 w-24 object-cover mx-auto"
                >

                </img>
            
                <SendPhoto onPhotoUpload={handlePhotoUpload} />
              
              <h2 className="text-3xl font-bold text-center">{newData.names}</h2>
              <p className="card-content text-center">viajero</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default UProfile;
