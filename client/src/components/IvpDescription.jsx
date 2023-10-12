import IvpSlider from "./IvpSlider"
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { GiDesk, GiFireplace } from "react-icons/gi";
import IvpHoster from "./IvpHoster";

function IvpDescription() {
  return (
    <div className="max-w-[650px] p-4">

        <div className="border-b py-3">
            <h2 className="text-2xl font-semibold">Tipo de Alojamiento. Nombre Anfitrión.</h2>
            <p>X huéspedes * x dormitorios * x camas * xbaños</p>
        </div>

        <div className="border-b py-3">
            <h3 className="text-xl font-semibold">Amenities</h3>
            <p>Descripción Amenities</p>
        </div>
        
        <div className="border-b py-3">
            <div className="bg-stone-100 p-2 rounded-lg">
                <p>Parte de la información se tradujo automáticamente. </p>
                <span className="font-semibold underline">Mostrar idioma original</span>
            </div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat debitis corporis et amet iste aut quo maiores molestiae esse sit! Repellat explicabo aperiam voluptatibus error voluptatum recusandae nostrum eum optio.</div>
        </div>

        <IvpHoster />

        <div className="border-b py-3">
            <h2 className="text-2xl font-semibold">¿Dónde vas a dormir?</h2>
            <IvpSlider />
        </div>

        <div className="tborder-b border-b py-4">

            <p className="font-semibold text-2xl mb-4">¿Qué ofrece este lugar?</p>
            
            <div className="flex mb-4">
                <LiaSwimmingPoolSolid size={35}/>
                <p className="ml-3">Pileta De uso privado</p>
            </div>
            <div className="flex mb-4">
                <TbToolsKitchen2 size={30}/>
                <p className="ml-3">Cocina</p>
            </div>
            <div className="flex mb-4">
                <AiOutlineWifi size={35}/>
                <p className="ml-3">Wifi</p>
            </div>
            <div className="flex mb-4">
                <AiOutlineCar size={35}/>
                <p className="ml-3">Estacionamiento gratis en la propiedad</p>
            </div>
            <div className="flex mb-4">
                <GiDesk size={35}/>
                <p className="ml-3">Zona de trabajo</p>
            </div>
            <div className="flex mb-4">
                <GiFireplace size={35}/>
                <p className="ml-3">Chimenea</p>
            </div>
            <div>
                <button className="bg-white text-black border font-semibold border-black px-4 py-2 rounded">
                Mostrar más Servicios
                </button>
            </div>

        </div>

    </div>
    
  )
}

export default IvpDescription