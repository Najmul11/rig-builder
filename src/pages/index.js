import Slider from "@/components/home/Slider";
import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";

const Home = () => {
  return <></>;
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
