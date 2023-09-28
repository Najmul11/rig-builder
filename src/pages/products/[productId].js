import RootLayout from "@/components/layouts/RootLayout";
import Details from "@/components/products/[productId]/Details";
import ImageDisplay from "@/components/products/[productId]/ImageDisplay";
import Review from "@/components/products/[productId]/Review";
import StarReview from "@/components/products/[productId]/StarReview";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "@/redux/api/apiSlice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ProductDetails = ({ product }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const { user } = useSelector((state) => state.user);

  const { images, _id } = product;

  const { data } = useGetReviewsQuery(_id);
  const [postReview] = usePostReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      rating,
      review,
    };
    const response = await postReview({ id: _id, data });
    if (response.data) {
      toast.success("Thanks for the feedback");
      setRating(0);
      setReview("");
      e.target.elements.review.value = "";
    }
    if (response.error) toast.error("Something went weong");
  };

  return (
    <div>
      <div className="lg:container lg:mx-auto">
        <div className=" flex flex-col lg:flex-row gap-5 py-8">
          <div className="lg:w-1/2 ">
            <ImageDisplay images={images} />
          </div>
          <div className="lg:w-1/2 py-8">
            <Details product={product} />
            <div className="py-4 px-2  ">
              {user ? (
                <div className="flex flex-col gap-5 py-6 bg-stone-100 px-4 rounded-md  lg:w-2/3">
                  <StarReview rating={rating} setRating={setRating} />
                  <form onSubmit={handleSubmit} className=" flex gap-5">
                    <input
                      type="text"
                      placeholder="Your review here...."
                      name="review"
                      className="input border-inherit  pr-16 focus:outline-none"
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <button
                      disabled={!review && !rating}
                      type="submit"
                      className={`${
                        !review && !rating
                          ? " bg-[#04c3d84f]"
                          : "  bg-[#04c3d8]  active:text-black border-[#04c3d8] text-white"
                      } text-sm font-semibold border-2 py-2 rounded-md  w-24 `}
                    >
                      Post review
                    </button>
                  </form>
                </div>
              ) : (
                <>
                  <p className="text-xl px-4 py-6 bg-stone-100 rounded-md lg:w-2/3 text-center">
                    Login to give your valuable feedback!{" "}
                  </p>
                </>
              )}
            </div>
            <div className="lg:w-3/4">
              {data?.data.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/api/v1/products?limit=100");
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { productId } = params;
  const res = await fetch(`http://localhost:5000/api/v1/products/${productId}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data.data,
    },
  };
};

ProductDetails.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
