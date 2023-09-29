const Sidebar = ({ maxPrice, handleMaxprice, setSearchQuery }) => {
  return (
    <div className="">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full md:w-auto h-10 rounded-sm focus:outline-none "
        />
      </div>
      <div className="py-5 shadow-sm flex flex-col gap-5 px-5">
        <p className="text-[13px] text-neutral-500 font-semibold ">
          Price Range
        </p>
        <div className="flex gap-5 items-center justify-evenly">
          <input
            type="range"
            id="priceRange"
            name="priceRange"
            min={0}
            max={1000}
            step={10}
            onChange={(e) => handleMaxprice(e)}
            className={`w-4/5`}
          />
          <p className="text-[13px] text-neutral-500 font-semibold   ">
            {maxPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
