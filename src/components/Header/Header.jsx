"use client";

import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardMenu from "./CardMenu";
import LocaleSwitcher from "../common/LocaleSwitcher";
import { usePathname } from "next/navigation";
import Script from "next/script";

import logoWhite from "@/../public/assets/img/logo-white.png";
import logo from "@/../public/assets/img/logo.png";

// import ar from "../../../public/assets/img/demo/ar.svg";
// import en from "../../../public/assets/img/demo/en.svg";
import { useTranslations } from "next-intl";

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

function Header({ lang, HeaderLogo, categories }) {
  const t = useTranslations("default");
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;

  // const locales = [
  //   {
  //     key: "en",
  //     icon: en,
  //   },
  //   {
  //     key: "ar",
  //     icon: ar,
  //   },
  // ];
  const pathName = usePathname();

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    if (segments[3] !== undefined) {
      return "/" + locale;
    }
    return segments.join("/");
  };
  return (
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
            <Link className="navbar-brand " href={`/${lang}/`}>
              <img
                src={logoWhite.src}
                className="logo desktop"
                width={130}
                alt="Logo"
              />
            </Link>
          </div>
          {/* <!-- End Header Navigation --> */}

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="navbar-menu">
            <img src={logo.src} alt="Logo" />
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
              <li className="">
                <Link
                  legacyBehavior
                  className="dropdown-toggle active"
                  href={`/${lang}/`}
                >
                  {t("Header.home")}
                </Link>
              </li>
              <li className="">
                <Link legacyBehavior href={`/${lang}/about-us`}>
                  {t("Header.about")}
                </Link>
              </li>
              <li className="">
                <Link legacyBehavior href={`/${lang}/products`}>
                  {t("Header.products")}
                </Link>
              </li>
              <li className="">
                <Link legacyBehavior href={`/${lang}/news`}>
                  {t("Header.blog")}
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}

          <div className="attr-right">
            {/* <!-- Start Atribute Navigation --> */}
            <div className="attr-nav">
              <ul>
                <li className="">
                  <img src={logo.src} className="logo logo-mobile" alt="Logo" />
                </li>
                <li className="button">
                  <Link legacyBehavior href={`/${lang}/contact`}>
                    {t("Header.contact_us")}
                  </Link>
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
    </header>
  );
}

export default Header;

