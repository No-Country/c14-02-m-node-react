import React from "react";
import filter from "../assets/images/filter.png";

const Mensajes = () => {
    return(
        <div className="flex flex-row h-screen">
            <div className="custom-width flex flex-col">
                <div className="flex flex-row justify-between px-10 py-6 border border-gray-300">
                    <h1 className="text-2xl font-bold">Mensajes</h1>
                    <button><img src={filter} className="w-6 h-6"/></button>
                </div>
                <div className="flex flex-col justify-between h-full px-10 py-6 text-center border border-gray-300">
                    <h1 className="text-2xl font-bold px-4 py-2">No tenés mensajes sin leer.</h1>
                    <p className="text-lg font-normal text-gray-600 px-2 py-2">Cuando reserves un viaje o una experiencia, los mensajes de tu anfitrión van a aparecer acá.</p>
                    <button className="mx-auto my-auto w-1/2 text-lg font-bold text-black border border-black rounded-md px-5 py-3 mt-4">Descubrí Airbnb</button>
                </div>
            </div>
            <div className="custom-width-resto">
                <div className="flex flex-col justify-between py-10 text-center border border-gray-300"></div>
                <div className="flex flex-col justify-between text-start px-14 py-8 custom-width-resto overflow-hidden"></div>
            </div>  
        </div>
    )
}

export default Mensajes