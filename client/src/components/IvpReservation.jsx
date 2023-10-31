import React, { useState, useCallback } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaFlag } from "react-icons/fa6";
import Price from "./Price";
import { usePostBookingMutation } from "../store/rtk-query";
import { useAuth } from "../context/AuthContext";
import { data } from "autoprefixer";

function IvpReservation({ dates, idPublication, data }) {
	const { user, loading } = useAuth();
	console.log("esto llega en id", user);
	const [showReservation, setShowReservation] = useState(true);
	const [addDates, { isLoadingDates }] = usePostBookingMutation();
	const id = idPublication.date;
	const dataBooking = {
		publicationID: id,
		email: user?.email,
		dateIn: dates[0],
		dateOut: dates[1],
	};
	const handleBooking = () => {
		addDates(dataBooking);
	};

	return (
		<div>
			<div className="">
				<div className="inner-div md:w-[auto] md:relative bg-white p-4 border-2 md:rounded-xl  md:drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] md:bottom-auto md:w-auto md:static fixed bottom-0 w-full">
					<div>
						<div className="flex items-baseline">
							<Price data={data} />
							<span className="text-slate-500">noche</span>
						</div>
						<div className="hidden md:block">
							<AiFillStar />
							<p>4,89 · 45 evaluaciones</p>
						</div>
					</div>

					<div className="grid grid-cols-2 rounded-lg">
						<div className="border p-2">
							<p className="text-xs font-semibold">CHECK-IN</p>
							<p>{dates[0]?.toDateString()}</p>
						</div>
						<div className="border p-2">
							<p className="text-xs font-semibold">CHECK-OUT</p>
							<p>{dates[1]?.toDateString()}</p>
						</div>
						<div className="border hidden md:block p-2 col-span-2">
							<p className="text-xs font-semibold">VIAJEROS</p>
							<p>1 huésped</p>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							className="w-full bg-rose-600 text-white font-semibold px-8 py-3 my-4 rounded-lg border-none"
							onClick={handleBooking}
						>
							Reservar
						</button>
					</div>
				</div>
				<div className="flex hidden md:block text-stone-500 items-center my-5">
					<div>
						<FaFlag />
					</div>
					<div>
						<span className="font-semibold underline px-3 my-8">Denunciar este anuncio</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IvpReservation;
