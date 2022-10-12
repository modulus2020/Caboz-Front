import { React, useState } from "react";
import Orderone from "./Orderone";
import Ordertwo from "./Ordertwo";
import Orderthree from "./Orderthree";
import Ordersuccess from "./Ordersuccess";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import FooterBacktoTop from "../components/FooterBacktoTop";

const Multistep = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    collection: [
      // {"nft": "DeGods", "nftCost": 0, rarity: "Select Rarity", trait: "Select Trait", "nftQuantity": 0, "nftTotal": 0},
    ],
    // nftCost: 0,
    // rarity: 'Select Rarity',
    // trait: 'Select Traits'
  })

  const FormList = [
    <Orderone page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
    <Ordertwo page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
    <Orderthree page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
    <Ordersuccess page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
  ];
  return (
    <div>
      <Loader />
      <header>
        <Nav />
      </header>
      <div>{/* form pages */}</div>
      <div>
        {/* footer and back to top */}
        {FormList[page]}
        <FooterBacktoTop />
      </div>
    </div>
  );
};

export default Multistep;
