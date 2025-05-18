type PickedCardProps = {
  index: number;
  name: string;
  price: string;
  image: string;
  className?: string;
};

const PickedCard: React.FC<PickedCardProps> = ({
  index,
  name,
  price,
  image,
  className = "",
}) => {
  return (
    <div
      className={`${index === 0 ? "row-span-2" : "row-span-1"} ${className}`}
    >
      <div className="h-full card card-featured relative rounded-[15px] cursor-pointer overflow-hidden">
        <div className="px-5 py-1 text-base text-white font-medium tag bg-amber-900">
          {price}
        </div>
        <figure className="h-full img-wrapper rounded-[15px] overflow-hidden">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </figure>
        <div className="p-5 mt-4 meta-wrapper">
          <h5 className="text-lg text-white font-semibold">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default PickedCard;
