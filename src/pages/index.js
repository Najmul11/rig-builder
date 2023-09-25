import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";
import Slider from "@/components/home/slider/Slider";
import Image from "next/image";
import SlidingHeadline from "@/components/home/slider/SlidingHeadline";

const Home = () => {
  return (
    <div className=" ">
      <Slider />
      <SlidingHeadline />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
