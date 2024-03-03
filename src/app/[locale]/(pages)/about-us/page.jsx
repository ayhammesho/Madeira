"use client";

// import { getAboutPageData, getTestimonials } from "@/app/libs/getData";
import Link from "next/link";
import dynamic from "next/dynamic";
import Script from "next/script";
import About from "@/components/About Us/About/index";
import Timeline from "@/components/Home/Timeline";
import Team from "@/components/Home/Team";
import ChooseUs from "@/components/About Us/ChooseUs";
import MapChart from "@/components/MapChart/MapChart";

// export async function generateMetadata({ params: { locale } }) {
//   const aboutPageData = await getAboutPageData(locale);
//   const seo = aboutPageData?.attributes?.seo;

//   return {
//     title: `${seo?.metaTitle}| Madeira`,
//     description: seo?.metaDescription || "",
//     keywords: seo?.keywords || "",
//     openGraph: {
//       images: seo?.metaImage?.data?.attributes?.url,
//     },
//   };
// }

function AboutUs({ params: { locale } }) {
  // const aboutPageData = await getAboutPageData(locale);
  // const testimonials = await getTestimonials(locale);

  // const WelcomeSectionData = aboutPageData?.attributes?.WelcomeSection;
  // const WhyUsData = aboutPageData?.attributes?.WHYAFAQSection;
  // const galleryData = aboutPageData?.attributes?.Gallery?.Images?.data;
  // const howDoesWorkData = aboutPageData?.attributes?.HowDoesWorkSection;

  return (
    <>
      {/* <!-- Start About 
    ============================================= --> */}
      <About />
      {/* <!-- End About --> */}
      {/* <!-- Start Timeline 
    ============================================= --> */}
      <Timeline />
      {/* <!-- End Timeline --> */}
      {/* <!-- Start Choose Us 
    ============================================= --> */}
      <ChooseUs />
      {/* <!-- End Choose Us --> */}
      {/* <!-- Start Team 
    ============================================= --> */}
      <Team className="pt-150" />

      {/* <!-- End Team --> */}
    </>
  );
}

export default AboutUs;

{
  /*     
    <!-- jQuery Frameworks
    ============================================= -->
    <script src="assets/js/jquery-3.6.0.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/jquery.appear.js"></script>
    <script src="assets/js/swiper-bundle.min.js"></script>
    <script src="assets/js/progress-bar.min.js"></script>
    <script src="assets/js/circle-progress.js"></script>
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <script src="assets/js/imagesloaded.pkgd.min.js"></script>
    <script src="assets/js/magnific-popup.min.js"></script>
    <script src="assets/js/count-to.js"></script>
    <script src="assets/js/jquery.scrolla.min.js"></script>
    <script src="assets/js/ScrollOnReveal.js"></script>
    <script src="assets/js/YTPlayer.min.js"></script>
    <script src="assets/js/validnavs.js"></script>
    <script src="assets/js/gsap.js"></script>
    <script src="assets/js/ScrollTrigger.min.js"></script>
    <script src="assets/js/SplitText.min.js"></script>
    <script src="assets/js/main.js"></script> */
}
