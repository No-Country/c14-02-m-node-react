import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";

function IvpCalendar() {
	const [date, setDate] = useState(new Date());
	const [showTime, setShowTime] = useState(false);

	return (
		<div className="app mx-3">
			<h1 className="header text-2xl font-semibold mt-5">Haga su reserva:</h1>
			<div className="text-stone-600 font-semibold my-5">
				{date.length > 0 ? (
					<p>
						<span>Start:</span>
						{date[0].toDateString()}
						&nbsp; &nbsp;
						<span>End:</span>
						{date[1].toDateString()}
					</p>
				) : (
					<p>{date.toDateString()}</p>
				)}
			</div>
			<div className="calendar-container font-semibold">
				<Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
			</div>
			<Time showTime={showTime} date={date} />
		</div>
	);
}

export default IvpCalendar;
