import FeaturedCategory from "@/components/home/featuredCategory/FeaturedCategory";
import RootLayout from "../components/layouts/RootLayout";
import Slider from "@/components/home/slider/Slider";
import SlidingHeadline from "@/components/home/slider/SlidingHeadline";

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
