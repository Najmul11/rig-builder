import Image from "next/image";
import React from "react";
import brandLogo from "../../../assets/images/brandLogo.png";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { PiCpuLight } from "react-icons/pi";
import { MdOutlineLogout, MdOutlineManageAccounts } from "react-icons/md";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/redux/slices/userSlice";
import { clearAccessToken } from "@/redux/slices/accessTokenSlice";

const Footer = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(clearUser());
    await dispatch(clearAccessToken());
  };

  return (
    <div className="bg-[#292929] mb-10 lg:mb-0">
      <footer className="footer p-10  text-white lg:container lg:mx-auto">
        <aside>
          <Image src={brandLogo} alt="brand-logo" height={200} width={200} />
          <p className="font-semibold">RIG Build Ltd.</p>
          <p className="text-neutral-400 w-72">
            Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
            1000
          </p>

          <div className="grid grid-flow-col gap-4">
            <AiOutlineTwitter className="text-3xl text-[#04c3d8] cursor-pointer" />
            <AiFillFacebook className="text-3xl text-[#04c3d8] cursor-pointer" />
            <AiFillYoutube className="text-3xl text-[#04c3d8] cursor-pointer" />
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Email"
                className="input w-full pr-16 input-sm rounded-sm text-black"
              />
              <button className="btn btn-sm rounded-sm bg-[#04c3d8] border border-[#04c3d8] absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className="px-5 py-3 fixed bottom-0  bg-[#292929] w-full lg:hidden shadow-sm shadow-white">
        <div className="flex justify-between text-white text-center ">
          {user ? (
            <button className="text-[12px] ">
              <MdOutlineManageAccounts className="text-3xl text-[#04c3d8] z-50 mx-auto" />
              Profile
            </button>
          ) : (
            <Link href={"/account/login"} className="text-[12px] ">
              <MdOutlineManageAccounts className="text-3xl text-[#04c3d8] z-50 mx-auto" />
              Account
            </Link>
          )}

          <Link href={"/pc-build"} className="text-[12px] ">
            <PiCpuLight className="text-3xl text-[#04c3d8] z-50 mx-auto" />
            PC Builder
          </Link>
          {user && (
            <button onClick={handleLogout} className="text-[12px] ">
              <MdOutlineLogout className="text-3xl text-[#04c3d8] z-50 mx-auto" />
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
