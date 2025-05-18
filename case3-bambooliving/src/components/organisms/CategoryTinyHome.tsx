// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import SliderCard from "../molecules/SliderCard";
import Card from "../molecules/Card";
import Models from "../../assets/data/Models.json";

const CategoryTinyHome = () => {
  const tinyHome = Models;
  return (
    <main className="max-w-7xl mx-auto mt-[100px] px-5 md:px-10 xl:px-0">
      <h1 className="text-xl lg:text-2xl text-gray-900 font-bold">
        Modest Bungalows &{" "}
        <span className="text-amber-900 underline-offset-10 underline decoration-amber-900 decoration-2">
          Tiny Guest Homes
        </span>
      </h1>
      <section className="mt-5">
        <SliderCard>
          {tinyHome.map((item) => (
            <SplideSlide key={item.id}>
              <Card image={item.image} name={item.name} price={item.price} />
            </SplideSlide>
          ))}
        </SliderCard>
      </section>
    </main>
  );
};

export default CategoryTinyHome;
