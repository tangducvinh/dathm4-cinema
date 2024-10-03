import { IoMdCloseCircle } from "react-icons/io";
import logo from "../../assets/logo/logo-main.jpg";

const HeaderLogin = ({ onCloseLogin }) => {
  return (
    <div>
      <button
        onClick={() => onCloseLogin("null")}
        className="absolute top-[12px] right-[12px] opacity-70 hover:opacity-90"
      >
        <IoMdCloseCircle size="30" color="gray" />
      </button>
      <img src={logo} className="w-[100px] h-[100px] m-auto" alt="avatar"></img>

      <p className="text-[20px] text-normal mt-2 font-bold text-center">
        Đăng Nhập Tài Khoản
      </p>
    </div>
  );
};

export default HeaderLogin;
