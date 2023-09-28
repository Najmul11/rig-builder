import { addToCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const SoloCategory = ({ product }) => {
  const { title, status, keyFeatures, images, price, _id } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="shadow-md px-2 lg:px-0 relative">
      <Link href={`/products/${_id}`}>
        <Image
          height={400}
          width={700}
          src={images[0]}
          alt="pc-build"
          className="w-64 h-64 mx-auto"
        />
      </Link>
      <div className="lg:px-5 py-2 flex flex-col gap-2 justify-between mb-12">
        <Link
          href={`/products/${_id}`}
          className="text-neutral-600 text-sm font-semibold hover:underline"
        >
          {title}
        </Link>
        <ul className="list-disc px-5 text-[12px] font-semibold text-neutral-600">
          {keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="text-neutral-600 text-sm font-semibold ">
          {price}$ <span className="text-xs">({status})</span>
        </p>
      </div>
      <div className="bg-yellow-500 flex justify-center">
        <button
          onClick={handleAddToCart}
          disabled={status === "Out of Stock"}
          className={`text-sm font-semibold border-2 ${
            status === "Out of Stock"
              ? "disabled bg-gray-200 text-neutral-400"
              : "bg-[#04c3d8]  active:text-black border-[#04c3d8] text-white"
          }  py-2 rounded-md absolute bottom-2 w-[90%]`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SoloCategory;
