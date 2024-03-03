"use client";

import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-circle-progress/dist/circle-progress.js";
import MapChart from "@/components/MapChart/MapChart";

const ChooseUs = () => {
  useEffect(() => {
    /* ==================================================
		    _Progressbar Init
		 ===============================================*/
    function animateElements() {
      $(".progressbar").each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find(".circle").attr("data-percent");
        var animate = $(this).data("animate");
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data("animate", true);
          $(this)
            .find(".circle")
            .circleProgress({
              // startAngle: -Math.PI / 2,
              value: percent / 100,
              size: 130,
              thickness: 3,
              lineCap: "round",
              emptyFill: "#f1f1f1",
              fill: {
                gradient: ["#49a760", "#49a760"],
              },
            })
            .on(
              "circle-animation-progress",
              function (event, progress, stepValue) {
                $(this)
                  .find("strong")
                  .text((stepValue * 100).toFixed(0) + "%");
              }
            )
            .stop();
        }
      });
    }

    animateElements();
    $(window).scroll(animateElements);
  }, []);
  return (
    <div className="choose-us-style-three-area default-padding bg-dark text-light">
      <div className="illustration-bottom h-50 ">
        <img src="../assets/img/demo/feeds.png" alt="Image Not Found" />
      </div>
      {/*  */}
      <div
        className="shape overflow-hidden "
        style={{ backgroundImage: "url(../assets/img/demo/choose-us.jpg)" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 pl-60 pl-md-15 pl-xs-15">
            <h2 className="title">
              Healthy life with <br /> fresh products
            </h2>
            <p>
              Consume ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, illo ullam harum et fuga suscipit quibusdam sapiente.
              Corrupti ut consequatur magni minus! Iusto eos consectetur
              similique minus culpa odio temporibus.
            </p>
            <div className="list-grid">
              <div className="achivement-content">
                <div className="item">
                  <div className="progressbar">
                    <div className="circle" data-percent="87">
                      <strong></strong>
                    </div>
                  </div>
                  <h4>Organic Solutions</h4>
                </div>
              </div>
              <ul className="list-item">
                <li>Biodynamic food</li>
                <li>Organic gardening</li>
                <li>Organic food certification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
