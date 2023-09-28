import StartRating from "./StarRating";
import { BsQuote } from "react-icons/bs";

const Review = ({ review: userReview }) => {
  const { user, review, rating } = userReview;
  return (
    <div className=" shadow-sm py-4 flex flex-col gap-3 px-2">
      <div className="flex flg:flex-row justify-center items-center lg:justify-between gap-3 ">
        <div className="flex gap-2 items-start w-full">
          <BsQuote />
          <div className="flex flex-col lg:flex-row lg: items-start justify-between gap-2 w-full">
            <p className="leading-[16px] text-sm">{review}</p>
            <StartRating ratings={rating} />
          </div>
        </div>
      </div>
      <p className="px-4 text-sm text-neutral-500">{user?.fullName}</p>
    </div>
  );
};

export default Review;
