import React from "react";

const NowPlaying = ({ item }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 transition duration-500 hover:scale-110">
      <div className="absolute w-full h-[450px] bg-gradient-to-t from-black flex flex-col ">
        <p className="text-white font-bold text-md mt-auto text-center">
          {item.title}
        </p>
      </div>
      <img
        className="w-full h-[450px] block object-cover"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />

      <div className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

export default NowPlaying;
