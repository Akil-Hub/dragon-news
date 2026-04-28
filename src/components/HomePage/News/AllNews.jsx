import React from "react";

const AllNews = ({ news }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">Dragon News Home</h2>
      {news.map((item) => (
        <div className="p-4 border rounded-lg ">{item.title}</div>
      ))}
    </div>
  );
};

export default AllNews;
