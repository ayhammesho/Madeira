"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Timeline = () => {
  const t = useTranslations("default");
  return (
    <div
      className="timeline-area default-padding"
      style={{ backgroundImage: "url(assets/img/shape/21.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading">
              <h2 className="title">{t("About.timeline_title")}</h2>
              <div className="row">
                <div className="col-xl-10 offset-xl-2">
                  <p>{t("About.timeline_desc")}</p>
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
                <h2> {t("About.timeline_year_1")} </h2>
                <h4>{t("About.timeline_evnet_1")} </h4>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>{t("About.timeline_year_2")} </h2>
                <h4>{t("About.timeline_evnet_2")} </h4>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>{t("About.timeline_year_3")} </h2>
                <h4>{t("About.timeline_evnet_3")} </h4>
              </div>
              {/* <!-- End Single Item --> */}
              {/* <!-- Single Item --> */}
              <div className="timeline-item">
                <h2>{t("About.timeline_year_4")} </h2>
                <h4>{t("About.timeline_evnet_4")} </h4>
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
