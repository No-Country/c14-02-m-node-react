import React from "react";
import { AiFillStar } from "react-icons/ai";

const IvpReviews = () => {
  return (
    <div className="border-b m-3">
      {/* CALIFICACION */}
      <div className="flex items-center my-5">
        <AiFillStar size={30} className="mr-3" />
        <h2>4,89 · 45 evaluaciones</h2>
      </div>

      <div className="flex  mb-5">
        <div className="flex-1 mr-5">
          <div className="flex items-center rounded-md mb-5">
            <div className="w-[50%]">
              <p>Limpieza.</p>
            </div>
            <div className="w-[40%]">
              <div className="h-1 bg-black rounded-md">
                <div className="h-full bg-black rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-md mb-5">
            <div className="w-[50%]">
              <p>Coomunicación</p>
            </div>
            <div className="w-[40%]">
              <div className="h-1 bg-black rounded-md">
                <div className="h-full bg-black rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-md">
            <div className="w-[50%]">
              <p>Check-in</p>
            </div>
            <div className="w-[40%]">
              <div className="h-1 bg-black rounded-md">
                <div className="h-full bg-black rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-5">
          <div className="flex items-center rounded-md mb-5">
            <div className="w-[50%]">
              <p>Veracidad.</p>
            </div>
            <div className="w-[40%]">
              <div className="h-1 bg-black rounded-md">
                <div className="w-70 h-full bg-black rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-md mb-5">
            <div className="w-[50%]">
              <p>Ubicación</p>
            </div>
            <div className="w-[40%]">
              <div className="h-1 bg-black rounded-md">
                <div className="w-40 h-full bg-black rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-md">
            <div className="w-[50%]">
              <p>Precio según calidad</p>
            </div>
            <div className="w-[40%]">
              <div className="h-1 bg-black rounded-md">
                <div className="w-40 h-full bg-black rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EVALUACIONES */}

      <div className="my-8">
        <div className="flex items-center">
          <img
            src="https://cdn.leonardo.ai/users/2389090d-c1e3-407c-a48e-1bbe11fa29db/generations/2ce4f9ac-369b-4964-ae22-90171d2e0457/PhotoReal_pop_art_pictureexploding_coloursjesus_staturecristia_2.jpg?w=512"
            alt="Imagen"
            className="rounded-full w-20 h-20 object-cover float-left mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">Ezra</h2>
            <p className="float-left">Octubre de 2023</p>
          </div>
          
        </div>
        <div>
          <p>Permíteme empezar diciendo que Tetsuya fue un anfitrión muy agradable y amable. Es extremadamente comunicativo y se aleja para ayudarte. La estancia está escondida en el barrio sumida de Toyo, que está fuera del ajetreo y el bullicio, por lo que si estás buscando una escapada...</p>
          <span className="text-lg font-semibold underline">Mostrar más</span>
        </div>
        
      </div>
    </div>
  );
};

export default IvpReviews;
