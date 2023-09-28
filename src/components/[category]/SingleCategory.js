import {
  selectCpu,
  selectGpu,
  selectMonitor,
  selectMotherboard,
  selectRam,
  selectStorage,
} from "@/redux/slices/pcBuildSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const SingleCategory = ({ product }) => {
  const { title, status, keyFeatures, images, price, category } = product;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuilder = () => {
    switch (category) {
      case "Gpu":
        dispatch(selectGpu(product));
        router.push("/pc-build");
        break;
      case "Processor":
        dispatch(selectCpu(product));
        router.push("/pc-build");
        break;
      case "Monitor":
        dispatch(selectMonitor(product));
        router.push("/pc-build");
        break;
      case "Motherboard":
        dispatch(selectMotherboard(product));
        router.push("/pc-build");
        break;
      case "Ram":
        dispatch(selectRam(product));
        router.push("/pc-build");
        break;
      case "Storage":
        dispatch(selectStorage(product));
        router.push("/pc-build");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mb-6  shadow-md px-5 items-center gap-5">
      <div className=" py-2">
        <Image
          height={400}
          width={700}
          src={images[0]}
          alt="pc-build"
          className="w-64 h-64"
        />
      </div>
      <div className="flex lg:items-center lg:justify-between w-full flex-col lg:flex-row py-4">
        <div className="">
          <h2 className="font-semibold ">
            {title} <span className="text-xs">({status})</span>
          </h2>
          <ul class="list-disc px-5 text-[12px] font-semibold text-neutral-600">
            {keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <p className="text-xl my-3">{price}$</p>
          <button
            onClick={handleAddToBuilder}
            disabled={status === "Out of Stock"}
            className={`text-sm font-semibold border-2 ${
              status === "Out of Stock"
                ? "disabled bg-gray-200 text-neutral-400"
                : "bg-[#04c3d8]  active:text-black border-[#04c3d8] text-white"
            } px-3 py-2 rounded-md w-full `}
          >
            Add to Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
