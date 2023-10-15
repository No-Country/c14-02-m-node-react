import { AccessButtons } from "../../components/AccessButtons";

// Es la primera página que sale al ir al register / login: WELCOME AIRBNB

export const AccessPage1 = () => {
  return (
    
      <article className="container">
        <header className="containerHeader">
          <button className="">X</button>
          <p className="text-center  mx-auto text-base font-bold">
            Log in or sign up
          </p>
        </header>
        <hr />

        <p className="text-2xl md:text-1xl font-bold ml-5 m-5">Welcom to Airbnb</p>

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
          <button className="button">
            Continue
          </button>
        </form>

        <AccessButtons />
      </article>
  );
};
