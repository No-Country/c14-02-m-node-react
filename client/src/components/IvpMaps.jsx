import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

let iconUbication = new L.icon({
	iconUrl: icon,
	iconShadow: iconShadow,
});

const IvpMaps2 = () => {
	return (
		<div className="border-y p-4 my-5">
			{/* MAPA */}
			<div className="flex justify-center">
				<MapContainer
					center={[35.689444444444, 139.69166666667]}
					zoom={13}
					scrollWheelZoom={false}
					className="mapa"
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[35.689444444444, 139.69166666667]}>
						<Popup>
							墨田区, 東京都 <br /> Japón
						</Popup>
					</Marker>
				</MapContainer>
			</div>

			{/* DESCRIPCION MAPA */}
			<div className="m-8">
				<h2 className="text-lg font-semibold">墨田区, 東京都, Japón</h2>
				<p className="my-5">
					Nunca te sentirás complicado si compras algo de comida y bebida. Hay calles comerciales en
					la zona, supermercados, tiendas de conveniencia y farmacias a 5 minutos a pie. Si quieres
					encontrar buenos bares y restaurantes, pregúntanos.
				</p>
				<span className="text-lg font-semibold underline">Mostrar más</span>
			</div>
		</div>
	);
};

export default IvpMaps2;
