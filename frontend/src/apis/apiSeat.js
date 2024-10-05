import axios from "axios";

export const getListSeat = async (roomId) => {
  const response = await axios.get(
    `http://localhost:5000/api/seat/list-seat?roomId=${roomId}`,
    {}
  );

  return response.data;
};
