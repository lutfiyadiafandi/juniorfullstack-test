import AdvantageItem from "../atoms/AdvantageItem";
import ImageTermite from "../../assets/images/Termite1.webp";
import ImageTruck from "../../assets/images/Truck2.webp";
import ImageThropy from "../../assets/images/Trophy3.webp";
import ImageGlobe from "../../assets/images/Globe4.webp";

const WhyChooseUs = () => {
  const feature = [
    {
      image: ImageTermite,
      title: "Termite Resistant",
      subTitle: "Lorem ipsum dolor sit",
    },
    {
      image: ImageTruck,
      title: "Worldwide Delivery",
      subTitle: "Lorem ipsum dolor sit",
    },
    {
      image: ImageThropy,
      title: "Supperior Performance",
      subTitle: "Lorem ipsum dolor sit",
    },
    {
      image: ImageGlobe,
      title: "International Standards",
      subTitle: "Lorem ipsum dolor sit",
    },
  ];
  return (
    <main className="w-full mt-[100px] bg-[#fdf8f2]">
      <section className="max-w-7xl lg:h-[150px] mx-auto px-5 md:px-10 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-between gap-10 py-4">
        {feature.map(
          (item: { image: string; title: string; subTitle: string }) => (
            <AdvantageItem
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          )
        )}
      </section>
    </main>
  );
};

export default WhyChooseUs;
