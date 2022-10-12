import { React, useState, useEffect } from "react";
import FooterBacktoTop from "../components/FooterBacktoTop";
import Loader from "../components/Loader";
import solicon from "../assets/images/sol-icon.png";
import Nav from "../components/Nav";

const Project = () => {
  // const url = window.location.href;
  const [nftname, setNftname] = useState("");
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  // console.log( url, params.get('nft') );
  // console.log(params);
  useEffect(() => {
    setNftname(params.get("nft"));
  }, [nftname]);
  return (
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
        <div className="row proj-section pt-5 aos-init">
          <div className="col-sm-12 col-md-1 col-lg-1"></div>
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="row">
              <div className="col-4 col-xs-4 col-sm-4 col-md-2 col-lg-2 text-center mb-4">
                <img
                  src={`${nftname
                    .toLowerCase()
                    .split("")
                    .filter((e) => e.trim().length)
                    .join("")}.png`}
                  className="project-img img-fluid mx-2"
                />
              </div>
              <div className="col-8 col-xs-8 col-sm-8 col-md-10">
                {/* <!--<table width="100%" className="table-responsive-stack" id="tableOne"> --> */}
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="mx-2">{nftname}</h2>
                        <span className="socmed-links">
                          <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa-brands fa-discord"></i>
                          </a>{" "}
                          <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-left mx-2 proj-det-mob">
                  {/* <?php 
						if( $_GET["proj"] == "Inkwork Labs") {
							echo "With a population of Inkers and fairly innovative solutions such as the Ceiling price (CP) and multiple limit orders. Inkwork Labs commits to providing a wide range of tools and tactics for introducing high-value assets to our community and increasing the adoption of WEB3 solutions.";
						} else {
							echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
						 } ?> */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4 col-xs-4 col-sm-4 col-md-2 col-lg-2 text-center mb-4"></div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-10">
                <div className="row">
                  {/* <?php $randomnum = rand(100,2000); ?> */}
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Floor
                      <br />
                      <img
                        src={solicon}
                        style={{ display: "inline-block" }}
                        className="sol-icon"
                      />{" "}
                      <span className="text-white">
                        {/* <?php echo number_format((float)$randomnum-50, 2, '.', ''); ?> */}
                        {Math.floor(Math.random() * 4520)}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Ceiling Price
                      <br />
                      <img
                        src={solicon}
                        style={{ display: "inline-block" }}
                        className="sol-icon"
                      />{" "}
                      <span className="text-white">
                        {/* <?php echo number_format((float)$randomnum+200, 2, '.', ''); ?> */}
                        {Math.floor(Math.random() * 688)}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Avg. Ceiling Price
                      <br />
                      <img
                        src={solicon}
                        style={{ display: "inline-block" }}
                        className="sol-icon"
                      />{" "}
                      <span className="text-white">
                        {/* <?php echo number_format((float)$randomnum, 2, '.', ''); ?> */}
                        {Math.floor(Math.random() * 1500)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <?php $randomnum1 = rand(2000,4000); ?> */}
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Volume (24h)
                      <br />
                      <img
                        src={solicon}
                        style={{ display: "inline-block" }}
                        className="sol-icon"
                      />{" "}
                      <span className="text-white">
                        {/* <?php echo number_format((float)$randomnum1-50, 2, '.', ''); ?> */}
                        {Math.floor(Math.random() * 900)}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Volume (24h)
                      <br />
                      <img
                        src={solicon}
                        style={{ display: "inline-block" }}
                        className="sol-icon"
                      />{" "}
                      <span className="text-white">
                        {/* <?php echo number_format((float)$randomnum1+200, 2, '.', ''); ?> */}
                        {Math.floor(Math.random() * 1450)}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Holders
                      <br />
                      <img
                        src={solicon}
                        style={{ display: "inline-block" }}
                        className="sol-icon"
                      />{" "}
                      <span className="text-white">
                        {/* <?php echo number_format((float)$randomnum1-500, 2, '.', ''); ?> */}
                        {Math.floor(Math.random() * 4020)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  {/* <?php $randomnum2 = rand(500,10000); ?> */}
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Active Trades
                      <br />
                      <span className="text-white">
                        {/* <?php echo $randomnum2-200; ?> */}
                        {Math.floor(Math.random() * 7100)}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Total Trades
                      <br />
                      <span className="text-white">
                        {/* <?php echo $randomnum2+200; ?> */}
                        {Math.floor(Math.random() * 8290)}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 item-proj-stats-before">
                    <div className="item-proj-stats mb-3">
                      Supply
                      <br />
                      <span className="text-white">
                        {/* <?php echo $randomnum2-500; ?> */}
                        {Math.floor(Math.random() * 9100)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-1 col-lg-1"></div>
        </div>
        <div className="project-buttons text-center pt-4 aos-init mb-40 flex gap-3 md:gap-0 ">
          <a
            href="./create-order-step1.php"
            className="d-block d-md-inline d-lg-inline"
          >
            Create a New Order
          </a>
          {/* <a href="./activity.php" className="d-block d-md-inline d-lg-inline">Recent Activity</a> */}
          {/* <a href="./market.php" className="d-block d-md-inline d-lg-inline">Market</a> --> */}

          <a href="./create-order-step1.php">Create a New Order</a>
          {/* <a href="./activity.php">Recent Activity</a> */}
          <a href="./market.php">Market</a>
        </div>
        {/* <!-- Collections --> */}
        {/* <div className="row collections row-cols-1 mt-5 mb-4 aos-init gx-0 pb-4" >
            <div className="px-2 py-4 row row-cols-1">
                <div className="col-xs-12 col-sm-12 col-md-7">
                    <h3 className="mx-2">Analytics</h3>
                </div>
            </div>
            <div className="row row-cols-1 px-1">
                <div className="col col-xs-1">
					<div id="chartcontrols" style={{paddingLeft:"15px"}}></div>
					<div id="chartdiv">
                        
                    </div>
                </div>
            </div>
        </div> */}
      </main>
      {/* <!-- Footer --> */}
      <FooterBacktoTop />
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
      <script src="./assets/chart/index.js"></script>
      <script src="./assets/chart/xy.js"></script>
      <script src="./assets/chart/stock.js"></script>
      <script src="./assets/chart/theme/Dark.js"></script>
      <script src="./assets/chart/data/SOL_day.js"></script>
      <script src="./assets/chart/data/BTC_day.js"></script>
      <script src="./assets/chart/index-chart.js"></script>
    </div>
  );
};

export default Project;
