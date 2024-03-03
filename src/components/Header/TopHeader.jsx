import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
function TopHeader({
  lang,
  categories,
  footerLogo,
  SocialLinks,
  FooterSlogan,
  MapLink,
}) {
  const t = useTranslations("default");
  return (
    <div className="top-bar-area top-bar-style-one bg-dark text-light">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-8">
            <ul className="item-flex">
              <li>
                <i className="fas fa-clock"></i> Opening Hours : Sunday- Friday,
                08:00 am - 05:00pm
              </li>
              <li>
                <Link href="tel:+4733378901">
                  <i className="fas fa-phone-alt"></i> +4733378901
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 text-end">
            <div className="social">
              <ul>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
