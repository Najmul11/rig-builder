import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { title, icon } = category;
  return (
    <Link
      href={`/category/${title}`}
      className="= rounded-md lg:w-40  bg-stone-100 flex items-center justify-center px-2 py-4 lg:p-4 group"
    >
      <div className="text-center flex flex-col items-center justify-center gap-y-2">
        <p className="lg:text-6xl text-3xl text-center ">{icon}</p>
        <p className="group-hover:text-[#02c3d8d5] group-hover:font-semibold text-sm lg:text-base">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default SingleCategory;
