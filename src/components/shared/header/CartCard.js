import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";

const CartCard = ({ product }) => {
  const { title, images, price, _id } = product;

  const handleDelete = async () => {};
  return (
    <div className="flex items-center gap-4">
      <div className="h-24">
        <Image src={images[0]} alt="cart-product" height={200} width={200} />
      </div>
      <div className="flex w-full justify-between ">
        <Link href={`/products/${_id}`} className=" w-full">
          <p className="text-md font-semibold link">{title}</p>
          <p className="">
            <span className="  text-sm text-black text-opacity-60">Price </span>
            <span className="italic text-md font-medium ">{price}</span>
          </p>
        </Link>
        <button onClick={handleDelete} className="btn btn-sm rounded-sm group">
          <AiOutlineDelete className={"text-xl group-hover:text-orange-500"} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
