import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gita from "./components/Gita";
import Homepage from "./pages/Homepage";
import Quran from "./components/Quran";
import Bible from "./components/Bible";
import Tripitaka from "./components/Tripitaka"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/gita" element={<Gita />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/tripitaka" element={<Tripitaka />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
