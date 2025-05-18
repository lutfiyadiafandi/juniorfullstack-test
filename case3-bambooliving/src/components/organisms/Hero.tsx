import ImageHero from "../../assets/images/Pakalana2.webp";
import ImageHeroFrame from "../../assets/images/img-hero-frame.jpg";
import Button from "../atoms/Button";
import ImageFrame from "../atoms/ImageFrame";

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto mt-[50px] md:mt-[100px] px-5 md:px-10 xl:px-0 flex flex-col md:flex-row md:justify-between  gap-10 md:gap-16">
      <section className="w-full md:w-3/5 flex flex-col gap-5">
        <div className="h-full flex flex-col justify-center gap-5">
          <h1 className="text-3xl lg:text-[42px] text-gray-900 font-bold">
            WELCOME TO{" "}
            <span className="text-amber-900 underline-offset-10 underline decoration-amber-900 decoration-2">
              BAMBOO LIVING
            </span>
          </h1>
          <p className="text-base lg:text-lg text-gray-900 font-normal lg:max-w-[600px]">
            We are a full-service architecture firm creating the world's only
            internationally certified, permit-ready, prefabricated bamboo
            buildings and home furnishings.
          </p>
          <Button
            className="mt-2.5"
            label="CONTACT US"
            size="large"
            variant="primary"
          />
        </div>
      </section>

      <section className="w-full md:w-2/5 order-first md:order-last pl-5 md:pl-0">
        <ImageFrame frame={ImageHeroFrame} image={ImageHero} />
      </section>
    </main>
  );
};

export default Hero;
