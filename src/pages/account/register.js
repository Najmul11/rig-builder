import RootLayout from "@/components/layouts/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="lg:container mx-auto flex lg:justify-center ">
      <div className="px-2 mt-10 lg:mt-20 w-full lg:w-96 flex flex-col gap-10">
        <h1 className="font-medium text-lg py-4 text-center">
          Register Account
        </h1>

        <div className="flex justify-center items-center">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://rig-build-client.vercel.app/",
              })
            }
            className="btn rounded-3xl  border-0 hover:bg-transparent "
          >
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
