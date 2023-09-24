import Link from "next/link";

const dropMenu = [
  {
    text: "Processor",
    path: "/",
  },
  {
    text: "Motherboard",
    path: "/",
  },
  {
    text: "RAM",
    path: "/",
  },
  {
    text: "Power Supply Unit",
    path: "/",
  },
  {
    text: "Storage Device",
    path: "/",
  },
  {
    text: "Monitor",
    path: "/",
  },
  {
    text: "Others",
    path: "/",
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
