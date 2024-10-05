import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import * as apiUser from "./apis/apiUser";
import { updateUser } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { isJsonString } from "./ultils/func";

const App = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    const { storageData, decoded } = handleDecoded();

    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData);
    }
  }, []);

  const handleGetDetailUser = async (id, token) => {
    try {
      const res = await apiUser.getDetailUser(id, token);
      dispatch(updateUser({ ...res?.data, access_token: token }));
    } catch {
      localStorage.removeItem("access_token");
    }
  };

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");

    let decoded;
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  apiUser.axiosJWT.interceptors.request.use(
    async function (config) {
      const currentTime = new Date();
      const { storageData, decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await apiUser.refreshToken();

        // localStorage.setItem('access_token', JSON.stringify(data?.access_token));
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return (
    <div>
      <Header />

      <Outlet />

      <div className="bg-gray-800 flex justify-center p-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
