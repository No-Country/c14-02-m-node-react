import { Card } from "../components/Card";
import { dataCards } from "../data/data";

export const GaleriaPage = () => {
  return (
    <section className="conteinerCards flex flex-wrap w-ful p-4">
      {dataCards.map((cardElement) => (
        <Card key={cardElement.id} cardElement={cardElement} />
      ))}
    </section>
  );
};
