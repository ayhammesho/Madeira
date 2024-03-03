"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import BreadcrumbBanner from "@/../public/assets/img/banner/15.jpg";

function Breadcrumb({ globalSettings, PrivacyPageData }) {
  const breadcrumbData = [
    {
      id: 1,
      path: "/contact",
      path_title: "Header.contact_us",
      // sub_title: "Contact.page_sub_title",
      // title: globalSettings?.attributes?.ContactUsHeroSection?.Title,
      // img_src:
      //   globalSettings?.attributes?.ContactUsHeroSection?.Image?.data
      //     ?.attributes?.url,
    },
    {
      id: 2,
      path: "/about-us",
      path_title: "Header.about",
      // sub_title: "About.page_sub_title",
      // title: globalSettings?.attributes?.AboutUsHeroSection?.Title,
      // img_src:
      //   globalSettings?.attributes?.AboutUsHeroSection?.Image?.data?.attributes
      //     ?.url,
    },

    {
      id: 5,
      path: "/products",
      path_title: "Header.products",
      // sub_title: "Products.page_sub_title",
      // title: globalSettings?.attributes?.ProductsHeroSection?.Title,
      // img_src:
      //   globalSettings?.attributes?.ProductsHeroSection?.Image?.data?.attributes
      //     ?.url,
    },

    {
      id: 6,
      path: "/news",
      path_title: "Header.blog",
      // sub_title: "News.page_sub_title",
      // title: globalSettings?.attributes?.NewsHeroSection?.Title,
      // img_src:
      //   globalSettings?.attributes?.NewsHeroSection?.Image?.data?.attributes
      //     ?.url,
    },
    // {
    //   id: 7,
    //   path: "/privacy-policy",
    //   path_title: "Header.privacy_policy",
    //   sub_title: "Privacy Policy.page_sub_title",
    //   title: PrivacyPageData?.[0]?.attributes?.PageTitle,
    //   img_src:
    //     PrivacyPageData?.[0]?.attributes?.PageImage?.data?.attributes?.url,
    // },
  ];

  const pathname = usePathname().split("/");
  const currentPage = "/" + pathname[2];
  const t = useTranslations("default");

  const currentPathData = breadcrumbData.find(
    (item) => item.path === currentPage
  );
  const lastPathSegment = currentPathData?.path.split("/").pop();

  return (
    <div
      className="breadcrumb-area text-center shadow dark-hard bg-cover text-light"
      style={{
        backgroundImage: `url(${BreadcrumbBanner.src})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1> {t(currentPathData?.path_title)}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">
                    <i className="fas fa-home"></i> {t("Header.home")}
                  </Link>
                </li>
                <li className="active"> {t(currentPathData?.path_title)}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
