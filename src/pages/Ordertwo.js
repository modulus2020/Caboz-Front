import { React, useState } from "react";
import solicon from "../assets/images/sol-icon.png";
import Loader from "../components/Loader";
import Nav from "../components/Nav";

const Ordertwo = () => {
  const historyback = () => {};
  const [traits, setTraits] = useState("Select Traits");
  const [rarity, setRarity] = useState("Select Rarity");
  const [showTrait, setShowTrait] = useState(false);
  const [showRarity, setShowRarity] = useState(false);
  const [rangeSlider, setRangeSlider] = useState(0);
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
        <div className="mt-5 mb-4 aos-init gx-0 pb-4 mb-5">
          <div className="row row-cols-1 px-1 pt-4">
            <div className="col-sm-1 col-md-2"></div>
            <div
              className="collections col-sm-10 col-md-8 col-xs-1"
              id="content"
            >
              <h3 className="mt-5 page-title text-center">Create New Order</h3>
              <form id="createForm" action="">
                {/* <!-- start step indicators --> */}
                <div className="form-header d-flex mb-4">
                  <span className="stepIndicator finish">
                    <span className="title-form">Select Collection</span>
                  </span>
                  <span className="stepIndicator active">
                    Select Price & Rarity
                  </span>
                  <span className="stepIndicator">Confirm Order</span>
                </div>
                {/* <!-- end step indicators --> */}

                {/* <!-- step two --> */}
                <div className="step">
                  {/* <?php $array = explode(",", $_GET["collections"]);
								$i = 0;?> */}
                  <input type="hidden" name="collections" />

                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-12 col-md-2 mt-2">
                      <button
                        type="button"
                        id="prevBtn"
                        onClick={historyback()}
                      >
                        <i className="fa-solid fa-angle-left"></i>
                      </button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-10 mt-2">
                      <div id="getProject" className="float-right">
                        <img
                          src="./assets/images/projects/<?php echo str_replace(' ', '', strtolower($item));?>.png"
                          className="mx-2 searchimg"
                        />
                        Hello
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-2 mt-3"></div>
                    <div className="col-xs-12 col-sm-12 col-md-10 mt-3">
                      <div id="getProject" className="float-right">
                        <img
                          src="./assets/images/projects/<?php echo str_replace(' ', '', strtolower($item));?>.png"
                          className="mx-2 searchimg"
                        />
                        Hello
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 mb-2 mt-2">
                      <label>Price</label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 my-auto text-right">
                      <span className="py-2 white-text">
                        <small>
                          NFT should cost{" "}
                          <img
                            src={solicon}
                            style={{ display: "inline-block" }}
                            className="sol-icon"
                          />
                        </small>
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 mb-2 mt-2">
                      <input
                        type="number"
                        id="priceset"
                        name="amountInputPrice<?php echo $i; ?>"
                        min="0"
                        max="1000"
                        value={rangeSlider}
                        onChange={(e) => setRangeSlider(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 mt-3">
                    <input
                      type="range"
                      className="w100"
                      id="priceRange"
                      name="10"
                      min="0"
                      value={rangeSlider>0? rangeSlider : 0}
                      onChange={(e)=>{setRangeSlider(e.target.value)}}
                      max="1000"
                    />
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 mb-2 mt-2">
                      <label>Rarity</label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 my-auto text-right">
                      <span className="py-2 white-text">
                        <small>NFT should be within top</small>
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 mb-2 mt-2">
                      <div className="btn-group" style={{ width: "100%" }}>
                        <button
                          className="btn btn-drop dropdown-toggle shadow-none"
                          type="button"
                          id="defaultDropdown"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="true"
                          aria-expanded="false"
                          onClick={()=>{setShowRarity(!showRarity)}}
                        >
                          {rarity}
                        </button>
                        {showRarity?(
                        <ul
                          className="dropdown-menu select-traits"
                          style={{ display: "block", marginTop: "40px" }}
                        >
                          <li>
                            <a
                              className="dropdown-item getrarity hover:cursor-pointer "
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setRarity('Common')
                                setShowRarity(false)
                              }}
                            >
                              Common
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item getrarity hover:cursor-pointer "
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setRarity('Rare')
                                setShowRarity(false)
                              }}
                            >
                              Rare
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item getrarity hover:cursor-pointer "
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setRarity('Super Rare')
                                setShowRarity(false)
                              }}
                            >
                              Super Rare
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item getrarity hover:cursor-pointer "
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setRarity('Legendary')
                                setShowRarity(false)
                              }}
                            >
                              Legendary
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item getrarity hover:cursor-pointer "
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setRarity('')
                                setShowRarity(false)
                              }}
                            >
                              Mythic
                            </a>
                          </li>
                        </ul>
                        ):null}
                        <input
                          type="text"
                          name="rarityinput<?php echo $i; ?>"
                          className="rarityinput<?php echo $i; ?> hidden-input shadow-none"
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 my-auto text-right">
                      <span className="py-2 white-text">
                        <small>by rarity</small>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 mb-2 mt-2">
                      <label>Trait Filter</label>
                      <input
                        type="checkbox"
                        id="traitFilter<?php echo $i; ?>"
                        name="traitFilter<?php echo $i; ?>"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 mb-2 mt-2">
                      <div className="btn-group" style={{ width: "100%" }}>
                        <button
                          className="btn btn-drop dropdown-toggle shadow-none"
                          type="button"
                          id="defaultDropdown"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="true"
                          aria-expanded="false"
                          onClick={()=> setShowTrait(!showTrait)}
                        >
                          {traits}
                        </button>
                        <ul
                          className="dropdown-menu select-traits"
                          aria-labelledby="defaultDropdown"
                          style={{display:showTrait?'block':'none', marginTop: "43px"}}
                        >
                          <li>
                            <a
                              className="dropdown-item gettraits"
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setShowTrait(false)
                                setTraits('Trait 1')
                              }}
                            >
                              Trait 1
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item gettraits"
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setShowTrait(false)
                                setTraits('Trait 2')
                              }}
                            >
                              Trait 2
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item gettraits"
                              data-id="<?php echo $i; ?>"
                              onClick={()=>{
                                setShowTrait(false)
                                setTraits('Trait 3')
                              }}
                            >
                              Trait 3
                            </a>
                          </li>
                        </ul>
                        <input
                          type="text"
                          name="traitsinput<?php echo $i; ?>"
                          className="traitsinput<?php echo $i; ?> hidden-input shadow-none"
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="hr-steps" />
                  {/* <?php $i++; } } ?> */}
                  <div className="row">
                    <div className="col-12 my-4">
                      <p>
                        <small>
                          * If someone lists a NFT below your buying price and
                          with your selected rarity and/or traits, your order
                          will be executed and the extra funds you deposited
                          will be credited to your wallet.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!-- start previous / next buttons --> */}
                <div className="form-footer d-flex">
                  <button
                    type="submit"
                    id="nextBtn"
                    className="btn btn-dark btn-md rounded-3 shadow-none inlineblock mt-3"
                  >
                    Next
                  </button>
                </div>
                {/* <!-- end previous / next buttons --> */}
              </form>
            </div>
          </div>
        </div>
      </main>
      // footer
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
      <button
        type="button"
        className="btn btn-info btn-floating btn-md text-white shadow-none"
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
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

export default Ordertwo;
