"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const RecentsNews = ({ recentBlogs }) => {
  const t = useTranslations("default");
  const settings = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-51",
        prevEl: ".prev-51",
      },
    };
  });
  function formatDate(isoString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(isoString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]}, ${year}`;
  }

  return (
    <div className="single-widgets widget_egns_recent_post mb-20">
      <div className="widget-title blog-title mb-20">
        <h6>{t("News.recent_news")}</h6>
        <div className="slider-btn-group2 d-flex align-items-center justify-content-between">
          <div className="slider-btn prev-51">
            <svg
              width={7}
              height={12}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="slider-btn next-51">
            <svg
              width={7}
              height={12}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="recent-post-wraper">
        <Swiper {...settings} className="swiper recent-post-sidebar-slider">
          <div className="swiper-wrapper">
            {recentBlogs &&
              recentBlogs.map((blog) => (
                <SwiperSlide className="swiper-slide" key={blog.id}>
                  <div className="widget-cnt">
                    <div className="wi">
                      <Link legacyBehavior href={`news/${blog.id}`}>
                        <a>
                          <img
                            src={
                              blog.attributes.BlogImage?.data
                                ? blog.attributes.BlogImage?.data[0].attributes
                                    .url
                                : ""
                            }
                            alt="image"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="wc">
                      <Link legacyBehavior href={`news/${blog.id}`}>
                        <a className="date">
                          {formatDate(blog.attributes.createdAt)}
                        </a>
                      </Link>
                      <h6>
                        <Link legacyBehavior href={`news/${blog.id}`}>
                          <a>{blog.attributes.BlogTitle}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RecentsNews;
