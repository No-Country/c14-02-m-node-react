export const CaptchaNumber = () => {
  return (
    <article className="container">
      <header className="containerHeader">
        <button className="">X</button>
        <p className="text-center  mx-auto text-base font-bold">
          Create your profile
        </p>
      </header>
      <hr />
      <p className="text-center">STEP 1 OF 2</p>

      <div className=" text-center">
        <p className="font-bold text-1xl md:text-2xl">
          Confirm your phone number
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Enter the 4 digit Airbnb just code to +44 1234 4567890
        </p>

        <div className="flex flex-col  w-1/2 mx-auto">
          <input type="text" className="outline w-[150px] mx-auto" />

          <button className="buttonContinue">
            Continue
          </button>
          {/* <button className="buttonContinue">
            Continue
          </button> */}
        </div>

        <p className="mt-8">
          Didn´t get a text? <a href="" className="font-bold underline">Send Again</a>
        </p>

        <div className="flex flex-col space-y-4 mt-4">
          <a href="" className="font-bold underline">Call me instead</a>
          <a href="" className="font-bold underline">I´ll do this later</a>
        </div>
      </div>
    </article>
  );
};
