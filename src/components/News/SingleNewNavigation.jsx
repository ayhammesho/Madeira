import React from "react";
import Link from "next/link";

const SingleNewNavigation = () => {
  return (
    <div className="details-navigation">
      <div className="single-navigation">
        <Link legacyBehavior href="blog-details">
          <a className="arrow">
            <svg
              width={9}
              height={15}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </a>
        </Link>
        <div className="content">
          <Link legacyBehavior href="blog-details">
            <a>Prev Post</a>
          </Link>
          <h6>
            <Link legacyBehavior href="blog-details">
              <a>The Car Enthusiast: Exploring the World of Cars and Driving</a>
            </Link>
          </h6>
        </div>
      </div>
      <div className="single-navigation two text-end">
        <div className="content">
          <Link legacyBehavior href="blog-details">
            <a>Next Post</a>
          </Link>
          <h6>
            <Link legacyBehavior href="blog-details">
              <a>The Car Enthusiast: Exploring the World of Cars and Driving</a>
            </Link>
          </h6>
        </div>
        <Link legacyBehavior href="blog-details">
          <a className="arrow">
            <svg
              width={9}
              height={15}
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SingleNewNavigation;
