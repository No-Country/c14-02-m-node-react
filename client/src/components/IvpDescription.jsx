import { Link } from "react-router-dom";

import IvpSlider from "./IvpSlider";
import IvpCalendar from "../components/IvpCalendar";
import IvpHoster from "./IvpHoster";
import IvpReservation from "./IvpReservation";

import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { GiDesk, GiFireplace } from "react-icons/gi";
import { LiaBedSolid, LiaMedalSolid } from "react-icons/lia";
import { LuShowerHead } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";


import { useSelector } from "react-redux";

function IvpDescription() {

  const info = useSelector(state => state.main.publicationDetail);

  console.log('publicationDetail', info);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {/* ---------IZQUIERDA--------------- */}
        <div className="col-span-3 md:col-span-2">
          <div className="max-w-[600px] mx-auto">
            <div className="flex items-center p-5">
              <div>
                <h2 className="text-2xl font-semibold">
                  Habitación en el siguiente alojamiento: choza.
                </h2>
                <h2 className="text-2xl font-semibold">Anfitrión: Megumi</h2>
              </div>
              <div>
                <Link to="/user-account">
                  <img
                    src="https://cdn.leonardo.ai/users/2b4dbbb3-c3f4-45a9-a675-33148ef5ed0f/generations/7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15/variations/Default_ultra_detailed_complex_illustration_a_water_bender_sur_0_7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15_1.jpg?w=512"
                    alt="Imagen"
                    className="rounded-full h-16 w-16 object-cover mr-4"
                  />
                </Link>
              </div>
            </div>

            {/* DIVS CON BORDE */}
            <div className="border-b p-5">
              <div className="flex">
                <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
                  <LiaBedSolid size={30} className="mb-4" />
                  <p className="text-xs">1 cama de una plaza</p>
                </div>
                <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
                  <LuShowerHead size={30} className="mb-4" />
                  <p className="text-xs">Baño compartido</p>
                </div>
                <div className="flex-1 border border-gray-300 rounded-xl p-4">
                  <FaPeopleRoof size={30} className="mb-4" />
                  <p className="text-xs">
                    Es posible que el anfitrión y otros huéspedes estén acá
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="border-b p-5">
              <div>
                <div className="flex items-center">
                  <LiaBedSolid size={30} className="mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">
                      Habitación en el siguiente alojamiento: choza
                    </h2>
                    <p>
                      Tu propio dormitorio en un alojamiento, más acceso a
                      espacios comunes compartidos.
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-6">
                  <LiaMedalSolid size={30} className="mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">
                      Tetsuya tiene la categoría de Superanfitrión
                    </h2>
                    <p>
                      Los Superanfitriones son anfitriones con experiencia y
                      evaluaciones excelentes.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <GrNotes size={25} className="mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold">
                      Cancelación gratuita antes del 23 nov..
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* IDIOMA */}

            <div className="border-b p-5">
              <div className=" p-2 rounded-lg">
                <p>Parte de la información se tradujo automáticamente. </p>
                <span className="font-semibold underline">
                  Mostrar idioma original
                </span>
              </div>
            </div>

            {/* CARD DEL HOSTER */}

            <IvpHoster />

            <div className="border-b p-5">
              <h2 className="text-2xl mb-4 font-semibold">
                ¿Dónde vas a dormir?
              </h2>
              <IvpSlider />
            </div>

            {/* SERVICIOS */}

            <div className="tborder-b border-b p-5">
              <p className="font-semibold text-2xl my-4">
                ¿Qué ofrece este lugar?
              </p>
                
              <div className="flex mb-4">
                <LiaSwimmingPoolSolid size={35} />
                <p>Pileta De uso privado</p>
              </div>
              <div className="flex mb-4">
                <TbToolsKitchen2 size={30} />
                <p>Cocina</p>
              </div>
              <div className="flex mb-4">
                <AiOutlineWifi size={35} />
                <p>Wifi</p>
              </div>
              <div className="flex mb-4">
                <AiOutlineCar size={35} />
                <p>Estacionamiento gratis en la propiedad</p>
              </div>
              <div className="flex mb-4">
                <GiDesk size={35} />
                <p>Zona de trabajo</p>
              </div>
              <div className="flex mb-4">
                <GiFireplace size={35} />
                <p>Chimenea</p>
              </div>
              <div className="mb-6">
                <button className="bg-white text-black border font-semibold border-black px-4 py-2 rounded">
                  Mostrar más Servicios
                </button>
              </div>
            </div>
            {/* CALENDAR */}
            <IvpCalendar />
          </div>
        </div>

        {/* DERECHA */}
        <IvpReservation />
      </div>
    </div>
  );
}

export default IvpDescription;
