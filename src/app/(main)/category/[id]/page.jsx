import AllNews from '@/components/HomePage/News/AllNews';
import LeftSideBar from '@/components/HomePage/News/LeftSideBar';
import RightSideBar from '@/components/HomePage/News/RightSideBar';
import React from 'react'

const getCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = res.json();
  return data;
};
const getNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = res.json();
  return data;
};
const CategoryWiseNews = async({params}) => {
    const {id} = await params


      const categories = await getCategory();
  const newsCategories = categories.data.news_category;

  const news = await getNews(id)

    console.log(id)
    console.log(news)
  return (
   <article className="">
      <section className="grid grid-cols-[1fr_2fr_1fr] wrapper  justify-items-center ">
     <LeftSideBar categories={newsCategories} activeId={id}/>
         <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Dragon News Home</h2>
          {news.data.map((item) => (
            <div key={item._id} className="p-4 border rounded-lg ">{item.title}</div>
          ))}
        </div>

     <RightSideBar/>
      </section>
    </article>
  )
}

export default CategoryWiseNews