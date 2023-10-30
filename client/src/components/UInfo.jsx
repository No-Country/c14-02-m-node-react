import React from "react";

function UInfo() {
	return (
		<div className="m-3">
			<h2 className="text-2xl font-semibold">Datos Personales</h2>
			<div className="flex items-center py-4 border-b">
				<div>
					<h3>Nombre Legal</h3>
					<p>Megumi Hayashibara</p>
				</div>
				<div className="ml-auto">
					<p className="underline">Editar</p>
				</div>
			</div>
			<div className="flex items-center py-4 border-b">
				<div>
					<h3>Dirección de correo electrónico</h3>
					<p>m***a@gmail.com</p>
				</div>
				<div className="ml-auto">
					<p className="underline">Editar</p>
				</div>
			</div>
			<div className="flex items-center py-4 border-b">
				<div>
					<h3>Número de teléfono</h3>
					<p>+54 *** ***-8989</p>
					<p className="text-stone-600">
						Número de contacto (para que Airbnb y los huéspedes con reservas confirmadas puedan
						comunicarse con vos). Podés agregar otros números y elegir cómo se van a usar.
					</p>
				</div>
				<div className="ml-auto">
					<p className="underline">Editar</p>
				</div>
			</div>
		</div>
	);
}

export default UInfo;
