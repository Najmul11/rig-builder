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

const PcBuild = () => {
  const motherboard = "f";
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

          <button className="text-xs font-semibold">
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
              1110$
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {motherboard ? (
              <PickedProducts
                image={brandLogo2}
                title="MSI MPG B550 GAMING EDGE WIFI"
                category="Motherboard"
              />
            ) : (
              <ChooseComponent icon={<BsMotherboard />} title="Motherboard" />
            )}
            <ChooseComponent icon={<GiProcessor />} title="Processor" />
            <ChooseComponent icon={<CgSmartphoneRam />} title="Ram" />
            <ChooseComponent icon={<MdOutlineSdStorage />} title="Storage" />
            <ChooseComponent icon={<LuMonitorCheck />} title="monitor" />
            <ChooseComponent icon={<BsGpuCard />} title="Gpu" />
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
