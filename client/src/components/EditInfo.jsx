import React , { useState } from "react";

export const EditInfo = () => {
    const [foto, setFoto] = useState('url_de_la_foto_actual.jpg'); // Cambia la URL por la URL de la foto actual
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
  
    if (editando) {
      return (
        <form onSubmit={handleGuardar} encType="multipart/form-data">
          <label htmlFor="nombre">Nombre legal</label>
          <input id="nombre" name="nombre" defaultValue={nombre} />
          <label htmlFor="email">Dirección de correo electrónico</label>
          <input id="email" name="email" defaultValue={email} />
          <label htmlFor="telefono">Números de teléfono</label>
          <input id="telefono" name="telefono" defaultValue={telefono} />
          <label htmlFor="direccion">Dirección</label>
          <input id="direccion" name="direccion" defaultValue={direccion} />
          <label htmlFor="foto">Foto de perfil</label>
          <input
            type="file"
            id="foto"
            name="foto"
            accept="image/*"
            onChange={handleFotoChange}
          />
          <button type="submit">Guardar</button>
        </form>
      );
    } else {
      return (
        <>
          <h1 className="font-bold py-2 px-4">Datos Personales</h1>
          <img className="py-2 px-4" src={foto} alt="Foto de perfil" />
          <ul>
            <li>
              <div className="border border-solid border-2 py-2 px-4">
                <p className="font-medium">Nombre legal </p>
                <p className="text-gray-700">{nombre}</p>
                {/* <button onClick={handleEditar}>Editar</button> */}
              </div>
            </li>
            <li>
              <div className="border border-solid border-2 py-2 px-4">
                <p className="font-medium">Dirección de correo electrónico</p>
                <p className="text-gray-700">{email}</p>
                {/* <button onClick={handleEditar}>Editar</button> */}
              </div>
            </li>
            <li>
              <div className="border border-solid border-2 py-2 px-4">
                <p className="font-medium">Números de teléfono</p>
                <p className="text-gray-700">{telefono}</p>
                {/* <button onClick={handleEditar}>Editar</button> */}
              </div>
            </li>
            <li>
              <div className="border border-solid border-2 py-2 px-4">
                <p className="font-medium">Dirección</p>
                <p className="text-gray-700">{direccion}</p>
                {/* <button onClick={handleEditar}>Editar</button> */}
              </div>
            </li>
            <button className="py-2 px-4" onClick={handleEditar}>Editar</button>
          </ul>
        </>
      );
    }
  };
  
  export default EditInfo;
