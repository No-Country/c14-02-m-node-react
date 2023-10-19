export const CreateYourProfile = () => {
  return (
      <div className="container">
          <div className="">
              <div className="flex justify-between items-center">
                  <button className="text-gray-600 text-2xl">&lt;</button>
                  <h2 className="font-bold text-center flex-1">Create your profile</h2>
              </div>
              <hr className="my-4 border-gray-300" />

              <h3 className="text-center text-xs">STEP 1 OF 2</h3>
              <h4 className="font-bold text-center mt-2 text-lg">Confirm your phone number</h4>
              <p className="text-center text-gray-600 text-xs">
                  This is so your Hosts, guests, or Airbnb can reach you.
              </p>

              <div className="mt-4 relative">
                  <input
                      type="text"
                      placeholder="Country/Region"
                      className="w-full bg-gray-100 border rounded-md py-2 px-4 pr-10 text-sm"
                  />
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-600"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      >
                          <path d="M7 10l5 5m0 0l5-5m-5 5V5"></path>
                      </svg>
                  </div>
              </div>

              <div className="mt-4">
                  <input
                      type="text"
                      placeholder="Phone number"
                      className="w-full bg-gray-100 border rounded-md py-2 px-4"
                  />
                  <p className="text-center text-xs text-gray-600">
                      We´ll call or text you to confirm your number. Standard message and data rates apply.
                  </p>
              </div>

              <hr className="my-4 border-gray-300" />

              <div className="flex items-center ">
                  <input
                      type="checkbox"
                      className="form-checkbox h-6 w-6 text-gray-600 rounded border border-gray-300 mr-2"
                  />
                  <p className="text-gray-600 text-xs">Text me a link to the free Airbnb app</p>
              </div>
              <button className="bg-gray-300 text-white w-full py-2 mt-6 rounded-lg text-center">
                  Continue
              </button>
              {/* <button className="buttonBlack">
                  Continue
              </button> */}

              <p className="font-bold text-center mt-4">
                  <u>I´ll do this later</u>
              </p>
          </div>
      </div>
  );
};

