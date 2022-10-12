import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/aos.css";
import "../assets/css/offcanvas.css";
import solicon from "../assets/images/sol-icon.png";
import deGod from "../assets/images/projects/degods.png";
import deMan from "../assets/images/projects/inkworklabs.png";
import blockSmith from "../assets/images/projects/blocksmithlabs.png";
import cetsonCreck from "../assets/images/projects/cetsoncreck.png";
import okayBears from "../assets/images/projects/okaybears.png";
import froots from "../assets/images/projects/froots.png";
import vandalCity from "../assets/images/projects/vandalcity.png";
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
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import degenape from "../assets/images/projects/degenerateapeacademy.png";
import jikan from "../assets/images/projects/jikanstudios.png";
import sengoku from "../assets/images/projects/sengokudegens.png";
import infectedmob from "../assets/images/projects/infectedmob.png";
import dragon from "../assets/images/projects/eternaldragonsgenesis.png";
import weepangel from "../assets/images/projects/weepingangels.png";
import aidegen from "../assets/images/projects/aidegens.png";
import famousfox from "../assets/images/projects/famousfox.png";

const Collection = () => {
  const [searchInput, setSeaaarchInput] = useState("");
  const [day, setDays] = useState("7 Days");
  const [showDays, setShowDays] = useState(false);
  const searchCollectionTitle = () => {};
  return (
    <div>
      <div>
        {/* <!-- Loading --> */}
        <Loader />
        {/* <!-- Header --> */}
        <header>
          {/* <!-- Main Navigation --> */}
          <Nav />
        </header>
        {/* <!-- Main --> */}
        <main className="container mt-5">
          <div className="row collections row-cols-1 mt-5 mb-4 aos-init gx-0 pb-4">
            {/* <!-- Collections --> */}
            <div className="px-2 py-4 row row-cols-1">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h3 className="mx-2">Collections</h3>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 form-search mb-2">
                <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search for a collection ..."
                  id="search-input"
                  value={searchInput}
                  onChange={(e) => setSeaaarchInput(e.target.value)}
                  onKeyUp={searchCollectionTitle()}
                />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-2 form-search">
                <div className="btn-group" style={{ width: "100%" }}>
                  <button
                    className="btn btn-drop dropdown-toggle shadow-none"
                    type="button"
                    id="defaultDropdown"
                    aria-expanded="false"
                    onClick={() => setShowDays(!showDays)}
                  >
                    {day}
                  </button>
                  {showDays ? (
                    <ul
                      className="dropdown-menu day-range"
                      aria-labelledby="defaultDropdown"
                      style={{ display: "block", marginTop: "40px" }}
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setDays("24 Hours");
                            setShowDays(false);
                          }}
                        >
                          24 Hours
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setDays("7 Days");
                            setShowDays(false);
                          }}
                        >
                          7 Days
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setDays("15 Days");
                            setShowDays(false);
                          }}
                        >
                          15 Days
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setDays("30 Days");
                            setShowDays(false);
                          }}
                        >
                          30 Days
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setDays("6 Months");
                            setShowDays(false);
                          }}
                        >
                          6 Months
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setDays("All Time");
                            setShowDays(false);
                          }}
                        >
                          All Time
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row row-cols-1 px-1">
              <div className="col col-xs-1">
                <div className="table-responsive text-nowrap">
                  <table
                    className="table table-sm table-borderless white-text my-0 text-small"
                    id="collection-table"
                  >
                    <thead>
                      <tr>
                        <th></th>
                        <th className="valign-mid" colSpan="2"></th>
                        <th className="valign-mid text-right">Floor Price</th>
                        <th className="valign-mid text-right">Ceiling Price</th>
                        <th className="valign-mid text-right">Active Trades</th>
                        <th className="valign-mid text-right">Total Trades</th>
                        <th className="valign-mid text-right">
                          Volume (7D){" "}
                          <a className="sort-down-arrow">
                            <i className="fa-solid fa-sort-down drop-arrow"></i>
                          </a>
                        </th>
                        <th className="valign-mid text-right">Supply</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Inkwork Labs';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          1
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={deMan}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Inkwork Labs"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Inkwork Labs
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          16.25
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          15.3
                        </td>
                        <td className="text-right valign-mid">163</td>
                        <td className="text-right valign-mid">628</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          5927
                        </td>
                        <td className="text-right valign-mid">
                          <span className="infinite">∞</span>
                        </td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Rakkudos';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          2
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={rakudos}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Rakkudos"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Rakkudos
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          5.4
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          4.99
                        </td>
                        <td className="text-right valign-mid">96</td>
                        <td className="text-right valign-mid">992</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          5229
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=DeGods';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          3
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={deGod}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=DeGods"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              DeGods
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          324.75
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          311
                        </td>
                        <td className="text-right valign-mid">362</td>
                        <td className="text-right valign-mid">1036</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          5028
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Okay Bears';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          4
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={okayBears}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Okay Bears"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Okay Bears
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          69.75
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          63.44
                        </td>
                        <td className="text-right valign-mid">311</td>
                        <td className="text-right valign-mid">482</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          4738
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Vandal City';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          5
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={vandalCity}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Vandal City"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Vandal City
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          7.5
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          6.3
                        </td>
                        <td className="text-right valign-mid">208</td>
                        <td className="text-right valign-mid">528</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          4392
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Degen Fat Cats';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          6
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={degenFatCat}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Degen Fat Cats"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Degen Fat Cats
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          12.2
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          11.65
                        </td>
                        <td className="text-right valign-mid">289</td>
                        <td className="text-right valign-mid">355</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          4103
                        </td>
                        <td className="text-right valign-mid">20K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=AI Angels';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          7
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={angel}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Aiangels"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              AI Angels
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.4
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2.95
                        </td>
                        <td className="text-right valign-mid">62</td>
                        <td className="text-right valign-mid">122</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3947
                        </td>
                        <td className="text-right valign-mid">888</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Founders Coins';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          8
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={founderscoin}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Founders coins"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Founders Coins
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          4.4
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.77
                        </td>
                        <td className="text-right valign-mid">92</td>
                        <td className="text-right valign-mid">101</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3602
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Mischievous Maxis';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          9
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={maxis}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Mischievous Maxis"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Mischievous Maxis
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          10.97
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          9.45
                        </td>
                        <td className="text-right valign-mid">410</td>
                        <td className="text-right valign-mid">196</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3492
                        </td>
                        <td className="text-right valign-mid">2.2K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=SoDead';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          10
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={sodead}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=So Dead"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              SoDead
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1.42
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          0.99
                        </td>
                        <td className="text-right valign-mid">102</td>
                        <td className="text-right valign-mid">391</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3103
                        </td>
                        <td className="text-right valign-mid">4.2K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Primates';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          11
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={primate}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Primates"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Primates
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          9.35
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          7.12
                        </td>
                        <td className="text-right valign-mid">349</td>
                        <td className="text-right valign-mid">237</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2947
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Shadow Super Coder';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          12
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={supercoder}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Shadow Super Coder"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Shadow Super Coder
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          68
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          60.06
                        </td>
                        <td className="text-right valign-mid">122</td>
                        <td className="text-right valign-mid">222</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2628
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Geno Pets';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          13
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={genPet}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Geno Pets"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Geno Pets
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          47
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          41
                        </td>
                        <td className="text-right valign-mid">103</td>
                        <td className="text-right valign-mid">203</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2493
                        </td>
                        <td className="text-right valign-mid">4.7K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Cets On Creck';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          14
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={cetsonCreck}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Cets on Creck"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Cets On Creck
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          36
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          27.55
                        </td>
                        <td className="text-right valign-mid">261</td>
                        <td className="text-right valign-mid">173</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2103
                        </td>
                        <td className="text-right valign-mid">7K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Froots';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          15
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={froots}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Froots"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Froots
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.65
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2.81
                        </td>
                        <td className="text-right valign-mid">301</td>
                        <td className="text-right valign-mid">621</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1986
                        </td>
                        <td className="text-right valign-mid">7.8K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Eclestia';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          16
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={eclesia}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Eclestia"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Eclestia
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          0.7
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          0.54
                        </td>
                        <td className="text-right valign-mid">473</td>
                        <td className="text-right valign-mid">218</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1783
                        </td>
                        <td className="text-right valign-mid">5.6K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Just Ape';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          17
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={justap}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Just Ape"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Just Ape
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          5.45
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          5.21
                        </td>
                        <td className="text-right valign-mid">82</td>
                        <td className="text-right valign-mid">308</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1603
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Dust Crash Coin Flip';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          18
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={dust}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Dust Crash Coin Flip"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Dust Crash Coin Flip
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          24.4
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          23
                        </td>
                        <td className="text-right valign-mid">102</td>
                        <td className="text-right valign-mid">218</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1482
                        </td>
                        <td className="text-right valign-mid">999</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Minoans of Moobaa';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          19
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={mino}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Minoans of Moobaa"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Minoans of Moobaa
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1.75
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1.33
                        </td>
                        <td className="text-right valign-mid">51</td>
                        <td className="text-right valign-mid">103</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1310
                        </td>
                        <td className="text-right valign-mid">1.1K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Alien Trippin High';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          20
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={alien}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Alien Trippin High"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Alien Trippin High
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1.69
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1.64
                        </td>
                        <td className="text-right valign-mid">310</td>
                        <td className="text-right valign-mid">348</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1183
                        </td>
                        <td className="text-right valign-mid">5.9K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Jelly Rascals';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          21
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={jelly}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Jelly Rascals"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Jelly Rascals
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          21.75
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          19.89
                        </td>
                        <td className="text-right valign-mid">149</td>
                        <td className="text-right valign-mid">319</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          980
                        </td>
                        <td className="text-right valign-mid">6.7K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Blocksmith Labs';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          22
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={blockSmith}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Blocksmith Labs"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Blocksmith Labs
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          58
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          49.23
                        </td>
                        <td className="text-right valign-mid">150</td>
                        <td className="text-right valign-mid">610</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          960
                        </td>
                        <td className="text-right valign-mid">4.4K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Degenerate Ape Academy';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          23
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={degenape}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Degenerate Ape Academy"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Degenerate Ape Academy
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          50
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          46.89
                        </td>
                        <td className="text-right valign-mid">23</td>
                        <td className="text-right valign-mid">421</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          936
                        </td>
                        <td className="text-right valign-mid">10K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Jikan Studios';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          24
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={jikan}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Jikan Studios"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Jikan Studios
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.65
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2.95
                        </td>
                        <td className="text-right valign-mid">152</td>
                        <td className="text-right valign-mid">823</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          910
                        </td>
                        <td className="text-right valign-mid">8.9K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Sengoku Degens';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          25
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={sengoku}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Sengoku Degens"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Sengoku Degens
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          1.1
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          0.87
                        </td>
                        <td className="text-right valign-mid">19</td>
                        <td className="text-right valign-mid">618</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          843
                        </td>
                        <td className="text-right valign-mid">4.4K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Infected Mob';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          26
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={infectedmob}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Infected Mob"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Infected Mob
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.1
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2.34
                        </td>
                        <td className="text-right valign-mid">144</td>
                        <td className="text-right valign-mid">193</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          801
                        </td>
                        <td className="text-right valign-mid">7.8K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Eternal Dragons Genesis';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          27
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={dragon}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Eternal Dragons Genesis"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Eternal Dragons Genesis
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.3
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2.87
                        </td>
                        <td className="text-right valign-mid">294</td>
                        <td className="text-right valign-mid">321</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          728
                        </td>
                        <td className="text-right valign-mid">4K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Weeping Angels';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          28
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={weepangel}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=weeping Angels"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Weeping Angels
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          3.2
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          2.3
                        </td>
                        <td className="text-right valign-mid">28</td>
                        <td className="text-right valign-mid">51</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          721
                        </td>
                        <td className="text-right valign-mid">500</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=AI Degens';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          29
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={aidegen}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=Aidegens"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              AI Degens
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          10.9
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          8.12
                        </td>
                        <td className="text-right valign-mid">99</td>
                        <td className="text-right valign-mid">723</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          629
                        </td>
                        <td className="text-right valign-mid">3.3K</td>
                      </tr>
                      <tr
                        className="goto-collection"
                        //onClick="window.location='./project.php?proj=Famous Fox';"
                      >
                        <td
                          width="50px"
                          className="number-list valign-mid text-center"
                        >
                          30
                        </td>
                        <td className="valign-mid" width="70px">
                          <a href="#" className="project-link">
                            <img
                              src={famousfox}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="valign-mid">
                          <span className="project-title-0">
                            <Link
                              to={"/project?nft=famousfox"}
                              className=" no-underline text-[#42e1e6] hover:text-[#42e1e6] "
                            >
                              Famous Fox
                            </Link>
                          </span>
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          25.5
                        </td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          18.11
                        </td>
                        <td className="text-right valign-mid">34</td>
                        <td className="text-right valign-mid">318</td>
                        <td className="text-right valign-mid">
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            id="sol-icon"
                            className="sol-icon"
                          />{" "}
                          598
                        </td>
                        <td className="text-right valign-mid">7.7K</td>
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
                      <a
                        href="https://instagram.com/InkworkLabs"
                        target="_blank"
                      >
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
          style={{ display: "block" }}
        >
          <i className="fas fa-arrow-up"></i>
        </a>
        {/* <!-- JS --> */}
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          // crossOrigin="anonymous"
        ></script>
        <script src="./assets/js/bootstrap.bundle.min.js"></script>
        <script src="./assets/js/aos.js"></script>
        <script src="./assets/js/offcanvas.js"></script>
        <script src="./assets/js/main.js"></script>
        <script>AOS.init();</script>
      </div>
    </div>
  );
};

export default Collection;
