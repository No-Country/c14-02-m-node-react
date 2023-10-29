import { LiaMedalSolid } from "react-icons/lia";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { PiTranslateBold } from "react-icons/pi";

function IvpHeader() {
	return (
		<div className="container mx-4">
			{/* TITULO */}
			<div className="flex items-center">
				<div>
					<PiTranslateBold size={45} />
				</div>
				<div></div>
				<h2 className="text-3xl font-semibold my-9 ">
					{data?.title}
					<span className="hidden sm:block">{data?.featured}</span>
				</h2>
			</div>

			<div className="flex justify-between hidden sm:block">
				<p className="flex items-center">
					<AiFillStar /> 4,89 · 45 evaluaciones · <LiaMedalSolid /> Superanfitrión · 墨田区, 東京都,
					Japón
				</p>
				<div className="flex">
					<button className="btn-share flex items-center mr-4">
						<FiDownload />
						<span className="underline pl-2">Compartir</span>
					</button>
					<button className="btn-share flex items-center mr-10">
						<AiOutlineHeart />
						<span className="underline pl-2">Guardar</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default IvpHeader;
