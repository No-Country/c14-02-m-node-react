import airbnb from "../../assets/images/Airbnb.png";

export const CommunityLoginPage = () => {
  return (
    <section className="container">
    <div className="bg-white max-w-md mx-auto my-8 rounded-md shadow-md">
      <img src={airbnb} alt="Airbnb Logo" className="w-16 h-12" />
      <p className="text-gray-600 text-sm mt-4">Our community commitment</p>
      <h1 className="text-2xl font-semibold mt-2">
        Airbnb is a comminity where anyone can belong
      </h1>
      <p className="text-gray-600 text-sm mt-4">
        The ensure this we´re sking you to commit to the following:
      </p>
      <p className="text-gray-600 text-sm mt-4">
        I agree to treat everyone in the Airbnb community-regardlessof their
        race, religion, nation origen, ethnicity, skin color, disability, sex,
        gender identity, sexual orientation or age-with respect, and without
        judgement or bias.
      </p>
      <a
        href="#"
        className="text-blue-500 mt-4 hover:underline flex items-center"
      >
        Learn more
        <span className="ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </a>

      <button className="button">

        Agree and Continue
      </button>

      <button className="bg-white text-black-500 border border-blue-500 w-full py-2 px-4 rounded-md hover:bg-gray-100 mt-4">
        Decline
      </button>
    </div>
    </section>
  );
};
