import ItemTime from "../book/ItemTime";
import moment from "moment";
import { useEffect, useState } from 'react'
import { getListShow } from "../../apis/apiShow";


const ChangeShow = ({date, movieId, cinemaId, currentShow, setCurrentShow}) => {
  const [listShow, setListShow] = useState()

  useEffect(() => {
    // console.log({
    //   date,
    //   movieId,
    //   cinemaId
    // })

    const fetchListShow = async() => {
      const response = await getListShow({movieId, cinemaId, date})

      setListShow(response.data)

      console.log(response.data)
    }

    if (date && movieId && cinemaId) fetchListShow()
  }, [date, movieId, cinemaId])

  const handleOnClick = (item) => {
    setCurrentShow(item.id)
    localStorage.setItem("currentShow", JSON.stringify(item.id));
  }

  return (
    <div className="bg-white h-[71px] rounded-sm my-[30px] flex items-center gap-[70px] px-[25px]">
      <h4 className="text-normal font-semibold text-[16px]">Đổi xuất chiếu</h4>

      <div className="flex items-center gap-4">
        {listShow?.map((item) => (
          <ItemTime
            key={item.id}
            onClick={() => handleOnClick(item)}
            title={moment(item.timeStart).format("HH:mm")}
            checked={item.id === currentShow ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default ChangeShow;
