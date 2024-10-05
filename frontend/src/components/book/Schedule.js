import moment from "moment";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ItemTime from "./ItemTime";
// import Notice from "../common/Notice";

const Schedule = ({ data }) => {
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = (item) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    console.log(item);
    navigate(`/booking/${item?.movieshows?.slug}`);
    localStorage.setItem("currentShow", JSON.stringify(item.id));
    // } else {
    //   setShowWarning(true);
    // }
  };

  //   const handleCloseWarning = useCallback(() => {
  //     setShowWarning(false);
  //   }, [showWarning]);

  return (
    <div className="mt-8 mb-8">
      {/* {showWarning && (
        // <Notice
        //   text={"Vui lòng thực hiện đăng nhập để có thể đặt vé"}
        //   onClose={handleCloseWarning}
        // />
      )} */}
      <h4 className="text-[16px] text-normal font-bold">
        {data[0]?.cinemahallshows.cinemahalls.name}
      </h4>

      <div className="flex items-center mt-4">
        <p className="text-normal text-[14px] w-[150px]">2D</p>

        <div className="flex gap-3 items-center">
          {data?.map((item) => (
            <ItemTime
              onClick={() => handleOnClick(item)}
              title={moment(item.timeStart).format("HH:mm")}
              key={item.id}
              slug={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
