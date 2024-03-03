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

const Services = () => {
  const settings = useMemo(() => {
    return {
      // Optional parameters
      loop: true,
      freeMode: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },
    };
  });
  return (
    <div className="service-style-two-area half-bg-dark-bottom default-padding-top pb-md-120 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="text-center mb-60 mb-md-40 mb-xs-40">
              <h2
                className="mask-text large"
                style={{ backgroundImage: "url(assets/img/banner/18.jpg)" }}
              >
                Healthy life with fresh products
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...settings}
              className="service-style-two-carousel swiper mb--30"
            >
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Single Item --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-style-two">
                    <div className="thumb">
                      <img
                        src="assets/img/services/2.jpg"
                        alt="Image not Found"
                      />
                    </div>
                    <div className="overlay">
                      <div className="icon">
                        <img
                          src="assets/img/icon/21.png"
                          alt="Image Not Found"
                        />
                      </div>
                      <div className="info">
                        <h4>
                          <a href="services-details.html">Agriculture</a>
                        </h4>
                        <span>Products</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- End Single Item --> */}
                {/* <!-- Single Item --> */}

                {/* <!-- End Single Item --> */}
                {/* <!-- Single Item --> */}
                {/* <SwiperSlide className="swiper-slide">
                  <div className="service-style-two">
                    <div className="thumb">
                      <img
                        src="assets/img/services/4.jpg"
                        alt="Image not Found"
                      />
                    </div>
                    <div className="overlay">
                      <div className="icon">
                        <img
                          src="assets/img/icon/23.png"
                          alt="Image Not Found"
                        />
                      </div>
                      <div className="info">
                        <h4>
                          <a href="services-details.html">Organic</a>
                        </h4>
                        <span>Products</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                {/* <!-- End Single Item --> */}
                {/* <!-- Single Item --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="service-style-two">
                    <div className="thumb">
                      <img
                        src="assets/img/services/5.jpg"
                        alt="Image not Found"
                      />
                    </div>
                    <div className="overlay">
                      <div className="icon">
                        <img
                          src="assets/img/icon/24.png"
                          alt="Image Not Found"
                        />
                      </div>
                      <div className="info">
                        <h4>
                          <a href="services-details.html">Dairy</a>
                        </h4>
                        <span>Products</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- End Single Item --> */}
              </div>

              {/* <!-- Navigation --> */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
