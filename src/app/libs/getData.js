import {
  fetchData,
  fetchDataWithPopulate,
  fetchSingleData,
  fetchDataWithPagination,
  fetchDataWithPaginationAndFiltering,
} from "@/app/api/backend";

export async function getGlobalSettings(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, "global-settings", [
    "HeaderLogo",
    "FooterLogo",
    "SocialLinks",
    "WHATSAPPSETTINGS",
    "WHATSAPPSETTINGS.Image",
    "AboutUsHeroSection",
    "AboutUsHeroSection.Image",
    "ProductsHeroSection",
    "ProductsHeroSection.Image",
    "NewsHeroSection",
    "NewsHeroSection.Image",
    "ContactUsHeroSection",
    "ContactUsHeroSection.Image",
    "seo",
    "seo.metaImage",
    "seo.metaSocial ",
    "seo.metaSocial.image ",
  ]);
  // console.log(fetchedData);
  return fetchedData.data[0];
}

export async function getBlogPageData(lang, pageIndex, blogsPerPage) {
  const fetchedData = await fetchDataWithPagination(
    lang,
    "blogs-pages",
    pageIndex,
    blogsPerPage
  );

  return fetchedData;
}

export async function getCategoryOfProducts(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, "category-of-products");
  return fetchedData.data;
}

export async function getHomePageData(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, "home-pages", [
    "HeroSection",
    "HeroSection.images",
    "BrandsSection",
    "BrandsSection.images",
    "PartsSection",
    "seo",
    "seo.metaImage",
    "seo.metaSocial",
    "seo.metaSocial.image",
  ]);
  return fetchedData.data[0];
}
export async function getAboutPageData(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, "about-pages", [
    "HeroSection",
    "HeroSection.Image",
    "WelcomeSection",
    "WHYAFAQSection",
    "WHYAFAQSection.Image",
    "Gallery",
    "Gallery.Images",
    "HowDoesWorkSection",
    "HowDoesWorkSection.FourKeyFeuture",
    "seo",
    "seo.metaImage",
    "seo.metaSocial",
    "seo.metaSocial.image",
  ]);
  return fetchedData.data[0];
}

export async function getAllProducts(lang, pageIndex, productsPerPage) {
  const fetchedData = await fetchDataWithPagination(
    lang,
    "products",
    pageIndex,
    productsPerPage
  );
  return fetchedData;
}
export async function getProductsByCategories(
  lang,
  pageIndex,
  productsPerPage,
  category
) {
  const fetchedData = await fetchDataWithPaginationAndFiltering(
    lang,
    "products",
    pageIndex,
    productsPerPage,
    category
  );
  return fetchedData;
}

export async function getTestimonials(lang) {
  const fetchedData = await fetchDataWithPopulate(lang, "testimonials");
  return fetchedData.data;
}

export async function getPrivacyPage(lang) {
  const fetchedData = await fetchDataWithPopulate(
    lang,
    "privacy-policy-pages",
    ["seo", "seo.metaImage", "seo.metaSocial", "seo.metaSocial.image"]
  );
  return fetchedData.data;
}

export async function getProductDetails(lang, id) {
  const fetchedData = await fetchSingleData(lang, "products", id, [
    "ProductImage",
    "OtherImages",
    "seo",
    "seo.metaImage",
    "seo.metaSocial",
    "seo.metaSocial.image",
  ]);
  return fetchedData.data;
}

export async function getSingleBlog(lang, id) {
  const fetchedData = await fetchSingleData(lang, "blogs-pages", id, [
    "BlogImage",
    "seo",
    "seo.metaImage",
    "seo.metaSocial",
    "seo.metaSocial.image",
  ]);
  return fetchedData.data;
}

// export async function getStudentLives(lang) {
//   const fetchedData = await fetchData(lang, "student-lives");
//   return fetchedData.data;
// }

// export async function getJobs(lang) {
//   const fetchedData = await fetchData(lang, "jobs");
//   return fetchedData.data;
// }

// export async function getAllUpcomingEvents(lang) {
//   const fetchedData = await fetchData(lang, "upcoming-events");
//   return fetchedData.data;
// }

// GET THE LATEST POSTS FOR THE HOME PAGE

// export async function getFeaturedActivites(lang) {
//   const fetchedData = await fetchDataWithPopulate(lang, "university-activites");

//   const size = 3;
//   const featuredEvents = fetchedData.data.slice(0, size);
//   return featuredEvents;
// }

// export async function getFeaturedResearch(lang) {
//   const fetchedData = await fetchDataWithPopulate(
//     lang,
//     "scientific-research-postgraduate-studies"
//   );

//   const size = 2;
//   const featuredResearch = fetchedData.data.slice(0, size);
//   return featuredResearch;
// }

// ;`
// colleges-and-institutes
// university-hospitals
// news
// scientific-research-postgraduate-studies
// student-lives
// jobs
// upcoming-events
// `

// `about-pages
// blogs-pages
// category-of-products
// contact-uses
// /api/global-settings
// /api/home-pages
// products
// testimonials
// /api/privacy-policy-pages`;
