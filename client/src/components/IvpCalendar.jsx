// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import Time from "./Time";
// import { useGetBookingQuery } from "../store/rtk-query";
// // Importa la configuración de idioma para español
// import { es } from 'date-fns/locale';



// function IvpCalendar({idPublication}) {
//   const [date, setDate] = useState(new Date());
//   const [showTime, setShowTime] = useState(false);
//   const { data: BookinData, error: BookinError, isLoading: BookinLoading } = useGetBookingQuery(idPublication)
//   console.log("data de get", BookinData )
//   return (
//     <div className="app mx-3">
//       <h1 className="header text-2xl font-semibold mt-5">Haga su reserva:</h1>
//       <div className="text-stone-600 font-semibold my-5">
//         {date.length > 0 ? (
//           <p>
//             <span>Inicio:</span>
//             {date[0].toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//             &nbsp;
//             &nbsp;
//             <span>Fin:</span>
//             {date[1].toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//           </p>
//         ) : (
//           <p>
//             {date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
//           </p>
//         )}
//       </div>
//       <div className="calendar-container font-semibold">
//         <Calendar
//           onChange={setDate}
//           value={date}
//           onClickDay={() => setShowTime(true)}
//           // Configura el idioma en español
//           locale={es}
//         />
//       </div>
//       <Time showTime={showTime} date={date} />
//     </div>
//   );
// }

// export default IvpCalendar;


import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";
import { useGetBookingQuery } from "../store/rtk-query";
import { es } from 'date-fns/locale';

function IvpCalendar({ idPublication }) {
  const [dateIn, setDateIn] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const { data: BookinData, error: BookinError, isLoading: BookinLoading } = useGetBookingQuery(idPublication);
  const [blockedDates, setBlockedDates] = useState(new Set());
  const [selectedDates, setSelectedDates] = useState([]);

console.log( "esto es data in",dateIn) 
  


  useEffect(() => {
    // Actualizar las fechas bloqueadas cuando BookinData cambia
    if (BookinData) {
      const updatedBlockedDates = new Set();
      BookinData.forEach(booking => {
        const bookingDateIn = new Date(booking.dateIn);
        const bookingDateOut = new Date(booking.dateOut);

        // Agregar al conjunto las fechas entre dateIn y dateOut, incluyendo la fecha de entrada y salida
        for (let date = bookingDateIn; date <= bookingDateOut; date.setDate(date.getDate() + 1)) {
          updatedBlockedDates.add(date.toDateString());
        }
      });
      setBlockedDates(updatedBlockedDates);
    }
  }, [BookinData]);

  return (
    <div className= "class1 class2">
      {/* Calendario */}
      <Calendar
        onChange={date => setDateIn(date)}
        value={dateIn}
        onClickDay={() => setShowTime(true)}
        // Configura el idioma en español
        locale={es}
        tileDisabled={({ date}) => {
          const dateStr = date.toDateString();
          // Convierte la fecha en formato de cadena para verificar si está bloqueada
          return blockedDates.has(dateStr) 
        }}
      />
      {/* Resto del componente */}
        <Time
         showTime={showTime} date={dateIn} />
    </div>
  );
}

export default IvpCalendar;



