import { Card } from "../components/Card";
import { dataCards } from "../data/data";
import { useGetAllPublicationsQuery } from "../store/rtk-query";

export const GaleriaPage = () => {

  //implementacion de una rtk-query

  const {data: publications, error: publicationError, isLoading: isLoadingPublication} = useGetAllPublicationsQuery();

  console.log(publications, publicationError);
  console.log(typeof useGetAllPublicationsQuery)


  return (
    <section className="conteinerCards flex flex-wrap w-ful p-4">
      {dataCards.map((cardElement) => (
        <Card key={cardElement.id} cardElement={cardElement} />
      ))}
    </section>
  );
};
