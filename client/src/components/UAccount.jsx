import React from "react";
import { Link } from "react-router-dom";
import { PiIdentificationCardLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { BiSolidChevronRight } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineSetting, AiOutlineControl, AiOutlineGift } from "react-icons/ai";

function UAccount() {
	return (
		<div className="flex justify-center">
			{/* =====================LG SIZE================== */}

			<div className="profile-lg hidden lg:block max-w-2xl m-10">
				<div className="my-10">
					<h1 className="text-3xl font-semibold">Cuenta</h1>
					<div className="flex items-center text-lg">
						<span className="font-semibold">Megumi Hayashibara</span>
						<p>, mhayashibara@gmail.com ·</p>
						<Link to="/perfil/:usuario">
							<button className="font-semibold underline px-2">Ir al perfil</button>
						</Link>
					</div>
				</div>

				{/* ==================CARDS======================= */}

				<div className="grid grid-cols-2 gap-5">
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<PiIdentificationCardLight size={30} />
						<h2 className="text-lg font-semibold py-3">Informacion Personal</h2>
						<p className="text-stone-600 text-sm">
							Proporcioná tus datos personales e indicanos cómo podemos ponernos en contacto con
							vos.
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
					<div className="p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<h2 className="text-lg font-semibold">Card Title</h2>
						<p className="text-stone-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis aliquet
							mauris sit amet feugiat. Ut sit amet pris...
						</p>
					</div>
				</div>

				{/* ====================FIN CARD================ */}
				<div className="text-center mt-10">
					<div>
						<p>¿Necesitás desactivar tu cuenta?</p>
					</div>
					<div>
						<button className="text-sm underline px-2">Resolvelo ahora</button>
					</div>
				</div>
			</div>

			{/* ==================SM SIZe===================== */}
			<div className="profile-mobile profile-mobile block lg:hidden my-12 mx-4">
				<h2 className="text-3xl font-semibold mb-6">Perfil</h2>

				<div className="flex items-center pb-8 border-b">
					<div className="mr-6">
						<img
							src="https://cdn.leonardo.ai/users/2b4dbbb3-c3f4-45a9-a675-33148ef5ed0f/generations/7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15/variations/Default_ultra_detailed_complex_illustration_a_water_bender_sur_0_7310e0ef-8fe0-4bad-b6cb-2e5be6a5da15_1.jpg?w=512"
							alt="Imagen"
							className="rounded-full h-20 w-20 object-cover"
						/>
					</div>
					<div className="flex-1">
						<p>Megumi</p>
						<p className="text-xs text-stone-600">Mostrar perfil</p>
					</div>
					<div className="ml-auto">
						<Link to="/perfil/:usuario">
							<BiSolidChevronRight size={25} />
						</Link>
					</div>
				</div>

				<div className="my-8">
					<div className="flex p-4 rounded-lg shadow-[5px_5px_20px_-1px_rgba(0,0,0,0.3)]">
						<div>
							<h2 className="text-lg font-semibold">Tu alojamiento en Airbnb</h2>
							<p className="text-stone-600">
								Configurarlo y empezar a obtener ganancias es muy fácil
							</p>
						</div>
						<div className="ml-3">
							<img
								src="https://a0.muscache.com/pictures/b0021c55-05a2-4449-998a-5593567220f7.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="border-b py-5">
					<div className="flex items-center">
						<FaRegCircleUser size={25} style={{ color: "#292524" }} />
						<p className="text-xl ml-4">Información personal</p>
						<div className="ml-auto">
							<Link to="/info/:usuario">
								<BiSolidChevronRight size={25} />
							</Link>
						</div>
					</div>
					<div className="flex items-center pt-5">
						<AiOutlineSetting size={30} style={{ color: "#292524" }} />
						<p className="text-xl ml-4">Cuenta</p>
					</div>
				</div>

				<div className="border-b py-5">
					<div className="flex items-center">
						<h2 className="text-xl font-semibold">Anfitriones</h2>
					</div>
					<div className="flex items-center pt-5">
						<AiOutlineControl size={25} style={{ color: "#292524" }} />
						<p className="text-xl ml-4">Administrá tu anuncio</p>
					</div>
				</div>

				<div className="border-b py-5">
					<div className="flex items-center">
						<h2 className="text-xl font-semibold">Invitaciones y créditos</h2>
					</div>
					<div className="flex items-center pt-5">
						<AiOutlineGift size={25} style={{ color: "#292524" }} />
						<p className="text-xl ml-4">Invita un anfitrión</p>
					</div>
				</div>

				<div className="border-b py-5">
					<h2 className="text-xl font-semibold">Ayuda</h2>
					<p className="text-xl pt-5">Visitá el centro de ayuda</p>
					<p className="text-xl pt-5">Ayuda con problemas de seguridad</p>
					<p className="text-xl pt-5">Problemas en tu barrio?</p>
					<p className="text-xl py-5">Cómo funciona Airbnb</p>
				</div>

				<div className="flex py-5">
					<TbWorld size={25} style={{ color: "#292524" }} />
					<p>Español (AR) $ USD</p>
				</div>
				<button className="bg-white border border-black w-full py-2 rounded-md text-black font-semibold cursor-pointer transition duration-300 hover:bg-gray-200">
					Cerrar sesión
				</button>
				<div className="py-5">
					<div className="flex justify-center text-xs">
						Ayuda y asistencia • Términos del servicio • Política de privacidad
					</div>
					<div className="flex justify-center text-xs text-stone-600">
						© 2023 Airbnb, Inc. Todos los derechos resservados.
					</div>
				</div>
			</div>
		</div>
	);
}

export default UAccount;
