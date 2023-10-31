import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Time from "./Time";

function IvpCalendar({ idPublication, data }) {
	const [dateIn, setDateIn] = useState(new Date());
	const [showTime, setShowTime] = useState(true);

	return (
		<div className="class1 class2">
			<Time showTime={showTime} date={idPublication} data={data} />
		</div>
	);
}

export default IvpCalendar;
