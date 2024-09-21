import { useState } from 'react'
import { RiAccountPinBoxLine } from 'react-icons/ri'
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";

import NavChild from './NavChild';
import SignIn from '../login/Signin';

const data = [
    {
      icon: <RiAccountPinBoxLine size={20} />,
      name: "Tài khoản",
      value: "account",
    },
    {
      icon: <TfiMenuAlt size={20} />,
      name: "Lịch sử",
      value: "history",
    },
    {
      icon: <TbLogout2 size={20} />,
      name: "Logout",
      value: "logout",
    },
  ];
  
  const Profile = () => {
    const [showLogin, setShowLogin] = useState("null");
    const [name, setName] = useState("");
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <div className="flex gap-6 relative">
        <button>
          <IoSearchSharp size="22" color="gray" />
        </button>
  
        {name ? (
          <div
            onMouseLeave={() => setShowMenu(false)}
            onMouseEnter={() => setShowMenu(true)}
            className="flex relative items-center gap-4"
          >
            <CgProfile
              className="bg-gray-200 w-[40px] h-[40px] p-1 hover:cursor-pointer rounded-full"
              color="gray"
            />
            <p className="text-normal font-bold">{name}</p>
  
            {showMenu && (
              <div className="absolute bottom-0 left-[45px]">
                <NavChild data={data} />
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setShowLogin("signin")}
            className="text-[#777777] hover:text-main transition-all cursor-pointer"
          >
            Đăng nhập
          </button>
        )}
  
        {showLogin !== "null" && (
          <SignIn statusLogin={showLogin} onCloseLogin={setShowLogin} />
        )}
      </div>
    );
  };
  
  export default Profile;