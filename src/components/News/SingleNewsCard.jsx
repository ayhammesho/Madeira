import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const singleNewsCard = ({ id, blogTitle, publisher, blogImage, createdAt }) => {
  const t = useTranslations("default");
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
    <div className="news-card2 mb-50">
      <div className="news-img">
        <Link legacyBehavior href={`news/${id}`}>
          <a>
            <img src={blogImage} alt="" />
          </a>
        </Link>
      </div>
      <div className="content">
        <h4>
          <Link legacyBehavior href={`news/${id}`}>
            <a>{blogTitle}</a>
          </Link>
        </h4>
        {/* <p>
          "The Car Enthusiast: Exploring the World of Cars and Driving." In this
          captivating journey, we delve into the fascinating realm of
          automobiles.
        </p> */}
        <div className="news-btm d-flex align-items-center justify-content-between">
          <div className="author-area">
            <div className="author-img">{/* <img src= alt="" /> */}</div>
            <div className="author-content">
              <h6>{publisher}</h6>
              <Link legacyBehavior href={`news/${id}`}>
                <a>
                  {t("News.posted_at")} - {formatDate(createdAt)}
                </a>
              </Link>
            </div>
          </div>
          <Link legacyBehavior href={`news/${id}`}>
            <a className="view-btn">{t("News.read_more")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default singleNewsCard;
