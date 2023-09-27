import { BsMotherboard, BsGpuCard } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdOutlineSdStorage } from "react-icons/md";
import { LuMonitorCheck } from "react-icons/lu";
import SingleCategory from "./SingleCategory";

const featuredCategories = [
  {
    icon: <BsMotherboard />,
    title: "Motherboard",
  },
  {
    icon: <BsGpuCard />,
    title: "Gpu",
  },
  {
    icon: <GiProcessor />,
    title: "Processor",
  },
  {
    icon: <CgSmartphoneRam />,
    title: "Ram",
  },
  {
    icon: <MdOutlineSdStorage />,
    title: "Storage",
  },
  {
    icon: <LuMonitorCheck />,
    title: "Monitor",
  },
];

const FeaturedCategory = () => {
  return (
    <div className="">
      <div className="lg:container mx-auto">
        <div className="text-center mt-8">
          <h2 className="font-semibold text-xl">Featured category</h2>
          <p className="text-sm mt-1">
            Get Your Desired Product from Featured Category!
          </p>
        </div>
        <div className="grid grid-cols-3 lg:justify-items-center gap-5 lg:gap-y-20  py-14 lg:w-2/3 lg:mx-auto mx-2">
          {featuredCategories.map((category, index) => (
            <SingleCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
