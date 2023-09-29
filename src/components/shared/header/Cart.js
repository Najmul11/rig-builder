import { useSelector } from "react-redux";
import CartCard, { WishlistCard } from "./CartCard";
import { FaOpencart } from "react-icons/fa";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className=" flex items-center gap-2 bg-transparent  lg:px-6 rounded-sm group text-white font-semibold text-[12px] cursor-pointer"
      >
        {cart.length > 0 && <div className="badge badge-sm">{cart.length}</div>}
        <FaOpencart className={"text-xl group-hover:text-[#63f3d4]"} /> Cart
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-sm  w-96 flex flex-col gap-4"
      >
        {cart.map((product) => (
          <CartCard key={product._id} product={product}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
