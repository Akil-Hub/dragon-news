import RightSideBar from "@/components/HomePage/News/RightSideBar";
import { getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const data = await getNewsById(id);

  return {
    title: data.title,
    description: data.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsById(id);

  const { title, details, image_url, category_id } = news;

  return (
    <section className="grid grid-cols-[3fr_1fr] gap-8 wrapper">
      <article className="w-full mx-auto px-4 py-6">
        {/* Big Image */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] relative mb-6">
          {image_url?.trim() && (
            <Image
              src={image_url || null}
              alt={title}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          )}
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-xs sm:text-base  mb-8 line-clamp-6 ">
          {details}
        </p>

        {/* Button */}
        <div className="flex justify-start">
          <Link
            href={`/category/${category_id}`}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm sm:text-base font-semibold hover:bg-blue-700 transition"
          >
            ← All News in this Category
          </Link>
        </div>
      </article>
      <RightSideBar />
    </section>
  );
};

export default NewsDetailsPage;
