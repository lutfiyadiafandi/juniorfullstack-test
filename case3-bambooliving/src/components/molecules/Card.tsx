type CardProps = {
  name: string;
  price: string;
  image: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ name, price, image, className = "" }) => {
  return (
    <div
      className={`w-[263px] cursor-pointer hover:scale-95 transition-all ease-in-out duration-300 ${className}`}
    >
      <img src={image} alt={name} className="rounded-[15px]" />
      <div className="mt-4 text-center">
        <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
        <span className="mt-0.5 text-base font-bold text-gray-600">
          {price}
        </span>
      </div>
    </div>
  );
};

export default Card;
