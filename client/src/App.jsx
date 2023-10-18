import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GaleriaPage } from "./pages/GaleriaPage";
import SuggestionFooter from "./components/SuggestionFooter";
import { AccessPage1 } from "./pages/AccessPage1";
import { AccessPage2 } from "./pages/AccessPage2";
import { AccessPage3 } from "./pages/AccessPage3";
import { AccessPage4 } from "./pages/AccessPage4";
import Login from "./pages/Login.jsx"
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<AccessPage1 />} />
        <Route path="/accesspage2" element={<AccessPage2 />} />
        <Route path="/accesspage3" element={<AccessPage3/>} />
        <Route path="/accesspage4" element={<AccessPage4 />}/>
        <Route path="/suggestionfooter" element={<SuggestionFooter />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;