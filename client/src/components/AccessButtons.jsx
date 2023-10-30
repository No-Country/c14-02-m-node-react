import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import apple from "../assets/images/apple.png";
import email from "../assets/images/email.png";


export const AccessButtons = ({loginGoogle}) => {
  return (
    <div className="p-2 mx-auto mt-4">
      <button className="border-4 mb-3 w-full h-[48px] flex items-center rounded-md " onClick={loginGoogle}>
        <img src={google} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Google</p>
      </button>
      {/* <button className="border-4 mb-3 w-full h-[48px] flex items-center rounded-md ">
        <img src={facebook} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Facebook</p>
      </button>
      <button className="border-4 mb-3 w-full h-[48px] flex items-center rounded-md ">
        <img src={apple} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Apple</p>
      </button>
      <button className="border-4 mb-3 w-full h-[48px] flex items-center rounded-md ">
        <img src={email} alt="" className="w-5 ml-2" />
        <p className="mx-auto">Continue with Email</p>
      </button> */}
    </div>
  );
};
