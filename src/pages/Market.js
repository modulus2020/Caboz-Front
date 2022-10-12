import {React, useState} from "react";
import Loader from "../components/Loader";
import solicon from "../assets/images/sol-icon.png";
import user from "../assets/images/user.png";
import magicEden from "../assets/images/magiceden.png";
import OpenSea from "../assets/images/opensea.png";
import deGod from "../assets/images/projects/degods.png";
import deMan from "../assets/images/projects/inkworklabs.png";
import blockSmith from "../assets/images/projects/blocksmithlabs.png";
import cetsonCreck from "../assets/images/projects/cetsoncreck.png";
import okayBears from "../assets/images/projects/okaybears.png";
import trippinApe from "../assets/images/projects/trippinapetribe.png";
import froots from "../assets/images/projects/froots.png";
import aurory from "../assets/images/projects/aurory.png";
import vandalCity from "../assets/images/projects/vandalcity.png";
import gothicdegens from "../assets/images/projects/gothicdegens.png";
import rakudos from "../assets/images/projects/rakkudos.png";
import degenFatCat from "../assets/images/projects/degenfatcats.png";
import angel from "../assets/images/projects/aiangels.png";
import founderscoin from "../assets/images/projects/founderscoins.png";
import maxis from "../assets/images/projects/mischievousmaxis.png";
import sodead from "../assets/images/projects/sodead.png";
import primate from "../assets/images/projects/primates.png";
import supercoder from "../assets/images/projects/shadowsupercoder.png";
import eclesia from "../assets/images/projects/eclestia.png";
import genPet from "../assets/images/projects/genopets.png";
import justap from "../assets/images/projects/justape.png";
import dust from "../assets/images/projects/dustcrashcoinflip.png";
import mino from "../assets/images/projects/minoansofmoobaa.png";
import alien from "../assets/images/projects/alientrippinhigh.png";
import jelly from "../assets/images/projects/jellyrascals.png";
import degenape from "../assets/images/projects/degenerateapeacademy.png";
import jikan from "../assets/images/projects/jikanstudios.png";
import sengoku from "../assets/images/projects/sengokudegens.png";
import infectedmob from "../assets/images/projects/infectedmob.png";
import dragon from "../assets/images/projects/eternaldragonsgenesis.png";
import weepangel from "../assets/images/projects/weepingangels.png";
import aidegen from "../assets/images/projects/aidegens.png";
import famousfox from "../assets/images/projects/famousfox.png";
import il1 from "../assets/images/trades/il1.jpg";
import il2 from "../assets/images/trades/il2.jpg";
import il3 from "../assets/images/trades/il3.jpg";
import dg1 from "../assets/images/trades/dg1.png";
import dg2 from "../assets/images/trades/dg2.png";
import dg3 from "../assets/images/trades/dg3.png";
import bs1 from "../assets/images/trades/bs1.png";
import bs2 from "../assets/images/trades/bs2.png";
import ok from "../assets/images/trades/ok.png";
import Nav from "../components/Nav";

const Market = () => {
  const [hideModal, setHideModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('Sort by')
  const searchOrder = () => {};
  return (
    <div>
   

      {/* <!-- Loading --> */}
      <Loader/>
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Main Navigation --> */}
        <Nav/>
      </header>
      {/* <!-- Main --> */}
      <main className="container mt-5">
        <div className="orders mt-5 mb-5 aos-init">
          <div className="px-2 py-4 row row-cols-1">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <h3 className="mx-2">Market</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 form-search mb-2">
              <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search for a collection ..."
                id="searchordersinput"
                onKeyUp={searchOrder()}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 form-search"  >
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
            <div className="col-xs-12 col-sm-12 col-md-12 marketFilter pt-2">
              <label className="compat-trades">
                <input type="checkbox" id="compatTades" name="compatTades" />{" "}
                Show compatible trades only
              </label>
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}
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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1 notcompat">
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-red btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1 notcompat">
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-red btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1 notcompat">
              <div className="order-items-box p-2 mb-4">
                <table className="table table-borderless white-text my-0">
                  <tbody>
                    <tr>
                      <td>
                        <a href="./project.php?proj=Trippin Ape Tribe">
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-red btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1 notcompat">
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-red btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1 notcompat">
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-red btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col col-xs-1 notcompat">
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-red btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}
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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{ display: "inline-block" }}
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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{display: "inline-block"}}
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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{display: "inline-block"}}

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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
                          className="sol-icon"
                          style={{display: "inline-block"}}
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
                          View
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="#trade"
                          data-bs-toggle="modal"
                          data-bs-target="#trade"
                          className="btn btn-dark-green btn-md rounded-3 inlineblock full-width"
                          onClick={()=>{setHideModal(true)}}
                        >
                          Trade
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
        type="button"
        href="#"
        className="btn btn-info btn-floating btn-md text-white shadow-none"
        id="btn-back-to-top"
        style={{ display: "block" }}
      >
        <i className="fas fa-arrow-up"></i>
      </a>

      {/* <!-- Trade Modal --> */}
      {hideModal?(
      <div
        className="modal"
        id="trade"
        tabIndex="-1"
        aria-labelledby="tradeModalLabel"
        aria-hidden="true"
        style={{display: "block", background: "#0f1012b8"}}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
          <div className="modal-content modal-dark text-white">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close shadow-none float-right"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {setHideModal(false)}}
              ></button>
              <div className="row">
                <div className="px-2 py-2 row row-cols-1">
                  <div className="col-xs-12 col-sm-12 col-md-7 pb-3">
                    <h3 className="mx-2">Available NFTs</h3>
                  </div>
                </div>
                <div className="row row-cols-1 px-1 mx-1">
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={il1}
                        className="img-fluid mb-2"
                      />
                      <br />
                      Inkwork Labs #321
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={il2}
                        className="img-fluid mb-2"
                      />
                      <br />
                      Inkwork Labs #123
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={il3}
                        className="img-fluid mb-2"
                      />
                      <br />
                      Inkwork Labs #112
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 px-1 mx-1 pb-3">
                  <div className="col">
                    <hr className="hr-trades" />
                  </div>
                </div>
                <div className="row row-cols-1 px-1 mx-1 pb-3">
                  <div className="col-xs-12 col-sm-12 col-md-7">
                    <h3 className="mx-2">Unavailable NFTs</h3>
                  </div>
                </div>
                <div className="row row-cols-1 px-1 mx-1">
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={dg1}
                        className="img-fluid mb-2"
                      />
                      <br />
                      DeGods #7263
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={dg2}
                        className="img-fluid mb-2"
                      />
                      <br />
                      DeGods 121
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6  col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={dg3}
                        className="img-fluid mb-2"
                      />
                      <br />
                      DeGods #7263
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={bs1}
                        className="img-fluid mb-2"
                      />
                      <br />
                      Blacksmith Labs #11
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={bs2}
                        className="img-fluid mb-2"
                      />
                      <br />
                      Blacksmith Labs #8
                    </div>
                  </div>
                  <div className="col-6 col-xs-6 col-sm-6 col-md-2 text-center">
                    <div className="trade-item tetx-white">
                      <img
                        src={ok}
                        className="img-fluid mb-2"
                      />
                      <br />
                      Okay Bears #331
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ):null}
      {/* <!-- JS --> */}
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      ></script>
      <script src="./assets/js/bootstrap.bundle.min.js"></script>
      <script src="./assets/js/aos.js"></script>
      <script src="./assets/js/offcanvas.js"></script>
      <script src="./assets/js/main.js"></script>
    </div>
  );
};

export default Market;
