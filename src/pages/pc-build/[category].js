import { useRouter } from "next/router";
import React from "react";

const Category = ({ products }) => {
  return <div></div>;
};

export default Category;

export const getServerSideProps = async ({ params }) => {
  const { category } = params;

  const res = await fetch(
    `http://localhost:5000/api/v1/products/?category=${category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
