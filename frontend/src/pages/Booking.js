import ChangeShow from "../components/booking/ChangeShow";
import { useEffect, useState } from "react";
import moment from "moment";

import { getDetailShow } from "../apis/apiShow";
import MapSeat from "../components/booking/MapSeat";
import InforShow from "../components/booking/InforShow";
import Loading from '../components/common/Loading'

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

    if (currentShow) fetchDetailShow();
  }, [currentShow]);

  // console.log(detailShow?.cinemahallshows.id);

  return (
    <div className="bg-gray-200 pb-[100px]">
      <div className="w-main flex mx-auto gap-6">
        <div className="flex-7">
          <ChangeShow setCurrentShow={setCurrentShow} currentShow={currentShow} movieId={detailShow?.idMovie} cinemaId={detailShow?.cinemahallshows.idCinema} date={moment(detailShow?.timeStart).format('yyyy-MM-DD')}/>
          <MapSeat
            roomId={detailShow?.cinemahallshows?.id}
            row={detailShow?.cinemahallshows?.row}
            column={detailShow?.cinemahallshows?.col}
          />
        </div>
        <div className="flex-4">
          <InforShow cinemaName={detailShow?.cinemahallshows?.cinemahalls?.name} roomName={detailShow?.cinemahallshows?.name} poster={detailShow?.movieshows?.poster} timeStart={detailShow?.timeStart} name={detailShow?.movieshows?.name} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
