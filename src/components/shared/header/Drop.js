import Link from "next/link";

const dropMenu = [
  {
    text: "Processor",
    path: "/category/Processor",
  },
  {
    text: "Motherboard",
    path: "/category/Motherboard",
  },
  {
    text: "RAM",
    path: "/category/Ram",
  },
  {
    text: "Power Supply Unit",
    path: "/category/Psu",
  },
  {
    text: "Storage Device",
    path: "/category/Storage",
  },
  {
    text: "Graphics Card",
    path: "/category/Gpu",
  },
  {
    text: "Monitor",
    path: "/category/Monitor",
  },
  {
    text: "Others",
    path: "/category/Others",
  },
];

const Dropdown = () => {
  const dropMenuClass = "px-2 py-1 hover:bg-[#6cf3d3] text-[12px]";

  return (
    <>
      {dropMenu.map((drop, i) => (
        <li key={i} className={dropMenuClass}>
          <Link href={drop.path} className="font-semibold block ">
            {drop.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Dropdown;
