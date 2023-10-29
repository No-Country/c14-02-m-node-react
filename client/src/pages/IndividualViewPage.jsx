import IvpDescription from "../components/IvpDescription";
import IvpGrid from "../components/IvpGrid";
import IvpMaps from "../components/IvpMaps";
import IvpReviews from "../components/IvpReviews";
import IvpRules from "../components/IvpRules";
import NavBar from "../components/NavBar.jsx";

import { LiaMedalSolid } from "react-icons/lia";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { PiTranslateBold } from "react-icons/pi";

import OptionsFooter from "../components/OptionsFooter";
import HelpFooter from "../components/HelpFooter";
import IvpEvaluaciones from "../components/IvpEvaluaciones";
import { useParams } from "react-router-dom";

import { useGetPublicationByIdQuery, useGetUserQuery } from "../store/rtk-query";

import { useDispatch } from "react-redux";
// import { loadPublicationDetail } from "../store/actions";
import { useEffect } from "react";

function IndividualViewPage(props) {

  const {id} = useParams();


  const { data: publicationData, error: publicationError, isLoading: publicationLoading } = useGetPublicationByIdQuery(id);

  const skipSecondQuery = !publicationData || publicationLoading || publicationError;

  const { data: dataUser, error: errorUser, isLoading: isLoadingUser } = useGetUserQuery(publicationData?.email, { skip: skipSecondQuery });


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
             <div>
              
             </div>
             <h2 className="text-3xl font-semibold my-9 ">
              {publicationData?.title}
              <span className="text-2xl font-normal hidden sm:block">
              {publicationData?.location}
               
              </span>
            </h2>

          </div>

          <div className="flex justify-between hidden sm:block">
            <p className="flex items-center">
              <AiFillStar /> 4,89 · 45 evaluaciones · <LiaMedalSolid />{" "}
              Superanfitrión · 墨田区, 東京都, Japón
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



        <IvpDescription data = {publicationData ? publicationData : []} dataUser = {dataUser} />
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
