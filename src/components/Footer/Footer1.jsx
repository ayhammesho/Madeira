import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import logoWhite from "@/../public/assets/img/logo-white.png";
import footerShape from "@/../public/assets/img/shape/7.png";
import footerShapeSecond from "@/../public/assets/img/shape/8.png";
function Footer1({
  lang,
  categories,
  footerLogo,
  SocialLinks,
  FooterSlogan,
  MapLink,
}) {
  const t = useTranslations("default");
  return (
    // <footer>
    //   <div className="container-fluid">
    //     <div className="footer-top">
    //       <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1   g-lg-4 gy-5 ">
    //         <div className="col d-flex justify-content-lg-start">
    //           <div className="footer-logo">
    //             <Link legacyBehavior href={"/" + lang}>
    //               <a>
    //                 <img width={300} src={footerLogo} alt="" />
    //               </a>
    //             </Link>
    //             <p className=" mt-4 fw-bold  ">{FooterSlogan}</p>
    //           </div>
    //         </div>

    //         <div className="col d-flex justify-content-lg-center justify-content-sm-end">
    //           <div className="footer-widget">
    //             <div className="widget-title">
    //               <h5>{t("Footer.site_map")}</h5>
    //             </div>
    //             <div className="menu-container">
    //               <ul>
    //                 <li>
    //                   <Link legacyBehavior href={`/${lang}/about`}>
    //                     <a>
    //                       {t("Header.about")}
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href={`/${lang}/privacy-policy`}>
    //                     <a>
    //                       {t("Header.privacy_policy")}
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href={`/${lang}/singleBrand?page=1`}>
    //                     <a>
    //                       {t("Header.products")}
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href={`/${lang}/news?page=1`}>
    //                     <a>
    //                       {t("Header.news")}
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href={`/${lang}/contact`}>
    //                     <a>
    //                       {t("Header.contact_us")}
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col d-flex justify-content-lg-center justify-content-sm-end">
    //           <div className="footer-widget">
    //             <div className="widget-title">
    //               <h5>{t("Footer.brands")}</h5>
    //             </div>
    //             <div className="menu-container">
    //               <ul>
    //                 {categories &&
    //                   categories.map((category) => (
    //                     <li key={category.id}>
    //                       <Link
    //                         legacyBehavior
    //                         href={`/${lang}/singleBrand?page=1&category=${category.attributes.CategoryTitle}`}
    //                       >
    //                         <a>
    //                           {category.attributes.CategoryTitle}
    //                           <svg
    //                             width={10}
    //                             height={10}
    //                             viewBox="0 0 10 10"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                           >
    //                             <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                           </svg>
    //                         </a>
    //                       </Link>
    //                     </li>
    //                   ))}
    //                 {/* <li>
    //                   <Link legacyBehavior href="#">
    //                     <a>
    //                       Hyundai
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href="#">
    //                     <a>
    //                       KIA
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href="#">
    //                     <a>
    //                       Toyota
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href="#">
    //                     <a>
    //                       Isuzu
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href="#">
    //                     <a>
    //                       Mazda
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link legacyBehavior href="#">
    //                     <a>
    //                       Mitsubishi
    //                       <svg
    //                         width={10}
    //                         height={10}
    //                         viewBox="0 0 10 10"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                       >
    //                         <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
    //                       </svg>
    //                     </a>
    //                   </Link>
    //                 </li> */}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col d-flex justify-content-lg-start">
    //           <div className="contact-map">
    //             <iframe
    //               src={MapLink}
    //               style={{ border: 0, height: "300px" }}
    //               allowFullScreen
    //               loading="lazy"
    //               referrerPolicy="no-referrer-when-downgrade"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="footer-btm">
    //       <div className="copyright-area">
    //         <p>
    //           Copyright 2023 <a href="#">AFAQ Global</a> | Design By{" "}
    //           <a href="#"></a>
    //         </p>
    //       </div>
    //       <div className="social-area">
    //         <h6>{t("Footer.follow")}:</h6>
    //         <ul>
    //           <li>
    //             <a href={SocialLinks?.FACEBOOK} target="_blank">
    //               <i className="bx bxl-facebook" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href={SocialLinks?.TWITTER} target="_blank">
    //               <i className="bx bxl-twitter" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href={SocialLinks?.LINKEDIN} target="_blank">
    //               <i className="bx bxl-linkedin" />
    //             </a>
    //           </li>
    //           <li>
    //             <a href={SocialLinks?.INSTAGRAM} target="_blank">
    //               <i className="bx bxl-instagram-alt" />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer
      className="bg-dark text-light"
      style={{ backgroundImage: `url(${footerShapeSecond.src})` }}
    >
      <div className="container">
        <div className="f-items default-padding">
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <div className="footer-item about">
                <img className="logo" src={logoWhite.src} alt="Logo" />
                <p>
                  Happen active county. Winding morning ambition shyness evident
                  to poor. Because elderly new to the point to main success.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 item">
              <div className="footer-item link">
                <h4 className="widget-title">Explore</h4>
                <ul>
                  <li>
                    <a href="/en/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/en/products">Products</a>
                  </li>
                  <li>
                    <a href="/en/news">Blog</a>
                  </li>
                  <li>
                    <a href="/en/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 item">
              <div className="footer-item recent-post">
                <h4 className="widget-title">Recent Posts</h4>
                <ul>
                  <li>
                    <div className="thumb">
                      <a href="blog-single-with-sidebar.html">
                        <img src="../assets/img/thumbs/1.jpg" alt="Thumb" />
                      </a>
                    </div>
                    <div className="info">
                      <div className="meta-title">
                        <span className="post-date">12 Sep, 2023</span>
                      </div>
                      <h5>
                        <a href="blog-single-with-sidebar.html">
                          Meant widow equal an share least part.{" "}
                        </a>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="thumb">
                      <a href="blog-single-with-sidebar.html">
                        <img src="../assets/img/thumbs/2.jpg" alt="Thumb" />
                      </a>
                    </div>
                    <div className="info">
                      <div className="meta-title">
                        <span className="post-date">18 Jul, 2023</span>
                      </div>
                      <h5>
                        <a href="blog-single-with-sidebar.html">
                          Future Plan & Strategy for Consutruction{" "}
                        </a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6 item">
              <div className="footer-item contact">
                <h4 className="widget-title">Contact Info</h4>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2em"
                          height="1.2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                          />
                        </svg>
                      </i>
                    </div>
                    <div className="content">
                      <strong>Facebook:</strong>
                      <p>Madeira</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2em"
                          height="1.2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                          />
                        </svg>
                      </i>
                    </div>
                    <div className="content">
                      <strong>Instagram:</strong>
                      <p>@Madeira</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="content">
                      <strong>Email:</strong>
                      <a href="mailto:info@madeira.ae">info@madeira.ae</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="content">
                      <strong>Phone:</strong>
                      <a href="tel:+971 000 000 000">+971 000 000 000</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6827956668!2d54.89784328683704!3d25.076280454847193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1709473435850!5m2!1sen!2s"
                width="400"
                height="300"
                className="w-100 mt-30"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
        {/* <!-- Start Footer Bottom --> */}
        <div className="footer-bottom text-center">
          <div className="row">
            <div className="col-lg-12">
              <p>
                &copy; Copyright 2024. All Rights Reserved by{" "}
                <a href="https://www.codevay.com/">Codevay</a>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End Footer Bottom --> */}
      </div>
      <div className="shape-right-bottom">
        <img src={footerShape.src} alt="Image Not Found" />
      </div>
    </footer>
  );
}

export default Footer1;
