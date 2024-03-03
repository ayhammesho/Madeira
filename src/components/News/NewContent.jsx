"use client";

import React from "react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import QuoteSection from "@/components/News/QuoteSection";
import { useTranslations } from "next-intl";

const NewContent = ({
  blogTitle,
  blogsContent,
  blogPublisher,
  blogImage,
  postedAt,
}) => {
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
    <>
      <div className="post-thumb">
        <img src={blogImage} alt="" />
      </div>
      <h3 className="post-title">{blogTitle}</h3>
      <div className="author-area">
        {/* <div className="author-img">
          <img src="../../assets/img/home1/author-02.png" alt="" />
        </div> */}
        <div className="author-content">
          <h6>{blogPublisher}</h6>
          <Link legacyBehavior href="blog-standard">
            <a>
              {t("News.posted_at")} - {formatDate(postedAt)}
            </a>
          </Link>
        </div>
      </div>
      <div>
        <BlocksRenderer
          content={blogsContent}
          blocks={{
            // You can use the default components to set class names...
            paragraph: ({ children }) => (
              <p className="text-neutral900 max-w-prose">{children}</p>
            ),
            // ...or point to a design system
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return <h1>{children}</h1>;
                case 2:
                  return <h2>{children}</h2>;
                case 3:
                  return <h3>{children}</h3>;
                case 4:
                  return <h4>{children}</h4>;
                case 5:
                  return <h5>{children}</h5>;
                case 6:
                  return <h6>{children}</h6>;
                default:
                  return <h1>{children}</h1>;
              }
            },
            // For links, you may want to use the component from your router or framework
            link: ({ children, url }) => <a href={url}>{children}</a>,
            quote: ({ children }) => <QuoteSection children={children} />,
            image: ({ children, image }) => (
              <div className="blog-dt-img">
                <img
                  className="img-fluid"
                  src={image?.url}
                  alt={image?.alternativeText}
                />
              </div>
            ),
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
          }}
        />
      </div>
    </>
  );
};

export default NewContent;
