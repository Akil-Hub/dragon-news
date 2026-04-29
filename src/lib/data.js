 export const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = res.json();
  return data;
};
 export const getNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = res.json();
  return data;
};

   export const getNewsById = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const data = await res.json()
    return data.data[0]
    
  };
