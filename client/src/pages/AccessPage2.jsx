import { AccessButtons } from "../components/AccessButtons";

// fixed inset-0 

export const AccessPage2 = () => {
  return (
    <section className=" flex items-center justify-center  bg-black bg-opacity-50">
      <article className="p-4 w-[340px] md:w-[568px] bg-[#fff] mx-auto my-8 rounded-md">
        <header className="h-[64px] w-full  flex items-center p-2">
          <button className="">X</button>
          <p className="text-center  mx-auto text-base font-bold">
            Log in or sign up
          </p>
        </header>
        <hr />

        <p className="text-xl font-bold ml-5 my-5">Welcom to Airbnb</p>

        <form className="p-2 mx-auto">
          <input
            type="number"
            className="h-[56px] w-full p-2 rounded-md border-2"
            placeholder="Phone number"
          />

          <button className="w-full mt-4 h-[48px] rounded-md bg-gradient-to-r from-[#FF385C] to-[#b9005a] text-[#FFF] text-xl">
            Continue
          </button>
        </form>
        <hr className="mt-5" />
        <AccessButtons />
      </article>
    </section>
  );
};
