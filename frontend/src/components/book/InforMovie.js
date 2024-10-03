import moment from "moment";

import { GoClock } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import ButtonChoose from "./ButtonChoose";

const dataKind = [
  {
    title: "Hài",
    link: "kkk",
  },
  {
    title: "Kinh Dị",
    link: "kkk",
  },
  {
    title: "Gật Gân",
    link: "kkk",
  },
];

const InforMovie = ({ data }) => {
  return (
    <div className="flex w-full">
      <img
        className="h-[400px] absolute rounded-sm mt-[-60px] object-contain border-[3px] border-white"
        src={data?.poster}
        alt="poster"
      ></img>
      <div className="flex flex-3"></div>

      <div className="flex flex-col flex-7 ml-8 mt-[50px]">
        <h2 className="text-black text-[30px] font-semibold">{data?.name}</h2>
        <div className="flex item-center gap-4">
          <div className="flex items-center gap-1">
            <GoClock className="text-main" />
            <span>{data?.time}</span>
          </div>

          <div className="flex items-center gap-1">
            <IoCalendarClearOutline className="text-main" />
            <span>{moment(data?.releaseYear).format("DD/MM/yyyy")}</span>
          </div>
        </div>

        <div className="flex mt-2 items-center gap-1">
          <FaStar className="text-main" size="22" />
          <span className="text-[20px] text-normal">8.9</span>
        </div>

        <div className="mt-2 text-[15px] text-[#777777]">
          Quốc gia:{" "}
          <span className="ml-3 text-normal text-[16px]">{data?.country}</span>
        </div>
        {/* <div className="mt-2 text-[15px] text-[#777777]">
          Nhà xuất bản:{" "}
          <span className="ml-3 text-normal text-[16px]">Hive Media Corp</span>
        </div> */}

        <div className="flex mt-2 gap-1 items-center">
          <p className="w-[80px] text-[14px] text-[#777777]">Thể loại:</p>
          {data?.movietypes.map((item) => (
            <ButtonChoose
              key={item?.types?.name}
              title={item?.types?.name}
              // link={`/${item.slug}`}
            />
          ))}
        </div>

        <div className="flex mt-2 gap-1 items-center flex-wrap">
          <p className="w-[80px] text-[14px] text-[#777777]">Đạo diễn:</p>
          {data?.moviedirectors.map((item) => (
            <ButtonChoose
              key={item.directors?.name}
              title={item.directors?.name}
              // link={`/${item.slug}`}
            />
          ))}
        </div>

        <div className="flex mt-2 gap-1 items-center flex-wrap">
          <p className="w-[80px] text-[14px] text-[#777777]">Diễn viên:</p>
          {data?.movieactors.map((item) => (
            <ButtonChoose
              key={item?.actors?.name}
              title={item?.actors?.name}
              // link={`/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InforMovie;
