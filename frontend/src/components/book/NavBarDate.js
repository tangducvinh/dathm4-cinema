import { useState, useEffect } from "react";
import moment from "moment";

import ItemDate from "./ItemDate";
import { convertDay } from "../ultis/covertDay";
import Schedule from "./Schedule";
import { getListShow } from "../../apis/apiShow";

const NavBarDate = ({ listCities, movieId }) => {
  const [dateChoose, setDateChoose] = useState(0);
  const [dataDate, setDataDate] = useState([]);
  const [currentCity, setCurrentCity] = useState(0);
  const [listCinemas, setListCinemas] = useState([]);
  const [currentCinema, setCurrentCinema] = useState(0);
  const [dataSchedule, setDataSchedule] = useState([]);

  // generate 3 days next
  useEffect(() => {
    const array = [];

    for (let i = 0; i < 5; i++) {
      const now = new Date();
      const current = new Date(now.setDate(now.getDate() + i));
      array.push({
        title: convertDay(current.getDay()),
        date: current,
      });
    }

    setDataDate(array);
  }, []);

  // console.log(moment(dataDate[dateChoose].date).format("yyyy-MM-DD"));
  // console.log(movieId);

  useEffect(() => {
    const fetchListShow = async () => {
      const response = await getListShow({
        movieId,
        date: moment(dataDate[dateChoose]?.date).format("yyyy-MM-DD"),
      });

      console.log({ response });

      const listIdCinema = [];

      // get list distinct cinemaId
      response?.data?.forEach((item) => {
        if (
          !listIdCinema.some(
            (cinemaId) => cinemaId === item.cinemahallshows.cinemahalls.id
          )
        ) {
          listIdCinema.push(item.cinemahallshows.cinemahalls.id);
        }
      });

      // filter show follow cinema
      const newData = [];
      listIdCinema.forEach((item) => {
        const a = response?.data?.filter(
          (subItem) => subItem.cinemahallshows.cinemahalls.id === item
        );
        newData.push(a);
      });

      setDataSchedule(newData);
    };

    fetchListShow();
  }, [movieId]);

  console.log(dataSchedule);

  return (
    <div>
      <div className="flex mt-6 items-center justify-between border-b-[3px] pb-4 border-b-forcus">
        <div className="px-[44px] flex items-center gap-4">
          {dataDate?.map((item, index) => (
            <ItemDate
              index={index}
              key={index}
              title={item.title || ""}
              date={moment(item.date).format("DD/MM")}
              dateChoose={dateChoose}
              onDateChoose={setDateChoose}
            />
          ))}
        </div>
        {/* <div className="flex items-center gap-2">
          <select
            onChange={(e) => setCurrentCity(Number(e.target.value))}
            id="countries"
            className="border hover:cursor-pointer border-gray-300 outline-none text-gray-900 p-2 text-[16px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[170px]"
          >
            <option value={0}>Toàn quốc</option>
            {listCities?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            id="countries"
            className="border hover:cursor-pointer border-gray-300 outline-none text-gray-900 p-2 text-[16px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[170px]"
            onChange={(e) => setCurrentCinema(Number(e.target.value))}
          >
            <option value={0}>Tất cả các rạp</option>
            {listCinemas?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div> */}
      </div>

      {dataSchedule.length === 0 ? (
        <div className="h-[300px] mt-8 flex items-center justify-center">
          Không có suất chiếu nào!
        </div>
      ) : (
        <div className="min-h-[300px]">
          {dataSchedule?.map((item, index) => (
            <Schedule data={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarDate;
