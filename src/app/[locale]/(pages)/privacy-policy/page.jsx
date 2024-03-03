// import React from "react";
// import { getPrivacyPage } from "@/app/libs/getData";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";
// import { getTranslations } from "next-intl/server";

// export async function generateMetadata({ params: { locale } }) {
//   const PrivacyPageData = await getPrivacyPage(locale);
//   const seo = PrivacyPageData?.attributes?.seo?.[0];

//   return {
//     title: `${seo?.metaTitle}| Madeira`,
//     description: seo?.metaDescription || "",
//     keywords: seo?.keywords || "",
//     openGraph: {
//       images: seo?.metaImage?.data?.attributes?.url,
//     },
//   };
// }

// async function ReturnEnchange({ params: { locale } }) {
//   function formatDate(isoString) {
//     const months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     const date = new Date(isoString);
//     const day = date.getDate();
//     const monthIndex = date.getMonth();
//     const year = date.getFullYear();

//     return `${day} ${months[monthIndex]}, ${year}`;
//   }

//   const pageData = await getPrivacyPage(locale);
//   const t = await getTranslations("default");

//   return (
//     <div className="return-and-exchange-pages pt-100 mb-100">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 ">
//             <div className="update-date mb-30">
//               <h6>
//                 <i className="bi bi-caret-right-fill" /> {t("last_updated")}
//               </h6>
//               {pageData && (
//                 <p>{formatDate(pageData[0]?.attributes?.updatedAt)}</p>
//               )}
//             </div>
//           </div>
//           <div className="col-lg-12 mb-40">
//             <div className="return-and-exchange">
//               {pageData && <h4>{pageData[0]?.attributes?.PageTitle}</h4>}
//               {pageData[0] && (
//                 <BlocksRenderer
//                   content={pageData[0]?.attributes?.PageContent}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReturnEnchange;
