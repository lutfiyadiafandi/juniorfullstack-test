type AdvantageItemProps = {
  title: string;
  subTitle: string;
  image: string;
  className?: string;
};

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  title,
  subTitle,
  image,
  className = "",
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center gap-4 ${className}`}
    >
      <img src={image} alt={title} className="h-16 object-contain" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-base font-normal text-gray-600">{subTitle}</p>
      </div>
    </div>
  );
};

export default AdvantageItem;
