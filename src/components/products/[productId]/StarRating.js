import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const StartRating = ({ ratings }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((a, i) => (
        <div key={i} className="text-yellow-400 text-sm">
          {ratings === 0 ? (
            <AiOutlineStar className="" />
          ) : (
            <div>
              {ratings >= i + 1 ? <FaStar /> : <AiOutlineStar className="" />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StartRating;
