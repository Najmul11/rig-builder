import {
  resetCpu,
  resetGpu,
  resetMonitor,
  resetMotherboard,
  resetRam,
  resetStorage,
} from "@/redux/slices/pcBuildSlice";
import Image from "next/image";
import Link from "next/link";
import { MdLoop } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const PickedProducts = ({ product }) => {
  const { images, title, category, price } = product;
  const dispatch = useDispatch();

  const handleRemove = () => {
    switch (category) {
      case "Processor":
        dispatch(resetCpu());
        break;
      case "Gpu":
        dispatch(resetGpu());
        break;
      case "Monitor":
        dispatch(resetMonitor());
        break;
      case "Motherboard":
        dispatch(resetMotherboard());
        break;
      case "Ram":
        dispatch(resetRam());
        break;
      case "Storage":
        dispatch(resetStorage());
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex items-center px-2 lg:px-10 gap-5 justify-between  py-4 shadow-sm ">
      <div className="flex items-center gap-3">
        <Image
          src={images[0]}
          alt="picked-product"
          height={100}
          width={200}
          className="w-14 h-14"
        />
        <div>
          <p className="mb-0 leading-3 font-semibold text-neutral-500 text-xs">
            {category}
          </p>
          <h2 className="text-neutral-600 font-semibold text-sm lg:text-md">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col px-1 lg:flex-row items-center gap-2 lg:gap-16">
        <p className="text-neutral-600 text-sm lg:text-md font-semibold ">
          {price}$
        </p>
        <div className="flex gap-3 text-lg lg:text-2xl   items-center">
          <RxCross2
            onClick={handleRemove}
            className="hover:text-red-600 cursor-pointer"
          />
          <Link href={`/pc-build/${category}`}>
            <MdLoop className="hover:text-red-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickedProducts;
