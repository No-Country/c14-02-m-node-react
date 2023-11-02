import React from "react";
import { TbWorld } from "react-icons/tb";
import FooterMenu from "./FooterMenu";

function SuggestionFooter() {
	return (
		<>
			<div className="md:flex justify-between bg-stone-200 border-t-2 border-stone-400 px-6 mt-12">
				<div className="md:flex items-center">
					<div className="flex justify-center text-xs mr-5">© 2023 Airbnb, Inc.</div>
					<div className="flex items-center justify-center text-xs">
						Privacidad • Términos • Mapa del sitio
					</div>
				</div>

				<div className="flex items-center justify-center">
					<div className="flex items-center mx-5">
						<TbWorld size={25} style={{ color: "1c1917" }} />
						<p>Español(AR) $USD</p>
					</div>
					<div>
						<FooterMenu />
					</div>
				</div>
			</div>
		</>
	);
}

export default SuggestionFooter;
