import Image from "next/image";
import Link from "next/link";

const SingleCategory = ({ product }) => {
  const {
    title,
    category,
    status,
    keyFeatures,
    images,
    price,
    _id,
    description,
  } = product;
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
