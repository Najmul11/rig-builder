import Image from "next/image";
import Link from "next/link";
import { MdLoop } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const PickedProducts = ({ title, image, category }) => {
  return (
    <div className="flex items-center px-2 lg:px-10 gap-5 justify-between  py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt="brand-logo"
          height={100}
          width={200}
          className="w-14"
        />
        <div>
          <p className="mb-0 leading-3 font-semibold text-neutral-500 text-xs">
            {category}
          </p>
          <h2 className="text-neutral-600 font-semibold text-lg">{title}</h2>
        </div>
      </div>
      <div className="flex items-center lg:gap-16">
        <p className="text-neutral-600 text-lg font-semibold ">100$</p>
        <div className="flex gap-3 text-2xl px-3 items-center">
          <RxCross2 className="hover:text-red-600 cursor-pointer" />
          <Link href={`/pc-build/${category}`}>
            <MdLoop className="hover:text-red-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickedProducts;
