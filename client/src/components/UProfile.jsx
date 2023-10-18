import React from "react";
import { GiCheckMark } from "react-icons/gi";

function UProfile() {
  return (
    <div className="flex justify-center p-16">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {/* ===============LADO  IZQUIERDO=============== */}
        <div className="lg:mr-24">
          <div className="py-12">
            <div className="w-full p-10 rounded-xl shadow-[5px_10px_30px_-3px_rgba(0,0,0,0.3)]">
              <img
                src="https://cdn.leonardo.ai/users/2b4dbbb3-c3f4-45a9-a675-33148ef5ed0f/generations/7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15/variations/Default_ultra_detailed_complex_illustration_a_water_bender_sur_0_7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15_1.jpg?w=512"
                alt="Imagen"
                className="rounded-full h-24 w-24 object-cover mx-auto"
              />
              <h2 className="text-3xl font-bold text-center">Megumi</h2>
              <p className="card-content text-center">viajero</p>
            </div>
          </div>
          <div className="md:border rounded-2xl p-6">
            <div className="border-b py-12">
              <h2 className="text-2xl font-semibold pb-4">
                Información confirmada de Megumi
              </h2>
              <div className="flex items-center">
                <div>
                  <GiCheckMark />
                </div>
                <div className="ml-4">
                  <p className="text-lg">
                    Dirección de correo electrónico
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <GiCheckMark />
                </div>
                <div className="ml-4">
                  <p className="text-lg">Número de teléfono</p>
                </div>
              </div>
            </div>
            <div className="py-12">
              <h2 className="text-2xl font-semibold">Verificá tu identidad</h2>
              <p className="my-4">
                Antes de reservar u ofrecer estadías en Airbnb, tenés que
                completar este paso.
              </p>
                <button className="bg-white border border-black px-4 py-2 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover:bg-gray-200">
                  Verificá tu identidad
                </button>
            </div>
          </div>
        </div>
        {/* ===================LADO  DERECHO============= */}
        <div className="flex items-center">
          <div className="border-t m-12 ">
            <h2 className="text-2xl font-semibold mt-6">
              Es hora de crear tu perfil
            </h2>
            <p className="my-4">
              Tu perfil en Airbnb es una parte importante de todas las reservas.
              Creá el tuyo para que los demás anfitriones y viajeros te conozcan
              mejor.
            </p>
            <button className="bg-pink-600 text-white w-full py-2 rounded-lg font-semibold">
              Crea un perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UProfile;
