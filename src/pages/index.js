import FeaturedCategory from "@/components/home/featuredCategory/FeaturedCategory";
import RootLayout from "../components/layouts/RootLayout";
import Slider from "@/components/home/slider/Slider";
import SlidingHeadline from "@/components/home/slider/SlidingHeadline";
import FeaturedProducts from "@/components/home/featuredProducts/FeaturedProducts";

const Home = ({ featuredProds }) => {
  return (
    <div className=" ">
      <Slider />
      <SlidingHeadline />
      <FeaturedCategory />
      <FeaturedProducts featuredProds={featuredProds} />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/products/?featured=true&limit=22"
  );
  const data = await res.json();

  return {
    props: {
      featuredProds: data.data,
    },
  };
};
