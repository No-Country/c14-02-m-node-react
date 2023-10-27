import { LuShowerHead } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";

function Spaces() {
  return (
    <div>
      <div className="border-b p-5">
        <div className="flex">
          <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
            <LiaBedSolid size={30} className="mb-4" />
            <p className="text-xs">1 cama de una plaza</p>
          </div>
          <div className="flex-1 border border-gray-300 rounded-xl p-4 mr-4">
            <LuShowerHead size={30} className="mb-4" />
            <p className="text-xs">Baño compartido</p>
          </div>
          <div className="flex-1 border border-gray-300 rounded-xl p-4">
            <FaPeopleRoof size={30} className="mb-4" />
            <p className="text-xs">
              Es posible que el anfitrión y otros huéspedes estén acá
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spaces;
