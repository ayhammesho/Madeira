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
    <div>
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
    </div>
  );
}

export default AboutUs;
