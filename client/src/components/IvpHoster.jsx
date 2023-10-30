import { GiGlobe } from "react-icons/gi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

function IvpHoster({dataUser}) {

  return (
    <div className="border-b">
      <h2 className="text-2xl font-semibold m-5">Conocé al anfitrión</h2>
      <div className="p-12 my-3 bg-stone-200 rounded-lg">
        {/* CARD ANFITRION  */}

        <div className="flex items-center justify-around bg-white rounded-3xl drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] my-3 p-5 w-400">
          <div>
            <img
              src={dataUser?.photo}
              alt="Imagen"
              className="rounded-full h-40 w-40 object-cover mr-4"
            />
            <div className="text-center my-2">
              <h2 className="text-2xl font-semibold mb-0">{dataUser?.names}</h2>
              <p className="text-gray-600 my-2">Anfitrion</p>
            </div>
          </div>

          {/* <div>
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
          </div> */}
        </div>

        {/* DESCRIPCION AMPLIA DEL ANFITRION */}

        <div className="border-b-2 border-stone-300">
          <div className="py-5">
            {/* <ul className="my-4">
              <li className="flex items-center">
                <HiOutlineChatBubbleLeftRight size={35} />
                Habla Inlgés y Japones
              </li>
              <li className="flex items-center my-4">
                <GiGlobe size={35} />
                <p className="ml-3">Vive en Tokio</p>
              </li>
            </ul> */}
            <div>
              Hola! El verdadero propietario de este tradicional me
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
      
    </div>
  );
}

export default IvpHoster;
