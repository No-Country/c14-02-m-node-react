import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import apple from "../assets/images/apple.png";
import email from "../assets/images/email.png";

export const AccessButtons = () => {
  return (
    <div className="containerButtonAccess">
      <button className="AccessBtn">
        <img src={google} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Google</p>
      </button>
      <button className="AccessBtn ">
        <img src={facebook} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Facebook</p>
      </button>
      <button className="AccessBtn">
        <img src={apple} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Apple</p>
      </button>
      <button className="AccessBtn">
        <img src={email} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Email</p>
      </button>
    </div>
  );
};
