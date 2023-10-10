import React, { useState, useEffect } from "react";

function Calendar() {
  // Estado local para almacenar la fecha actual
  const [currentDate, setCurrentDate] = useState(new Date());

  // Función para actualizar la fecha actual cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Obtiene el día, mes y año actual
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Obtiene el primer día del mes y la cantidad de días en el mes actual
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Genera un array con los números de los días del mes
  const daysOfMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Función para obtener el nombre completo del mes
  const getMonthName = (month) => {
    const options = { month: "long" };
    return new Intl.DateTimeFormat("es", options).format(month);
  };

  return (
    <div className="calendar">
      <h1>Seleccioná la fecha del check-out</h1>
      <div className="current-date">
        <p>
          {getMonthName(currentMonth)} de {currentYear}
        </p>
      </div>
      <div className="calendar-grid">
        <table>
          <thead>
            <tr>
              <th>Domingo</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(7)].map((_, colIndex) => {
                  const dayOfMonthIndex = rowIndex * 7 + colIndex;
                  const day = daysOfMonth[dayOfMonthIndex];
                  const isCurrentMonth = dayOfMonthIndex >= firstDayOfMonth && dayOfMonthIndex < firstDayOfMonth + daysInMonth;
                  const isToday = isCurrentMonth && day === currentDay;

                  return (
                    <td key={colIndex} className={`${isToday ? "today" : ""} ${isCurrentMonth ? "current-month" : "other-month"}`}>
                      {isCurrentMonth ? day : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
