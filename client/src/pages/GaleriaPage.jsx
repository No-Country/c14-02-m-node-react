import { Card } from "../components/Card";
import { dataCards } from "../data/data";
import { useGetAllPublicationsQuery } from "../store/rtk-query";

export const GaleriaPage = () => {

  //implementacion de una rtk-query

  const {data: publications, error: publicationError, isLoading: isLoadingPublication} = useGetAllPublicationsQuery();

  // console.log(publications);
  
  return (
    <section className="conteinerCards flex flex-wrap w-ful p-4">
      {isLoadingPublication 
      ? <span>Cargando</span> 
      : publicationError 
      ? <span>error</span> 
      : publications.map((publication, index) => (
        <Card key={index} publication={publication} />
      ))  
    }
    </section>
  );
};
