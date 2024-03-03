"use client";

import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useReducer, useRef } from "react";

function Index() {
  return (
    <>
      <div
        className="col-xl-5 col-md-3 col-sm-4 col-6 wow fadeInUp  rounded position-relative p-0 overflow-hidden shadow brand-category"
        data-wow-delay="300ms"
      >
        <Link href="#">
          <Image
            className="img-fluid category-image"
            src="/assets/img/home2/martin-katler-x5zAl7WI6u4-unsplash.jpg"
            width="1400"
            height="1300"
            alt=""
          />

          <div className=" position-absolute category-link  w-100 bottom-0 start-0  d-flex justify-content-center text-center py-3">
            <img width={60} src="assets/img/home2/icon/toyota.svg" alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Index;
