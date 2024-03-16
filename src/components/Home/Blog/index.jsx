import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function index({ blogData, lang }) {
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
    <div className="blog-area home-blog default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h5 className="sub-title">{t("Home.blog_subtitle")}</h5>
              <h2 className="title">{t("Home.blog_title")}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <!-- Single Item --> */}
          <div className="col-xl-6 col-md-12 mb-30">
            <div className="blog-style-one">
              <div className="thumb">
                <img src="assets/img/blog/1.jpg" alt="Image Not Found" />
                <div className="overlay text-light">
                  <h3 className="post-title">
                    <a href={`${lang}/news`}>{t("Home.blog_article_1")}</a>
                  </h3>
                  <p>{t("Home.blog_article_desc_1")}</p>
                  <a href={`${lang}/news`} className="button-regular">
                    {t("Home.blog_cta")} <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Item --> */}
          {/* <!-- Single Item --> */}
          <div className="col-xl-3 col-md-6 mb-30">
            <div className="blog-style-one">
              <div className="thumb">
                <a href={`${lang}/about-us`}>
                  <img src="assets/img/blog/3.jpg" alt="Image Not Found" />
                </a>
                <div className="date">
                  <strong>26</strong> <span>Aug, 2023</span>
                </div>
              </div>
              <div className="info">
                <div className="meta">
                  <ul>
                    <li>
                      <a href="#">Md Sohag</a>
                    </li>
                    <li>25 April, 2023</li>
                  </ul>
                </div>
                <h3 className="post-title">
                  <a href={`${lang}/news`}>{t("Home.blog_article_2")}</a>
                </h3>
                <a href={`${lang}/news`} className="button-regular">
                  {t("Home.blog_cta")} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Single Item --> */}
          {/* <!-- Single Item --> */}
          <div className="col-xl-3 col-md-6 mb-30">
            <div className="blog-style-one">
              <div className="thumb">
                <a href={`${lang}/news`}>
                  <img src="assets/img/blog/2.jpg" alt="Image Not Found" />
                </a>
                <div className="date">
                  <strong>08</strong> <span>Dec, 2023</span>
                </div>
              </div>
              <div className="info">
                <div className="meta">
                  <ul>
                    <li>
                      <a href="#">Md Sohag</a>
                    </li>
                    <li>25 April, 2023</li>
                  </ul>
                </div>
                <h3 className="post-title">
                  <a href={`${lang}/news`}>{t("Home.blog_article_3")}</a>
                </h3>
                <a href={`${lang}/news`} className="button-regular">
                  {t("Home.blog_cta")} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- End Single Item --> */}
        </div>
      </div>
    </div>
    // <div className="news-section pt-90 pb-90">
    //   <div className="container">
    //     <div className="row mb-60 wow fadeInUp" data-wow-delay="200ms">
    //       <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
    //         <div className="section-title-2">
    //           <h2>{t("Home.news_title")}</h2>
    //           {/* <p>{t("Home.news")}</p> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row g-4 justify-content-center">
    //       {blogData &&
    //         blogData.map((blog) => (
    //           <div
    //             key={blog.id}
    //             className="col-lg-4 col-md-6 wow fadeInUp"
    //             data-wow-delay="200ms"
    //           >
    //             <div className="news-card">
    //               <div className="news-img">
    //                 <Link legacyBehavior href={`${lang}/news/${blog.id}`}>
    //                   <a>
    //                     <img
    //                       src={
    //                         blog?.attributes?.BlogImage?.data?.[0].attributes
    //                           ?.url
    //                       }
    //                       alt=""
    //                     />
    //                   </a>
    //                 </Link>
    //               </div>
    //               <div className="content">
    //                 <h6>
    //                   <Link legacyBehavior href={`${lang}/news/${blog.id}`}>
    //                     <a>{blog.attributes.BlogTitle}</a>
    //                   </Link>
    //                 </h6>
    //                 <div className="news-btm">
    //                   <div className="author-area">
    //                     {/* <div className="author-img">
    //                       <img
    //                         src=
    //                         alt=""
    //                       />
    //                     </div> */}
    //                     <div className="author-content">
    //                       <h6>{blog.attributes.Publisher}</h6>
    //                       <Link legacyBehavior href={`${lang}/news/${blog.id}`}>
    //                         <a>
    //                           Posted on -{" "}
    //                           {formatDate(blog.attributes.createdAt)}
    //                         </a>
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default index;
