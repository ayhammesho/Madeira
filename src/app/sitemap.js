import { getBlogPageData, getAllProducts } from "@/app/libs/getData";

export default async function sitemap() {
  const baseUrlAr = "https://Madeira.com/ar";

  // Get All news from CMS
  const news = await getBlogPageData("ar", 1, 100);
  const newsUrls =
    news?.data?.map((news) => {
      return {
        url: `${baseUrlAr}/news/${news.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all products pages
  const products = await getAllProducts("ar", 1, 100);
  const productsUrl =
    products?.data?.map((product) => {
      return {
        url: `${baseUrlAr}/singleBrand/${product.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  //
  /////////////////////////////////////////////////////////////////

  const baseUrlEn = "https://Madeira.com/en";

  // Get All news from CMS
  const newsEn = await getBlogPageData("en", 1, 100);
  const newsUrlsEn =
    newsEn?.data?.map((news) => {
      return {
        url: `${baseUrlEn}/news/${news.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // get all products pages
  const productsEn = await getAllProducts("en", 1, 100);
  const productsUrlEn =
    productsEn?.data?.map((product) => {
      return {
        url: `${baseUrlEn}/singleBrand/${product.id}`,
        lastModified: new Date(),
      };
    }) ?? [];

  /////////////////////////////////////////////////////////////////////////

  return [
    {
      url: baseUrlAr,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlAr}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlAr}/singleBrand`,
      lastModified: new Date(),
    },
    ...productsUrl,

    {
      url: `${baseUrlAr}/news`,
      lastModified: new Date(),
    },
    ...newsUrls,
    {
      url: `${baseUrlAr}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlAr}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: baseUrlEn,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlEn}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlEn}/singleBrand`,
      lastModified: new Date(),
    },
    ...productsUrlEn,
    {
      url: `${baseUrlEn}/news`,
      lastModified: new Date(),
    },
    ...newsUrlsEn,

    {
      url: `${baseUrlEn}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrlEn}/privacy-policy`,
      lastModified: new Date(),
    },
  ];
}
