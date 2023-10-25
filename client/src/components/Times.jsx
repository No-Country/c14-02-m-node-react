import { useState } from "react";
import Calendar from "react-calendar";

const today = new Date();
const numberOfDays = 30;

const availableDates = [today];

for (let i = 1; i < numberOfDays; i++) {
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() +i);
  availableDates.push(nextDate);
}


function Times(props) {
  const [selectedDates, setSelectedDates] = useState([]);

  function handleDateSelection(date) {
    const index = selectedDates.findIndex(
      (d) => d.toDateString() === date.toDateString()
    );

    if (index === -1) {
      // Si la fecha no está en la lista de seleccionadas, la agregamos
      setSelectedDates([...selectedDates, date]);
    } else {
      // Si la fecha ya está en la lista, la eliminamos (deseleccionamos)
      const updatedDates = [...selectedDates];
      updatedDates.splice(index, 1);
      setSelectedDates(updatedDates);
    }
  }

  function makeReservation() {
    if (selectedDates.length > 0) {
      // Aquí puedes implementar la lógica para realizar la reserva de los días seleccionados
      // Puedes, por ejemplo, marcar los días como no disponibles en la lista de availableDates
      // y guardar la reserva en tu base de datos.
      // Luego, puedes mostrar un mensaje de confirmación.
    }
  }

  return (
    <div className="times mt-5">
      <h2 className="text-xl font-semibold my-5">
        Seleccione fecha(s) para su reserva:
      </h2>
      <div className="calendar">
        <Calendar
          value={selectedDates}
          onChange={handleDateSelection}
          tileDisabled={({ date }) =>
            !availableDates.some(
              (d) => date.toDateString() === d.toDateString()
            )
          }
        />
      </div>
      <div className="mt-5">
        {selectedDates.length > 0 ? (
          <p>
            <span  className="font-semibold">Inicia:</span> {selectedDates[0].toDateString()} &nbsp; &nbsp;{" "}
            <span  className="font-semibold">Termina:</span>{" "}
            {selectedDates[selectedDates.length - 1].toDateString()}
          </p>
        ) : (
          <p>
            <span>Seleccione fecha(s) para su reserva.</span>
          </p>
        )}
      </div>

      <button onClick={makeReservation} className="bg-stone-900 text-white px-10 py-2 my-4 rounded-lg border-none">Reservar</button>
    </div>
  );
}

export default Times;
