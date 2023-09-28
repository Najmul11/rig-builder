import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import brandLogo2 from "../../assets/images/brandLogo2.png";
import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";
import { BsMotherboard, BsGpuCard } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdOutlineSdStorage } from "react-icons/md";
import { LuMonitorCheck } from "react-icons/lu";
import ChooseComponent from "@/components/pc-build/ChooseComponent";
import PickedProducts from "@/components/pc-build/PickedProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCartFromPcBuild } from "@/redux/slices/cartSlice";

const PcBuild = () => {
  const { motherboard, cpu, ram, monitor, storage, gpu } = useSelector(
    (state) => state.pcBuild
  );

  const dispatch = useDispatch();

  const selectedProducts = [
    motherboard,
    cpu,
    ram,
    monitor,
    storage,
    gpu,
  ].filter((product) => product !== null);

  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleAddtoCart = () => {
    dispatch(addToCartFromPcBuild(selectedProducts));
  };

  return (
    <div className="py-8 px-2">
      <div className="lg:w-3/6 lg:mx-auto shadow-sm">
        <div className="flex justify-between items-center px-5 border-b py-2">
          <Image
            src={brandLogo2}
            alt="brand-logo"
            height={100}
            width={200}
            className="w-14"
          />

          <button onClick={handleAddtoCart} className="text-xs font-semibold">
            <BiCartAdd className="text-4xl mx-auto text-[#04c3d8]" />
            <span className="hidden lg:block">Add to Cart</span>
          </button>
        </div>
        <div>
          <div className="flex justify-center lg:justify-between items-center px-10 py-5">
            <h2 className="font-semibold text-[#04c3d8] hidden lg:block">
              Build Your Own Computer - Rig Builder.
            </h2>
            <p className="text-xl font-semibold  py-2 px-5 bg-[#04c3d8] rounded-md text-white ">
              {totalPrice.toFixed(2)}$
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {motherboard ? (
              <PickedProducts product={motherboard} />
            ) : (
              <ChooseComponent icon={<BsMotherboard />} title="Motherboard" />
            )}
            {cpu ? (
              <PickedProducts product={cpu} />
            ) : (
              <ChooseComponent icon={<GiProcessor />} title="Processor" />
            )}
            {ram ? (
              <PickedProducts product={ram} />
            ) : (
              <ChooseComponent icon={<CgSmartphoneRam />} title="Ram" />
            )}
            {storage ? (
              <PickedProducts product={storage} />
            ) : (
              <ChooseComponent icon={<MdOutlineSdStorage />} title="Storage" />
            )}
            {gpu ? (
              <PickedProducts product={gpu} />
            ) : (
              <ChooseComponent icon={<BsGpuCard />} title="Gpu" />
            )}
            {monitor ? (
              <PickedProducts product={monitor} />
            ) : (
              <ChooseComponent icon={<LuMonitorCheck />} title="Monitor" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuild;

PcBuild.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
