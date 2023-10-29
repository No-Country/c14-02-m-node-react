import React from "react";

function HelpFooter() {
	return (
		<div className="w-screen">
			<div className="flex flex-col sm:flex-row bg-stone-200 py-5 border-t-2 border-stone-400 px-6">
				<div className="flex-1 p-4">
					<h3 className="font-semibold mb-3">Ayuda</h3>
					<ul className="list-none pl-0">
						<li className="mb-3">Centro de ayuda</li>
						<li className="mb-3">Obtené ayuda con un problema de seguridad</li>
						<li className="mb-3">AirCover</li>
						<li className="mb-3">Lucha contra la discriminación</li>
						<li className="mb-3">Ayuda en caso de discapacidad</li>
						<li className="mb-3">Opciones de cancelación</li>
						<li className="mb-3">Problemas en tu barrio</li>
					</ul>
				</div>
				<div className="flex-1 p-4">
					<h3 className="font-semibold mb-3">Como ser Anfitrión</h3>
					<ul className="list-none pl-0">
						<li className="mb-3">Poné tu Airbnb</li>
						<li className="mb-3">AirCover para anfitriones</li>
						<li className="mb-3">Recursos para anfitriones</li>
						<li className="mb-3">Foro de la comunidad</li>
						<li className="mb-3">Sé un anfitrión responsable</li>
					</ul>
				</div>
				<div className="flex-1 p-4">
					<h3 className="font-semibold mb-3">Airbnb</h3>
					<ul className="list-none pl-0">
						<li className="mb-3">Noticias</li>
						<li className="mb-3">Funciones nuevas</li>
						<li className="mb-3">Empleo</li>
						<li className="mb-3">Inversionitas</li>
						<li className="mb-3">Estadías en Airbnb.org</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default HelpFooter;
