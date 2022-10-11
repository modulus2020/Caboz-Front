import {React, useState} from "react";
import Loader from "../components/Loader";
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

const Myorders = () => {
  const searchOrders = () => {};
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('Sort by')


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
      <Loader />
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Main Navigation --> */}
        <Nav />
      </header>
      {/* <!-- Main --> */}
      <main className="container mt-5">
        <div className="orders mt-5 mb-5 aos-init">
          <div className="px-2 py-4 row row-cols-1">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <h3 className="mx-2">My Orders</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 form-search mb-2">
              <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search for a collection ..."
                id="searchordersinput"
                onKeyUp={searchOrders()}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 form-search">
              <div className="btn-group" style={{ width: "100%" }}>
              <button
                  className="btn btn-drop dropdown-toggle shadow-none"
                  type="button"
                  id="filterDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                  onClick={()=>{setShowDropdown(true)}}
                >
                  {value}
                </button>
                {showDropdown?(
                <ul
                  className="dropdown-menu day-range"
                  aria-labelledby="filterDropdown"
                  style={{display: "block",  marginTop: "43px"}}
                >
                  <li>
                    <a className="dropdown-item hover:cursor-pointer" onClick={()=>{
                      setShowDropdown(false)
                      setValue('Date Created')
                    }} >Date Created</a>
                  </li>
                  <li>
                    <a className="dropdown-item hover:cursor-pointer" onClick={()=>{
                      setShowDropdown(false)
                      setValue('Price: High to Low')
                    }} >Price: High to Low</a>
                  </li>
                  <li>
                    <a className="dropdown-item hover:cursor-pointer" onClick={()=>{
                      setShowDropdown(false)
                      setValue('Price: Low to High')
                    }} >Price: Low to High</a>
                  </li>
                  <li>
                    <a className="dropdown-item hover:cursor-pointer" onClick={()=>{
                      setShowDropdown(false)
                      setValue('From A to Z')
                    }} >From A to Z</a>
                  </li>
                  <li>
                    <a className="dropdown-item hover:cursor-pointer" onClick={()=>{
                      setShowDropdown(false)
                      setValue('From Z to A')
                    }} >From Z to A</a>
                  </li>
                </ul>
                ): null}
              </div>
            </div>
          </div>
          <div
            className="row row-cols-2 row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xxl-3"
            id="ordersDiv"
          >
            {/* <!-- Popular Collections --> */}
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Inkwork Labs">
                          <img
                            src={deMan}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid projectName">
                        Inkwork Labs
                      </td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        13.50
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00231</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">25 Aug 03:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Cets On Creck">
                          <img
                            src={cetsonCreck}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid projectName">
                        Cets On Creck
                      </td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        33.50
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-yellow">Top 1300</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <div className="btn-group" style={{ width: "100%" }}>
                          <button
                            className="btn btn-traits dropdown-toggle shadow-none"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                          >
                            View
                          </button>
                          <ul className="dropdown-menu view-traits">
                            <li>
                              <a className="dropdown-item">Trait 1</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 2</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 3</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00846</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">23 Aug 17:00 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=DeGods">
                          <img
                            src={deGod}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid projectName">
                        DeGods
                      </td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        322
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-red">Top 750</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ01638</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">24 Aug 11:47 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Tripping Ape Tribe">
                          <img
                            src={trippinApe}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">
                        Trippin Ape Tribe
                      </td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        9.45
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-red">Top 578</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00965</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">19 Aug 21:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Blocksmith Labs">
                          <img
                            src={blockSmith}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Blocksmith Labs</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        49.54
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00115</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">25 Aug 03:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Okay Bears">
                          <img
                            src={okayBears}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Okay Bears</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        61.54
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <div className="btn-group" style={{ width: "100%" }}>
                          <button
                            className="btn btn-traits dropdown-toggle shadow-none"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                          >
                            View
                          </button>
                          <ul className="dropdown-menu view-traits">
                            <li>
                              <a className="dropdown-item">Trait 1</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 2</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 3</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ04257</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">25 Aug 01:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Inkwork Labs">
                          <img
                            src={deMan}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Inkwork Labs</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        12.76
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-red">Top 475</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00317</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">17 Aug 13:35 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Blocksmith Labs">
                          <img
                            src={blockSmith}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Blocksmith Labs</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        51.11
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-yellow">Top 4112</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <div className="btn-group" style={{ width: "100%" }}>
                          <button
                            className="btn btn-traits dropdown-toggle shadow-none"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                          >
                            View
                          </button>
                          <ul className="dropdown-menu view-traits">
                            <li>
                              <a className="dropdown-item">Trait 1</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 2</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 3</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00073</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">22 Aug 21:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Vandal City">
                          <img
                            src={vandalCity}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Vandal City</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        9.11
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00091</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">20 Aug 15:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Aurory">
                          <img
                            src={aurory}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Aurory</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        27.64
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00673</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">22 Aug 17:34 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Degen Fat Cats">
                          <img
                            src={degenFatCat}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Degen Fat Cats</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        11.1
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-red">1100</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00033</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">25 Aug 03:45 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Vandal City">
                          <img
                            src={vandalCity}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Vandal City</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        8.89
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <div className="btn-group" style={{ width: "100%" }}>
                          <button
                            className="btn btn-traits dropdown-toggle shadow-none"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                          >
                            View
                          </button>
                          <ul className="dropdown-menu view-traits">
                            <li>
                              <a className="dropdown-item">Trait 1</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 2</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 3</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ01132</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">20 Aug 01:15 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Gothic Degens">
                          <img
                            src={gothicdegens}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Gothic Degens</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        9.99
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <div className="btn-group" style={{ width: "100%" }}>
                          <button
                            className="btn btn-traits dropdown-toggle shadow-none"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                          >
                            View
                          </button>
                          <ul className="dropdown-menu view-traits">
                            <li>
                              <a className="dropdown-item">Trait 1</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 2</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 3</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00511</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">27 Aug 21:11 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Just Ape">
                          <img
                            src={justap}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Just Ape</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        5.51
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <div className="btn-group" style={{ width: "100%" }}>
                          <button
                            className="btn btn-traits dropdown-toggle shadow-none"
                            type="button"
                            data-bs-toggle="dropdown"
                          >
                            View
                          </button>
                          <ul className="dropdown-menu view-traits">
                            <li>
                              <a className="dropdown-item">Trait 1</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 2</a>
                            </li>
                            <li>
                              <a className="dropdown-item">Trait 3</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00011</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">20 Aug 16:55 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Gothic Degens">
                          <img
                            src={gothicdegens}
                            alt=""
                            className="img-fluid d-block proj-img"
                          />
                        </a>
                      </td>
                      <td className="text-right valign-mid">Gothic Degens</td>
                    </tr>
                    <tr>
                      <td>Buying Price</td>
                      <td className="text-right">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          className="sol-icon"
                        />{" "}
                        8.89
                      </td>
                    </tr>
                    <tr>
                      <td>Rarity</td>
                      <td className="text-right">
                        <span className="text-green">Any</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Traits Required</td>
                      <td className="text-right">
                        <span className="text-green">None</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td>Order ID</td>
                      <td className="text-right">#CBZ00009</td>
                    </tr>
                    <tr>
                      <td>Date Created</td>
                      <td className="text-right">22 Aug 01:32 UTC</td>
                    </tr>
                    <tr>
                      <td>Owner</td>
                      <td className="text-right">someone.sol</td>
                    </tr>
                    <tr>
                      <td className="pt-2" colSpan="2"></td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#"
                          className="btn btn-dark btn-md rounded-3 inlineblock full-width"
                        >
                          Cancel
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Footer --> */}
      <footer>
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
      </footer>
      {/* <!-- Back-to-top --> */}
      <a
        href="#"
        type="button"
        className="btn btn-info btn-floating btn-md text-white shadow-none"
        id="btn-back-to-top"
        style={{display: "block"}}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
      {/* <!-- JS --> */}
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      ></script>
      <script src="./assets/js/bootstrap.bundle.min.js"></script>
      <script src="./assets/js/aos.js"></script>
      <script src="./assets/js/offcanvas.js"></script>
      <script src="./assets/js/main.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default Myorders;
