import React from "react";
import HelpFooter from "../components/HelpFooter.jsx";
import NavBar from "../components/NavBar.jsx";
import SuggestionFooter from "../components/SuggestionFooter.jsx";
import UAccount from "../components/UAccount";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <UAccount />
      <div className="hidden lg:block">
        <HelpFooter />
        <SuggestionFooter />
      </div>
    </div>
  );
}

export default UserProfile;
