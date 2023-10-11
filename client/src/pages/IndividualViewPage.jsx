import IvpCalendar from "../components/IvpCalendar";
import IvpDescription from "../components/IvpDescription";
import IvpGrid from "../components/IvpGrid";
import IvpMaps from "../components/IvpMaps";
import IvpReviews from "../components/IvpReviews";

import { FiDownload } from "react-icons/fi";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { LiaMedalSolid } from "react-icons/lia";
import IvpRules from "../components/IvpRules";

function IndividualViewPage() {
  return (
    <div>
      <div className="container m-4">
        {/* TITULO */}
        <h2 className="text-3xl font-semibold my-3">
          Casa "WabiSabi" Habitación1/1 cama/Asakusa/Skytree/
        </h2>


        <div className="flex justify-between">
          <p className="flex items-center">
          <AiFillStar /> 4,89 · 45 evaluaciones · <LiaMedalSolid/> Superanfitrión · 墨田区, 東京都, Japón
          </p>
          <div className="flex">
            <button className="btn-share flex items-center mr-4">
              <FiDownload />
              <span className="underline pl-2">Compartir</span>
            </button>
            <button className="btn-share flex items-center">
              <AiOutlineHeart />
              <span className="underline pl-2">
                Guardar
              </span>
            </button>
          </div>
        </div>
      </div>

      <IvpGrid />
      <IvpDescription />
      <IvpCalendar />
      <IvpReviews />
      <IvpMaps />
      <IvpRules />
    </div>
  );
}

export default IndividualViewPage;
