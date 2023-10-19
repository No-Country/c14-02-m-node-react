import { AccessButtons } from "../../components/AccessButtons";

// fixed inset-0

export const AccessPage2 = () => {
  return (
    <article className="container">
      <header className="containerHeader">
        <button className="">X</button>
        <p className="text-center mx-auto text-base font-bold">
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

        <button className="button">
          Continue
        </button>
      </form>
      <hr className="mt-5" />
      <AccessButtons />
    </article>
  );
};
