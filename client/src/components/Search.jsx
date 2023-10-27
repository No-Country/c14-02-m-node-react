import { Link } from "react-router-dom";
import { useSearch } from "../hook/useSearch";

export const Search = () => {
  const { searchQuery, handleSearchChange, filteredLocations } = useSearch();

  console.log(filteredLocations);

  return (
    <form  className="w-96 flex">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Buscar alojamiento.."
        className="p-2 border-none rounded-l-full w-full"
      />
      <button
        type="submit"
        className="p-2 bg-red-500 text-white rounded-r-full"
      >
        <Link to="/searchfilter">Buscar</Link>
      </button>
    </form>
  );
};
