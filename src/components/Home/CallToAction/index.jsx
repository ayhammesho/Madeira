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

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const CallToAction = () => {
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
              <h2 className="title">Built the best Feeds to the market</h2>
              <p>
                We understand that agriculture is not a one-size-fits-all
                industry, which is why our knowledgeable team is always
                available to provide personalized support and advice. Whether
                you're seeking recommendations for the best seed varieties for
                your region or need guidance on crop rotation and planting
                techniques, we are here to assist you every step of the way.
              </p>
              <a href="en/contact">Contact Us</a>
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
