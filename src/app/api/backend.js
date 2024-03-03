const qs = require("qs");

export async function fetchData(lang, endpoint) {
  try {
    const url = `https://admin.afaqglobal.com/api/${endpoint}?locale=${lang}`;
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}

export async function fetchDataWithPopulate(
  lang,
  endpoint,
  populateArray = "*"
) {
  const query = qs.stringify(
    {
      locale: [lang],
      populate: populateArray,
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  try {
    const url = `https://admin.afaqglobal.com/api/${endpoint}?${query}`;

    const res = await fetch(url, {
      next: { revalidate: 10 },
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}
export async function fetchSingleData(lang, endpoint, id, populateArray = "*") {
  const query = qs.stringify(
    {
      locale: [lang],
      populate: populateArray,
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  try {
    const url = `https://admin.afaqglobal.com/api/${endpoint}/${id}?${query}`;
    const res = await fetch(url, {
      next: { revalidate: 10 },
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}

export async function fetchDataWithPagination(
  lang,
  endpoint,
  pageIndex,
  pageSize
) {
  try {
    const url = `https://admin.afaqglobal.com/api/${endpoint}?populate=*&locale=${lang}&pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}`;
    console.log(url);
    const res = await fetch(url, {
      next: { revalidate: 10 },
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}

// &filters[$and][0][artwork_art_type][name][$eq]=${artworkArtTypeValue}

export async function fetchDataWithPaginationAndFiltering(
  lang,
  endpoint,
  pageIndex,
  pageSize,
  category
) {
  const query = qs.stringify(
    {
      locale: [lang],
      populate: "*",
      pagination: {
        page: pageIndex,
        pageSize: pageSize,
      },
      filters: {
        category_of_product: {
          CategoryTitle: {
            $contains: category,
          },
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  try {
    const url = `https://admin.afaqglobal.com/api/${endpoint}?${query}`;
    // console.log(url);
    const res = await fetch(url, {
      next: { revalidate: 10 },
      // next: { cache: "no-cache" },
    });
    if (!res.ok) {
      throw new Error("Error in request");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    // Handle the error
    console.error("An error occurred:", err);
  }
}
