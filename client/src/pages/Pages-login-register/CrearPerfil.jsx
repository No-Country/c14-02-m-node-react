import foto from "../../assets/images/Airbnb.png";


export const CrearPerfil = () => {
    return (
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <button className="text-gray-600 text-2xl">×</button>
            <h2 className="font-bold text-center flex-1">Create your profile</h2>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-center">
            <img src={foto} alt="Airbnb Logo" className="w-[200px] " />
          </div>
          <div className="text-center mt-4">
            <h3 className="font-bold">Welcome to Airbnb</h3>
            <p className="text-sm text-gray-600">
              Discover places to stay and unique experiences around the world
            </p>
          </div>
          <button className="buttonBlack">Continue</button>
        </div>
      </div>
    );
  };
  