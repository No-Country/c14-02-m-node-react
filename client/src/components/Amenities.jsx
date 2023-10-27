import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { GiDesk, GiFireplace } from "react-icons/gi";

function Amenities() {
  return (
    <div>
      <div className="tborder-b border-b p-5">
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

export default Amenities;
