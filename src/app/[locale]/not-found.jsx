import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <div className="error-page-area default-padding text-center bg-cover">
        {/* <!-- Shape --> */}
        <div
          className="shape-left"
          style="background: url(assets/img/shape/44-left.png);"
        ></div>
        <div
          className="shape-right"
          style="background: url(assets/img/shape/44-right.png);"
        ></div>
        {/* <!-- End Shape --> */}
        <div className="container">
          <div className="error-box">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h1>404</h1>
                <h2>Sorry Page Was Not Found!</h2>
                <p>
                  Household shameless incommode at no objection behaviour.
                  Especially do at he possession insensible sympathize
                  boisterous it. Songs he on an widen me event truth.
                </p>
                <Link className="btn mt-20 btn-md btn-theme" href="index.html">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
