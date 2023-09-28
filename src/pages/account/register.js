import RootLayout from "@/components/layouts/RootLayout";
import { useCreateUserMutation } from "@/redux/api/apiSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { control, handleSubmit, reset } = useForm();
  const [createUser] = useCreateUserMutation();
  const router = useRouter();

  const onSubmit = async (data) => {
    if (data.password !== data?.confirmPassword)
      return toast.error("Password do not match");

    const userData = {
      fullName: data.name,
      email: data.email,
      password: data.password,
    };

    const response = await createUser(userData);
    if (response.data) {
      toast.success("You have signed up successfully");
      router.push("/");
    }
    if (response.error) {
      toast.error(response.error?.data?.message);
      reset();
    }
  };

  return (
    <div className="lg:container mx-auto flex lg:justify-center ">
      <div className="px-2 mt-10 lg:mt-20 w-full lg:w-96">
        <h1 className="font-medium text-lg py-4">Register Account </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
                />
              )}
            />
          </div>
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
                />
              )}
            />
          </div>
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
                />
              )}
            />
          </div>
          <div className="form-contro">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered w-full h-10 rounded-sm focus:outline-none"
                />
              )}
            />
          </div>

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
          <button
            type="submit"
            className="btn w-full mt-3 rounded-sm bg-[#04c3d87c] hover:bg-[#04c3d8]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
