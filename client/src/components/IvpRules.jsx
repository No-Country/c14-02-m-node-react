import Security from "../components/Security";

function IvpRules() {
	const data = {
		security: ["Guardia de seguridad", "Cámara de vigilancia"],
		extra_Security: ["Sistema de alarmas", "Vigilancia por satélite"],
	};

	return (
		<div className="m-3 px-6">
			<div>
				<h2 className="text-2xl font-semibold">Qué tenés que saber</h2>
			</div>

			<div className="">
				<div className="flex flex-col sm:flex-row">
					<div className="flex-1 p-4">
						<h3 className="font-bold text-lg mb-3">Normas de la casa</h3>
						<ul className="list-none pl-0">
							<li className="mb-3">Check-in: de 15:00 a 23:00</li>
							<li className="mb-3">Check-out antes de las 12:00</li>
							<li className="mb-3">1 huésped como máximo</li>
						</ul>
						<span className="text-lg font-semibold underline">Mostrar más</span>
					</div>
					<div className="flex-1 p-4">
						{/* SECURITY */}
						<Security data={data} />
					</div>
					<div className="flex-1 p-4">
						<h3 className="font-bold text-lg mb-3">Política de cancelación</h3>
						<ul className="list-none pl-0">
							<li className="mb-3">Cancelación gratuita antes del 23 nov..</li>
							<li className="mb-3">
								Consultá la política de cancelación completa del anfitrión, que se aplica incluso si
								cancelás por contagio o algún otro problema causado por el COVID-19.
							</li>
						</ul>
						<span className="text-lg font-semibold underline">Mostrar más</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IvpRules;
