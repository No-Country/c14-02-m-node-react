import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css";
import { AccessPage1 } from "./pages/AccessPage1";
import { AuthProvider } from "./context/AuthContext";
import UserProfile from "./pages/UserProfile";
import IndividualViewPage from "./pages/IndividualViewPage";
import { FavoritesPages } from "./pages/FavoritesPages";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AccessPage1 />} />
        <Route path="/user" element={<UserProfile  />} />
        <Route path="/publication/:id" element={<IndividualViewPage />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
