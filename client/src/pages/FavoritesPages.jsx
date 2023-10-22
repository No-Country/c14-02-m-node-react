import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { dataCards } from "../data/data";

export const FavoritesPages = () => {
  return (
    <section className="md:w-[70%] mx-auto">
      <div className="px-5 md:px-0 flex items-center justify-between mt-5">
        {/* El link esta listo para que se ponga a donde se quiere que lo llevemos atras seria el perifl o al home. */}
        <Link
          to="/"
          className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex flex-col items-center rounded-lg "
        >
        {/* <Link
          to=""
          className="text-4xl text-gray-800 bg-red-500 w-[50px] h-[50px] flex flex-col items-center rounded-lg "
        > */}
          &#8592;
        </Link>
        <h2 className="text-xl md:text-3xl underline">Tus alojamientos favoritos</h2>
      </div>

{/*

Lo que tuve que hacer aca es iterar de nuevo para que me pueda mostrar las cartas ya que si no lo hago asi me dara error al mostrar los elementos ya que necesitan props y esas props vienen del JSON

 */}
      <section className="conteinerCards flex flex-wrap w-ful p-4">
        {dataCards.map((cardElement) => (
          <Card key={cardElement.id} cardElement={cardElement} />
        ))}
      </section>
    </section>
  );
};
