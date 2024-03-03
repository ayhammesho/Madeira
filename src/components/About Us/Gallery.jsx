"use client";

import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { useTranslations } from "next-intl";

const Gallery = ({ galleryData }) => {
  const t = useTranslations("default");
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });

  const images = galleryData.map((image, index) => ({
    id: index,
    imageBig: image?.attributes?.url,
  }));

  return (
    <>
      <div className="drivco-gallery mb-100">
        <div className="container">
          <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12">
              <div className="section-title1 text-center">
                <h2>{t("Gallery.title")}</h2>
                {/* <h2>{gallery.title}</h2> */}
              </div>
            </div>
          </div>
          <div className="row g-4 mb-50">
            {galleryData.map((image, index) => (
              <div
                key={image?.id}
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="gallery-item">
                  <img
                    className="img-fluid"
                    src={image?.attributes?.url}
                    alt="gallery"
                    onClick={() =>
                      setOpenimg({ openingState: true, openingIndex: index })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12 d-flex justify-content-center">
              {/* <div className="view-more-btn">
                <a className="primary-btn3" href="#">
                  View More
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        className="img-fluid"
        open={isOpenimg.openingState}
        plugins={[Fullscreen]}
        index={isOpenimg.openingIndex}
        close={() => setOpenimg(false)}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        slides={images.map(function (elem) {
          return { src: elem.imageBig };
        })}
      />
    </>
  );
};

export default Gallery;
