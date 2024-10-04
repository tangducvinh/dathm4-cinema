import { useEffect } from "react";
import { getListSeat } from "../../apis/apiSeat";

import clsx from "clsx";
import { useState } from "react";

const listRows = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
];

const MapSeat = ({ roomId, row, column }) => {
  const [dataListSeat, setDataListSeat] = useState();
  useEffect(() => {
    const fetchListSeat = async () => {
      const response = await getListSeat(roomId);

      const newData = [];

      for (let i = 0; i < row; i++) {
        const a = response?.data?.filter(
          (item) => item.seatNumber.slice(0, 1) === listRows[i]
        );

        newData.push(a);
      }

      setDataListSeat(newData);
    };

    fetchListSeat();
  }, [roomId]);

  console.log(dataListSeat);

  return (
    <div className="bg-white">
      <div className="flex justify-between">
        <div className="w-[22px] text-[#777777] text-[18px] px-2 flex flex-col-reverse ml-4">
          {listRows.slice(0, row)?.map((item) => (
            <p key={item} className="w-full text-center mt-4 h-[22px]">
              {item}
            </p>
          ))}
        </div>
        {column && (
          <div className="flex-auto flex justify-center px-4">
            <div className="flex flex-col-reverse">
              {dataListSeat?.map((item, index) => (
                <div key={index} className="flex items-center">
                  {item?.map((subItem) => (
                    <button
                      key={subItem.id}
                      //   disabled={dataOrderedSeat.some(
                      //     (item) => item.seatId === subItem.id
                      //   )}
                      //   onClick={() => handleSelectSeat(subItem)}
                      className={clsx(
                        "w-[22px] h-[22px] ml-2 mt-4 hover:bg-main transition-all hover:text-black rounded-md text-[13px] border-[1px]"
                        // {
                        //   "bg-main text-white hover:text-white":
                        //     selectSeats.some((item) => item.id === subItem.id),
                        // },
                        // {
                        //   "bg-gray-300 text-normal hover:bg-gray-300 hover:cursor-default":
                        //     dataOrderedSeat?.some(
                        //       (item) => item.seatId === subItem.id
                        //     ),
                        // },
                        // {
                        //   invisible: subItem.status === 2,
                        // }
                      )}
                    >
                      {subItem.seatNumber.slice(1)}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-[22px] text-[#777777] text-[18px] px-2 flex flex-col-reverse mr-4">
          {listRows.slice(0, row)?.map((item) => (
            <p key={item} className="w-full text-center mt-4 h-[22px]">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-[40px]">
        <p className="text-center text-gray-300 text-semibold mb-2">Màn hình</p>

        <div className="border-t-[4px] border-t-main">
          <div className="flex items-center gap-6 h-[90px]">
            <div className="flex items-center gap-2">
              <div className="w-[25px] h-[25px] rounded-sm bg-gray-400"></div>
              <p className="text-normal text-[16px]">Ghế đã bán</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[25px] h-[25px] rounded-sm bg-main"></div>
              <p className="text-normal text-[16px]">Ghế đang chọn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSeat;
