"use client";

import Link from "next/link";
import SelectComponent from "../../utils/SelectComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

function Header({ lang }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const condition = ["Vheicle Condition", "Used", "Brand New", "Recondition"];
  const brand = ["Toyota", "Audi", "Hyundai", "Nissan", "Jeep"];
  const model = ["Isetta", "Smart Fortwo", "Jaguar XJS", "Spyker C8"];
  const budget = ["10000-15000", "15000-20000", "20000-25000", "25000-300"];

  // return (
  //   <>
  //     <div className="header-and-filter-area ">
  //       <header
  //         ref={headerRef}
  //         className={`${
  //           state.scrollY > 10 ? "sticky" : "fixed"
  //         } header-area style-3 `}
  //       >
  //         {/* filter-area */}
  //         <div className="header-logo">
  //           <Link legacyBehavior href="/">
  //             <a>
  //               <img
  //                 alt="image"
  //                 className="img-fluid"
  //                 src="assets/img/logo-english-white.svg"
  //                 width={250}
  //               />
  //             </a>
  //           </Link>
  //         </div>
  //         <div
  //           className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}
  //         >
  //           <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
  //             <div className="mobile-logo-wrap">
  //               <Link legacyBehavior href="/">
  //                 <a>
  //                   <img
  //                     width={200}
  //                     alt="image"
  //                     src="assets/img/logo-english.svg"
  //                   />
  //                 </a>
  //               </Link>
  //             </div>
  //           </div>
  //           <ul className="menu-list">
  //             <li>
  //               <Link href={`/${lang}/`}>Home</Link>
  //             </li>
  //             <li>
  //               <Link href={`/${lang}/about`}>About Us</Link>
  //             </li>
  //             <li
  //               className={`menu-item-has-children ${
  //                 currentRoute === "/" ? "active" : ""
  //               }`}
  //             >
  //               <a
  //                 href="#"
  //                 className={`drop-down ${
  //                   state.activeMenu === "home-one" ? "active" : ""
  //                 }`}
  //               >
  //                 Products
  //               </a>
  //               <i
  //                 onClick={() => toggleMenu("parts")}
  //                 className={`bi bi-${
  //                   state.activeMenu === "parts" ? "dash" : "plus"
  //                 } dropdown-icon`}
  //               />
  //               <ul
  //                 className={`sub-menu ${
  //                   state.activeMenu === "parts" ? "d-block" : ""
  //                 }`}
  //               >
  //                 <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     Japanese brands
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     Korean brands
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     Chinese brands
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     Taiwanese brands
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     European brands
  //                   </Link>
  //                 </li>
  //                 {/* <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     KIA
  //                     <img src="assets/img/menu-icon/kia.svg" alt="" />
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link
  //                     className="d-flex flex-wrap align-items-center gap-2 justify-content-between fw-bold fs-24"
  //                     href={`/${lang}/singleBrand`}
  //                   >
  //                     Hyundai
  //                     <img src="assets/img/menu-icon/hyundai.svg" alt="" />
  //                   </Link>
  //                 </li> */}
  //               </ul>
  //             </li>
  //             <li>
  //               <Link href={`/${lang}/news`}>News</Link>
  //             </li>
  //             <li>
  //               <Link className="drop-down" href={`/${lang}/contact`}>
  //                 CONTACT US
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="nav-right d-lg-none d-flex jsutify-content-end align-items-center">
  //           {/* Button trigger modal */}

  //           <div
  //             className={`sidebar-button mobile-menu-btn ${
  //               state.isSidebarOpen ? "active" : ""
  //             }`}
  //             onClick={toggleSidebar}
  //           >
  //             <span />
  //           </div>
  //         </div>
  //       </header>
  //     </div>
  //   </>
  // );
  return (
    <>
      {/* <!-- Header 
    ============================================= --> */}
      <header>
        {/* <!-- Start Navigation --> */}
        <nav className="navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs white navbar-fixed no-background">
          <div className="container-full d-flex justify-content-between align-items-center">
            {/* <!-- Start Header Navigation --> */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/img/logo-light.png"
                  className="logo desktop"
                  alt="Logo"
                />
                <img
                  src="assets/img/logo.png"
                  className="logo logo-mobile"
                  alt="Logo"
                />
              </a>
            </div>
            {/* <!-- End Header Navigation --> */}

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <img src="assets/img/logo.png" alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-times"></i>
              </button>

              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index.html">Home Agriculture</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Farming</a>
                    </li>
                    <li>
                      <a href="index-3.html">Agriculture Shop</a>
                    </li>
                    <li>
                      <a href="index-4.html">Dairy Farm</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="farmers.html">Team</a>
                    </li>
                    <li>
                      <a href="farmer-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="404.html">Error Page</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="project.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Projects
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="project.html">Project</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="services.html">Services Version One</a>
                    </li>
                    <li>
                      <a href="services-2.html">Services Version Two</a>
                    </li>
                    <li>
                      <a href="services-details.html">Services Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-standard.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="blog-with-sidebar.html">Blog With Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-2-colum.html">Blog Grid Two Colum</a>
                    </li>
                    <li>
                      <a href="blog-3-colum.html">Blog Grid Three Colum</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                    <li>
                      <a href="blog-single-with-sidebar.html">
                        Blog Single With Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="shop.html">Shop Product</a>
                    </li>
                    <li>
                      <a href="shop-single.html">Shop Single</a>
                    </li>
                    <li>
                      <a href="shop-single-thumb-only.html">
                        Shop Single Version Two
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}

            <div className="attr-right">
              {/* <!-- Start Atribute Navigation --> */}
              <div className="attr-nav">
                <ul>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="far fa-shopping-cart"></i>
                      <span className="badge">3</span>
                    </a>
                    <ul className="dropdown-menu cart-list">
                      <li>
                        <div className="thumb">
                          <a href="#" className="photo">
                            <img src="assets/img/products/1.png" alt="Thumb" />
                          </a>
                          <a href="#" className="remove-product">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                        <div className="info">
                          <h6>
                            <a href="#">Delica omtantur </a>
                          </h6>
                          <p>
                            2x - <span className="price">$99.99</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="thumb">
                          <a href="#" className="photo">
                            <img src="assets/img/products/2.png" alt="Thumb" />
                          </a>
                          <a href="#" className="remove-product">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                        <div className="info">
                          <h6>
                            <a href="#">Omnes ocurreret</a>
                          </h6>
                          <p>
                            1x - <span className="price">$33.33</span>
                          </p>
                        </div>
                      </li>
                      <li className="total">
                        <span className="pull-right">
                          <strong>Total</strong>: $0.00
                        </span>
                        <a href="#" className="btn btn-default btn-cart">
                          Cart
                        </a>
                        <a href="#" className="btn btn-default btn-cart">
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="button">
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Atribute Navigation --> */}
            </div>

            {/* <!-- Main Nav --> */}
          </div>
          {/* <!-- Overlay screen for menu --> */}
          <div className="overlay-screen"></div>
          {/* <!-- End Overlay screen for menu --> */}
        </nav>

        {/* <!-- End Navigation --> */}
        {/*  <!-- End Header --> */}
      </header>
    </>
  );
}

export default Header;
