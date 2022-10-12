import { React, useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import solicon from "../assets/images/sol-icon.png";
import deGod from "../assets/images/projects/degods.png";
import deMan from "../assets/images/projects/inkworklabs.png";
import blockSmith from "../assets/images/projects/blocksmithlabs.png";
import cetsonCreck from "../assets/images/projects/cetsoncreck.png";
import okayBears from "../assets/images/projects/okaybears.png";
import trippinApe from "../assets/images/projects/trippinapetribe.png";
import aurory from "../assets/images/projects/aurory.png";
import vandalCity from "../assets/images/projects/vandalcity.png";
import gothicdegens from "../assets/images/projects/gothicdegens.png";
import degenFatCat from "../assets/images/projects/degenfatcats.png";
import justap from "../assets/images/projects/justape.png";
import primate from "../assets/images/projects/primates.png";
import degenape from "../assets/images/projects/degenerateapeacademy.png";
import froots from "../assets/images/projects/froots.png";

const Orderone = ({ page, setPage, formData, setFormData }) => {
  const searchCollection = () => {};
  const [list, setList] = useState([
    {
      title: "some",
    },
  ]);
  const [inputList, setInputList] = useState([]);
  const [parsedList, setParsedList] = useState("hi");
  let nftName = "";

  const addItem = (data) => {
    setInputList([...inputList, data]);
    nftName = data;
    console.log(inputList);
    console.log(nftName);
    setFormData({
      ...formData,
      collection: [
        ...formData.collection,
        {
          nft: nftName,
          nftCost: 0,
          rarity: "Select Rarity",
          trait: "Select Trait",
          nftQuantity: 0,
          nftTotal: 0,
          showRarity: false,
          showTrait: false
        },
      ],
    });
  };
  useEffect(() => {
    setParsedList(inputList.toString());
  }, [inputList]);

  useEffect(() => {
    // setFormData({ ...formData, collection: [...formData.collection, {
    //   nft: nftName,
    //   nftCost: 0,
    //   rarity: "Select Rarity",
    //   trait: "Select Trait",
    //   nftQuantity: 0,
    //   nftTotal: 0,
    // }] });
    console.log(formData.collection);
  }, [inputList]);
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Caboz Tool by Inkwork Labs" />
      <meta name="author" content="Caboz" />
      <title>Caboz Tool by Inkwork Labs</title>
      {/* <!-- Styles --> */}
      <link href="./assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="./assets/css/style.css" rel="stylesheet" />
      <link href="./assets/css/aos.css" rel="stylesheet" />
      <link href="./assets/css/offcanvas.css" rel="stylesheet" />
      {/* <!-- Fonts --> */}
      <link
        href="./assets/fonts/fontawesome-free-6.1.1-web/css/all.css"
        rel="stylesheet"
      />
      {/* <!-- Favicon and Touch Icons --> */}
      <link rel="shortcut icon" href="assets/images/favicon.png" />
      <link
        rel="apple-touch-icon-precomposed"
        href="assets/images/favicon.png"
      />

      {/* <!-- Loading --> */}
      {/* <Loader /> */}
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Main Navigation --> */}
        {/* <Nav /> */}
      </header>
      {/* <!-- Main --> */}
      <main className="container mt-5">
        <div className="mt-5 mb-4 aos-init gx-0 pb-4">
          <div className="row row-cols-1 px-1 pt-4">
            <div className="col-sm-1 col-md-2"></div>
            <div
              className="collections col-sm-10 col-md-8 col-xs-1"
              id="content"
            >
              <h3 className="mt-5 page-title text-center">Create New Order</h3>
              <form id="createForm" method="GET">
                {/* <!-- start step indicators --> */}
                <div className="form-header d-flex mb-4">
                  <span className="stepIndicator finish active">
                    <span className="title-form">Select Collection</span>
                  </span>
                  <span className="stepIndicator">Select Price & Rarity</span>
                  <span className="stepIndicator">Confirm Order</span>
                </div>
                {/* <!-- end step indicators --> */}

                {/* <!-- step one --> */}
                <div className="step">
                  <div className="mb-3">
                    <div className="col-12 form-search mb-2">
                      {/* <!--<input type="text" name="tags" data-role="tagsinput" -d="tags" className="form-control form-input" placeholder="Search for a collection ..." autocomplete="off" oninput="this.className = ''" id="searchInput" onkeyup="searchCollection()">--> */}
                      <input
                        name="list"
                        value={formData.collection.map((item) => item.nft.toString())}
                        placeholder="select a Collection"
                        readOnly
                      />
                      <a
                        href="#"
                        id="x"
                        onClick={() => {
                          setInputList([])
                          setFormData({
                            ...formData,
                            collection: []
                          })
                        }}
                      >
                        x
                      </a>
                    </div>
                    <div className="table-responsive text-nowrap">
                      <table id="collectionTable" style={{ width: "100%" }}>
                        <thead>
                          <tr>
                            <th></th>
                            <th className="text-right">
                              <small className="order-sm">Floor Price</small>
                            </th>
                            <th className="text-right">
                              <small className="order-sm">Ceiling Price</small>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            style={{
                              background: inputList.includes("Inkwork Labs")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Inkwork Labs");
                                }}
                                disabled={inputList.includes("Inkwork Labs")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img src={deMan} className="mx-2 searchimg" />
                                  <span className="project-title-0">
                                    Inkwork Labs
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">16.50</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">16.50</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("DeGods")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("DeGods");
                                }}
                                disabled={inputList.includes("DeGods")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img src={deGod} className="mx-2 searchimg" />
                                  <span className="project-title-0">
                                    DeGods
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">310.00</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">310.00</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes(
                                "Gothic Degens"
                              )
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Gothic Degens");
                                }}
                                disabled={inputList.includes(
                                  "Gothic Degens"
                                )}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={gothicdegens}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Gothic Degenerates
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">11.25</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">11.25</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("primates")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("primates");
                                }}
                                disabled={inputList.includes("primates")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={primate}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Primates
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">14.50</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">14.50</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("Degenerate Ape Academy")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Degenerate Ape Academy");
                                }}
                                disabled={inputList.includes("Degenerate Ape Academy")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={degenape}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Degenerate Ape Academy
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">52.45</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">52.45</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("Vandal City")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Vandal City");
                                }}
                                disabled={inputList.includes("Vandal City")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={vandalCity}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Vandal City
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">6.90</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">6.90</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("Froots")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Froots");
                                }}
                                disabled={inputList.includes("Froots")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={froots}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Froots
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">3.50</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">3.50</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("Cetson Creck")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Cetson Creck");
                                }}
                                disabled={inputList.includes("Cetson Creck")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={cetsonCreck}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Cets On Creck
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">33.45</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">33.45</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("Okay Bears")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Okay Bears");
                                }}
                                disabled={inputList.includes("Okay Bears")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={okayBears}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Okay Bears
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">53.50</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">53.50</span>
                            </td>
                          </tr>
                          <tr
                            style={{
                              background: inputList.includes("Trippin Ape tribe")
                                ? "#131416"
                                : "",
                            }}
                          >
                            <td className="collection-title">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  addItem("Trippin Ape tribe");
                                }}
                                disabled={inputList.includes("Trippin Ape tribe")}
                              >
                                <label className="checkboxlabel">
                                  <input
                                    type="checkbox"
                                    name="project_name[]"
                                    className="project_name"
                                  />
                                  <img
                                    src={trippinApe}
                                    className="mx-2 searchimg"
                                  />
                                  <span className="project-title-0">
                                    Trippin Ape Tribe
                                  </span>
                                </label>
                              </button>
                            </td>
                            <td className="text-right">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">2.95</span>
                            </td>
                            <td className="text-right pe-2">
                              <img
                                src={solicon}
                                style={{ display: "inline-block" }}
                                className="sol-icon mx-1"
                              />{" "}
                              <span className="summary-item">2.95</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* <!-- start previous / next buttons --> */}
                <div className="form-footer d-flex">
                  {/* <Link
                    to={"/order-step2"}
                    className=" text-decoration-none text-white w-full "
                  > */}
                  <button
                    // type="submit"
                    id="nextBtn"
                    className="btn btn-dark btn-md rounded-3 shadow-none inlineblock mt-3 w-full "
                    onClick={() => {
                      setPage(page + 1);
                    }}
                    disabled={
                      inputList.length === 0 ||
                      (inputList.length <= 1 && formData.collection[0] === "")
                    }
                  >
                    Next
                  </button>
                  {/* </Link> */}
                </div>
                {/* <!-- end previous / next buttons --> */}
              </form>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Footer --> */}
      {/* <footer>
        <div className="container">
          <div className="footer gx-0">
            <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-4 row-cols-xxl-4 p-5 pb-0">
              <div className="col col-xs-12 col-sm-12 col-sm-5 col-md-5 col-lg-5 col-xxl-5 mb-4">
                <h1>Caboz</h1>
                <p>
                  With CABOZ users can place
                  <br />
                  limit orders on NFT collections
                  <br />
                  with specify attributes
                  <br />
                  and rarity parameters.
                </p>
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-3 col-md-3 col-lg-3 col-xxl-3 mb-4">
                <h4>Official Links</h4>
                <ul>
                  <li>
                    <a href="https://magiceden.io/" target="_blank">
                      Magic Eden
                    </a>
                  </li>
                  <li>
                    <a href="./" target="_blank">
                      OpenSea
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/InkworkLabs" target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/InkworkLabs" target="_blank">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/InkworkLabs" target="_blank">
                      Instgram
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-2 col-md-2 col-lg-2 col-xxl-2 mb-4">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="./aboutus.php">About Us</a>
                  </li>
                  <li>
                    <a href="./support.php">Support</a>
                  </li>
                  <li>
                    <a
                      href="https://inkwork-labs.gitbook.io/inkwork-labs/get-started/project-overview"
                      target="_blank"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a href="./faq.php">FAQ</a>
                  </li>
                  <li>
                    <a href="./sysyemstatus.php">System Status</a>
                  </li>
                  <li>
                    <a href="./copyright.php">Copyright Policy</a>
                  </li>
                  <li>
                    <a href="./terms.php">Tersm of Service</a>
                  </li>
                  <li>
                    <a href="./privacy.php">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row px-5 pt-0 pb-4">
              <div className="col copyright">
                <small>© 2022 Inkwork Labs, Inc. All Rights Reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      {/* <!-- Back-to-top --> */}
      {/* <button
        type="button"
        className="btn btn-info btn-floating btn-md text-white shadow-none"
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button> */}
      {/* <!-- JS --> */}
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      ></script>
      <script src="./assets/js/bootstrap.bundle.min.js"></script>
      <script src="./assets/js/aos.js"></script>
      <script src="./assets/js/offcanvas.js"></script>
      <script src="./assets/js/main.js"></script>
      <script src="./assets/tags/bootstrap-tagsinput.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default Orderone;
