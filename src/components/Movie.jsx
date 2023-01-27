import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 transition duration-500 hover:scale-110">
      <img
        className="w-full h-full block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div
        className="absolute top-0 left-0 w-full h-full  "
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {hover ? (
          <p className="white-space-normal text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
            {like ? (
              <FaHeart className=" absolute top-4 left-4 text-red-400" />
            ) : (
              <FaRegHeart className=" absolute top-4 left-4 text-red-400" />
            )}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Movie;
