export const CardInfo = ({cardElement}) => {
  return (
    <section className="mt-2">
      <div className="flex justify-between text-[#222]">
        <p className="font-bold">{cardElement.location}</p>
        <p>&#9733; {cardElement.rating}</p>
      </div>

      <div>
        <p className="text-[#858484]">A {cardElement.distance} kilómetros de distancia</p>
        <p className="text-[#858484]">{cardElement.date}</p>
        <p className="mt-3 text-[#222]">
          <b>${cardElement.price} USD</b> noche
        </p>
      </div>
    </section>
  );
};
