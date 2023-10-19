
import facebook from "../../assets/images/facebook.png";
import nube from "../../assets/images/nubearchivo-modified.jpeg";
import user from "../../assets/images/iconousuario.png";


export const AddPhoto = () => {
    return (
        <div className="container">
            <div className="">
                <div className="flex justify-between items-center">
                    <button className="text-gray-600 text-2xl">&lt;</button>
                    <h2 className="font-bold text-center flex-1">Create your profile</h2>
                </div>
                <hr className="my-4 border-gray-300" />

                <h3 className="text-center text-xs">STEP 1 OF 2</h3>
                <h4 className="font-bold text-center mt-2 text-lg">Add a profile photo</h4>
                <p className="text-center text-gray-600 text-xs">
                    Pick an image that shows your face. Hosts won´t be able to see your profile photo until your reservation is confirmed.
                </p>

                <div className="mt-4 flex items-center justify-center">
                    <div className="bg-white-100 w-32 h-32 rounded-full flex items-center justify-center">
                    <img
                            src={user}
                            alt="Cloud Upload"
                            className="h-32 w-32 text-white mr-2"
                        />
                    </div>
                </div>

                <button className="bg-black text-white w-full py-2 mt-6 rounded-lg text-center flex items-center justify-center">
                    <div className="flex items-center justify-start">
                        <img
                            src={nube} // Ruta relativa a la carpeta public
                            alt="Cloud Upload"
                            className="h-6 w-6 text-white ml-2"
                        />
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        Upload a photo
                    </div>
                </button>

                <button className="bg-white text-black border border-black w-full py-2 mt-6 rounded-lg text-center flex items-center justify-center">
                    <div className="flex items-center justify-start">
                        <img
                            src={facebook} 
                            alt="Cloud Upload"
                            className="h-6 w-6 text-white ml-2"
                        />
                    </div>
                    <div className="flex items-center justify-center flex-1">
                    Use Facebook photo
                    </div>
                </button>

                <p className="font-bold text-center mt-4">
                    <u>I´ll do this later</u>
                </p>
            </div>
        </div>
    );
};

