import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    { id: 1, title: "Breaking News . The new poly is annouced" },
    { id: 2, title: "Breaking Nfafews . The new poly is annouced" },
    { id: 3, title: "Breaking Nedfaws . The new poly is annouced" },
  ];
  return (
    <div className="flex justify-center items-center gap-4 bg-gray-300 py-3 my-2 mx-auto px-2 wrapper">
      <button className="btn bg-pink-500 text-white ">Latest News</button>
      <Marquee pauseOnHover={true}>
        {news.map(news => (
          <span key={news.id}>{news.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
