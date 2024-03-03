import React from "react";

const Timeline = () => {
  return (
    <div
      className="timeline-area default-padding"
      style={{ backgroundImage: "url(assets/img/shape/21.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading">
              <h2 className="title">
                The company was established <br /> back in 2012
              </h2>
              <div className="row">
                <div className="col-xl-10 offset-xl-2">
                  <p>
                    The company works in the field of feed The company works
                    hard to provide the finest types of feed in the United Arab
                    Emirates and many Arab countries and the Arab Gulf
                    countries. We also take care of the best quality of our
                    products We grow fodder on our own farms In Egypt, Pakistan
                    and America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="timeline-items">
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>1906</h2>
                <h4>Open Farm</h4>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>1920</h2>
                <h4>Farm Remodelacion</h4>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>1925</h2>
                <h4>Grainfarmers Formed</h4>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>1930</h2>
                <h4>Start of Agriculture</h4>
              </div>
              {/* <!-- End Single Item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
