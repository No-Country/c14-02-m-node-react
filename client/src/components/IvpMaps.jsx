import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-icon.png';

let iconUbication = new L.icon({
  iconUrl: icon, 
  iconShadow: iconShadow,
});

const IvpMaps = () => {
  return (
    <div className='border-b p-4 my-5'>
      <MapContainer center={[35.689444444444, 139.69166666667]} zoom={13} scrollWheelZoom={false} className='mapa'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.689444444444, 139.69166666667]}>
          <Popup>
          墨田区, 東京都 <br />  Japón
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  )
}

export default IvpMaps