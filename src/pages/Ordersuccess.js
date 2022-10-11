import React from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Ordersuccess = () => {
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
            <div className="collections col-sm-10 col-md-8 col-xs-1 pb-5 text-center">
              <h3 className="mt-5 page-title text-center">Success!</h3>
              <i className="fa-solid fa-circle-check my-4 success-check"></i>
              <h2>Thank You</h2>
              <p>Your Order has ben created.</p>

              {/* <!-- <a href="./collection.php" className="btn btn-lg btn-dark btn-md rounded-3 shadow-none inlineblock mt-3">Okay</a> --> */}
              <div className="project-buttons text-center pt-5 aos-init">
                <Link to={"/order-step1"}>Create a New Order</Link>
                <Link to={"/my-orders"}>My Orders</Link>
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
        className="btn btn-info btn-floating btn-md text-white shadow-none "
        id="btn-back-to-top"
        style={{ display: "block" }}
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

export default Ordersuccess;
