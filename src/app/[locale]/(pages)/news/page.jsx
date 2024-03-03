import RecentsNews from "@/components/News/RecentsNews";
import SingleNewsCard from "@/components/News/SingleNewsCard";
import Pagination from "@/components/News/Pagination";
import { getBlogPageData } from "@/app/libs/getData";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const aboutPageData = await getBlogPageData(locale);
  const seo = aboutPageData?.attributes?.seo[0];
  // console.log(aboutPageData?.attributes?.seo);

  return {
    title: `${seo?.metaTitle}| Madeira`,
    description: seo?.metaDescription || "",
    keywords: seo?.keywords || "",
    openGraph: {
      images: seo?.metaImage?.data?.attributes?.url,
    },
  };
}

async function NewsPage({ params: { locale }, searchParams }) {
  const blogsResponse = await getBlogPageData(
    locale,
    searchParams.page || 1,
    5
  );
  const recentBlogsResponse = await getBlogPageData(locale, 1, 3);
  const blogsData = blogsResponse?.data;
  const recentBlogs = recentBlogsResponse?.data;
  const blogsPagination = blogsResponse?.meta?.pagination;

  let emptyData = "";
  if (blogsPagination.pageCount === 0) {
    emptyData = "our latest news are coming soon";
  } else if (
    searchParams.page > blogsPagination.pageCount ||
    searchParams.page < 1
  ) {
    notFound();
  }

  return (
    <div>
      <div className="blog-area blog-grid default-padding">
        <div className="container">
          <div className="blog-item-box">
            <div className="row">
              {/* <!-- Single Item --> */}
              <div className="col-xl-4 col-md-6 single-item">
                <div className="blog-style-one">
                  <div className="thumb">
                    <a href="news/Announcing if attachment resolution sentiments.">
                      <img
                        src="../assets/img/blog/4.jpg"
                        alt="Image Not Found"
                      />
                    </a>
                    <div className="date">
                      <strong>18</strong> <span>Apr, 2024</span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <a href="#">Admin</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="post-title">
                      <a href="news/Announcing if attachment resolution sentiments.">
                        Announcing if attachment resolution sentiments.
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              {/* <!-- Single Item --> */}
            </div>
          </div>
          {/* <!-- Pagination --> */}
          <div className="row">
            <div className="col-md-12 pagi-area text-center">
              <nav aria-label="navigation">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-double-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <!-- End Pagination --> */}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;

// <div className="blog-standard-page pt-100 mb-100">
//   <div className="container">
//     <div className="row g-lg-4 gy-5">
//       <div className="col-lg-8">
//         {emptyData !== "" && (
//           <h2 className="text-center text-danger">{emptyData}</h2>
//         )}
//         {blogsData &&
//           blogsData?.map((blog) => (
//             <SingleNewsCard
//               id={blog.id}
//               blogTitle={blog.attributes.BlogTitle}
//               publisher={blog.attributes.Publisher}
//               blogImage={
//                 blog.attributes.BlogImage?.data
//                   ? blog.attributes.BlogImage?.data[0].attributes.url
//                   : ""
//               }
//               createdAt={blog.attributes.createdAt}
//             />
//           ))}
//         {blogsPagination && <Pagination paginationData={blogsPagination} />}
//       </div>
//       <div className="col-lg-4">
//         <div className="blog-sidebar mb-50">
//           {/* <NewsCategories /> */}
//           {recentBlogs && <RecentsNews recentBlogs={recentBlogs} />}
//           {/* <div className="single-widgets widget_egns_tag">
//             <div className="widget-title mb-20">
//               <h6>Popular Tags</h6>
//             </div>
//             <p className="wp-block-tag-cloud">
//               <Link legacyBehavior href={`news/blog-standard`}>
//                 <a>Car Advice</a>
//               </Link>
//               <Link legacyBehavior href={`news/blog-standard`}>
//                 <a>Rental</a>
//               </Link>
//               <Link legacyBehavior href={`news/blog-standard`}>
//                 <a>Hyundai</a>
//               </Link>
//               <Link legacyBehavior href={`news/blog-standard`}>
//                 <a>Driving</a>
//               </Link>
//               <Link legacyBehavior href={`news/blog-standard`}>
//                 <a>Compare</a>
//               </Link>
//               <Link legacyBehavior href={`news/blog-standard`}>
//                 <a>Buying</a>
//               </Link>
//               <Link legacyBehavior href="/car-deatils">
//                 <a>Toyota</a>
//               </Link>
//               <a href="#">Audi</a>
//               <a href="#">Service</a>
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
