"use client";

import $ from "jquery";
import { useEffect } from "react";
import "magnific-popup/dist/jquery.magnific-popup.min.js";
import { useTranslations } from "next-intl";

const ChooseUs = () => {
  const t = useTranslations("default");
  useEffect(() => {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Jquery Apear
    $.fn.appear = function (fn, options) {
      var settings = $.extend(
        {
          //arbitrary data to pass to fn
          data: undefined,

          //call fn only on the first appear?
          one: true,

          // X & Y accuracy
          accX: 0,
          accY: 0,
        },
        options
      );

      return this.each(function () {
        var t = $(this);

        //whether the element is currently visible
        t.appeared = false;

        if (!fn) {
          //trigger the custom event
          t.trigger("appear", settings.data);
          return;
        }

        var w = $(window);

        //fires the appear event when appropriate
        var check = function () {
          //is the element hidden?
          if (!t.is(":visible")) {
            //it became hidden
            t.appeared = false;
            return;
          }

          //is the element inside the visible window?
          var a = w.scrollLeft();
          var b = w.scrollTop();
          var o = t.offset();
          var x = o.left;
          var y = o.top;

          var ax = settings.accX;
          var ay = settings.accY;
          var th = t.height();
          var wh = w.height();
          var tw = t.width();
          var ww = w.width();

          if (
            y + th + ay >= b &&
            y <= b + wh + ay &&
            x + tw + ax >= a &&
            x <= a + ww + ax
          ) {
            //trigger the custom event
            if (!t.appeared) t.trigger("appear", settings.data);
          } else {
            //it scrolled out of view
            t.appeared = false;
          }
        };

        //create a modified fn with some additional logic
        var modifiedFn = function () {
          //mark the element as visible
          t.appeared = true;

          //is this supposed to happen only once?
          if (settings.one) {
            //remove the check
            w.unbind("scroll", check);
            var i = $.inArray(check, $.fn.appear.checks);
            if (i >= 0) $.fn.appear.checks.splice(i, 1);
          }

          //trigger the original fn
          fn.apply(this, arguments);
        };

        //bind the modified fn to the element
        if (settings.one) t.one("appear", settings.data, modifiedFn);
        else t.bind("appear", settings.data, modifiedFn);

        //check whenever the window scrolls
        w.scroll(check);

        //check whenever the dom changes
        $.fn.appear.checks.push(check);

        //check now
        check();
      });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {
      checks: [],
      timeout: null,

      //process the queue
      checkAll: function () {
        var length = $.fn.appear.checks.length;
        if (length > 0) while (length--) $.fn.appear.checks[length]();
      },

      //check the queue asynchronously
      run: function () {
        if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
        $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
      },
    });

    //run checks when these methods are called
    $.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (i, n) {
        var old = $.fn[n];
        if (old) {
          $.fn[n] = function () {
            var r = old.apply(this, arguments);
            $.fn.appear.run();
            return r;
          };
        }
      }
    );

    // COUNT TO Library
    $.fn.countTo = function (options) {
      options = options || {};

      return $(this).each(function () {
        // set options for current element
        var settings = $.extend(
          {},
          $.fn.countTo.defaults,
          {
            from: $(this).data("from"),
            to: $(this).data("to"),
            speed: $(this).data("speed"),
            refreshInterval: $(this).data("refresh-interval"),
            decimals: $(this).data("decimals"),
          },
          options
        );

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;

        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data("countTo") || {};

        $self.data("countTo", data);

        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        // initialize the element with the starting value
        render(value);

        function updateTimer() {
          value += increment;
          loopCount++;

          render(value);

          if (typeof settings.onUpdate == "function") {
            settings.onUpdate.call(self, value);
          }

          if (loopCount >= loops) {
            // remove the interval
            $self.removeData("countTo");
            clearInterval(data.interval);
            value = settings.to;

            if (typeof settings.onComplete == "function") {
              settings.onComplete.call(self, value);
            }
          }
        }

        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };

    $.fn.countTo.defaults = {
      from: 0, // the number the element should start at
      to: 0, // the number the element should end at
      speed: 1000, // how long it should take to count between the target numbers
      refreshInterval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      formatter: formatter, // handler for formatting the value before rendering
      onUpdate: null, // callback method for every time the element is updated
      onComplete: null, // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }

    /* ==================================================
		    # Fun Factor Init
		===============================================*/
    $(".timer").countTo();
    $(".fun-fact").appear(
      function () {
        $(".timer").countTo();
      },
      {
        accY: -100,
      }
    );
  }, []);

  return (
    <div className="choose-us-style-two-area overflow-hidden default-padding-top">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 pr-100 pr-md-15 pr-xs-15 pb-120 pb-md-60 pb-xs-60">
            <ul className="list-simple text-light">
              <li>
                <h4>{t("Home.choose_us_list_title_1")}</h4>
                <p>{t("Home.choose_us_list_desc_1")}</p>
              </li>
              <li>
                <h4> {t("Home.choose_us_list_title_2")}</h4>
                <p>{t("Home.choose_us_list_desc_2")}</p>
              </li>
              <li>
                <h4>{t("Home.choose_us_list_title_3")} </h4>
                <p>{t("Home.choose_us_list_desc_3")}</p>
              </li>
            </ul>
          </div>
          <div className="col-xl-5  col-lg-6">
            <div className="choose-us-style-two-content">
              <h4 className="sub-title"> {t("Home.choose_us_subtitle")}</h4>
              <h2 className="title"> {t("Home.choose_us_title")} </h2>
              <div className="choose-us-style-two-info">
                <div className="content">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="25" data-speed="2000">
                        38
                      </div>
                      <div className="operator">K</div>
                    </div>
                    <span className="medium">
                      {t("Home.choose_us_counter_title_1")}{" "}
                    </span>
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="32" data-speed="2000">
                        28
                      </div>
                      <div className="operator">M</div>
                    </div>
                    <span className="medium">
                      {t("Home.choose_us_counter_title_2")}{" "}
                    </span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/img/thumb/4.jpg" alt="Image Not Found" />
                  <a
                    href="https://youtu.be/eNCo65tFvFE?si=oXLymu0IZIYVCW0m"
                    className="popup-youtube video-play-button"
                  >
                    <i className="fas fa-play"></i>
                    <div className="effect"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
