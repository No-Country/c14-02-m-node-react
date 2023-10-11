function IvpRules() {
  return (
    <div className="border-b m-3">
      <div>
        <h2 className="text-2xl font-semibold">Qué tenés que saber</h2>
      </div>

      <div className="border-b py-3">
        <div className="flex">
          <div className="flex-1 p-4 mr-4">
            <h3 className="font-bold mb-3">Normas de la casa</h3>
            <ul className="list-none pl-0">
              <li>Check-in: de 15:00 a 23:00</li>
              <li>Check-out antes de las 12:00</li>
              <li>1 huésped como máximo</li>
            </ul>
          </div>
          <div className="flex-1 p-4 mr-4">
            <h3 className="font-bold mb-3">Sobre la seguridad y la propiedad</h3>
            <ul className="list-none pl-0">
              <li>No se indicó si hay detector de monóxido de carbono</li>
              <li>Detector de humo</li>
              <li>Hay espacios compartidos</li>
            </ul>
          </div>
          <div className="flex-1 p-4">
            <h3 className="font-bold mb-3">Política de cancelación</h3>
            <ul className="list-none pl-0">
              <li>Cancelación gratuita antes del 23 nov..</li>
              <li>Consultá la política de cancelación completa del anfitrión, que se aplica incluso si cancelás por contagio o algún otro problema causado por el COVID-19.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IvpRules;
