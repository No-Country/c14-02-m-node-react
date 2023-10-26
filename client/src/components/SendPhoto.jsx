import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import style from './SendPhoto.module.css';

const VITE_IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY;

const SendPhoto = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
          params: {
            key: VITE_IMGBB_KEY,
          },
        });
        
        const imageUrl = response.data.data.url;
        
        // Llama a la función de devolución de llamada para enviar la URL al componente padre (UProfile)
        if (props.onPhotoUpload) {
          props.onPhotoUpload(imageUrl);
        }

        alert('¡Imagen actualizada!');
      } catch (error) {
        console.error('Hubo un error al subir la imagen:', error);
      }
    }
  };

  useEffect(() => {
    if (selectedFile) {
      handleUpload();
    }
  }, [selectedFile]);

  return (
    <div className={style.contenedor}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
      <button onClick={() => fileInputRef.current.click()}>Cambiar Foto</button>
    </div>
  );
};

export default SendPhoto;
