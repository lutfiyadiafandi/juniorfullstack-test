import ImageAbout from "../../assets/images/About.webp";

const AboutUs = () => {
  return (
    <main className="max-w-7xl mx-auto mt-10 px-5 md:px-10 xl:px-0 flex flex-col md:flex-row md:justify-between gap-5 md:gap-10">
      <section className="w-full md:w-3/5 flex flex-col justify-center gap-5 lg:gap-10">
        <h1 className="text-3xl lg:text-[42px] text-gray-900 font-bold">
          ABOUT{" "}
          <span className="text-amber-900 underline-offset-10 underline decoration-amber-900 decoration-2">
            US
          </span>
        </h1>
        <p className="text-base lg:text-lg text-gray-900 font-normal lg:max-w-[650px]">
          Since 1995, Bamboo Living has become a leader in providing
          artisan-quality bamboo homes and innovative building products made
          from bamboo, one of the most rapidly renewable resources on the
          planet. Bamboo Living has designed and manufactured nearly 400 homes
          in locations around the world.
        </p>
      </section>

      <figure className="w-full md:w-2/5">
        <img
          src={ImageAbout}
          className="w-full h-full rounded-md object-cover aspect-square"
          alt="about-image"
        />
      </figure>
    </main>
  );
};
export default AboutUs;
