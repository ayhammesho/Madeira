"use client";

import React, { useState } from "react";
import "node_modules/react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";

const HowItWorks = ({ howDoesWorkData }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="how-it-work-section mb-100">
        <div className="container">
          <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
            <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
              <div className="section-title-2">
                <h2>{howDoesWorkData?.Title}</h2>
                <p>{howDoesWorkData?.SubTitle}</p>
              </div>
              <div className="video-btn ">
                <a onClick={() => setOpen(true)} className="video-popup">
                  <i className="bi bi-play-circle" /> Watch video
                </a>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="work-process-group">
                <div className="row justify-content-center g-lg-0 gy-5">
                  <div className=" col-sm-6">
                    <div className=" text-center">
                      {/* <div className="step">
                        <span>01</span>
                      </div>
                      <div className="icon">
                        <img
                          src="../assets/img/home2/icon/loaction.svg"
                          alt=""
                        />
                      </div> */}
                      <div className="content">
                        <h3 style={{ color: "#c0923c" }}>
                          {howDoesWorkData?.FourKeyFeuture?.FeutureTitle}
                        </h3>
                        <p>
                          {howDoesWorkData?.FourKeyFeuture?.FeutureSmallContent}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-sm-6">
                    <div className="single-work-process text-center">
                      <div className="step">
                        <span>02</span>
                      </div>
                      <div className="icon">
                        <img
                          src="../assets/img/home2/icon/contact.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h6>Contact With Us</h6>
                        <p>
                          Car servicing is the regular maintenance and
                          inspection of a vehicle to ensure.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-work-process text-center">
                      <div className="step">
                        <span>03</span>
                      </div>
                      <div className="icon">
                        <img src="../assets/img/home2/icon/pay.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Pay For The Car</h6>
                        <p>
                          Car servicing is the regular maintenance and
                          inspection of a vehicle to ensure.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-work-process text-center">
                      <div className="step">
                        <span>04</span>
                      </div>
                      <div className="icon">
                        <img
                          src="../assets/img/home2/icon/recieve.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h6>Recieve The Car</h6>
                        <p>
                          Car servicing is the regular maintenance and
                          inspection of a vehicle to ensure.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={
            howDoesWorkData?.VideoLink?.includes(
              "https://www.youtube.com/embed/"
            )
              ? howDoesWorkData?.VideoLink.replace(
                  "https://www.youtube.com/embed/",
                  ""
                )
              : howDoesWorkData?.VideoLink.replace("https://youtu.be/", "")
          }
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
};

export default HowItWorks;
