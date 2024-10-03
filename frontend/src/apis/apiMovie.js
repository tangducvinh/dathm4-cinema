
import axios from 'axios'

export const getListMovie = async(status) => {
    const response = await axios.get(`http://localhost:5000/api/movie/getAllMovie/${status}`)

    return response.data
}