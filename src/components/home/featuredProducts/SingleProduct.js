import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { title, images, price, _id } = product;
  return (
    <Link
      href={`/products/${_id}`}
      className="rounded-md   lg:w-[370px] py-2 px-1 hover:shadow-md shadow-sm group "
    >
      <div>
        <Image
          width={400}
          height={700}
          src={images[0]}
          alt=""
          className="h-64 lg:h-72 w-64 mx-auto opacity-90 group-hover:opacity-100"
        />
      </div>
      <hr />
      <div className="flex flex-col justify-between h-24">
        <p className="text-sm lg:text-base px-4 mt-2">{title}</p>
        <p className="px-4 mt-2 text-red-500 font-semibold">{price}$</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
