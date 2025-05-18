import PickedCard from "../molecules/PickedCard";
import Models from "../../assets/data/Models.json";

const MostPicked = () => {
  const mostPicked = Models.slice(3, 8);
  return (
    <main className="max-w-7xl mx-auto mt-[100px] px-5 md:px-10 xl:px-0">
      <h1 className="text-xl lg:text-2xl text-gray-900 font-bold">
        MOST{" "}
        <span className="text-amber-900 underline-offset-10 underline decoration-amber-900 decoration-2">
          PICKED
        </span>
      </h1>
      <section className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-cards gap-[15px] lg:gap-[30px]">
        {mostPicked.map((item, index) => (
          <PickedCard
            index={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </section>
    </main>
  );
};

export default MostPicked;
