import Sidebar from "@/components/[category]/Sidebar";
import SoloCategory from "@/components/category/[category]/SoloCategory";
import RootLayout from "@/components/layouts/RootLayout";
import React, { useEffect, useState } from "react";

const GeneralCategory = ({ products }) => {
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
        <div className="w-full lg:w-[75%] grid grid-cols-2 lg:grid-cols-3 gap-5">
          {productsToMap.map((product) => (
            <SoloCategory key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralCategory;

export async function getStaticPaths() {
  const res = await fetch(
    "https://rig-build-backend.vercel.app/api/v1/products?limit=100"
  );
  const data = await res.json();

  const paths = data.data.map((category) => ({
    params: { category: category.category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { category } = params;
  const res = await fetch(
    `https://rig-build-backend.vercel.app/api/v1/products?category=${category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

GeneralCategory.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
