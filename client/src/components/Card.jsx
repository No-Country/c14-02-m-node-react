import { useState } from "react";
import { CardSlider } from "./CardSlider";
import { CardInfo } from "./CardInfo";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { publicationData } from "../api/conn";
import { useEffect } from "react";
import { async } from "@firebase/util";

export const Card = ({ cardElement }) => {
  const [isHeartRed, setIsHeartRed] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [publications, setPublications] = useState([]); //Hook que guarda la data de publications de la API

  const toggleHeartColor = (e) => {

    if(user){
      e.preventDefault();
      setIsHeartRed(!isHeartRed);
    } else {
      e.preventDefault();
      navigate("/register");

    }
  };

  // useEffect obtiene los datos publications de la API desde 'api/conn.js' Se debe sonsumir publications desde el hook.
  useEffect(()=> {
    const fetchData = async ()=>{
      try {
        const data = await publicationData;
        console.log(data)
        setPublications(data);
      } catch (error) {
        console.log("error al obtener los datos desde publicacion", error.message);
      }
    }

    fetchData()
   },[])

  return (
    <>

      <article className="w-[320px] h-[384px] md:w-[299px] md:h-[384px] mx-auto mt-8 rounded-xl">
        {/* Utiliza el componente Link en lugar de <a> para redirigir a /rooms */}
        <Link to="/rooms">
          <div className="w-full h-[280px] relative">
            <button
              className={`z-10 h- w-0 absolute top-0 text-4xl right-9 cursor-pointer  ${
                isHeartRed ? "text-red-600" : "text-black "
              }`}
              onClick={toggleHeartColor}
            >
              ♥
            </button>

            {/* Componente para mostrar el slider */}
            <CardSlider cardElement={cardElement} />
          </div>

          {/* Componente para mostrar un breve resumen */}
          <CardInfo cardElement={cardElement} />
        </Link>
      </article>
    </>
    
  );
};
