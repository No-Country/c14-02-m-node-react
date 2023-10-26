import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaFlag } from "react-icons/fa6";
import Price from "./Price";
import Reservation from "./Reservation";

function IvpReservation() {
  const [showReservation, setShowReservation] = useState(true);

  return (
    <div>
      <div className="">
      <div className="inner-div md:w-[auto] md:relative bg-white p-4 border-2 md:rounded-xl  md:drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] md:bottom-auto md:w-auto md:static fixed bottom-0 w-full">
          <div>
            <div className="flex items-baseline">
              <Price />
              <span className="text-slate-500">noche</span>
            </div>
            <div className="hidden md:block">
              <AiFillStar />
              <p>4,89 ·45 evaluaciones</p>
            </div>
          </div>

          <div className="grid grid-cols-2 rounded-lg ">
            <div className="border p-2">
              <p className="text-xs font-semibold">CHECK-IN</p>
              <p>30/11/2023</p>
            </div>
            <div className="border p-2">
              <p className="text-xs font-semibold">CHECK-OUT</p>
              <p>...</p>
            </div>
            <div className="border hidden md:block p-2 col-span-2">
              <p className="text-xs font-semibold">VIAJEROS</p>
              <p>1 huésped</p>
            </div>
          </div>
          <div className="flex justify-center">
             {showReservation && <Reservation />}
          </div>
        </div>
        <div className="flex hidden md:block text-stone-500 items-center my-5">
          <div>
            <FaFlag />
          </div>
          <div>
            <span className="font-semibold underline px-3 my-8">
              Denunciar este anuncio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IvpReservation;
