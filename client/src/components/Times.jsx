import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useGetBookingQuery } from "../store/rtk-query";
import IvpReservation from "./IvpReservation";
const today = new Date();
const numberOfDays = 30;

const availableDates = [today];

for (let i = 1; i < numberOfDays; i++) {
	const nextDate = new Date(today);
	nextDate.setDate(today.getDate() + i);
	availableDates.push(nextDate);
}

function Times(props) {

  const [selectedDates, setSelectedDates] = useState([]);
  const { data: BookinData, error: BookinError, isLoading: BookinLoading } = useGetBookingQuery(props.date);
  const [blockedDates, setBlockedDates] = useState(new Set());

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
	function handleDateSelection(date) {
		const index = selectedDates.findIndex(d => d.toDateString() === date.toDateString());

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

  return (
    <div className="times mt-5">
      <h2 className="text-xl font-semibold my-5">
        Seleccione fecha(s) para su reserva:
      </h2>
      <div className="calendar">
        <Calendar
          value={selectedDates}
          onChange={handleDateSelection}
          tileDisabled={({ date }) => {
            const dateStr = date.toDateString();
            return blockedDates.has(dateStr)
          }
          }
        />
      </div>
      <div className="mt-5">
        {selectedDates.length > 0 ? (
          <>
          </>
        ) : (
          <p>
            <span>Seleccione fecha(s) para su reserva.</span>
          </p>
        )}
      </div>
      <IvpReservation dates={selectedDates} idPublication={props} data={props} />
    </div>
  );
}

export default Times;
