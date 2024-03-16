"use client";

import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const CallToAction = ({ lang }) => {
  const t = useTranslations("default");
  const settings = useMemo(() => {
    return {
      // Optional parameters
      loop: true,
      slidesPerView: 2,
      spaceBetween: 15,
      autoplay: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  });
  return (
    <div
      className="call-to-action-area overflow-hidden default-padding-top bg-gray"
      style={{ backgroundImage: "url(assets/img/shape/24.jpg)" }}
    >
      <div className="shape">
        <img src="assets/img/demo/chook-feed.webp" alt="Image Not Found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="callto-action text-light">
              <h2 className="title">{t("Home.call_to_action_title")}</h2>
              <p>{t("Home.call_to_action_desc")}</p>
              <a href={`/${lang}/contact`}>{t("Home.call_to_action_cta")}</a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="brand">
              <Swiper {...settings} className="brand-style-one-carousel swiper">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                  {/* <!-- Single Item --> */}
                  <SwiperSlide className="swiper-slide">
                    <img src="assets/img/brand/1.png" alt="Thumb" />
                  </SwiperSlide>
                  {/* <!-- End Single Item --> */}
                  {/* <!-- Single Item --> */}
                  <SwiperSlide className="swiper-slide">
                    <img src="assets/img/brand/2.png" alt="Thumb" />
                  </SwiperSlide>
                  {/* <!-- End Single Item --> */}
                  {/* <!-- Single Item --> */}
                  <SwiperSlide className="swiper-slide">
                    <img src="assets/img/brand/3.png" alt="Thumb" />
                  </SwiperSlide>
                  {/* <!-- End Single Item --> */}
                  {/* <!-- Single Item --> */}
                  <SwiperSlide className="swiper-slide">
                    <img src="assets/img/brand/4.png" alt="Thumb" />
                  </SwiperSlide>
                  {/* <!-- End Single Item --> */}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
