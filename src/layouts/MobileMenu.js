import Link from "next/link";
import React, { useState } from "react";
import { About, Blog, Contact, Home, Listing, Pages } from "./Menu";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <header className="header-area header-area-one d-xl-none">
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="top-social">
                <ul className="social-link">
                  <li>
                    <span>Follow us:</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-headphone"></i>
                      <span>: +91 9914826464</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-3">
              <div className="top-right">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navigation sticky breakpoint-on">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/main-logo.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
                  <div
                    className="navbar-close"
                    onClick={() => setToggle(false)}
                  >
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <Home />
                      <About />
                      <li className="menu-item has-children">
                        <a href="#">Our Products</a>
                        <ul className="sub-menu" style={activeLi("Listings")}>
                          <Listing />
                        </ul>
                        <span
                          className="dd-trigger"
                          onClick={() => activeMenuSet("Listings")}
                        >
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>

                      <Blog />
                      <Contact />
                      <li className="nav-btn">
                        <Link href="/add-listing">
                          <a className="main-btn icon-btn">Add Listing</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li className="user-btn">
                      <Link href="https://www.google.com/maps?ll=30.951114,75.890767&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=11317575915408435423">
                        <a className="icon">
                          <i className="flaticon-avatar"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="hero-nav-btn">
                      <Link href="/add-listing">
                        <a className="main-btn icon-btn">Request Product</a>
                      </Link>
                    </li>
                    <li className="nav-toggle-btn">
                      <div
                        className={`navbar-toggler ${toggle ? "active" : ""}`}
                        onClick={() => setToggle(!toggle)}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default MobileMenu;
