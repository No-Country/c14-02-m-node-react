export const FinishSigningUp = () => {
  return (
    <article className="container">
      <header className="containerHeader">
        <button className="">X</button>
        <p className="text-center  mx-auto text-base font-bold">
          Finish signing up
        </p>
      </header>
      <hr />

      <form className="p-2 mx-auto mt-5">
        <input
          type="text"
          className="input"
          placeholder="First name"
        />
        <input
          type="text "
          className="input"
          placeholder="Last name"
        />
        <p className="text-gray-600 text-sm">
          Make srue it matches the name on your government ID.
        </p>

        <input
          type="date"
          className="input"
        />

        <p className="text-gray-600 text-sm">
          To sign up, you need to be at least 18. Your birthday won´t be shared
          with oyher people who use Airbnb.
        </p>

        <input
          type="email"
          className="input"
          placeholder="Email"
        />
        <p className="text-gray-600 text-sm">
          We´ll email you trip confirmation and receipts.
        </p>

        <div className="relative mt-5">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 border rounded-md py-2 px-4 pr-10"
          />
          <a
            href="#"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black-500 text-sm font-bold hover:underline"
          >
            Show
          </a>
        </div>

        <p className="text-xs mt-4">
          By selecting Agree and continue, I gree tp Airbnb´s{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service, Payments Terms of Service and Nondiscrimination
            Policy
          </a>
          and acknowledge the Agree and Continue{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy.
          </a>
        </p>

        <button className="button">
          Continue
        </button>
      </form>
    </article>
  );
};
