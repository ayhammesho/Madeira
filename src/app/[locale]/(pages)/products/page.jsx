import Shop from "@/components/Shop/Shop";

export async function generateMetadata({ params: { locale } }) {
  return {
    //   title: `${seo?.metaTitle}| Madeira`,
    //   description: seo?.metaDescription || "",
    //   keywords: seo?.keywords || "",
    //   openGraph: {
    //     images: seo?.metaImage?.data?.attributes?.url,
    //   },
    // };
    title: `Shop | Madeira`,
  };
}

async function Products({ params: { locale } }) {
  return <Shop lang={locale} />;
}

export default Products;
