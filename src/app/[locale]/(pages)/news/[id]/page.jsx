import Script from "next/script";
// "use client";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale, id } }) {
  return {
    // title: `${seo?.metaTitle}| Madeira`,
    // description: seo?.metaDescription || "",
    // keywords: seo?.keywords || "",
    // openGraph: {
    //   images: seo?.metaImage?.data?.attributes?.url,
    // },
    title: "Madeira",
  };
}

async function singleBlogPage({ params: { locale, id } }) {
  const t = await getTranslations("default");
  // const blogsData = await getSingleBlog(locale, id);

  // const blogTitle = blogsData?.attributes?.BlogTitle;
  // const blogsContent = blogsData?.attributes?.BlogContent;
  // const blogPublisher = blogsData?.attributes?.Publisher;
  // const blogImage = blogsData.attributes.BlogImage?.data
  //   ? blogsData.attributes.BlogImage?.data[0].attributes.url
  //   : "";
  // const postedAt = blogsData?.attributes?.createdAt;

  return (
    // <div className="blog-details-page pt-100 mb-100">
    //   <div className="container">
    //     <div className="row g-lg-4 gy-5">
    //       <div className="col-lg-12">
    //         <NewContent
    //           blogTitle={blogTitle}
    //           blogsContent={blogsContent}
    //           blogPublisher={blogPublisher}
    //           blogImage={blogImage}
    //           postedAt={postedAt}
    //         />

    //         <SocialShareSection blogImage={blogImage} />
    //         <div className="row mb-100">
    //           {/* <div className="col-lg-12">
    //             <SingleNewNavigation />
    //           </div> */}
    //         </div>
    //         {/* <CommentsSection /> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //  <!-- Start Blog
    // ============================================= -->
    <>
      <div className="blog-area single full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                <div className="blog-style-two item">
                  <div className="thumb">
                    <a href="#">
                      <img src="../../assets/img/projects/7.jpg" alt="Thumb" />
                    </a>
                    <div className="date">
                      <strong>18</strong> <span>April, 2024</span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-user-circle"></i> Admin
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-comments"></i> 26 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p>{t("Blog.article_page_article_content_TEST")}</p>

                    <blockquote>
                      Celebrated share of first to worse. Weddings and any
                      opinions suitable smallest nay. Houses or months settle
                      remove ladies appear. Engrossed suffering supposing he
                      recommend do eagerness.
                    </blockquote>
                  </div>
                </div>

                {/* <!-- Post Author --> */}
                <div className="post-author">
                  <div className="thumb">
                    <img src="../../assets/img/farmers/1.jpg" alt="Thumb" />
                  </div>
                  <div className="content">
                    <h4>
                      <a href="#">Md Sohag</a>
                    </h4>
                    <p>{t("Blog.article_page_author_info_TEST")}</p>
                  </div>
                </div>
                {/* <!-- Post Author --> */}

                {/* <!-- Post Tags Share --> */}
                <div className="post-tags share">
                  {/* <div className="tags">
                    <h4>Tags: </h4>
                    <a href="#">Feeds</a>
                    <a href="#">We Specilaized</a>
                  </div> */}

                  <div className="social">
                    <h4>{t("Blog.article_page_share")}</h4>
                    <ul>
                      <li>
                        <a className="facebook" href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="pinterest" href="#" target="_blank">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                    {/* <!-- End Social Share --> */}
                  </div>
                </div>
                {/* <!-- Post Tags Share --> */}

                {/* <!-- Start Post Pagination --> */}
                <div className="post-pagi-area" dir="ltr">
                  <div className="post-previous">
                    <a href="#">
                      <div className="icon">
                        <i className="fas fa-angle-double-left"></i>
                      </div>
                      <div className="nav-title">
                        {" "}
                        {t("Blog.article_page_pagi_prev")}
                        <h5>Discovery incommode</h5>
                      </div>
                    </a>
                  </div>
                  <div className="post-next">
                    <a href="#">
                      <div className="nav-title">
                        {t("Blog.article_page_pagi_next")}
                        <h5>Discovery incommode</h5>
                      </div>
                      <div className="icon">
                        <i className="fas fa-angle-double-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- End Post Pagination --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <!-- End Blog --> */
  );
}

export default singleBlogPage;
