import { React, useState } from "react";
import solicon from "../assets/images/sol-icon.png";
import "../App.css";
import { useParams, Link } from "react-router-dom";

const Nav = () => {
  const [toggleLargeNav, setToggleLargeNav] = useState(false);
  const [toggleFullscreenNav, setToggleFullscreenNav] = useState(false);
  const [toggleSmallNav, setToggleSmallNav] = useState(false);
  const [collapseNav, setCollapseNav] = useState(false);
  const [fullScreenOrder, setFullScreenOrder] = useState(false);
  const [smallScreenOrder, setSmallScreenOrder] = useState(false);
  const url = window.location.pathname;

  // let {id} = useParams();
  // console.log(useParams());
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container container-relative">
          <a className="navbar-brand" href="./">
            Caboz
          </a>
          <div className="dropdown profile-dp d-block d-lg-none mob-wallet-details">
            <a
              href="#"
              className="text-white dropdown-toggle"
              data-bs-toggle="dropdown"
              onClick={() => {
                setToggleSmallNav(!toggleSmallNav)
                setCollapseNav(false);
              
              }}
            >
              <i className="fa-regular fa-circle-user f-icons profile-icon"></i>
            </a>
            {toggleSmallNav ? (
              <div
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end text-left account-settings-mob mobile-nav-settings"
                id="move-left"
                style={{ display: "block", right: "0" }}
              >
                <table width="100%">
                  <thead>
                    <tr>
                      <td className="text-left">
                        <h6 className="dropdown-header text-white">
                          <b>Wallet</b>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 pb-1">
                        <a className="walletid">Cc13hc....ui971uw</a>
                      </td>
                    </tr>
                    <tr className="li-details">
                      <td className="px-2">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>Available SOL</td>
                              <td className="text-right">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol-icon"
                                />{" "}
                                74.3243
                              </td>
                            </tr>
                            <tr>
                              <td>Locked SOL</td>
                              <td className="text-right">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol-icon"
                                />{" "}
                                46.8918
                              </td>
                            </tr>
                            <tr>
                              <td>Active Trades</td>
                              <td className="text-right">08</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <a href="./profile.php">My Profile</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <a href="./order-history.php">My Order History</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <a href="./settings.php">Settings</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <a href="./">Switch Account</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="hr-div px-2" colSpan="2">
                        <a href="./">Logout</a>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            ) : null}
          </div>

          <button
            className="navbar-toggler second-button shadow-none"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
            onClick={() => {
              setCollapseNav(!collapseNav);
              setToggleSmallNav(false)

            }}
          >
            <div className="animated-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to={"/collection"}
                  className="nav-link px-4  main-links"
                  style={{ color: url === "/collection" ? "#42e1e6" : "#fff" }}
                >
                  Collections
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-4 text-white main-links"
                  onClick={() => setFullScreenOrder(!fullScreenOrder)}
                >
                  Orders
                </a>
                {fullScreenOrder ? (
                  <ul
                    className="dropdown-menu dropdown-menu-dark "
                    style={{ display: "block" }}
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/multistepform"}
                      >
                        Create New Order
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/my-orders"}>
                        My Orders
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li className="nav-item">
                <Link
                  to={"/market"}
                  className="nav-link px-4 text-white main-links"
                >
                  Market
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="./activity"
                  className="nav-link px-4 text-white main-links"
                >
                  Activity
                </a>
              </li>
            </ul>
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto ul-link-center d-none d-lg-block">
              <li className="nav-item dropdown mx-auto">
                <button
                  type="button"
                  className="mx-auto btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle shadow-none"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-display="static"
                  onClick={() => setToggleFullscreenNav(!toggleFullscreenNav)}
                >
                  <i className="fa-regular fa-circle-user f-icons"></i>
                </button>
                {toggleFullscreenNav ? (
                  <ul
                    className="dropdown-menu dropdown-menu-dark dropdown-menu-end account-settings"
                    style={{ display: "block" }}
                    id="move-left"
                    data-bs-popper="static"
                  >
                    <li>
                      <h6 className="dropdown-header text-white">
                        <b>Wallet</b>
                      </h6>
                    </li>
                    <li className="px-3 pb-1">
                      <a className="walletid">Cc13hc....ui971uw</a>
                    </li>
                    <li className="li-details">
                      <a className="dropdown-item menuli">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>Available SOL</td>
                              <td className="text-right">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol-icon"
                                />{" "}
                                74.3243
                              </td>
                            </tr>
                            <tr>
                              <td>Locked SOL</td>
                              <td className="text-right">
                                <img
                                  src={solicon}
                                  style={{display: "inline-block"}}
                                  className="sol-icon"
                                  alt="sol-icon"
                                />{" "}
                                46.8918
                              </td>
                            </tr>
                            <tr>
                              <td>Active Trades</td>
                              <td className="text-right">08</td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </li>
                    <li className="hr-div">
                      <hr />
                    </li>
                    <li>
                      <a
                        className="dropdown-item menuli current"
                        aria-current="true"
                        href="./profile.php"
                      >
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item menuli current"
                        aria-current="true"
                        href="./order-history.php"
                      >
                        My Order History
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item menuli current"
                        aria-current="true"
                        href="./settings.php"
                      >
                        Settings
                      </a>
                    </li>
                    <li className="hr-div">
                      <hr />
                    </li>
                    <li>
                      <a className="dropdown-item menuli" href="./switch.php">
                        Switch Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item menuli" href="./logout.php">
                        Logout
                      </a>
                    </li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
          {collapseNav ? (
            <div
              className="navbar-collapse offcanvas-collapse"
              id="tryFixCollapse"
            >
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link
                    to={"/collection"}
                    className="nav-link px-4 text-white main-links"
                  >
                    Collections
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle px-4 text-white main-links"
                    href="#"
                    onClick={() => setSmallScreenOrder(!smallScreenOrder)}
                  >
                    Orders
                  </a>
                  {smallScreenOrder ? (
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      style={{ display: "block" }}
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to={"./multistepform"}
                        >
                          Create New Order
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/my-orders"}>
                          My Orders
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className="nav-item">
                  <Link
                    to={"/market"}
                    className="nav-link px-4 text-white main-links"
                  >
                    Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/activity"}
                    className="nav-link px-4 text-white main-links"
                  >
                    Activity
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav flex-row flex-wrap ms-md-auto ul-link-center d-none d-lg-block">
                <li className="nav-item dropdown mx-auto">
                  <button
                    type="button"
                    className="mx-auto btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle shadow-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                    onClick={() => setToggleLargeNav(!toggleLargeNav)}
                  >
                    <i className="fa-regular fa-circle-user f-icons"></i>
                  </button>
                  {toggleLargeNav ? (
                    <ul
                      className="dropdown-menu dropdown-menu-dark dropdown-menu-end account-settings"
                      style={{ display: "block" }}
                      id="move-left"
                      data-bs-popper="static"
                    >
                      <li>
                        <h6 className="dropdown-header text-white">
                          <b>Wallet</b>
                        </h6>
                      </li>
                      <li className="px-3 pb-1">
                        <a className="walletid">Cc13hc....ui971uw</a>
                      </li>
                      <li className="li-details">
                        <a className="dropdown-item menuli">
                          <table width="100%">
                            <tbody>
                              <tr>
                                <td>Available SOL</td>
                                <td className="text-right">
                                  <img
                                    src={solicon}
                                    style={{display: "inline-block"}}
                                    className="sol-icon"
                                    alt="sol-icon"
                                  />{" "}
                                  74.3243
                                </td>
                              </tr>
                              <tr>
                                <td>Locked SOL</td>
                                <td className="text-right">
                                  <img
                                    src={solicon}
                                    style={{display: "inline-block"}}
                                    className="sol-icon"
                                    alt="sol-icon"
                                  />{" "}
                                  46.8918
                                </td>
                              </tr>
                              <tr>
                                <td>Active Trades</td>
                                <td className="text-right">08</td>
                              </tr>
                            </tbody>
                          </table>
                        </a>
                      </li>
                      <li className="hr-div">
                        <hr />
                      </li>
                      <li>
                        <a
                          className="dropdown-item menuli current"
                          aria-current="true"
                          href="./profile.php"
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item menuli current"
                          aria-current="true"
                          href="./order-history.php"
                        >
                          My Order History
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item menuli current"
                          aria-current="true"
                          href="./settings.php"
                        >
                          Settings
                        </a>
                      </li>
                      <li className="hr-div">
                        <hr />
                      </li>
                      <li>
                        <a className="dropdown-item menuli" href="./switch.php">
                          Switch Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item menuli" href="./logout.php">
                          Logout
                        </a>
                      </li>
                    </ul>
                  ) : null}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
