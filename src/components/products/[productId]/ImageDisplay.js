import Image from "next/image";
import { useState } from "react";

const ImageDisplay = ({ images }) => {
  const [imageSource, setImageSource] = useState(images[0]);
  return (
    <div className=" shadow-sm py-2 border-r">
      <Image
        height={400}
        width={700}
        src={imageSource}
        alt="pc-build"
        className="h-64 lg:h-[500px]"
      />
      <div className="flex gap-2 justify-center">
        {images.map((img, index) => (
          <Image
            key={index}
            height={400}
            width={700}
            src={img}
            alt="pc-build"
            onClick={() => setImageSource(img)}
            className="w-20 h-20 lg:w-32 lg:h-32 border cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
