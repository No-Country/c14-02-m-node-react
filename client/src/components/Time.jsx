import { useState } from "react";
import Calendar from "react-calendar";
import Times from "./Times";

function Time(props) {
	return <div>{props.showTime ? <Times date={props.date} /> : null}</div>;
}

export default Time;