// <header
//   ref={headerRef}
//   className={
//     state.scrollY > 10
//       ? "header-area style-1 sticky"
//       : "header-area style-1"
//   }
// >
//   <div className="header-logo  d-flex">
//     <Link legacyBehavior href={"/" + lang}>
//       <a>
//         <img
//           width={200}
//           alt="image"
//           className="img-fluid"
//           // TODO : FIX IT TO USE ENV
//           src={HeaderLogo}
//         />
//       </a>
//     </Link>
//   </div>
//   <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
//     <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
//       <div className="mobile-logo-wrap">
//         <Link legacyBehavior href="/">
//           <a>
//             <img
//               width={150}
//               alt="image"
//               // TODO : FIX IT TO USE ENV
//               src={HeaderLogo}
//             />
//           </a>
//         </Link>
//       </div>
//     </div>
//     <ul className="menu-list">
//       <li>
//         <Link href={`/${lang}/`}>{t("Header.home")}</Link>
//       </li>
//       <li>
//         <Link href={`/${lang}/about`}>{t("Header.about")}</Link>
//       </li>
//       <li
//         className={`menu-item-has-children ${
//           currentRoute === "/" ? "active" : ""
//         }`}
//       >
//         <a
//           href={`/${lang}/singleBrand?page=1`}
//           className={`drop-down ${
//             state.activeMenu === "home-one" ? "active" : ""
//           }`}
//         >
//           {t("Header.products")}
//         </a>
//         <i
//           onClick={() => toggleMenu("parts")}
//           className={`bi bi-${
//             state.activeMenu === "parts" ? "dash" : "plus"
//           } dropdown-icon`}
//         />
//         <ul
//           className={`sub-menu  large-menu ${
//             state.activeMenu === "parts" ? "d-block" : ""
//           }`}
//         >
//           {categories &&
//             categories.map((category) => (
//               <li key={category.id}>
//                 <Link
//                   className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
//                   href={`/${lang}/singleBrand?page=1&category=${category.attributes.CategoryTitle}`}
//                 >
//                   {category.attributes.CategoryTitle}
//                 </Link>
//               </li>
//             ))}
//         </ul>
//       </li>
//       <li>
//         <Link href={`/${lang}/news?page=1`}>{t("Header.news")}</Link>
//       </li>
//       <li>
//         <Link className="drop-down" href={`/${lang}/contact`}>
//           {t("Header.contact_us")}
//         </Link>
//       </li>
//       <li
//         className={`menu-item-has-children ${
//           currentRoute === "/" ? "active" : ""
//         }`}
//       >
//         <a
//           href="#"
//           className={`drop-down d-flex align-items-center gap-1  ${
//             state.activeMenu === "home-one" ? "active" : ""
//           }`}
//           style={{ width: "80px" }}
//         >
//           {/* {t("Header.lang")} */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path
//               fill="currentColor"
//               d="M12 21q-1.858 0-3.5-.71t-2.86-1.93q-1.22-1.217-1.93-2.86Q3 13.858 3 12q0-1.863.71-3.503q.711-1.64 1.93-2.858Q6.857 4.421 8.5 3.711Q10.142 3 12 3q1.863 0 3.503.71q1.64.711 2.858 1.93q1.218 1.218 1.928 2.857Q21 10.137 21 12q0 1.858-.71 3.5t-1.93 2.86q-1.218 1.219-2.857 1.93Q13.863 21 12 21m0-.992q.88-1.131 1.452-2.221q.571-1.09.929-2.44H9.619q.396 1.426.948 2.516q.552 1.09 1.433 2.145m-1.273-.15q-.7-.825-1.278-2.04q-.578-1.214-.86-2.472H4.753q.86 1.866 2.437 3.06q1.578 1.194 3.536 1.452m2.546 0q1.958-.258 3.536-1.452t2.437-3.06h-3.834q-.38 1.277-.957 2.492q-.578 1.214-1.182 2.02m-8.927-5.512H8.38q-.114-.615-.16-1.199q-.048-.584-.048-1.147q0-.563.047-1.147q.047-.584.16-1.2H4.347q-.163.52-.255 1.133T4 12q0 .602.091 1.214q.092.613.255 1.132m5.035 0h5.238q.114-.615.16-1.18q.048-.564.048-1.166t-.047-1.166q-.047-.565-.16-1.18H9.38q-.113.615-.16 1.18q-.047.564-.047 1.166t.047 1.166q.047.565.16 1.18m6.24 0h4.034q.163-.52.255-1.132T20 12q0-.602-.091-1.214q-.092-.613-.255-1.132h-4.035q.114.615.16 1.199q.048.584.048 1.147q0 .563-.047 1.147q-.047.584-.16 1.2m-.208-5.693h3.834q-.879-1.904-2.408-3.06q-1.53-1.156-3.565-1.47q.7.92 1.259 2.106q.558 1.185.88 2.424m-5.793 0h4.762q-.396-1.408-.977-2.546q-.58-1.139-1.404-2.116q-.823.977-1.404 2.116q-.58 1.138-.977 2.546m-4.865 0h3.834q.322-1.239.88-2.424q.559-1.186 1.259-2.107q-2.054.315-3.574 1.48q-1.52 1.166-2.4 3.05"
//             />
//           </svg>
//         </a>
//         <i
//           onClick={() => toggleMenu("lang")}
//           className={`bi bi-${
//             state.activeMenu === "lang" ? "dash" : "plus"
//           } dropdown-icon`}
//         />
//         <ul
//           className={`sub-menu ${
//             state.activeMenu === "lang" ? "d-block" : ""
//           }`}
//         >
//           {locales.map((locale, index) => (
//             <li key={index}>
//               <Link
//                 className="d-flex flex-wrap align-items-center justify-content-between fw-bold gap-2 fs-24"
//                 href={redirectedPathName(locale.key)}
//               >
//                 {locale.key}
//                 <Image
//                   // width={25}
//                   src={locale.icon}
//                   alt={`${locale.key} flag`}
//                 />
//               </Link>
//             </li>
//           ))}

//           {/* <li>
//             <Link
//               className="d-flex flex-wrap align-items-center justify-content-between fw-bold fs-24"
//               href={`/${lang}/singleBrand`}
//             >
//               KIA
//               <img src="../assets/img/menu-icon/kia.svg" alt="" />
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="d-flex flex-wrap align-items-center gap-2 justify-content-between fw-bold fs-24"
//               href={`/${lang}/singleBrand`}
//             >
//               Hyundai
//               <img src="../assets/img/menu-icon/hyundai.svg" alt="" />
//             </Link>
//           </li> */}
//         </ul>
//       </li>
//     </ul>
//   </div>
//   <div className="nav-right d-lg-none  d-flex jsutify-content-end align-items-center">
//     {/* Button trigger modal */}

//     <div
//       className={`sidebar-button mobile-menu-btn ${
//         state.isSidebarOpen ? "active" : ""
//       }`}
//       onClick={toggleSidebar}
//     >
//       <span />
//     </div>
//   </div>
// </header>
