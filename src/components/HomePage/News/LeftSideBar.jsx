import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div className="">
      <h2 className="pb-5 text-2xl font-semibold">All Categories</h2>

      <ul className="flex flex-col text-xl font-semibold gap-3">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`  p-3 rounded-lg ${category.category_id === activeId ? "bg-purple-700 text-white" : "bg-gray-100 hover:bg-gray-300"}`}
          >
            <Link href={`/category/${category.category_id}`} className="block">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
