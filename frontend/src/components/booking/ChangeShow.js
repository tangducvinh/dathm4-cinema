import ItemTime from "../book/ItemTime";
import moment from "moment";

const dataListShow = [
  {
    timeStart: "12:20",
  },
  {
    timeStart: "20:21",
  },
];

const ChangeShow = () => {
  return (
    <div className="bg-white h-[71px] rounded-sm my-[30px] flex items-center gap-[70px] px-[25px]">
      <h4 className="text-normal font-semibold text-[16px]">Đổi xuất chiếu</h4>

      <div className="flex items-center gap-4">
        {dataListShow?.map((item) => (
          <ItemTime
            key={item.id}
            // onClick={() => handleOnClick(item)}
            title={moment(item.timeStart).format("HH:mm")}
            // checked={item.id === currentShowId ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default ChangeShow;
