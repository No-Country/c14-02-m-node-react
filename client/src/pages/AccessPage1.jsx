import { AccessButtons } from "../components/AccessButtons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


// Es la primera página que sale al ir al register / login: WELCOME AIRBNB

export const AccessPage1 = () => {
  const navigate = useNavigate();
  const { loginWithGoogle, user, loading} = useAuth();
  
  
  function handleClick() {
    navigate(-1);
  }

  const handleGoogleSignin = async () => {
    try {
      const res = await loginWithGoogle();
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <section className="flex items-center justify-center bg-black bg-opacity-0">
      <article className="p-4 w-[340px] md:w-[568px] bg-[#fff] mx-auto mt-5 rounded-md">
        <header className="h-[64px] w-full flex items-center p-2">
          <button className="" onClick={handleClick}>
            X
          </button>
          <p className="text-center  mx-auto text-base font-bold">
            Log in or sign up
          </p>
        </header>
        <hr />

        <p className="text-2xl md:text-1xl font-bold ml-5 m-5">
          Welcom to Airbnb
        </p>

        <form className="p-2 mx-auto">
          <div className="flex flex-col w-full ">
            <select name="" id="" className=" h-[56px] p-2 rounded-md border-2">
              <option value="">Nombre del país (+00)</option>
              <option value="">Nombre del país (+00)</option>
              <option value="">Nombre del país (+00)</option>
              <option value="">Nombre del país (+00)</option>
              <option value="">Nombre del país (+00)</option>
            </select>
            <input
              type="number"
              className="h-[56px] p-2 rounded-md border-2"
              placeholder="Phone number"
            />
          </div>

          <p className="text-[#717171] text-xs font-normal mt-2">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. <b className="text-[#222222]"> Privacy Policy</b>
          </p>
          <Link to="/completardatos">
            <button className="w-full mt-4 h-[48px] rounded-md bg-gradient-to-r from-[#FF385C] to-[#b9005a] text-[#FFF] text-xl">
              Continue
            </button>
          </Link>
        </form>

        <AccessButtons loginGoogle={handleGoogleSignin} />
      </article>
    </section>
  );
};
