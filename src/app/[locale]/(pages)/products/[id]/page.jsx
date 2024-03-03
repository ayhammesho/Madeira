"use client";

import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

// export async function generateMetadata({ params: { locale, id } }) {
//   return {
//     // title: `${seo?.metaTitle}| Madeira`,
//     // description: seo?.metaDescription || "",
//     // keywords: seo?.keywords || "",
//     // openGraph: {
//     //   images: seo?.metaImage?.data?.attributes?.url,
//     // },
//     title: "Madira",
//   };
// }

function ProductDetailsPage({ params: { locale, id } }) {
  const settings = useMemo(() => {
    return {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  });
  const settingsGallery = useMemo(() => {
    return {
      // Optional parameters
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };
  });

  // const productDetailsPromise = getProductDetails(locale, id);
  // const productsPromise = getAllProducts(locale, 1, 8);
  // const [productDetails, products] = await Promise.all([
  //   productDetailsPromise,
  //   productsPromise,
  // ]);

  // const productName = productDetails.attributes?.ProductName;
  // const productDescreption = productDetails.attributes?.ProductDetails;
  // const productImg = productDetails.attributes?.ProductImage;
  // const otherProductImages = productDetails.attributes?.OtherImages?.data;

  // const productsData = products.data;

  return (
    // <div className="product-details-page pt-100 mb-100">
    //   <div className="container">
    //     <Product
    //       id={productDetails?.id}
    //       productName={productName}
    //       productImg={productImg}
    //       otherProductImages={otherProductImages}
    //       productDescreption={productDescreption}
    //     />

    //     <RelatedProducts relatedProducts={productsData} lang={locale} />
    //   </div>
    // </div>

    <div className="validtheme-shop-single-area default-padding">
      <div className="container">
        <div className="product-details">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-thumb">
                <div
                  id="timeline-carousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner item-box">
                    <div className="carousel-item active product-item">
                      <a
                        href="assets/img/products/1.png"
                        className="item popup-gallery"
                      >
                        <img
                          src="../../assets/img/demo/chook-feed.webp"
                          alt="Thumb"
                        />
                      </a>
                    </div>
                    <div className="carousel-item product-item">
                      <a
                        href="assets/img/products/2.png"
                        className="item popup-gallery"
                      >
                        <img
                          src="../../assets/img/demo/chook-feed.webp"
                          alt="Thumb"
                        />
                      </a>
                      {/* <span className="onsale theme">-25%</span> */}
                    </div>
                    <div className="carousel-item product-item">
                      <a
                        href="assets/img/products/3.png"
                        className="item popup-gallery"
                      >
                        <img
                          src="../../assets/img/demo/chook-feed.webp"
                          alt="Thumb"
                        />
                      </a>
                    </div>
                    <div className="carousel-item product-item">
                      <a
                        href="assets/img/products/4.png"
                        className="item popup-gallery"
                      >
                        <img
                          src="../../assets/img/demo/chook-feed.webp"
                          alt="Thumb"
                        />
                      </a>
                    </div>
                  </div>

                  {/* <!-- Carousel Indicators --> */}
                  <div className="carousel-indicators">
                    <Swiper
                      {...settingsGallery}
                      className="product-gallery-carousel swiper"
                    >
                      {/* <!-- Additional required wrapper --> */}
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div
                            className="item active"
                            data-bs-target="#timeline-carousel"
                            data-bs-slide-to="0"
                            aria-current="true"
                          >
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div
                            className="item"
                            data-bs-target="#timeline-carousel"
                            data-bs-slide-to="1"
                          >
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div
                            className="item"
                            data-bs-target="#timeline-carousel"
                            data-bs-slide-to="2"
                          >
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div
                            className="item"
                            data-bs-target="#timeline-carousel"
                            data-bs-slide-to="3"
                          >
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt=""
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>

                  {/* <!-- End Carousel Content --> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-product-contents">
                <div className="summary-top-box">
                  <div className="product-tags">
                    <a href="#">Semasme</a>
                    <a href="#">Organic</a>
                  </div>
                </div>
                <h2 className="product-title">Alfalfa</h2>
                <div className="product-meta mt-0 mb-10">
                  {/* <span className="sku">
                    <strong>SKU:</strong> BE45VGRT
                  </span> */}
                  <span className="posted-in">
                    <strong>Category:</strong>
                    <a href="#">Seeds</a> ,<a href="#">Feeds</a>,
                    <a href="#">Organic</a>
                  </span>
                </div>
                {/* <div className="price">
                  <span>
                    <del>$8.00</del>
                  </span>
                  <span>$5.00</span>
                </div>
                <div className="product-stock validthemes-in-stock">
                  <span>In Stock</span>
                </div> */}
                <p>
                  we are proud to offer our premium feed products, carefully
                  crafted to provide your animals with the highest quality
                  nutrition and support their optimal health and performance. We
                  understand that your animals are more than just pets or
                  livestock; they are an integral part of your family and
                  livelihood. That's why we have dedicated ourselves to creating
                  feed products that deliver exceptional results.
                </p>
                <div className="product-estimate-delivary mt-2">
                  <i className="fas fa-box-open"></i>
                  <strong> 2-day Delivery</strong>
                  <span>Speedy and reliable parcel delivery!</span>
                </div>
                <div className="product-purchase-list mt-4">
                  {/* <input
                    type="number"
                    id="quantity"
                    step="1"
                    name="quantity"
                    min="0"
                    placeholder="0"
                  /> */}
                  <a
                    href="#"
                    className="btn secondary btn-theme btn-sm animation"
                  >
                    Contact Us
                    <i className="fas fa-phone ml-2"></i>
                  </a>
                  {/* <div className="shop-action">
                    <ul>
                      <li className="wishlist">
                        <a href="#">
                          <span>Add to wishlist</span>
                        </a>
                      </li>
                      <li className="compare">
                        <a href="#">
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Product Bottom Info  --> */}
        <div className="single-product-bottom-info">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Tab Nav --> */}
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="description-tab-control"
                  data-bs-toggle="tab"
                  data-bs-target="#description-tab"
                  type="button"
                  role="tab"
                  aria-controls="description-tab"
                  aria-selected="true"
                >
                  Description
                </button>

                <button
                  className="nav-link"
                  id="information-tab-control"
                  data-bs-toggle="tab"
                  data-bs-target="#information-tab"
                  type="button"
                  role="tab"
                  aria-controls="information-tab"
                  aria-selected="false"
                >
                  Additional Information
                </button>

                {/* <button
                  className="nav-link"
                  id="review-tab-control"
                  data-bs-toggle="tab"
                  data-bs-target="#review-tab"
                  type="button"
                  role="tab"
                  aria-controls="review-tab"
                  aria-selected="false"
                >
                  Review
                </button> */}
              </div>
              {/* <!-- End Tab Nav --> */}
              {/* <!-- Start Tab Content --> */}
              <div className="tab-content tab-content-info" id="myTabContent">
                {/* <!-- Tab Single --> */}
                <div
                  className="tab-pane fade show active"
                  id="description-tab"
                  role="tabpanel"
                  aria-labelledby="description-tab-control"
                >
                  <p>
                    There is immense scope for organic production of vegetable
                    crops in India since the agricultural sector has enormous
                    organic resources like crop residues, livestock and other
                    bio-products from agro industries. Organic farming is
                    growing at a rapid pace among Indian farmers and
                    entrepreneurs, particularly in rainfed and hilly areas where
                    fertilizer consumption is less than 25 kg/ha/year [13].
                  </p>
                  <ul>
                    <li>Status of organic vegetable production</li>
                    <li>Feasibility of organic practices</li>
                    <li>Sustainability of organic farming</li>
                    <li>Organic certification</li>
                    <li>
                      Prospects and constraints of organic vegetable production
                    </li>
                  </ul>
                </div>
                {/* <!-- End Single --> */}

                {/* <!-- Tab Single --> */}
                <div
                  className="tab-pane fade"
                  id="information-tab"
                  role="tabpanel"
                  aria-labelledby="information-tab-control"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Weight</td>
                          <td>240 Ton</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>20 × 30 × 40 cm</td>
                        </tr>
                        <tr>
                          <td>Colors</td>
                          <td>Black, Blue, Green</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- End Tab Single --> */}

                {/* <!-- Tab Single --> */}
                {/* <div
                  className="tab-pane fade"
                  id="review-tab"
                  role="tabpanel"
                  aria-labelledby="review-tab-control"
                >
                  <h4>1 review for “Fresh Red Seedless”</h4>
                  <div className="review-items">
                    <div className="item">
                      <div className="thumb">
                        <img src="../../assets/img/farmers/1.jpg" alt="Thumb" />
                      </div>
                      <div className="info">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="review-date">April 8, 2021</div>
                        <div className="review-authro">
                          <h5>Aleesha Brown</h5>
                        </div>
                        <p>Highly recommended. Will purchase more in future.</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="thumb">
                        <img src="../../assets/img/farmers/3.jpg" alt="Thumb" />
                      </div>
                      <div className="info">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="review-date">April 8, 2021</div>
                        <div className="review-authro">
                          <h5>Sarah Albert</h5>
                        </div>
                        <p>Great product quality!</p>
                      </div>
                    </div>
                  </div>
                  <div className="review-form">
                    <h4>Add a review</h4>
                    <div className="rating-select">
                      <div className="stars">
                        <span>
                          <a className="star-1" href="#">
                            <i className="fas fa-star"></i>
                          </a>
                          <a className="star-2" href="#">
                            <i className="fas fa-star"></i>
                          </a>
                          <a className="star-3" href="#">
                            <i className="fas fa-star"></i>
                          </a>
                          <a className="star-4" href="#">
                            <i className="fas fa-star"></i>
                          </a>
                          <a className="star-5" href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                    <form action="#" className="contact-form">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group comments">
                            <textarea
                              className="form-control"
                              id="comments"
                              name="comments"
                              placeholder="Tell Us About Project *"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Name"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email*"
                              type="email"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <button type="submit" name="submit" id="submit">
                            Post Review
                          </button>
                        </div>
                      </div>
                      {/* <!-- Alert Message --> 
                      <div className="col-md-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                      </div>
                    </form>
                  </div>
                </div> */}
                {/* <!-- End Tab Single --> */}
              </div>
              {/* <!-- End Tab Content --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Product Bottom Info  --> */}

        {/* <!-- Related Product  --> */}
        <div className="related-products carousel-shadow">
          <div className="row">
            <div className="col-md-12">
              <h3>Related Products</h3>
              <Swiper
                {...settings}
                className="vt-products text-center related-product-carousel swiper"
              >
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                  {/* <!-- Single product --> */}
                  <SwiperSlide className="swiper-slide">
                    <div className="product">
                      <div className="product-contents">
                        <div className="product-image">
                          <a href="/en/products/1">
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt="Product"
                            />
                          </a>
                          <div className="shop-action">
                            <ul>
                              <li className="quick-view">
                                <a href="#">
                                  <span>Quick view</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <div className="product-tags">
                            <a href="#">Barseem</a>
                            <a href="#">Organic</a>
                          </div>
                          <h4 className="product-title">
                            <a href="/en/products/1">Alfalfa</a>
                          </h4>

                          <a href="/en/products/1" className="cart-btn">
                            <i className="fas fa-eye"></i> View Product
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <!-- Single product --> */}
                  {/* <!-- Single product --> */}
                  <SwiperSlide className="swiper-slide">
                    <div className="product">
                      <div className="product-contents">
                        <div className="product-image">
                          <a href="/en/products/1">
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt="Product"
                            />
                          </a>
                          <div className="shop-action">
                            <ul>
                              <li className="quick-view">
                                <a href="#">
                                  <span>Quick view</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <div className="product-tags">
                            <a href="#">Barseem</a>
                            <a href="#">Organic</a>
                          </div>
                          <h4 className="product-title">
                            <a href="/en/products/1">Alfalfa</a>
                          </h4>

                          <a href="/en/products/1" className="cart-btn">
                            <i className="fas fa-eye"></i> View Product
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <!-- Single product --> */}
                  {/* <!-- Single product --> */}
                  <SwiperSlide className="swiper-slide">
                    <div className="product">
                      <div className="product-contents">
                        <div className="product-image">
                          <a href="/en/products/1">
                            <img
                              src="../../assets/img/demo/chook-feed.webp"
                              alt="Product"
                            />
                          </a>
                          <div className="shop-action">
                            <ul>
                              <li className="quick-view">
                                <a href="#">
                                  <span>Quick view</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <div className="product-tags">
                            <a href="#">Barseem</a>
                            <a href="#">Organic</a>
                          </div>
                          <h4 className="product-title">
                            <a href="/en/products/1">Alfalfa</a>
                          </h4>

                          <a href="/en/products/1" className="cart-btn">
                            <i className="fas fa-eye"></i> View Product
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <!-- Single product --> */}
                  {/* <!-- Single product --> */}

                  {/* <!-- Single product --> */}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        {/* <!-- End Related Product  --> */}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
