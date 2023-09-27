import Link from "next/link";

const ChooseComponent = ({ title, icon }) => {
  return (
    <div className="flex items-center px-2 lg:px-10 gap-5 justify-between  py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <p className="text-4xl">{icon}</p>
        <div className="text-sm ">
          <p className="mb-0 leading-3 font-semibold text-neutral-500">
            {title}
          </p>
          <progress
            className="progress w-32 lg:w-64 bg-stone-100 rounded-sm"
            value={0}
            max="100"
          ></progress>
        </div>
      </div>
      <Link
        href={`/pc-build/${title}`}
        className="text-sm font-semibold border-2 border-[#04c3d8] px-3 py-2 rounded-md hover:bg-[#04c3d8] hover:text-white transition duration-300"
      >
        Choose
      </Link>
    </div>
  );
};

export default ChooseComponent;
