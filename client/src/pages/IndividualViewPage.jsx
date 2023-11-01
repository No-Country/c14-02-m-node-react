import IvpDescription from "../components/IvpDescription";
import IvpGrid from "../components/IvpGrid";
import IvpReviews from "../components/IvpReviews";
import IvpEvaluaciones from "../components/IvpEvaluaciones";
import IvpRules from "../components/IvpRules";
import NavBar from "../components/NavBar.jsx";
import OptionsFooter from "../components/OptionsFooter";
import HelpFooter from "../components/HelpFooter";

import { LiaMedalSolid } from "react-icons/lia";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchPublicationById } from "../store/publicationSlice";
import { fetchUsers, searchUserByEmail } from "../store/userSlice";

function IndividualViewPage(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const publicationData = useSelector(state => state.publications.currentPublication[0]);
	const dataUser = useSelector(state => state.users.currentUser);

	useEffect(() => {
		dispatch(searchPublicationById(id));
		dispatch(searchUserByEmail(publicationData?.email));
	}, [publicationData, id, dispatch]);

	if (!publicationData || !dataUser) {
		return (
			<div className="flex items-center justify-center h-screen">
				<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
			</div>
		);
	}

	return (
		<>
			<div className="hidden sm:block">
				<NavBar />
			</div>

			<div className="mb-48 md:mb-0">
				<div className="container mx-4">
					{/* TITULO */}
					<div className="flex items-center ">
						{/* <div>
              <PiTranslateBold size={45} />
            </div> */}
						<div></div>
						<h2 className="text-3xl font-semibold my-9 ">
							{publicationData?.title}
							<span className="text-2xl font-normal hidden sm:block">
								{publicationData?.location}
							</span>
						</h2>
					</div>

					<div className="flex justify-between hidden sm:block">
						<p className="flex items-center">
							<AiFillStar /> 4,89 · 45 evaluaciones · <LiaMedalSolid /> Superanfitrión · 墨田区,
							東京都, Japón
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

				<IvpGrid images={publicationData && publicationData.photos ? publicationData.photos : []} />

				<IvpDescription data={publicationData || []} dataUser={dataUser} />
				{/* <IvpMaps /> */}
				<IvpReviews />
				<IvpEvaluaciones />
				<IvpRules />

				<HelpFooter />
				<OptionsFooter />
			</div>
		</>
	);
}

export default IndividualViewPage;
