import React from "react";
import HelpFooter from "../components/HelpFooter.jsx";
import NavBar from "../components/NavBar.jsx";
import SuggestionFooter from "../components/SuggestionFooter.jsx";
import UProfile from "../components/UProfile";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <UProfile />
      <HelpFooter />
      <SuggestionFooter />
    </div>
  );
}

export default UserProfile;
