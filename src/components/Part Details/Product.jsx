"use client";
import React, { useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Product = ({
  id,
  productName,
  productImg,
  otherProductImages,
  productDescreption,
}) => {
  const [activeImage, setActiveImage] = useState(
    productImg.data?.attributes?.url
  );
  const [activeImageId, setActiveImageId] = useState(productImg.id);

  return (
    <div className="row g-lg-4 gy-5 mb-90">
      <div className="col-lg-6 position-sticky top-0 h-100 ">
        <div className="tab-content tab-content1 mb-30" id="v-pills-tabContent">
          <div
            className="tab-pane fade active show"
            id={activeImage}
            role="tabpanel"
            aria-labelledby={`${activeImage}-tab`}
          >
            <img className="img-fluid" src={activeImage} alt="" />
          </div>

          {/* {otherProductImages && (
            <div
              key={productImg.id}
              className="tab-pane fade"
              id={"v-pills-img" + productImg.id}
              role="tabpanel"
              aria-labelledby={"v-pills-img" + productImg.id + "-tab"}
            >
              <img
                className="img-fluid"
                src={process.env.NEXT_PUBLIC_BACKEND_URI + productImg.attributes?.url}
                alt=""
              />
            </div>
          )} */}
          {otherProductImages &&
            otherProductImages.map((image) => (
              <div
                key={image?.id}
                className="tab-pane fade"
                id={"v-pills-img" + image?.id}
                role="tabpanel"
                aria-labelledby={"v-pills-img" + image?.id + "-tab"}
              >
                <img
                  className="img-fluid"
                  src={image?.attributes?.url}
                  alt=""
                />
              </div>
            ))}
        </div>
        <div
          className="nav nav1 nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {otherProductImages && (
            <button
              onClick={() => {
                setActiveImage(productImg.data?.attributes?.url);
                setActiveImageId(productImg.id);
              }}
              key={productImg.id}
              className={`nav-link ${
                activeImageId == productImg.id ? "active" : ""
              }`}
              id={"v-pills-img" + productImg.id + "-tab"}
              data-bs-toggle="pill"
              data-bs-target={"v-pills-img" + productImg.id}
              type="button"
              role="tab"
              aria-controls={"v-pills-img" + productImg.id}
              aria-selected="true"
            >
              <img src={productImg.data?.attributes?.url} alt="" />
            </button>
          )}
          {otherProductImages &&
            otherProductImages.map((image) => (
              <button
                onClick={() => {
                  setActiveImage(image?.attributes?.url);
                  setActiveImageId(image?.id);
                }}
                key={image?.id}
                className={`nav-link ${
                  activeImageId == image?.id ? "active" : ""
                }`}
                id={"v-pills-img" + image?.id + "-tab"}
                data-bs-toggle="pill"
                data-bs-target={"v-pills-img" + image?.id}
                type="button"
                role="tab"
                aria-controls={"v-pills-img" + image?.id}
                aria-selected="true"
              >
                <img src={image?.attributes?.url} alt="" />
              </button>
            ))}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-details-content">
          <h2>{productName}</h2>
          <div className="description">
            <BlocksRenderer content={productDescreption} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
