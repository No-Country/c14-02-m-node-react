import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";

// Importa la configuración de idioma para español
import { es } from 'date-fns/locale';

function IvpCalendar() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="app mx-3">
      <h1 className="header text-2xl font-semibold mt-5">Haga su reserva:</h1>
      <div className="text-stone-600 font-semibold my-5">
        {date.length > 0 ? (
          <p>
            <span>Inicio:</span>
            {date[0].toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            &nbsp;
            &nbsp;
            <span>Fin:</span>
            {date[1].toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        ) : (
          <p>
            {date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        )}
      </div>
      <div className="calendar-container font-semibold">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
          // Configura el idioma en español
          locale={es}
        />
      </div>
      <Time showTime={showTime} date={date} />
    </div>
  );
}

export default IvpCalendar;
