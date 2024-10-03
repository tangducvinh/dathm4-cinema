import axios from "axios";

export const getListMovie = async (status) => {
  const response = await axios.get(
    `http://localhost:5000/api/movie/getAllMovie/${status}`
  );

  return response.data;
};

export const getDetailMovie = async (slug) => {
  const response = await axios.get(
    `http://localhost:5000/api/movie/getDetailMovie/${slug}`
  );

  return response.data;
};
