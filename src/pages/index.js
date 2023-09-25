import RootLayout from "../components/layouts/RootLayout";
import Slider from "@/components/home/slider/Slider";
import SlidingHeadline from "@/components/home/slider/SlidingHeadline";
import FeaturedCategory from "@/components/home/slider/FeaturedCategory";

const Home = () => {
  return (
    <div className=" ">
      <Slider />
      <SlidingHeadline />
      <FeaturedCategory />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
