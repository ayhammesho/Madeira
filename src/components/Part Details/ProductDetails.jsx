import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useTranslations } from "next-intl";

const ProductDetails = ({ productDescreption }) => {
  const t = useTranslations("default");
  return (
    <div className="row mb-90">
      <div className="col-lg-12">
        <div
          className="nav nav2 nav  nav-pills"
          id="v-pills-tab2"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="false"
          >
            {t("Products.product_details")}
          </button>
        </div>
        <div className="tab-content tab-content2" id="v-pills-tabContent2">
          <div
            className="tab-pane fade active show"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="description">
              <BlocksRenderer content={productDescreption} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
