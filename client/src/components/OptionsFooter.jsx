import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

function OptionsFooter() {
	return (
		<div className="overflow-hidden bg-stone-200 py-5 border-t-2 border-stone-400 px-6">
			<div>
				<div className="flex items-center justify-center">
					<div className="flex mx-5">
						<TbWorld size={30} style={{ color: "1c1917" }} />
						<p>Español (AR) $ USD</p>
					</div>

					<div className="flex mx-5">
						<AiFillFacebook size={30} style={{ color: "1c1917" }} />
						<AiFillTwitterSquare size={30} style={{ color: "1c1917" }} />
						<AiFillInstagram size={30} style={{ color: "1c1917" }} />
					</div>
				</div>
			</div>

			<div className="flex justify-center">© 2023 Airbnb, Inc.</div>

			<div className="flex justify-center">
				<div> Pivacidad • Términos • Mapa del sitio</div>
			</div>
		</div>
	);
}

export default OptionsFooter;
