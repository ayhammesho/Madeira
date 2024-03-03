"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

import { useTranslations } from "next-intl";

const RelatedProducts = ({ relatedProducts, lang }) => {
  const t = useTranslations("default");

  const productSlide1 = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  });
  return (
    <div className="row mb-90">
      <div className="col-lg-12">
        <div className="section-title">
          <h4>{t("Products.related_products")}</h4>
        </div>
      </div>
      <div className="col-lg-12 mb-40">
        <Swiper {...productSlide1} className="swiper product-details-slider">
          <div className="swiper-wrapper">
            {relatedProducts &&
              relatedProducts.map((product) => (
                <SwiperSlide className="swiper-slide" key={product.id}>
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img
                        src={
                          product?.attributes?.ProductImage?.data?.attributes
                            ?.url
                        }
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link legacyBehavior href={`${product.id}`}>
                          <a>{product.attributes.ProductName}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
      <div className="col-lg-12 divider">
        <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
          <div className="slider-btn prev-2 d-md-flex d-none">
            <svg
              width={11}
              height={19}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="view-btn-area">
            <p>{t("Products.more_products")}</p>
            <Link legacyBehavior href={`/${lang}/singleBrand?page=1`}>
              <a className="view-btn">{t("Products.more_products_cta")}</a>
            </Link>
          </div>
          <div className="slider-btn next-2 d-md-flex d-none">
            <svg
              width={11}
              height={19}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
