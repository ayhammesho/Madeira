"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Feature = ({ lang }) => {
  const t = useTranslations("default");
  return (
    <div
      className="feature-style-one-area default-padding"
      style={{ backgroundImage: "url(assets/img/shape/18.jpg)" }}
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-3 col-lg-6">
            <div className="feature-style-one-item">
              <img src="assets/img/demo/Feature-1.jpg" alt="Image Not Found" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 pl-50 pr-50 pl-md-15 pr-md-15 pl-xs-15 pr-xs-15">
            <div className="feature-style-one-info">
              <h2 className="title">
                {t("Home.features_title_before_br")}
                <br /> {t("Home.features_title_after_br")}
              </h2>
              <p>{t("Home.features_desc")}</p>
              <ul className="item-list">
                <li> {t("Home.features_list_1")}</li>
                <li> {t("Home.features_list_2")} </li>
              </ul>
              <a
                className="btn btn-theme mt-30 btn-md radius animation"
                href={`${lang}/about-us`}
              >
                {t("Home.features_cta")}
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12">
            <div className="featured-product">
              {/* <!-- Single Item --> */}
              <div className="product-list-item">
                <a href="services-details.html">
                  <img src="assets/img/demo/wheat.png" alt="Icon" />

                  <h5>{t("Home.features_product_1")} </h5>
                </a>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="product-list-item">
                <a href="services-details.html">
                  <img src="assets/img/demo/barley.png" alt="Icon" />
                  <h5> {t("Home.features_product_2")} </h5>
                </a>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="product-list-item">
                <a href="services-details.html">
                  <img src="assets/img/demo/sesame.png" alt="Icon" />
                  <h5> {t("Home.features_product_3")}</h5>
                </a>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}

              {/* <!-- End Single Item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
