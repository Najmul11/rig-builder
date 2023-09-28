import StartRating from "./StarRating";

const Details = ({ product }) => {
  const { title, status, keyFeatures, price, _id, description, ratings } =
    product;

  return (
    <div className="flex flex-col gap-5 shadow-sm lg:pb-5 px-2 pb-2">
      <div className="flex flex-col lg:flex-row gap-2 justify-between">
        <h2 className="text-neutral-600 font-semibold text-xl">
          {title} <span className="text-xs">({status})</span>
        </h2>
        <StartRating ratings={ratings} />
      </div>
      <ul className="list-disc px-5 text-[14px] font-semibold text-neutral-600 ">
        {keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p className="">{description}</p>
      <p className="text-2xl ">{price}$</p>
      <button
        disabled={status === "Out of Stock"}
        className={`text-sm font-semibold border-2 ${
          status === "Out of Stock"
            ? "disabled bg-gray-200 text-neutral-400"
            : "bg-[#04c3d8]  active:text-black border-[#04c3d8] text-white"
        }  py-2 rounded-md lg:w-1/3 `}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Details;
