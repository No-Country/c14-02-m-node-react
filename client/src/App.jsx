import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css";
import { AccessPage1 } from "./pages/AccessPage1";
import { AuthProvider } from "./context/AuthContext";
import UserProfile from "./pages/UserProfile";
import IndividualViewPage from "./pages/IndividualViewPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AccessPage1 />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/rooms" element={<IndividualViewPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
