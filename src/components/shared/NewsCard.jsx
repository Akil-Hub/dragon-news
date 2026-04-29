import Image from "next/image";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function NewsCard({ news }) {
  const {
    _id,
    title,
    details,
    image_url,
    rating,
    total_view,
    author,
  } = news;

  return (
    <div className="w-full max-w-full sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-2xl shadow-md border p-4 bg-white hover:shadow-xl transition duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={author?.img}
          alt={author?.name || "author image"}
          width={40}
          height={40}
          className="rounded-full object-cover "
        />
        <div className="min-w-0">
          <h4 className="text-sm sm:text-base font-semibold truncate">
            {author?.name}
          </h4>
          <p className="text-xs text-gray-500">
            {new Date(author?.published_date).toDateString()}
          </p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-2 line-clamp-2">
        {title}
      </h2>

      {/* Image */}
      <div className="w-full relative mb-3 h-44 sm:h-52 md:h-56 lg:h-60">
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
        {details}
      </p>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
          ⭐ {rating?.number}
          <span className="text-xs text-gray-500 ml-1">
            ({rating?.badge})
          </span>
        </div>

        {/* Views + Button */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Eye size={16} />
            {total_view}
          </div>

          <Link
            href={`/news/${_id}`}
            className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
