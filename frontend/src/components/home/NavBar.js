import { useState, useEffect } from "react";
import clsx from "clsx";

import MovieContainer from "./MovieContainer";
import MenuTitle from "./MenuTitle";
import { getListMovie } from "../../apis/apiMovie";

const titleList = [
  {
    title: "Đang chiếu",
    value: "showing",
  },
  {
    title: "Sắp chiếu",
    value: "soon",
  },
  // {
  //   title: "Phim IMAX",
  //   value: "imax",
  // },
];

const NavBar = () => {
  const [currentStatus, setCurrentStatus] = useState(titleList[0].value);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchGetListMovie = async () => {
      const movies = await getListMovie(currentStatus);

      setMovies(movies.data);
    };

    fetchGetListMovie();
  }, [currentStatus]);

  return (
    <div className="w-main mx-auto mt-10">
      <div className="flex items-center mb-[30px]">
        <MenuTitle title={"PHIM"} />

        <ul className="flex items-center gap-8">
          {titleList.map((item) => (
            <li
              key={item.value}
              onClick={() => setCurrentStatus(item.value)}
              className={clsx(
                "font-bold relative text-[18px] hover:text-forcus cursor-pointer transition-all",
                {
                  "opacity-100 text-forcus": currentStatus === item.value,
                  "text-overlay opacity-60": currentStatus !== item.value,
                }
              )}
            >
              {item.title}
              {currentStatus === item.value && (
                <div className="w-[30px] absolute bg-forcus transition-all h-[2px] left-[50%] translate-x-[-50%]"></div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <MovieContainer data={movies} />
    </div>
  );
};

export default NavBar;
