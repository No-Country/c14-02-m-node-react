import { useState } from "react";

function Description() {

    const [showMore, setShowMore] = useState(false);

    const toggleText = () => {
      setShowMore(!showMore);
    };

  return (
    <div><div className="m-5">
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
  </div></div>
  )
}

export default Description