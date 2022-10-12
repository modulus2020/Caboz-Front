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
import Myorders from "./pages/Myorders";
import Orderone from "./pages/Orderone";
import Ordertwo from "./pages/Ordertwo";
import Orderthree from "./pages/Orderthree";
import Ordersuccess from "./pages/Ordersuccess";
import Multistep from "./pages/Multistep";
import Project from "./pages/Project";
import { Route, Routes } from "react-router-dom";
import { HeadProvider, Title, Meta } from "react-head";

function App() {
  return (
    <div>
      <HeadProvider>
        <Meta charSet="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Caboz Tool by Inkwork Labs" />
        <Meta name="author" content="Caboz" />
        <Title>Caboz Tool by Inkwork Labs</Title>
      </HeadProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/market" element={<Market />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/my-orders" element={<Myorders />} />
        <Route path="*" element={<Home />} />
        {/* <Route path="/order-step1" element={<Orderone />} /> */}
        {/* <Route path="/order-step2" element={<Ordertwo />} /> */}
        {/* <Route path="/order-step3" element={<Orderthree />} /> */}
        {/* <Route path="/ordersuccess" element={<Ordersuccess />} /> */}
        <Route path="/multistepform" element={<Multistep />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
    // </div>
  );
}

export default App;
