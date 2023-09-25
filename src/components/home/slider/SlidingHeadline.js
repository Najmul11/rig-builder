import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { format } from "date-fns";

const SlidingHeadline = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = format(currentDate, "do MMMM  EEEE");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-5 ">
      <div className="lg:container lg:mx-auto mx-2 rounded-2xl  bg-stone-100 px-4">
        <Marquee>
          <p className="py-2 rounded-lg text-right">
            <span>{formattedDate}</span>, our all outlets are open.
            Additionally, our online activities are open and operational.{" "}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default SlidingHeadline;
