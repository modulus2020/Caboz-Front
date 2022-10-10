import React from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
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
import i12 from "../assets/images/nfts/1234.jpg"
import i62 from "../assets/images/nfts/612.png"
import i1211 from "../assets/images/nfts/1211.png"
import i33 from "../assets/images/nfts/333.png"
import i45 from "../assets/images/nfts/4583.png"
import i93 from "../assets/images/nfts/9373.png"
import i56 from "../assets/images/nfts/5611.png"
import i21 from "../assets/images/nfts/2112.png"
import i41 from "../assets/images/nfts/4121.png"
import i219 from "../assets/images/nfts/129.png"
import i791 from "../assets/images/nfts/791.png"
import i610 from "../assets/images/nfts/610.png"
import i9119 from "../assets/images/nfts/9119.png"
import i7102 from "../assets/images/nfts/7102.png"
import i710 from "../assets/images/nfts/710.png"
import i3122 from "../assets/images/nfts/3122.png"
import i5510 from "../assets/images/nfts/5510.png"
import i1092 from "../assets/images/nfts/1092.png"
import i7777 from "../assets/images/nfts/7777.png"
import i9651 from "../assets/images/nfts/9651.png"
import i381 from "../assets/images/nfts/381.png"

const Activity = () => {
  return (
    <div>
      <head>
        <meta charset="utf-8" />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <!-- Favicon and Touch Icons --> */}
        <link rel="shortcut icon" href="assets/images/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/favicon.png"
        />
      </head>

      {/* <!-- Loading --> */}
      <Loader />
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Main Navigation --> */}
        <Nav />
      </header>
      {/* <!-- Main --> */}
      <main class="container mt-5">
        <div class="row collections row-cols-1 mt-5 mb-4 aos-init gx-0 pb-4 ">
          {/* <!-- Collections --> */}
          <div class="px-2 py-4 row row-cols-1">
            <div class="col-xs-12 col-sm-12 col-md-7">
              <h3 class="mx-2">Activity</h3>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-5 form-search mb-2">
              <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
              <input
                type="text"
                class="form-control form-input"
                placeholder="Search for a collection ..."
                id="search-input"
                onkeyup="searchActivity()"
              />
            </div>
          </div>
          <div class="row row-cols-1 px-1">
            <div class="col col-xs-1">
              <div class="table-responsive text-nowrap">
                <table
                  class="table table-sm table-borderless white-text my-0 text-small"
                  id="activity-table"
                >
                  <thead>
                    <tr>
                      <th
                        class="valign-mid text-center text-theader"
                        colspan="2"
                      >
                        Name
                      </th>
                      <th class="valign-mid text-right text-theader">Price</th>
                      <th class="valign-mid text-center text-theader">Buyer</th>
                      <th class="valign-mid text-center text-theader">
                        Transaction ID
                      </th>
                      <th class="valign-mid text-center text-theader">Type</th>
                      <th class="valign-mid text-center text-theader">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i12}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Inkwork Labs #1234</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        17.65
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">17 minutes ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i62}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Cets On Creck #612</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        36.50
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">31 minutes ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i1211}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Communi3 #1211</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        14.33
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">59 minutes ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i33}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Vandals #333</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        7.65
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">1 hour ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i45}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Primates #4583</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        11.90
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">1 hour ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i93}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Primates #9373</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        13
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">1 hour ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i56}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Jikan #5611</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        2.99
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">3 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i21}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Rakkudos #2112</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        4.10
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">3 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i41}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Blacksmith Labs #4121</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        51.50
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">3 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i219}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Rakkudos #129</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        3.95
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">4 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i791}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Communi3 #791</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        11.75
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">4 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i610}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Vandals #610</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        7.50
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">5 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i9119}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>DeGods #9119</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        301
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">5 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i7102}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Okay Bears #7102</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        55
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">5 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i710}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Okay Bears #710</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        59.50
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">6 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i3122}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Blocksmith Labs #3122</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        44.50
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">6 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i5510}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>DeGods #5510</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        290
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">6 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i1092}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>DeGods #1092</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        333.33
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">6 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i7777}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Okay Bears #7777</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        61.50
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">8 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i9651}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>DeGods #9651</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        310
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">8 hours ago</td>
                    </tr>
                    <tr class="goto-collection" onclick="window.location='';">
                      <td class="valign-mid" width="70px">
                        <a href="#" class="project-link">
                          <img
                            src={i381}
                            alt=""
                            class="img-fluid mx-auto d-block proj-img"
                          />
                        </a>
                      </td>
                      <td class="valign-mid">
                        <span>Blocksmith Labs #381</span>
                      </td>
                      <td class="text-right valign-mid">
                        <img
                          src={solicon}
                          style={{display: "inline-block"}}
                          class="sol-icon"
                        />{" "}
                        52.25
                      </td>
                      <td class="text-center valign-mid">someone.sol</td>
                      <td class="text-center valign-mid">2zZ8y3du45d...4ch</td>
                      <td class="text-center valign-mid">
                        <span class="text-green">Buy</span>
                      </td>
                      <td class="text-center valign-mid">8 hours ago</td>
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
        <div class="container">
          <div class="footer gx-0">
            <div class="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-4 row-cols-xxl-4 p-5 pb-0">
              <div class="col col-xs-12 col-sm-12 col-sm-5 col-md-5 col-lg-5 col-xxl-5 mb-4">
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
              <div class="col col-xs-12 col-sm-12 col-md-3 col-md-3 col-lg-3 col-xxl-3 mb-4">
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
              <div class="col col-xs-12 col-sm-12 col-md-2 col-md-2 col-lg-2 col-xxl-2 mb-4">
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
            <div class="row px-5 pt-0 pb-4">
              <div class="col copyright">
                <small>© 2022 Inkwork Labs, Inc. All Rights Reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Back-to-top --> */}
      <button
        type="button"
        class="btn btn-info btn-floating btn-md text-white shadow-none"
        id="btn-back-to-top"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
      {/* <!-- JS --> */}
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"
      ></script>
      <script src="./assets/js/bootstrap.bundle.min.js"></script>
      <script src="./assets/js/aos.js"></script>
      <script src="./assets/js/offcanvas.js"></script>
      <script src="./assets/js/main.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default Activity;
