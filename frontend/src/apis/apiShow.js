import axios from "axios";

export const getListShow = async (data) => {
  const response = await axios.get(
    `http://localhost:5000/api/show/getAllShow`,
    { params: data }
  );

  return response.data;
};

export const getDetailShow = async (showId) => {
  const response = await axios.get(
    `http://localhost:5000/api/show/getDetailShow/${showId}`
  );

  return response.data;
};
