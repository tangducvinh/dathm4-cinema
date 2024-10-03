import axios from 'axios'

export const userRegister = async (data) => {
    const response = await fetch(`http://localhost:5000/api/user/sign-up`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

    return response.json()
}

export const userLogin = async (data) => {
  const response = await axios.post("http://localhost:5000/api/user/sign-in", data)

  return response.data
}