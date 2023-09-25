import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="lg:container mx-auto flex lg:justify-center ">
      <div className="px-2 mt-10 lg:mt-20 w-full lg:w-96">
        <h1 className="font-medium text-lg py-4">Register Account </h1>
        <form className="w-full">
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
            />
          </div>
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
            />
          </div>
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
            />
            <div className="flex justify-end">
              <label className="label">
                <Link
                  href="/account/login"
                  className="label-text-alt link link-hover"
                >
                  have an account?
                </Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn w-full mt-3 rounded-sm bg-[#04c3d87c] hover:bg-[#04c3d8]"
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center justify-between my-2">
          <hr className="w-[40%]" />
          <span className="font-semibold ">or</span> <hr className="w-[40%]" />
        </div>
        <div className="flex justify-center">
          <button className="btn rounded-3xl  border-0 hover:bg-transparent ">
            <FcGoogle className="text-3xl" />
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
