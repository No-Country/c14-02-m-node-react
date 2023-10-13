import React, { useState } from "react";
import { GiGlobe } from "react-icons/gi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

function IvpHoster() {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="border-b my-5">
      <h2 className="text-2xl font-semibold my-5">Conocé al anfitrión</h2>
      <div className="p-12 my-3 bg-stone-200 rounded-lg">
        {/* CARD ANFITRION  */}

        <div className="flex items-center justify-around bg-white rounded-3xl drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] my-3 p-5 w-400">
          <div>
            <img
              src="https://cdn.leonardo.ai/users/2b4dbbb3-c3f4-45a9-a675-33148ef5ed0f/generations/7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15/variations/Default_ultra_detailed_complex_illustration_a_water_bender_sur_0_7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15_1.jpg?w=512"
              alt="Imagen"
              className="rounded-full h-40 w-40 object-cover mr-4"
            />
            <div className="text-center my-2">
              <h2 className="text-2xl font-semibold mb-0">Megumi</h2>
              <p className="text-gray-600 my-2">Anfitrion</p>
            </div>
          </div>

          <div>
            <div className="border-b">
              <h2 className="text-2xl font-bold mb-0">162</h2>
              <p className="text-xs text-gray-600 my-2">Evaluaciones</p>
            </div>
            <div className="border-b">
              <h2 className="text-2xl font-bold mb-0">4,88</h2>
              <p className="text-xs text-gray-600 my-2">Calificación</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-0">7</h2>
              <p className="text-xs text-gray-600 my-2">
                Años de experiencia como anfitrión
              </p>
            </div>
          </div>
        </div>

        {/* DESCRIPCION AMPLIA DEL ANFITRION */}

        <div className="border-b-2 border-stone-300">
          <div className="py-5">
            <ul className="my-4">
              <li className="flex items-center">
                <HiOutlineChatBubbleLeftRight size={35} />
                Habla Inlgés y Japones
              </li>
              <li className="flex items-center my-4">
                <GiGlobe size={35} />
                <p className="ml-3">Vive en Tokio</p>
              </li>
            </ul>
            <div>
              Hola, soy Megumi. El verdadero propietario de este tradicional me
              pidió que activara esta casa. Estoy tratando de compartir el
              atractivo de esta casa y de esta zona para muchas personas, tanto
              como sea posible, no solo la gente local, sino también los
              extranjeros. Me encanta ver las caras satisfechas de las personas
              que se han alojado en esta casa
            </div>
            <span className="text-lg font-semibold underline">Mostrar más</span>
          </div>

          <button className="bg-stone-900 text-white px-10 py-2 my-4 rounded-lg border-none">
            Escribile al anfitrión
          </button>
        </div>
        <div className="my-2">
          <p className="text-xs text-gray-600 my-2">
            Para proteger tus pagos, nunca transfieras dinero ni te comuniques
            fuera del sitio web o la app de Airbnb.
          </p>
        </div>
      </div>

      {/* MOSTRAR MAS - SHOW MORE */}

      <div className="my-5">
        <h1 className="text-2xl font-semibold my-3">Acerca de este lugar</h1>

        <div className="show-all">
          <p>
            Abierto el 19 de agosto de 2019 * A 10 minutos de la estación de
            Asakusa en tren. *La cerradura se instaló en esta habitación el 15
            de junio de 2023.
          </p>
        </div>
        <div className="my-3">
              <p>
                Es una casa japonesa de 90 años donde tiene “Wabi-Sabi”. Todos
                los diseños de las puertas/ventanas de madera fueron construidos
                por un carpintero del templo. El diálogo con la casa histórica
                te llevará un tiempo emocional.
              </p>
            </div>

        {showMore && (
          <div className={`show-${showMore ? "all" : "more"}`}>
            

            <div className="my-3">
              <p>
                Esta zona no se quemó en la Segunda Guerra Mundial. Por lo
                tanto, el camino es tortuoso con otras casas antiguas. El paseo
                te dará la atmósfera histórica.
              </p>
            </div>

            <div className="my-3">
              <p>
                El alojamiento Instalaciones 【de la habitación: la máquina de】
                aire acondicionado está instalada el 1 de junio de 2023. - Cama
                individual × 2 - Cocina x 1 - Inodoro x 2 - Baño x 1 -
                Refrigerador x 1 - Lavadora (con Seco) x 1 - Hervidor eléctrico
                x 1 - Microondas x 1 - Secador de pelo x 1. - Planifica x 1
              </p>
            </div>

            <div className="my-3">
              <p>
                【Comodidad】 Hay disponible un juego de toallas de baño/toallas
                faciales para cada persona. Champú, acondicionador, gel de baño,
                jabón de manos, detergente para platos, esponja, papel
                higiénico, juego de herramientas de limpieza básicas (limpiador
                de inodoros, aspiradora, etc.)
              </p>
            </div>

            <div className="my-3">
              <p>
                Número de registro Ley de Negocios de Hostelería | 墨田区保健所
                | 5墨福衛生環第127号
              </p>
            </div>
          </div>
        )}

        <button
          className="font-semibold text-lg underline"
          onClick={toggleText}
        >
          {showMore ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>
    </div>
  );
}

export default IvpHoster;
