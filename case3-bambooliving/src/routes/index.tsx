import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/organisms/Hero";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import MostPicked from "../components/organisms/MostPicked";
import CategoryTinyHome from "../components/organisms/CategoryTinyHome";
import CategoryVilla from "../components/organisms/CategoryVilla";
import CategoryCondo from "../components/organisms/CategoryCondo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <MostPicked />
      <CategoryTinyHome />
      <CategoryVilla />
      <CategoryCondo />
    </>
  );
}
