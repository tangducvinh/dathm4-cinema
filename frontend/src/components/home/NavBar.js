
import { useState, useEffect } from "react";
import clsx from "clsx";

import MovieContainer from "./MovieContainer";
import MenuTitle from "./MenuTitle";

const titleList = [
  {
    title: "Đang chiếu",
    value: "showing",
  },
  {
    title: "Sắp chiếu",
    value: "soon",
  },
  {
    title: "Phim IMAX",
    value: "imax",
  },
];

const movies = [
    {
        video: '2DmOv-pM1bM',
        name: 'Make rich with ghost',
        poster: 'https://cdn.galaxycine.vn/media/2024/9/18/do-anh-cong-duoc-toi-500_1726635602912.jpg',
        slug: 'kkk-dsfsdf-werer',
        status: 'showing',
    },
    {
        video: '2DmOv-pM1bM',
        name: 'Make rich with ghost',
        poster: 'https://cdn.galaxycine.vn/media/2024/8/13/transformers-500_1723544375976.jpg',
        slug: 'kkk-dsfsdf-werer',
        status: 'soon',
    }, 
    {
        video: '2DmOv-pM1bM',
        name: 'Make rich with ghost',
        poster: 'https://cdn.galaxycine.vn/media/2024/9/27/minh-hon-500_1727429489854.jpg',
        slug: 'kkk-dsfsdf-werer',
        status: 'imax',
    }
    
]

const NavBar = () => {
  const [currentStatus, setCurrentStatus] = useState(
    titleList[0].value
  );

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

      <MovieContainer
        data={movies.filter((item) => item.status === currentStatus)}
      />
    </div>
  );
};

export default NavBar;