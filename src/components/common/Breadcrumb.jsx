"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Breadcrumb({ globalSettings, PrivacyPageData }) {
  // console.log(globalSettings?.attributes?.AboutUsHeroSection);
  // globalSettings?.attributes?.AboutUsHeroSection?.Title;
  // globalSettings?.attributes?.AboutUsHeroSection?.Image?.data?.attributes?.url;
  // const breadcrumbData = [
  //   {
  //     id: 1,
  //     path: "/contact",
  //     path_title: "Header.contact_us",
  //     sub_title: "Contact.page_sub_title",
  //     title: globalSettings?.attributes?.ContactUsHeroSection?.Title,
  //     img_src:
  //       globalSettings?.attributes?.ContactUsHeroSection?.Image?.data
  //         ?.attributes?.url,
  //   },
  //   {
  //     id: 2,
  //     path: "/about",
  //     path_title: "Header.about",
  //     sub_title: "About.page_sub_title",
  //     title: globalSettings?.attributes?.AboutUsHeroSection?.Title,
  //     img_src:
  //       globalSettings?.attributes?.AboutUsHeroSection?.Image?.data?.attributes
  //         ?.url,
  //   },

  //   {
  //     id: 5,
  //     path: "/singleBrand",
  //     path_title: "Header.products",
  //     sub_title: "Products.page_sub_title",
  //     title: globalSettings?.attributes?.ProductsHeroSection?.Title,
  //     img_src:
  //       globalSettings?.attributes?.ProductsHeroSection?.Image?.data?.attributes
  //         ?.url,
  //   },

  //   {
  //     id: 6,
  //     path: "/news",
  //     path_title: "Header.blog",
  //     sub_title: "News.page_sub_title",
  //     title: globalSettings?.attributes?.NewsHeroSection?.Title,
  //     img_src:
  //       globalSettings?.attributes?.NewsHeroSection?.Image?.data?.attributes
  //         ?.url,
  //   },
  //   {
  //     id: 7,
  //     path: "/privacy-policy",
  //     path_title: "Header.privacy_policy",
  //     sub_title: "Privacy Policy.page_sub_title",
  //     title: PrivacyPageData?.[0]?.attributes?.PageTitle,
  //     img_src:
  //       PrivacyPageData?.[0]?.attributes?.PageImage?.data?.attributes?.url,
  //   },
  // ];

  const pathname = usePathname().split("/");
  const currentPage = "/" + pathname[2];
  const t = useTranslations("default");

  const currentPathData = breadcrumbData.find(
    (item) => item.path === currentPage
  );
  const lastPathSegment = currentPathData?.path.split("/").pop();

  return (
    <div className="inner-page-banner">
      <div className="banner-wrapper">
        <div className="container-fluid">
          <ul className="breadcrumb-list">
            <li>
              <Link legacyBehavior href="/">
                <a>{t("Header.home")}</a>
              </Link>
            </li>
            <li style={{ textTransform: "capitalize" }}>
              {t(currentPathData?.path_title)}
            </li>
          </ul>
          <div className="banner-main-content-wrap">
            <div className="row">
              <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                <div className="banner-content">
                  <span className="sub-title">
                    {t(currentPathData?.sub_title) || ""}
                  </span>
                  <h1>{currentPathData?.title || ""}</h1>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 d-lg-flex d-none align-items-center justify-content-end">
                <div className="banner-img">
                  <img
                    src={
                      currentPathData?.img_src ||
                      "../assets/img/inner-page/inner-banner-img.png"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
