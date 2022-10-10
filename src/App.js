import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/aos.css";
import "./assets/css/offcanvas.css";
import "./assets/fonts/fontawesome-free-6.1.1-web/css/all.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Market from "./pages/Market";
import Activity from "./pages/Activity";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/market" element={<Market/>} />
          <Route path="/activity" element={<Activity/>} />
        </Routes>
    </div>
    // </div>
  );
}

export default App;
