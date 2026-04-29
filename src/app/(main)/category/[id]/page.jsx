import LeftSideBar from "@/components/HomePage/News/LeftSideBar";
import RightSideBar from "@/components/HomePage/News/RightSideBar";
import NewsCard from "@/components/shared/NewsCard";
import { getCategory, getNews } from "@/lib/data";
import React from "react";





const CategoryWiseNews = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategory();
  const newsCategories = categories.data.news_category;

  const news = await getNews(id);

  return (
    <article className="">
      <section className="grid grid-cols-[1fr_2fr_1fr] wrapper gap-5  justify-items-center ">
        <LeftSideBar categories={newsCategories} activeId={id} />
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Dragon News Home</h2>
          {news.data.map((news) => (
            <NewsCard
              key={news._id}
              className="p-4 border rounded-lg"
              news={news}
            ></NewsCard>
          ))}
        </div>

        <RightSideBar />
      </section>
    </article>
  );
};

export default CategoryWiseNews;
