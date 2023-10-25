// import { useGetAllPublicationsQuery } from "../store/rtk-query";
// location
export const Search = () => {
  

  return (
    <form className="w-96 flex">
      <input
        type="text"
        placeholder="Buscar alojamiento.."
        className="p-2 border-none rounded-l-full w-full"
      />
      <button
        type="button"
        className="p-2 bg-red-500 text-white rounded-r-full"
      >
        Buscar
      </button>
    </form>
  );
};
