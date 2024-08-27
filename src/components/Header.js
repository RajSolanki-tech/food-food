import { useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-50 shadow-lg">
      <div className="logo-container p-4 ml-8">
        <Link to={"/"}>
          {" "}
          <img
            src={logo}
            className="w-24 cursor-pointer rounded-[50px]"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center mr-8">
        <ul className="flex font-semibold text-lg">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
