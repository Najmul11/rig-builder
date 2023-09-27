import Sidebar from "@/components/[category]/Sidebar";
import SoloCategory from "@/components/category/[category]/SoloCategory";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";

const GeneralCategory = ({ products }) => {
  const [maxPrice, setMaxPrice] = useState(500);

  const handleMaxprice = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <div className="py-10 lg:w-4/6 lg:mx-auto">
      <div className="flex gap-5  px-2 flex-col lg:flex-row">
        <div className="w-full lg:w-[25%] ">
          <Sidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            handleMaxprice={handleMaxprice}
          />
        </div>
        <div className="w-full lg:w-[75%] grid grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <SoloCategory key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralCategory;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/api/v1/products?limit=100");
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
    `http://localhost:5000/api/v1/products?category=${category}`
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
