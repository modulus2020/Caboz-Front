import React from "react";
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
import Nav from "../components/Nav";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <>
        
        {/* Styles  */}
        {/* <!-- Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Favicon and Touch Icons --> */}
        <link rel="shortcut icon" href="assets/images/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/favicon.png"
        />

        <div className="App">
          {/* <!-- Loading --> */}
          <Loader />
          {/* <!-- Header --> */}
          <header>
            {/* <!-- Main Navigation --> */}
            <Nav />
          </header>
          {/* <!-- Main --> */}
          <main className="container">
            {/* <!-- Intoduction --> */}
            <div className="caboz text-center">
              <motion.h3 className="display-3 fw-bold inlineblock aos-init"
              animate={{ y: 0 }} 
              initial={{y: 100}} 
              >
                Place multiple limit orders
                <br />
                powered by buyer's market and CP
              </motion.h3>
              <br />
              <a
                href="./market.php"
                className="btn-index btn btn-dark btn-lg rounded-3 aos-init shadow-none mb-4 mx-3 inlineblock"
                type="button"
              >
                Market&nbsp;&nbsp;<i className="fa-solid fa-table-list"></i>
              </a>
              <a
                href="./create-order.php"
                className="btn-index btn btn-dark btn-lg rounded-3 aos-init shadow-none mb-4 mx-3 inlineblock"
                type="button"
              >
                Create Order&nbsp;&nbsp;<i className="fa-solid fa-plus"></i>
              </a>
            </div>
            {/* <!-- Featured Project --> */}
            <div className="project-feature aos-init mb-4">
              <div className="project-feature-inner">
                <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 gx-0">
                  <div className="col col-xs-1 col-md-7 col-lg-7 px-4 py-4">
                    <table className="table table-borderless white-text my-0">
                      <tbody>
                        <tr>
                          <td width="40%">
                            <a href="./project.php?proj=Inkwork Labs">
                              <img
                                src={user}
                                alt="user icon"
                                width="150"
                                className="img-fluid rounded-circle shadow-sm mx-auto d-block"
                              />
                            </a>
                          </td>
                          <td>
                            <a
                              href="./project.php?proj=Inkwork Labs"
                              className="project-title-link"
                            >
                              <h4>Inkwork Labs</h4>
                            </a>
                            <p>
                              Buy a Inkwork Labs NFT to get discount on trading
                              fees and enjoy more privileges!
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col col-xs-1 col-md-5 col-lg-5 left-details px-4 py-4">
                    <table className="table table-borderless white-text">
                      <tbody>
                        <tr>
                          <td>
                            <h4>Buy On</h4>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <a
                              className="btn btn-dark btn-md rounded-3 shadow-none mx-2 mt-3"
                              type="button"
                            >
                              Magic Eden{" "}
                              <img
                                src={magicEden}
                                alt="magic Eden"
                                style={{ height: "15px" }}
                                className="mx-2"
                              />
                            </a>
                            <a
                              className="btn btn-dark btn-md rounded-3 shadow-none mx-2 mt-3"
                              type="button"
                            >
                              OpenSea{" "}
                              <img
                                src={OpenSea}
                                alt="Open Sea"
                                style={{ height: "17px" }}
                                className="mx-2"
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Stats --> */}
            <div className="row row-cols-xs-2 row-cols-sm-2 row-cols-md-5 row-cols-lg-5 row-colsxxl-5 mt-4 aos-init">
              <div className="col mb-4">
                <div className="stats px-1 py-1">
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa-solid fa-arrow-trend-down text-red"></i>
                        </td>
                        <td className="text-right">
                          EST. MCAP
                          <br />
                          <span className="num">805.6M</span>
                          <br />
                          <small className="text-red">-1.67%</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col mb-4">
                <div className="stats px-1 py-1">
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa-solid fa-arrow-trend-up text-green"></i>
                        </td>
                        <td className="text-right">
                          SOL Price
                          <br />
                          <span className="num">$40.51</span>
                          <br />
                          <small className="text-green">+1.67%</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col mb-4">
                <div className="stats px-1 py-1">
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </td>
                        <td className="text-right">
                          TPS
                          <br />
                          <span className="num">2,472</span>
                          <br />
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col mb-4">
                <div className="stats px-1 py-1">
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa-solid fa-arrow-trend-down text-red"></i>
                        </td>
                        <td className="text-right">
                          24H Volume
                          <br />
                          <span className="num">2.123M</span>
                          <br />
                          <small className="text-red">-3.32%</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col mb-4">
                <div className="stats px-1 py-1">
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td>
                          <i className="fa-solid fa-arrow-trend-up text-green"></i>
                        </td>
                        <td className="text-right">
                          7D Volume
                          <br />
                          <span className="num">16.52M</span>
                          <br />
                          <small className="text-green">+4.67%</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- Top Projects --> */}
            <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-colsxxl-3 aos-init">
              {/* <!-- Popular Collections --> */}
              <div className="col col-xs-1">
                <div className="top-projects px-1 py-1 mb-4">
                  <div className="table-head px-1 py-1">
                    Popular Collections (24H)
                    <a className="more float-right">
                      <small>
                        More <i className="fa-solid fa-play"></i>
                      </small>
                    </a>
                  </div>
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td width="20px" className="number-list">
                          1
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=DeGods"
                            className="project-link"
                          >
                            <img
                              src={deGod}
                              alt="deGods"
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=DeGods"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  DeGods
                                </span>
                                <br />
                                Floor{" "}
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                324.75
                              </div>
                              <div className="col-5 text-right text-small">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                2264.52
                                <br />
                                <span className="text-green">+1373%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="20px" className="number-list">
                          2
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Inkwork Labs"
                            className="project-link"
                          >
                            <img
                              src={deMan}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Inkwork Labs"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Inkwork Labs
                                </span>
                                <br />
                                Floor{" "}
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                16.25
                              </div>
                              <div className="col-5 text-right text-small">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                1173.00
                                <br />
                                <span className="text-green">+163%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="20px" className="number-list">
                          3
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Blocksmith Labs"
                            className="project-link"
                          >
                            <img
                              src={blockSmith}
                              alt="block smith"
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Blocksmith Labs"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Blocksmith Labs
                                </span>
                                <br />
                                Floor{" "}
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                75
                              </div>
                              <div className="col-5 text-right text-small">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                913.00
                                <br />
                                <span className="text-red">-23.45%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Ceiling Price Moverss --> */}
              <div className="col col-xs-1">
                <div className="top-projects px-1 py-1 mb-4">
                  <div className="table-head px-1 py-1">
                    Ceiling Price Movers (24H)
                    <a className="more float-right">
                      <small>
                        More <i className="fa-solid fa-play"></i>
                      </small>
                    </a>
                  </div>
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td width="20px" className="number-list">
                          1
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Cets On Creck"
                            className="project-link"
                          >
                            <img
                              src={cetsonCreck}
                              alt="cetsonCreck"
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Cets On Creck"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Cets On Creck
                                </span>
                                <br />
                                Floor{" "}
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                36
                              </div>
                              <div className="col-5 text-right text-small">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                34.5
                                <br />
                                <span className="text-green">+88.91%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="20px" className="number-list">
                          2
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Okay Bears"
                            className="project-link"
                          >
                            <img
                              src={okayBears}
                              alt="okayBears"
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Okay Bears"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Okay Bears
                                </span>
                                <br />
                                Floor{" "}
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                69.75
                              </div>
                              <div className="col-5 text-right text-small">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                64.5
                                <br />
                                <span className="text-green">+69.23%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="20px" className="number-list">
                          3
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Trippin Ape Tribe"
                            className="project-link"
                          >
                            <img
                              src={trippinApe}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Trippin Ape Tribe"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Trippin Ape Tribe
                                </span>
                                <br />
                                Floor{" "}
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                11.45
                              </div>
                              <div className="col-5 text-right text-small">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol icon"
                                />{" "}
                                9.1
                                <br />
                                <span className="text-green">+34.53%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- Floor Price Moverss --> */}
              <div className="col col-xs-1">
                <div className="top-projects px-1 py-1 mb-4">
                  <div className="table-head px-1 py-1">
                    Floor Price Movers (24H)
                    <a className="more float-right">
                      <small>
                        More <i className="fa-solid fa-play"></i>
                      </small>
                    </a>
                  </div>
                  <table className="table table-borderless white-text my-0">
                    <tbody>
                      <tr>
                        <td width="20px" className="number-list">
                          1
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Froots"
                            className="project-link"
                          >
                            <img
                              src={froots}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Froots"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Froots
                                </span>
                                <br />
                                Floor <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                />{" "}
                                3.65
                              </div>
                              <div className="col-5 text-right text-small">
                                <span className="text-green">+44%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="20px" className="number-list">
                          2
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Aurory"
                            className="project-link"
                          >
                            <img
                              src={aurory}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Aurory"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Aurory
                                </span>
                                <br />
                                Floor <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                />{" "}
                                16.25
                              </div>
                              <div className="col-5 text-right text-small">
                                <span className="text-green">+38%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="20px" className="number-list">
                          3
                        </td>
                        <td width="70px">
                          <a
                            href="./project.php?proj=Vandal City"
                            className="project-link"
                          >
                            <img
                              src={vandalCity}
                              alt=""
                              className="img-fluid mx-auto d-block proj-img"
                            />
                          </a>
                        </td>
                        <td className="proj-stats">
                          <a
                            href="./project.php?proj=Vandal City"
                            className="project-link"
                          >
                            <div className="row row-cols-2 text-gray">
                              <div className="col-7 text-small">
                                <span className="white-text project-title">
                                  Vandal City
                                </span>
                                <br />
                                Floor <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                />{" "}
                                7.5
                              </div>
                              <div className="col-5 text-right text-small">
                                <span className="text-green">+21%</span>
                              </div>
                            </div>
                            <div className="row row-cols-1">
                              <div className="col-12 ">
                                <hr />
                              </div>
                            </div>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- Collections -->/ */}
            <div className="row collections row-cols-1 mb-4 aos-init gx-0 pb-4">
              {/* <!-- Active Collections --> */}
              <div className="px-2 py-4">
                <h3 className="float-left mx-2">Active Collections</h3>
                <a className="btn btn-dark btn-md rounded-3 shadow-none inlineblock view-all float-right">
                  View All <i className="mx-2 fa-solid fa-table-list"></i>
                </a>
              </div>
              <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xxl-2 px-1">
                <div className="col col-xs-1">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-sm table-borderless white-text my-0 text-small table-fixed">
                      <thead>
                        <tr>
                          <th width="25px"></th>
                          <th className="valign-mid" colSpan="2" width="150px">
                            Collection Name
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Floor Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Ceiling Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Active Trades
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="goto-collection"
                          // //onClick="window.location='./project.php?proj=DeGods';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            1
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={deGod}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">DeGods</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 324.75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 311
                          </td>
                          <td className="text-right valign-mid">237</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          // //onClick="window.location='./project.php?proj=Trippin Ape Tribe';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            2
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={trippinApe}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Trippin Ape Tribe
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 11.45
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 9.1
                          </td>
                          <td className="text-right valign-mid">222</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          // //onClick="window.location='./project.php?proj=Inkwork Labs';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            3
                          </td>
                          <td className="valign-mid">
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
                              Inkwork Labs
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 16.25
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 14.5
                          </td>
                          <td className="text-right valign-mid">203</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          // //onClick="window.location='./project.php?proj=Froots';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            4
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={froots}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Froots</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 3.65
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 2.95
                          </td>
                          <td className="text-right valign-mid">199</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          // //onClick="window.location='./project.php?proj=Blocksmith Labs';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            5
                          </td>
                          <td className="valign-mid">
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
                              Blocksmith Labs
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 69
                          </td>
                          <td className="text-right valign-mid">184</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Vandal City';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            6
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={vandalCity}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Vandal City</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 324.75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 311
                          </td>
                          <td className="text-right valign-mid">237</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Okay Bears';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            7
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={okayBears}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Okay Bears</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 11.45
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 9.1
                          </td>
                          <td className="text-right valign-mid">222</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Aurory';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            8
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={aurory}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Aurory</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 16.25
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 14.5
                          </td>
                          <td className="text-right valign-mid">203</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Gothic Degens';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            9
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={gothicdegens}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Gothic Degesn
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 3.65
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 2.95
                          </td>
                          <td className="text-right valign-mid">199</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Cets On Creck';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            10
                          </td>
                          <td className="valign-mid">
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
                              Cets On Creck
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 69
                          </td>
                          <td className="text-right valign-mid">184</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col col-xs-1 mb-2 d-none d-lg-block">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-sm table-borderless white-text my-0 text-small table-fixed">
                      <thead className="thead-tble">
                        <tr className="no-border">
                          <th width="25px"></th>
                          <th className="valign-mid" colSpan="2" width="150px">
                            Collection Name
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Floor Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Ceiling Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Active Trades
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Vandal City';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            6
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={vandalCity}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Vandal City</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 324.75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 311
                          </td>
                          <td className="text-right valign-mid">237</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Okay Bears';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            7
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={okayBears}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Okay Bears</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 11.45
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 9.1
                          </td>
                          <td className="text-right valign-mid">222</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Aurory';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            8
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={aurory}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Aurory</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 16.25
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 14.5
                          </td>
                          <td className="text-right valign-mid">203</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Gothic Degens';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            9
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={gothicdegens}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Gothic Degesn
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 3.65
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 2.95
                          </td>
                          <td className="text-right valign-mid">199</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Cets On Creck';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            10
                          </td>
                          <td className="valign-mid">
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
                              Cets On Creck
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 69
                          </td>
                          <td className="text-right valign-mid">184</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row collections row-cols-1 mb-4 aos-init gx-0 pb-4 mb-5">
              {/* <!-- Active Collections --> */}
              <div className="px-2 py-4">
                <h3 className="float-left mx-2">Trending Collections</h3>
                <a className="btn btn-dark btn-md rounded-3 shadow-none inlineblock view-all float-right">
                  View All <i className="mx-2 fa-solid fa-table-list"></i>
                </a>
              </div>
              <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xxl-2 px-1">
                <div className="col col-xs-1">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-sm table-borderless white-text my-0 text-small table-fixed">
                      <thead>
                        <tr>
                          <th width="25px"></th>
                          <th className="valign-mid" colSpan="2" width="150px">
                            Collection Name
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Floor Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Ceiling Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Trades (24H)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=DeGods';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            1
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={deGod}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">DeGods</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 324.75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 311
                          </td>
                          <td className="text-right valign-mid">237</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Trippin Ape Tribe';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            2
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={trippinApe}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Trippin Ape Tribe
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 11.45
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 9.1
                          </td>
                          <td className="text-right valign-mid">222</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Inkwork Labs';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            3
                          </td>
                          <td className="valign-mid">
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
                              Inkwork Labs
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 16.25
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 14.5
                          </td>
                          <td className="text-right valign-mid">203</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Froots';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            4
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={froots}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Froots</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 3.65
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 2.95
                          </td>
                          <td className="text-right valign-mid">199</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Blocksmith Labs';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            5
                          </td>
                          <td className="valign-mid">
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
                              Blocksmith Labs
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 69
                          </td>
                          <td className="text-right valign-mid">184</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Vandal City';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            6
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={vandalCity}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Vandal City</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 324.75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 311
                          </td>
                          <td className="text-right valign-mid">237</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Okay Bears';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            7
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src="./assets/images/projects/okaybears.png"
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Okay Bears</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 11.45
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 9.1
                          </td>
                          <td className="text-right valign-mid">222</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Aurory';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            8
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={aurory}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Aurory</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 16.25
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 14.5
                          </td>
                          <td className="text-right valign-mid">203</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Gothic Degens';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            9
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={gothicdegens}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Gothic Degesn
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 3.65
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 2.95
                          </td>
                          <td className="text-right valign-mid">199</td>
                        </tr>
                        <tr
                          className="goto-collection d-lg-none"
                          //onClick="window.location='./project.php?proj=Cets On Creck';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            10
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src="./assets/images/projects/cetsoncreck.png"
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Cets On Creck
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 69
                          </td>
                          <td className="text-right valign-mid">184</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col col-xs-1 mb-2 d-none d-lg-block">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-sm table-borderless white-text my-0 text-small table-fixed">
                      <thead className="thead-tble">
                        <tr className="no-border">
                          <th width="25px"></th>
                          <th className="valign-mid" colSpan="2" width="150px">
                            Collection Name
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Floor Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Ceiling Price
                          </th>
                          <th className="valign-mid text-right" width="80px">
                            Trades (24H)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Vandal City';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            6
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={vandalCity}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Vandal City</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 324.75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 311
                          </td>
                          <td className="text-right valign-mid">237</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Okay Bears';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            7
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={okayBears}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Okay Bears</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 11.45
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 9.1
                          </td>
                          <td className="text-right valign-mid">222</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Aurory';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            8
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={aurory}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">Aurory</span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 16.25
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 14.5
                          </td>
                          <td className="text-right valign-mid">203</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Gothic Degens';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            9
                          </td>
                          <td className="valign-mid">
                            <a href="#" className="project-link">
                              <img
                                src={gothicdegens}
                                alt=""
                                className="img-fluid mx-auto d-block proj-img"
                              />
                            </a>
                          </td>
                          <td className="valign-mid">
                            <span className="project-title-0">
                              Gothic Degesn
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 3.65
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 2.95
                          </td>
                          <td className="text-right valign-mid">199</td>
                        </tr>
                        <tr
                          className="goto-collection"
                          //onClick="window.location='./project.php?proj=Cets On Creck';"
                        >
                          <td width="20px" className="number-list valign-mid">
                            10
                          </td>
                          <td className="valign-mid">
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
                              Cets On Creck
                            </span>
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 75
                          </td>
                          <td className="text-right valign-mid">
                            <img src={solicon}
                            style={{display: "inline-block"}} className="sol-icon" /> 69
                          </td>
                          <td className="text-right valign-mid">184</td>
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
                        <a
                          href="https://twitter.com/InkworkLabs"
                          target="_blank"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.gg/InkworkLabs"
                          target="_blank"
                        >
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
                    <small>
                      © 2022 Inkwork Labs, Inc. All Rights Reserved.
                    </small>
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
            crossOrigin="anonymous"
          ></script>
          <script src="./assets/js/bootstrap.bundle.min.js"></script>
          <script src="./assets/js/aos.js"></script>
          <script src="./assets/js/offcanvas.js"></script>
          <script src="./assets/js/main.js"></script>
          <script>AOS.init();</script>
        </div>
      </>
    </div>
  );
};

export default Home;
