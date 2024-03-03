import React from "react";

const Feature = () => {
  return (
    <div
      className="feature-style-one-area default-padding"
      style={{ backgroundImage: "url(assets/img/shape/18.jpg)" }}
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-3 col-lg-6">
            <div className="feature-style-one-item">
              <img src="assets/img/demo/Feature-1.jpg" alt="Image Not Found" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 pl-50 pr-50 pl-md-15 pr-md-15 pl-xs-15 pr-xs-15">
            <div className="feature-style-one-info">
              <h2 className="title">
                Best Feeds <br /> Agriculture Firms
              </h2>
              <p>
                At Madeira Farm Seeds, we believe in the power of sustainable
                agriculture. That's why we promote and support practices that
                prioritize soil health, biodiversity, and environmental
                stewardship. We strive to source seeds that are produced using
                sustainable methods, such as organic farming, and we are
                continually exploring new ways to minimize our ecological
                footprint.
              </p>
              <ul className="item-list">
                <li>Best Quality Standards</li>
                <li>Natural Healthy Products</li>
              </ul>
              <a
                className="btn btn-theme mt-30 btn-md radius animation"
                href="en/about-us"
              >
                Discover More
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12">
            <div className="featured-product">
              {/* <!-- Single Item --> */}
              <div className="product-list-item">
                <a href="services-details.html">
                  <img src="assets/img/demo/wheat.png" alt="Icon" />
                  <h5>Wheat</h5>
                </a>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="product-list-item">
                <a href="services-details.html">
                  <img src="assets/img/demo/barley.png" alt="Icon" />
                  <h5>Barley</h5>
                </a>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="product-list-item">
                <a href="services-details.html">
                  <img src="assets/img/demo/sesame.png" alt="Icon" />
                  <h5>Seeds</h5>
                </a>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}

              {/* <!-- End Single Item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
