type ImageFrameProps = {
  frame: string;
  image: string;
  className?: string;
};

const ImageFrame: React.FC<ImageFrameProps> = ({
  frame,
  image,
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <img src={frame} alt="Image Frame" className="relative -z-10" />
      <img
        src={image}
        alt="Image Hero"
        className="absolute top-0 left-0 right-0 z-10 -mt-[10px] -ml-[20px] md:-mt-[15px] md:-ml-[30px] rounded-tl-[90px] rounded-md"
      />
    </div>
  );
};

export default ImageFrame;
