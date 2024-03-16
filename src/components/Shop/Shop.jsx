"use client";
import { useTranslations } from "next-intl";

const Shop = () => {
  const t = useTranslations("default");
  return (
    <div className="validtheme-shop-area default-padding">
      <div className="container">
        <div className="shop-listing-contentes">
          <div className="row item-flex center">
            <div className="col-lg-7">
              <div className="content">
                {/* <!-- Tab Nav --> */}
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="grid-tab-control"
                      data-bs-toggle="tab"
                      data-bs-target="#grid-tab"
                      type="button"
                      role="tab"
                      aria-controls="grid-tab"
                      aria-selected="true"
                    >
                      <i className="fas fa-th-large"></i>
                    </button>

                    <button
                      className="nav-link"
                      id="list-tab-control"
                      data-bs-toggle="tab"
                      data-bs-target="#list-tab"
                      type="button"
                      role="tab"
                      aria-controls="list-tab"
                      aria-selected="false"
                    >
                      <i className="fas fa-th-list"></i>
                    </button>
                  </div>
                </nav>
                {/* <!-- End Tab Nav --> */}
              </div>
            </div>

            {/* <div className="col-lg-5 text-right">
              <p>Showing 1–10 of 47 results</p>
              <select name="cars" id="cars">
                <option value="volvo">Short by latest</option>
                <option value="saab">Short by Recent</option>
                <option value="mercedes">Short by Popular</option>
                <option value="audi">Short by Relevant</option>
              </select>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- Start Tab Content --> */}
            <div
              className="tab-content tab-content-info text-center"
              id="shop-tabContent"
            >
              {/* <!-- Strt Product Grid Vies --> */}
              <div
                className="tab-pane fade show active"
                id="grid-tab"
                role="tabpanel"
                aria-labelledby="grid-tab-control"
              >
                <ul className="vt-products columns-3">
                  {/* <!-- Single product --> */}
                  <li className="product">
                    <div className="product-contents">
                      <div className="product-image">
                        <a href={`/${lang}/products/1`}>
                          <img
                            src="../assets/img/demo/chook-feed.webp"
                            alt="Product"
                          />
                        </a>
                        <div className="shop-action">
                          <ul>
                            <li className="quick-view">
                              <a href="#">
                                <span>{t("Shop.quick_view")}</span>
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
                          <a href={`/${locale}/products/1`}>Alfalfa</a>
                        </h4>

                        <a href={`/${locale}/products/1`} className="cart-btn">
                          <i className="fas fa-eye"></i>
                          {t("Shop.cta")}
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* <!-- Single product --> */}
                </ul>
              </div>
              {/* <!-- End Product Grid Vies --> */}

              {/* <!-- Start Product List Vies --> */}
              <div
                className="tab-pane fade"
                id="list-tab"
                role="tabpanel"
                aria-labelledby="list-tab-control"
              >
                <ul className="vt-products colums-2">
                  {/* <!-- Single product --> */}
                  <li className="product">
                    <div className="product-contents">
                      <div className="row align-center">
                        <div className="col-lg-5 col-md-5">
                          <div className="product-image">
                            <a href={`/${locale}/products/1`}>
                              <img
                                src="../assets/img/demo/chook-feed.webp"
                                alt="Product"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                          <div className="product-caption">
                            <div className="product-tags">
                              <a href="#">Barseem</a>
                              <a href="#">Organic</a>
                            </div>
                            <h4 className="product-title">
                              <a href={`/${locale}/products/1`}>Alfalfa</a>
                            </h4>

                            <a
                              href={`/${locale}/products/1`}
                              className="cart-btn"
                            >
                              <i className="fas fa-eye"></i> {t("Shop.cta")}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <!-- Single product --> */}
                </ul>
              </div>
              {/* <!-- End Product List Vies --> */}
            </div>
            {/* <!-- End Tab Content --> */}

            {/* <!-- Pgination --> */}
            <nav className="woocommerce-pagination">
              <ul className="page-numbers" dir="ltr">
                <li>
                  <a className="previous page-numbers" href="#">
                    <i className="fas fa-angle-left"></i>
                  </a>
                </li>

                <li>
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                </li>

                <li>
                  <a className="next page-numbers" href="#">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
