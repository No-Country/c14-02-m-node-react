import { Link } from "react-router-dom";

import IvpSlider from "./IvpSlider";
import IvpCalendar from "../components/IvpCalendar";
import IvpHoster from "./IvpHoster";

import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineWifi, AiOutlineCar, AiFillStar } from "react-icons/ai";
import { GiDesk, GiFireplace } from "react-icons/gi";
import { LiaBedSolid, LiaMedalSolid } from "react-icons/lia";
import { LuShowerHead } from "react-icons/lu";
import { FaPeopleRoof, FaFlag } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";

function IvpDescription() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {/* ---------IZQUIERDA--------------- */}
        <div className="col-span-3 md:col-span-2">
          <div className="max-w-[600px] mx-auto">
            <div className="flex items-center p-5">
              <div>
<<<<<<< HEAD
                <h2 className="text-2xl font-semibold">Habitación en el siguiente alojamiento: choza.</h2>
                <h2 className="text-2xl font-semibold">Anfitrión: Megumi</h2>
              </div>
              <div>
              <img
              src="https://cdn.leonardo.ai/users/2b4dbbb3-c3f4-45a9-a675-33148ef5ed0f/generations/7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15/variations/Default_ultra_detailed_complex_illustration_a_water_bender_sur_0_7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15_1.jpg?w=512"
              alt="Imagen"
              className="rounded-full h-16 w-16 object-cover mr-4"
            />
=======
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
>>>>>>> 3d7d10874c44e2406e4490f2c9dd39cea106f467
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
        <div className="hidden md:block">
          <div className="inner-div bg-white p-4 border-2 rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
            <div>
              <div className="flex items-baseline">
                <h2 className="text-2xl font-semibold mr-2">$57 USD</h2>
                <span className="text-slate-500">noche</span>
              </div>
              <div>
                <AiFillStar />
                <p>4,89 ·45 evaluaciones</p>
              </div>
            </div>

            <div className="grid grid-cols-2 rounded-lg ">
              <div className="border p-2">
                <p className="text-xs font-semibold">CHECK-IN</p>
                <p>30/11/2023</p>
              </div>
              <div className="border p-2">
                <p className="text-xs font-semibold">CHECK-OUT</p>
                <p>...</p>
              </div>
              <div className="border p-2 col-span-2">
                <p className="text-xs font-semibold">VIAJEROS</p>
                <p>1 huésped</p>
              </div>
            </div>

            <button className="bg-rose-600 text-white font-semibold px-8 py-3 my-4 rounded-lg border-none">
              Consultar disponibilidad
            </button>
          </div>
          <div className="flex text-stone-500 items-center my-5">
            <div>
              <FaFlag />
            </div>
            <div>
              <span className="font-semibold underline px-3 my-8">
                Denunciar este anuncio
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IvpDescription;
