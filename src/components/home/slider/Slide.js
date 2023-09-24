import Image from "next/image";

const Slide = ({ slide }) => {
  const { image } = slide;
  return (
    <div className="rounded-md relative">
      <Image
        width={image.width}
        height={image.height}
        src={image.src}
        alt="banner"
        className="rounded-sm w-full h-[250px] lg:h-[675px] "
      />
    </div>
  );
};

export default Slide;
