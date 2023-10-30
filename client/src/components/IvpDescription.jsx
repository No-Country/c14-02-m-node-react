import { Link } from "react-router-dom";

import Description from "./Description";
import Type from "./Type";
import Spaces from "./Spaces";
import Amenities from "./Amenities";
import IvpSlider from "./IvpSlider";
import IvpCalendar from "../components/IvpCalendar";
import IvpHoster from "./IvpHoster";
import IvpReservation from "./IvpReservation";
import Times from "./Times";
import { LiaBedSolid, LiaMedalSolid } from "react-icons/lia";
import { GrNotes } from "react-icons/gr";

function IvpDescription({ data, dataUser }) {
	// const info = useSelector(state => state.main.publicationDetail);

	console.log("PARAMETROS", data, dataUser);
	console.log(data.offering);

	return (
		<div>
			<div className="grid grid-cols-3 gap-4">
				{/* FAQ */}
				<div className="border-b p-8">
					<div>
						<div className="flex items-center">
							<LiaBedSolid size={30} className="mr-4" />
							<div>
								<h2 className="text-lg font-semibold">
									Habitación en el siguiente alojamiento: {data.type}
								</h2>
								<p>
									Tu propio dormitorio en un alojamiento, más acceso a espacios comunes compartidos.
								</p>
							</div>
						</div>
						<div className="flex items-center my-6">
							<LiaMedalSolid size={30} className="mr-4" />
							<div>
								<h2 className="text-lg font-semibold">
									Anfitrión con la categoría de Superanfitrión
								</h2>
								<p>
									Los Superanfitriones son anfitriones con experiencia y evaluaciones excelentes.
								</p>
							</div>
						</div>
						<div className="flex items-center">
							<GrNotes size={25} className="mr-4" />
							<div>
								<h2 className="text-lg font-semibold">Cancelación gratuita antes del 23 nov..</h2>
							</div>
						</div>
					</div>
				</div>

				{/* IDIOMA */}

				{/* <div className="border-b p-5">
              <div className=" p-2 rounded-lg">
                <p>Parte de la información se tradujo automáticamente. </p>
                <span className="font-semibold underline">
                  Mostrar idioma original
                </span>
              </div>
            </div> */}

				{/* DESCRIPTION */}

				{data?.description ? <Description description={data?.description} /> : []}

				{/* CARD DEL HOSTER */}

				<IvpHoster data={data} dataUser={dataUser} />

				{/* <div className="border-b p-5">
              <h2 className="text-2xl mb-4 font-semibold">
                ¿Dónde vas a dormir?
              </h2>
              <IvpSlider />
            </div> */}

				{/* AMENITIES */}

				{data?.amenities ? <Amenities amenities={data?.amenities} /> : []}

				{/* CALENDAR */}
				{/* <IvpCalendar idPublication={data?._id}/> */}
				{/* <Times idPublication={data?._id}/> */}
			</div>
		</div>

		// 		{/* ======================DIV IZQUIERDO==================== */}

		//      <IvpCalendar idPublication={data?._id}/>
		//    </div>
		//  </div>
	);
}

export default IvpDescription;
