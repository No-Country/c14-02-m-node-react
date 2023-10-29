import React, { useState } from "react";
import axios from "axios";
import { BsCheckCircle } from "react-icons/bs";

const VITE_IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY; // Reemplaza con tu clave de API de ImgBB

function UpImages({ onImagesUploaded }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUploadImages = async () => {
    const uploadedUrls = [];
    const maxFileSize = 2 * 1024 * 1024; // 2 megabytes

    for (const file of selectedFiles) {
      if (uploadedUrls.length >= 5) {
        break; // Limitar a un máximo de 5 imágenes
      }

      if (file.size > maxFileSize) {
        console.error(`La imagen ${file.name} excede el tamaño máximo.`);
        continue;
      }

      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: VITE_IMGBB_KEY,
            },
          }
        );

        const imageUrl = response.data.data.url;
        uploadedUrls.push(imageUrl);
      } catch (error) {
        console.error("Hubo un error al subir la imagen:", error);
      }
    }

    if (uploadedUrls.length >= 5) {
      setUploadSuccess(true);
    }

    // Llama a la función de devolución de llamada y pasa las URLs de las imágenes cargadas
    onImagesUploaded(uploadedUrls);

    // Actualiza el estado uploadedImageUrls después de llamar a onImagesUploaded
    setUploadedImageUrls(uploadedUrls);
  };

  return (
    <div>
      <div className="mt-5">
        <div className="font-semibold mb-3">
          <label htmlFor="file_input">
            Selecciona por lo menos 5 imágenes (máximo 2 MB cada una):
          </label>
        </div>
        <input
          id="file_input"
          type="file"
          multiple
          accept="image/*"
          className=" border-0 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-600"
          onChange={handleFileChange}
        ></input>
      </div>
      <div className="flex mt-4 items-center justify-center">
        {selectedFiles.map((file, index) => (
          <div key={index} className="mb-2 mr-2">
            <img
              src={URL.createObjectURL(file)}
              alt={`Imagen ${index + 1}`}
              width="100"
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="bg-white border-2 text-sm border-stone-950 px-4 py-2 text-black font-semibold rounded-md mb-5"
          onClick={handleUploadImages}
        >
          Subir imágenes
        </button>
      </div>
      <div>
        {uploadSuccess ? (
          <div className="flex items-center justify-center border-2 border-pink-500 bg-white p-3 shadow-md mt-4">
            <p className="mr-3">Tus imágenes han sido cargadas con éxito!</p>
            <BsCheckCircle size={20} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UpImages;
