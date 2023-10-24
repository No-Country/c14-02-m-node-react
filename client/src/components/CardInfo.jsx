export const CardInfo = ({info}) => {
  console.log(info)
  return (
    <section className="mt-2">
      <div className="flex justify-between text-[#222]">
        <p className="font-bold">{info.location}</p>
        {/* <p>&#9733; {info.publication.title}</p> */}
      </div>

      <div>
        <p className="text-[#858484]">A {info.title} kilómetros de distancia</p> 
        {/* <p className="text-[#858484]">{info.publication.date}</p> */}
        <p className="mt-3 text-[#222]">
          <b>${info.price} USD</b> noche
        </p>
      </div>
    </section>
  );
};
