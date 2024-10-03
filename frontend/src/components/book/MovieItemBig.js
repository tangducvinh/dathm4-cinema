import { useState } from "react";

import ButtonBuy from "../common/ButtonBuy";
import { Link } from "react-router-dom";

const MovieItemBig = ({ backdrop, name, slug }) => {
  const [hoverImg, setHoverImg] = useState(false);

  return (
    <Link to={`/detail/${slug}`}>
      <div
        onMouseEnter={() => setHoverImg(true)}
        onMouseLeave={() => setHoverImg(false)}
        className="mt-4 relative w-full overflow-hidden hover:cursor-pointer"
      >
        <img
          src={backdrop}
          alt="backdrop"
          className="w-[350px] rounded-md h-[270px] object-cover"
        ></img>

        {hoverImg && (
          <div className="absolute animate-wiggle inset-0 w-[350px] h-[270px] rounded-md bg-bg-overlay flex items-center justify-center">
            <ButtonBuy />
          </div>
        )}
      </div>

      <p className="mt-2 text-overlay text-[16px] font-semibold">{name}</p>
    </Link>
  );
};

export default MovieItemBig;
