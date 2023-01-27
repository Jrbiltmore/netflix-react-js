import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
import NowPlaying from "./NowPlaying";

const BigRow = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white text-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="text-white left-0 absolute cursor-pointer hidden z-10 group-hover:block absolute  bg-black bg-opacity-50 h-full"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <NowPlaying item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          className="text-white right-0 absolute cursor-pointer hidden z-10 group-hover:block  bg-black bg-opacity-50 h-full"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default BigRow;
