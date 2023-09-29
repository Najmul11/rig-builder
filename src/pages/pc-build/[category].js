import Sidebar from "@/components/[category]/Sidebar";
import SingleCategory from "@/components/[category]/SingleCategory";
import RootLayout from "@/components/layouts/RootLayout";
import React, { useEffect, useState } from "react";

const Category = ({ products }) => {
  const [maxPrice, setMaxPrice] = useState(500);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsToMap, setProductsToMap] = useState(products);

  const handleMaxprice = (e) => {
    setMaxPrice(parseInt(e.target.value));
    const filteredData = products.filter((item) => item?.price <= maxPrice);
    setProductsToMap([...filteredData]);
  };

  useEffect(() => {
    const filteredData = products.filter((item) =>
      item?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProductsToMap([...filteredData]);
  }, [products, searchQuery]);

  return (
    <div className="py-10 lg:w-4/6 lg:mx-auto">
      <div className="flex gap-5  px-2 flex-col lg:flex-row">
        <div className="w-full lg:w-[25%] ">
          <Sidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            handleMaxprice={handleMaxprice}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="w-full lg:w-[75%]">
          {productsToMap.map((product) => (
            <SingleCategory key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;

  const res = await fetch(
    `https://rig-build-backend.vercel.app/api/v1/products/?category=${category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

Category.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
