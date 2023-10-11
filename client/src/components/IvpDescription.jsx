import IvpSlider from "./IvpSlider";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { GiDesk, GiFireplace } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";
import { LuShowerHead } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import IvpHoster from "./IvpHoster";


function IvpDescription() {
  return (
    <div className="max-w-[650px] p-4">
      
      <div className=" py-3">
        <h2 className="text-2xl font-semibold">
          Tipo de Alojamiento. Nombre Anfitrión.
        </h2>
       
      </div>

      <div className="border-b py-3">
        <div className="flex">
          <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
            <LiaBedSolid size={30} className="mb-4"/>
            <p className="text-xs">1 cama de una plaza</p>
          </div>
          <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
            <LuShowerHead size={30} className="mb-4" />
            <p className="text-xs">Baño compartido</p>
          </div>
          <div className="flex-1 border border-gray-300 rounded-xl p-4">
            <FaPeopleRoof size={30 } className="mb-4" />
            <p className="text-xs">Es posible que el anfitrión y otros huéspedes estén acá</p>
          </div>
        </div>
      </div>

      <div className="border-b py-3">
        <div className="bg-stone-100 p-2 rounded-lg">
          <p>Parte de la información se tradujo automáticamente. </p>
          <span className="font-semibold underline">
            Mostrar idioma original
          </span>
        </div>
      </div>

      {/* CARD DEL HOSTER */}

      <IvpHoster />

      <div className="border-b py-3">
        <h2 className="text-2xl mb-4 font-semibold">¿Dónde vas a dormir?</h2>
        <IvpSlider />
      </div>

      {/* SERVICIOS */}

      <div className="tborder-b border-b py-3">
        <p className="font-semibold text-2xl my-4">¿Qué ofrece este lugar?</p>

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
    </div>
  );
}

export default IvpDescription;
