import Image from "next/image";
import brandLogo from "../../../assets/images/brandLogo.png";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "./Drop";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/redux/slices/userSlice";
import { clearAccessToken } from "@/redux/slices/accessTokenSlice";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(clearUser());
    await dispatch(clearAccessToken());
  };

  return (
    <div className="bg-[#292929] fixed top-0 lg:static w-full z-20">
      <div className="navbar lg:container mx-auto lg:h-20">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu className="text-white text-xl" />
            </label>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[10] shadow bg-base-100 rounded-sm w-52"
            >
              <Dropdown />
            </ul>
          </div>
          <div className="flex  items-center w-full ">
            <Image src={brandLogo} alt="brand-logo" height={200} width={200} />;
            <div className="hidden lg:flex items-center w-full justify-center">
              <div className="dropdown dropdown-hover">
                <label
                  tabIndex={0}
                  className="text-white font-semibold text-[12px] cursor-pointer"
                >
                  Categories
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[10]  shadow bg-base-100 rounded-sm w-52 "
                >
                  <Dropdown />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered lg:w-[400px] pr-16 rounded-sm "
            />
            <button className="btn  absolute top-0 right-0 rounded-l-none bg-transparent border-0  hover:bg-transparent ">
              <AiOutlineSearch className=" text-2xl" />
            </button>
          </div>
        </div>
        <div className="navbar-end flex gap-10">
          <div className="hidden lg:block">
            {user ? (
              <div className="flex gap-4 items-center">
                <div className="text-neutral-400 font-semibold text-[12px] flex gap-3">
                  <p className=" bg-stone-100 py-[2px] px-4 rounded-2xl">
                    {user?.fullName}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="hover:text-[#63f3d4]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                <RxAvatar className="text-3xl text-white" />
                <div className="text-neutral-400 font-semibold text-[12px] ">
                  <p className="text-white">Account</p>
                  <Link
                    href={"/account/register"}
                    className="hover:text-[#63f3d4]"
                  >
                    Register
                  </Link>
                  <span> or </span>
                  <Link
                    href={"/account/login"}
                    className="hover:text-[#63f3d4]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
          <button className="btn  bg-gradient-to-r from-[#6cf3d3]  to-[#04c3d8] border-0 rounded-sm text-white hidden lg:block">
            <Link href={"/pc-build"}> PC BUILD</Link>
          </button>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="btn bg-transparent border-0 hover:bg-transparent block lg:hidden"
          >
            <AiOutlineSearch className=" text-2xl text-white    " />
          </button>
        </div>
      </div>
      <div className={` bg-white ${showSearch ? "block lg:hidden" : "hidden"}`}>
        <div className="lg:container mx-auto relative ">
          <input
            type="text"
            placeholder="Search"
            className={`input w-full rounded-none  shadow-sm`}
          />
          <button className="btn  absolute top-0 right-0 rounded-sm border-0 bg-transparent  hover:bg-transparent ">
            <AiOutlineSearch className=" text-2xl text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
