import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../components/organisms/AboutUs";
import OurHistory from "../components/organisms/OurHistory";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <AboutUs />
      <OurHistory />
    </>
  );
}
