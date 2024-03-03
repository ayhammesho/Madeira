"use client";

import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardMenu from "./CardMenu";
import LocaleSwitcher from "../common/LocaleSwitcher";
import { usePathname } from "next/navigation";
import Script from "next/script";
import $ from "jquery";

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
  useEffect(() => {
    var validnavs = {
      initialize: function () {
        this.event();
        this.hoverDropdown();
        this.navbarScrollspy();
      },
      event: function () {
        // ------------------------------------------------------------------------------ //
        // Variable
        // ------------------------------------------------------------------------------ //
        var getNav = $("nav.navbar.validnavs");

        // ------------------------------------------------------------------------------ //
        // Navbar Sticky
        // ------------------------------------------------------------------------------ //
        var navSticky = getNav.hasClass("navbar-sticky");

        // ------------------------------------------------------------------------------ //
        // Navbar Center
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("brand-center")) {
          var postsArr = new Array(),
            index = $("nav.brand-center"),
            $postsList = index.find("ul.navbar-nav");

          index.prepend(
            "<span class='storage-name' style='display:none;'></span>"
          );

          //Create array of all posts in lists
          index.find("ul.navbar-nav > li").each(function () {
            if ($(this).hasClass("active")) {
              var getElement = $("a", this).eq(0).text();
              $(".storage-name").html(getElement);
            }
            postsArr.push($(this).html());
          });

          //Split the array at this point. The original array is altered.
          var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
            secondList = postsArr,
            ListHTML = "";

          var createHTML = function (list) {
            ListHTML = "";
            for (var i = 0; i < list.length; i++) {
              ListHTML += "<li>" + list[i] + "</li>";
            }
          };

          //Generate HTML for first list
          createHTML(firstList);
          $postsList.html(ListHTML);
          index.find("ul.nav").first().addClass("navbar-left");

          //Generate HTML for second list
          createHTML(secondList);
          //Create new list after original one
          $postsList
            .after('<ul class="nav navbar-nav"></ul>')
            .next()
            .html(ListHTML);
          index.find("ul.nav").last().addClass("navbar-right");

          //Wrap navigation menu
          index
            .find("ul.nav.navbar-left")
            .wrap("<div class='col-half left'></div>");
          index
            .find("ul.nav.navbar-right")
            .wrap("<div class='col-half right'></div>");

          //Selection Class
          index.find("ul.navbar-nav > li").each(function () {
            var dropDown = $("ul.dropdown-menu", this),
              megaMenu = $("ul.megamenu-content", this);
            dropDown.closest("li").addClass("dropdown");
            megaMenu.closest("li").addClass("megamenu-fw");
          });

          var getName = $(".storage-name").html();
          if (!getName == "") {
            $("ul.navbar-nav > li:contains('" + getName + "')").addClass(
              "active"
            );
          }
        }

        // ------------------------------------------------------------------------------ //
        // Navbar Sidebar
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("navbar-sidebar")) {
          // Add Class to body
          $("body").addClass("wrap-nav-sidebar");
          getNav.wrapInner("<div class='scroller'></div>");
        } else {
          $(".validnavs").addClass("on");
        }

        // ------------------------------------------------------------------------------ //
        // Menu Center
        // ------------------------------------------------------------------------------ //
        if (getNav.find("ul.nav").hasClass("navbar-center")) {
          getNav.addClass("menu-center");
        }

        // ------------------------------------------------------------------------------ //
        // Navbar Full
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("navbar-full")) {
          // Add Class to body
          $("nav.navbar.validnavs")
            .find("ul.nav")
            .wrap("<div class='wrap-full-menu'></div>");
          $(".wrap-full-menu").wrap("<div class='nav-full'></div>");
          $("ul.nav.navbar-nav").prepend(
            "<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>"
          );
        } else if (getNav.hasClass("navbar-mobile")) {
          getNav.removeClass("no-full");
        } else {
          getNav.addClass("no-full");
        }

        // ------------------------------------------------------------------------------ //
        // Navbar Mobile
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("navbar-mobile")) {
          // Add Class to body
          $(".navbar-collapse").on("shown.bs.collapse", function () {
            $("body").addClass("side-right");
          });
          $(".navbar-collapse").on("hide.bs.collapse", function () {
            $("body").removeClass("side-right");
          });

          $(window).on("resize", function () {
            $("body").removeClass("side-right");
          });
        }

        // ------------------------------------------------------------------------------ //
        // Navbar Fixed
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("no-background")) {
          $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 34) {
              $(".navbar-fixed").removeClass("no-background");
            } else {
              $(".navbar-fixed").addClass("no-background");
            }
          });
        }

        // ------------------------------------------------------------------------------ //
        // Navbar Fixed
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("navbar-transparent")) {
          $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 34) {
              $(".navbar-fixed").removeClass("navbar-transparent");
            } else {
              $(".navbar-fixed").addClass("navbar-transparent");
            }
          });
        }

        // ------------------------------------------------------------------------------ //
        // Button Cart
        // ------------------------------------------------------------------------------ //
        $(".btn-cart").on("click", function (e) {
          e.stopPropagation();
        });

        // ------------------------------------------------------------------------------ //
        // Toggle Search
        // ------------------------------------------------------------------------------ //
        $("nav.navbar.validnavs .attr-nav").each(function () {
          $("li.search > a", this).on("click", function (e) {
            e.preventDefault();
            $(".top-search").slideToggle();
            $(".navbar").toggleClass("pause-sticked");
          });
        });
        $(".input-group-addon.close-search").on("click", function () {
          $(".top-search").slideUp();
          $(".navbar").removeClass("pause-sticked");
        });

        // ------------------------------------------------------------------------------ //
        // Toggle Side Menu
        // ------------------------------------------------------------------------------ //
        $("nav.navbar.validnavs .attr-nav").each(function () {
          $(".side-menu > a", this).on("click", function (e) {
            e.preventDefault();
            $("nav.navbar.validnavs .side").toggleClass("on");
            $(".navbar").toggleClass("pause-sticked");
            $("body").toggleClass("on-side");
          });
        });
        $(".side .close-side").on("click", function (e) {
          e.preventDefault();
          $("nav.navbar.validnavs .side").removeClass("on");
          $(".navbar").removeClass("pause-sticked");
          $("body").removeClass("on-side");
        });

        // ------------------------------------------------------------------------------ //
        // Wrapper
        // ------------------------------------------------------------------------------ //
        $("body").wrapInner("<div class='wrapper'></div>");
      },

      // ------------------------------------------------------------------------------ //
      // Change dropdown to hover on dekstop
      // ------------------------------------------------------------------------------ //
      hoverDropdown: function () {
        var getNav = $("nav.navbar.validnavs"),
          getWindow = $(window).width(),
          getHeight = $(window).height(),
          getIn = getNav.find("ul.nav").data("in"),
          getOut = getNav.find("ul.nav").data("out");

        if (getWindow < 1023) {
          // Height of scroll navigation sidebar
          $(".scroller").css("height", "auto");

          // Disable mouseenter event
          $("nav.navbar.validnavs ul.nav")
            .find("li.dropdown")
            .off("mouseenter");
          $("nav.navbar.validnavs ul.nav")
            .find("li.dropdown")
            .off("mouseleave");
          $("nav.navbar.validnavs ul.nav").find(".title").off("mouseenter");
          $("nav.navbar.validnavs ul.nav").off("mouseleave");
          $(".navbar-collapse").removeClass("animated");

          // Enable click event
          $("nav.navbar.validnavs ul.nav").each(function () {
            $(".dropdown-menu", this).addClass("animated");
            $(".dropdown-menu", this).removeClass(getOut);

            // Dropdown Fade Toggle
            $("a.dropdown-toggle", this).off("click");
            $("a.dropdown-toggle", this).on("click", function (e) {
              e.stopPropagation();
              $(this)
                .closest("li.dropdown")
                .find(".dropdown-menu")
                .first()
                .stop()
                .fadeToggle()
                .toggleClass(getIn);
              $(this).closest("li.dropdown").first().toggleClass("on");
              return false;
            });

            // Hidden dropdown action
            $("li.dropdown", this).each(function () {
              $(this).find(".dropdown-menu").stop().fadeOut();
              $(this).on("hidden.bs.dropdown", function () {
                $(this).find(".dropdown-menu").stop().fadeOut();
              });
              return false;
            });

            // Megamenu style
            $(".megamenu-fw", this).each(function () {
              $(".col-menu", this).each(function () {
                $(".content", this).addClass("animated");
                $(".content", this).stop().fadeOut();
                $(".title", this).off("click");
                $(".title", this).on("click", function () {
                  $(this)
                    .closest(".col-menu")
                    .find(".content")
                    .stop()
                    .fadeToggle()
                    .addClass(getIn);
                  $(this).closest(".col-menu").toggleClass("on");
                  return false;
                });

                $(".content", this).on("click", function (e) {
                  e.stopPropagation();
                });
              });
            });
          });

          // Hidden dropdown
          var cleanOpen = function () {
            $("li.dropdown", this).removeClass("on");
            $(".dropdown-menu", this).stop().fadeOut();
            $(".dropdown-menu", this).removeClass(getIn);
            $(".col-menu", this).removeClass("on");
            $(".col-menu .content", this).stop().fadeOut();
            $(".col-menu .content", this).removeClass(getIn);
          };

          // Hidden om mouse leave
          $("nav.navbar.validnavs").on("mouseleave", function () {
            cleanOpen();
          });

          // Enable click atribute navigation
          $("nav.navbar.validnavs .attr-nav").each(function () {
            $(".dropdown-menu", this).removeClass("animated");
            $("li.dropdown", this).off("mouseenter");
            $("li.dropdown", this).off("mouseleave");
            $("a.dropdown-toggle", this).off("click");
            $("a.dropdown-toggle", this).on("click", function (e) {
              e.stopPropagation();
              $(this)
                .closest("li.dropdown")
                .find(".dropdown-menu")
                .first()
                .stop()
                .fadeToggle();
              $(".navbar-toggle").each(function () {
                $(".fa", this).removeClass("fa-bars");
                $(".fa", this).addClass("fa-bars");
                $(".navbar-collapse").removeClass("in");
                $(".navbar-collapse").removeClass("on");
              });
            });

            $(this).on("mouseleave", function () {
              $(".dropdown-menu", this).stop().fadeOut();
              $("li.dropdown", this).removeClass("on");
              return false;
            });
          });

          // Toggle Bars
          $(".navbar-toggle").each(function () {
            $(this).off("click");
            $(this).on("click", function () {
              $(".fa", this).toggleClass("fa-bars");
              $(".fa", this).toggleClass("fa-bars");
              $(".navbar-collapse").toggleClass("show");
              $(".overlay-screen").toggleClass("opened");
              $(".navbar").toggleClass("navbar-responsive");

              cleanOpen();
            });
          });

          $(".mobile-sidenav .navbar-toggle").each(function () {
            $(this).on("click", function () {
              $(".navbar").addClass("force-sticky");
              $("header").addClass("adjust-height");
            });
          });

          $(".mobile-sidenav.navbar-fixed .navbar-toggle").each(function () {
            $(this).on("click", function () {
              $("header").removeClass("adjust-height");
            });
          });

          $(".navbar-collapse").addClass("collapse-mobile");

          $("nav.navbar.validnavs.menu-onepage li a").each(function () {
            $(this).on("click", function () {
              $(".navbar-collapse").addClass("hide_menu");
            });
          });
        } else if (getWindow > 1023) {
          // Height of scroll navigation sidebar
          $(".scroller").css("height", getHeight + "px");
          $(".navbar-collapse").removeClass("collapse-mobile");
          $(".navbar-collapse").removeClass("show");
          $(".overlay-screen").removeClass("opened");

          $("nav.navbar.validnavs.menu-onepage li a").each(function () {
            $(this).on("click", function () {
              $(".navbar-collapse").removeClass("hide_menu");
            });
          });

          // Navbar Sidebar
          if (getNav.hasClass("navbar-sidebar")) {
            // Hover effect Sidebar Menu
            $("nav.navbar.validnavs ul.nav").each(function () {
              $("a.dropdown-toggle", this).off("click");
              $("a.dropdown-toggle", this).on("click", function (e) {
                e.stopPropagation();
              });

              $(".dropdown-menu", this).addClass("animated");
              $("li.dropdown", this).on("mouseenter", function () {
                $(".dropdown-menu", this).eq(0).removeClass(getOut);
                $(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(getIn);
                $(this).addClass("on");
                return false;
              });

              $(".col-menu").each(function () {
                $(".content", this).addClass("animated");
                $(".title", this).on("mouseenter", function () {
                  $(this)
                    .closest(".col-menu")
                    .find(".content")
                    .stop()
                    .fadeIn()
                    .addClass(getIn);
                  $(this).closest(".col-menu").addClass("on");
                  return false;
                });
              });

              $(this).on("mouseleave", function () {
                $(".dropdown-menu", this).stop().removeClass(getIn);
                $(".dropdown-menu", this).stop().addClass(getOut).fadeOut();
                $(".col-menu", this)
                  .find(".content")
                  .stop()
                  .fadeOut()
                  .removeClass(getIn);
                $(".col-menu", this).removeClass("on");
                $("li.dropdown", this).removeClass("on");
                return false;
              });
            });
          } else {
            // Hover effect Default Menu
            $("nav.navbar.validnavs ul.nav").each(function () {
              $("a.dropdown-toggle", this).off("click");
              $("a.dropdown-toggle", this).on("click", function (e) {
                e.stopPropagation();
              });

              $(".megamenu-fw", this).each(function () {
                $(".title", this).off("click");
                $("a.dropdown-toggle", this).off("click");
                $(".content").removeClass("animated");
              });

              $(".dropdown-menu", this).addClass("animated");
              $("li.dropdown", this).on("mouseenter", function () {
                $(".dropdown-menu", this).eq(0).removeClass(getOut);
                $(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(getIn);
                $(this).addClass("on");
                return false;
              });

              $("li.dropdown", this).on("mouseleave", function () {
                $(".dropdown-menu", this).eq(0).removeClass(getIn);
                $(".dropdown-menu", this)
                  .eq(0)
                  .stop()
                  .fadeOut()
                  .addClass(getOut);
                $(this).removeClass("on");
              });

              $(this).on("mouseleave", function () {
                $(".dropdown-menu", this).removeClass(getIn);
                $(".dropdown-menu", this)
                  .eq(0)
                  .stop()
                  .fadeOut()
                  .addClass(getOut);
                $("li.dropdown", this).removeClass("on");
                return false;
              });
            });
          }

          // ------------------------------------------------------------------------------ //
          // Hover effect Atribute Navigation
          // ------------------------------------------------------------------------------ //
          $("nav.navbar.validnavs .attr-nav").each(function () {
            $("a.dropdown-toggle", this).off("click");
            $("a.dropdown-toggle", this).on("click", function (e) {
              e.stopPropagation();
            });

            $(".dropdown-menu", this).addClass("animated");
            $("li.dropdown", this).on("mouseenter", function () {
              $(".dropdown-menu", this).eq(0).removeClass(getOut);
              $(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(getIn);
              $(this).addClass("on");
              return false;
            });

            $("li.dropdown", this).on("mouseleave", function () {
              $(".dropdown-menu", this).eq(0).removeClass(getIn);
              $(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(getOut);
              $(this).removeClass("on");
            });

            $(this).on("mouseleave", function () {
              $(".dropdown-menu", this).removeClass(getIn);
              $(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(getOut);
              $("li.dropdown", this).removeClass("on");
              return false;
            });
          });
        }

        // ------------------------------------------------------------------------------ //
        // Menu Fullscreen
        // ------------------------------------------------------------------------------ //
        if (getNav.hasClass("navbar-full")) {
          var windowHeight = $(window).height(),
            windowWidth = $(window).width();

          $(".nav-full").css("height", windowHeight + "px");
          $(".wrap-full-menu").css("height", windowHeight + "px");
          $(".wrap-full-menu").css("width", windowWidth + "px");

          $(".navbar-collapse").addClass("animated");
          $(".navbar-toggle").each(function () {
            var getId = $(this).data("target");
            $(this).off("click");
            $(this).on("click", function (e) {
              e.preventDefault();
              $(getId).removeClass(getOut);
              $(getId).addClass("in");
              $(getId).addClass(getIn);
              return false;
            });

            $("li.close-full-menu").on("click", function (e) {
              e.preventDefault();
              $(getId).addClass(getOut);
              setTimeout(function () {
                $(getId).removeClass("in");
                $(getId).removeClass(getIn);
              }, 500);
              return false;
            });
          });
        }
      },

      // ------------------------------------------------------------------------------ //
      // Navbar Scrollspy
      // ------------------------------------------------------------------------------ //
      navbarScrollspy: function () {
        var navScrollSpy = $(".navbar-scrollspy"),
          $body = $("body"),
          getNav = $("nav.navbar.validnavs"),
          offset = getNav.outerHeight();

        if (navScrollSpy.length) {
          $body.scrollspy({
            target: ".navbar",
            offset: offset,
          });

          // Animation Scrollspy
          $(".scroll").on("click", function (event) {
            event.preventDefault();

            // Active link
            $(".scroll").removeClass("active");
            $(this).addClass("active");

            // Remove navbar collapse
            $(".navbar-collapse").removeClass("in");

            // Toggle Bars
            $(".navbar-toggle").each(function () {
              $(".fa", this).removeClass("fa-bars");
              $(".fa", this).addClass("fa-bars");
            });

            // Scroll
            var scrollTop = $(window).scrollTop(),
              $anchor = $(this).find("a"),
              $section = $($anchor.attr("href")).offset().top,
              $window = $(window).width(),
              $minusDesktop = getNav.data("minus-value-desktop"),
              $minusMobile = getNav.data("minus-value-mobile"),
              $speed = getNav.data("speed");

            if ($window > 992) {
              var $position = $section - $minusDesktop;
            } else {
              var $position = $section - $minusMobile;
            }

            $("html, body").stop().animate(
              {
                scrollTop: $position,
              },
              $speed
            );
          });

          // Activate Navigation
          var fixSpy = function () {
            var data = $body.data("bs.scrollspy");
            if (data) {
              offset = getNav.outerHeight();
              data.options.offset = offset;
              $body.data("bs.scrollspy", data);
              $body.scrollspy("refresh");
            }
          };

          // Activate Navigation on resize
          var resizeTimer;
          $(window).on("resize", function () {
            clearTimeout(resizeTimer);
            var resizeTimer = setTimeout(fixSpy, 200);
          });
        }
      },
    };

    // Initialize
    $(document).ready(function () {
      validnavs.initialize();
    });

    // Reset on resize
    $(window).on("resize", function () {
      validnavs.hoverDropdown();

      // Toggle Bars
      $(".navbar-toggle").each(function () {
        $(".fa", this).removeClass("fa-bars");
        $(".fa", this).addClass("fa-bars");
        $(this).removeClass("fixed");
      });
      $(".navbar-collapse").removeClass("in");
      $(".navbar-collapse").removeClass("on");
      $(".navbar-collapse").removeClass("bounceIn");
    });

    // Sticky Header Js
    $(window).on("scroll", function () {
      var Width = $(document).width();
      var scroll = $(window).scrollTop();

      if ($("body").scrollTop() > 500 || $("html").scrollTop() > 500) {
        if (Width > 1023) {
          $(".navbar-sticky").addClass("sticked");
        }
      } else {
        $(".navbar-sticky").removeClass("sticked");
      }
    });
  }, []);

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
