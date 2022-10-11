import React from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import solicon from "../assets/images/sol-icon.png";



const Orderthree = () => {
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
     <Loader/>
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Main Navigation --> */}
        <Nav/>
      </header>
      {/* <!-- Main --> */}
      <main className="container mt-5">
        <div
          className="mt-5 mb-4 aos-init gx-0 pb-4"
        >
          <div className="row row-cols-1 px-1 pt-4">
            <div className="col-sm-1 col-md-2"></div>
            <div className="collections col-sm-10 col-md-8 col-xs-1" id="content">
              <h3 className="mt-5 page-title text-center">Create New Order</h3>
              <form id="createForm" action="./order-success.php">
                {/* <!-- start step indicators --> */}
                <div className="form-header d-flex mb-4">
                  <span className="stepIndicator finish">
                    <span className="title-form">Select Collection</span>
                  </span>
                  <span className="stepIndicator finish">
                    Select Price & Rarity
                  </span>
                  <span className="stepIndicator active">Confirm Order</span>
                </div>
                {/* <!-- end step indicators --> */}

                {/* <!-- step three --> */}
                <div className="step">
                  <div className="row mb-4">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2">
                      <h3 className="text-center white-text summary-title">
                        Summary
                      </h3>
                      <button
                        type="button"
                        id="prevBtn"
                        // onClick="history.back()"
                        className="absolute"
                      >
                        <i className="fa-solid fa-angle-left"></i>
                      </button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-10 mt-2">
                      <div id="getProjectLast" className="float-right"></div>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="row mb-4">
                      {/* <?php $array = explode(",", $_GET["collections"]);
									$i = 0;
									$totalperitemTotal = 0;
									$totalperitem = 0;
									$arraycount = count($array)-1;
									foreach ($array as $item) {
										if($arraycount > $i) {
										$fee = ($_GET["amountPrice".$i]) / 100;
										$totalperitem = $_GET["amountPrice".$i] + $fee;
								?> */}

                      <table width="100%">
                        <tbody>
                        <tr>
                          <td className="p-1"></td>
                          <td className="p-1 text-right">
                            <img
                              src="./assets/images/projects/<?php echo str_replace(' ', '', strtolower($item));?>.png"
                              className="mx-2 searchimg inline-block "
                              
                            />
                            Item
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <label className="summary">Max Price</label>
                          </td>
                          <td className="p-1 text-right">
                            <img
                              src={solicon}
                              style={{display: "inline-block"}}
                              className="sol-icon mx-1"
                            />{" "}
                            <span id="show_price" className="summary-item">
                              Item amount
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <label className="summary">Min Rarity</label>
                          </td>
                          <td className="p-1 text-right">
                            <span id="show_rarity" className="summary-item">
                              {/* <?php 
											$rarityval = $_GET["rarityinput".$i];
											if ($rarityval == "") {
												echo "Any"; 
											} else {
												echo $_GET["rarityinput".$i];
											}
											?> */}
                              Rarity value
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <label className="summary">Order Value</label>
                          </td>
                          <td className="p-1 text-right">
                            <img
                              src={solicon}
                              style={{display: "inline-block"}}
                              className="sol-icon mx-1"
                            />{" "}
                            <span id="show_ordervalue" className="summary-item">
                              Amount
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <label className="summary">Fees</label>
                          </td>
                          <td className="p-1 text-right">
                            <img
                              src={solicon}
                              style={{display: "inline-block"}}
                              className="sol-icon mx-1"
                            />{" "}
                            <span id="show_fees" className="summary-item">
                              fee
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-1">
                            <label className="summary">SOL to deposit</label>
                          </td>
                          <td className="p-1 text-right">
                            <img
                              src={solicon}
                              style={{display: "inline-block"}}
                              className="sol-icon mx-1"
                            />{" "}
                            <span id="totalSOL" className="summary-item">
                              Total
                            </span>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <hr className="hr-steps" />
                      {/* <?php 
									$totalperitemTotal = $totalperitemTotal + $totalperitem;
									} $i++;  }
									 
									?> */}
                      <table width="100%">
                        <tbody>
                        <tr className="totals">
                          <td className="p-1">
                            <label className="text-yellow">
                              Total SOL to deposit
                            </label>
                          </td>
                          <td className="p-1 text-right">
                            <img
                              src={solicon}
                              style={{display: "inline-block"}}
                              className="sol-icon mx-1"
                            />{" "}
                            <span id="totalSOL" className="summary-item">
                              Total per item
                            </span>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <!-- start previous / next buttons --> */}
                  <div className="form-footer d-flex">
                    <button
                      type="submit"
                      id="nextBtn"
                      className="btn btn-dark btn-md rounded-3 shadow-none inlineblock mt-3"
                    >
                      Approve Transaction
                    </button>
                  </div>
                  {/* <!-- end previous / next buttons --> */}
                </div>
              </form>
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
      <script src="./assets/tags/bootstrap-tagsinput.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default Orderthree;
