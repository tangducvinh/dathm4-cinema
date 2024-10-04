import ChangeShow from "../components/booking/ChangeShow";
import { useEffect, useState } from "react";

import { getDetailShow } from "../apis/apiShow";
import MapSeat from "../components/booking/MapSeat";
import InforShow from "../components/booking/InforShow";

const Booking = () => {
  const [currentShow, setCurrentShow] = useState();
  const [detailShow, setDetailShow] = useState();

  // get current show from local storage
  useEffect(() => {
    let showId = localStorage.getItem("currentShow");
    if (showId) setCurrentShow(JSON?.parse(showId));
  }, []);

  // get detail show
  useEffect(() => {
    const fetchDetailShow = async () => {
      const response = await getDetailShow(currentShow);

      setDetailShow(response.data);
    };

    fetchDetailShow();
  }, [currentShow]);

  // console.log(detailShow?.cinemahallshows.id);
  console.log(detailShow);

  return (
    <div className="bg-gray-200">
      <div className="w-main flex mx-auto gap-6">
        <div className="flex-7">
          <ChangeShow />
          <MapSeat
            roomId={detailShow?.cinemahallshows.id}
            row={detailShow?.cinemahallshows?.row}
            column={detailShow?.cinemahallshows?.col}
          />
        </div>
        <div className="flex-4">
          <InforShow />
        </div>
      </div>
    </div>
  );
};

export default Booking;
