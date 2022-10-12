import React from "react";

const FooterBacktoTop = () => {
  return (
    <div>
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
    </div>
  );
};

export default FooterBacktoTop;
