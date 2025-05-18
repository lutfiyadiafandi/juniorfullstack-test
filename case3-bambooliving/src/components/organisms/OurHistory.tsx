import ImageHistory from "../../assets/images/History.webp";

const OurHistory = () => {
  return (
    <main className="max-w-7xl mx-auto my-[100px] px-5 md:px-10 xl:px-0 flex flex-col md:flex-row md:justify-between gap-5 md:gap-10">
      <section className="w-full md:w-3/5 flex flex-col justify-center gap-5 lg:gap-10 md:pl-8 xl:pl-20">
        <h1 className="text-3xl lg:text-[42px] text-gray-900 font-bold">
          OUR{" "}
          <span className="text-amber-900 underline-offset-10 underline decoration-amber-900 decoration-2">
            HISTORY
          </span>
        </h1>
        <p className="text-base lg:text-lg text-gray-900 font-normal lg:max-w-[650px]">
          In the early 1990s, Jeffree Trudeau, a carpenter dedicated to
          sustainable living, was walking through a bamboo forest in Maui when
          he had a realization—it was time to find a better way to build. Around
          the same time, architect David Sands was troubled by the large amount
          of lumber needed to construct his home, even after using as much
          reclaimed material as possible. He recalled a time hitchhiking through
          the Pacific Northwest and seeing forests devastated by logging.
        </p>
        <p className="text-base lg:text-lg text-gray-900 font-normal lg:max-w-[650px]">
          Shortly after, Jeffree and David met and discovered they shared the
          same vision: to find an alternative building material to wood and
          promote its use worldwide. Together, they co-founded Bamboo Living and
          have been working toward that mission ever since.
        </p>
      </section>

      <figure className="w-full md:w-2/5 order-last md:order-first">
        <img
          src={ImageHistory}
          className="w-full h-full rounded-md object-cover aspect-square"
          alt="about-image"
        />
      </figure>
    </main>
  );
};
export default OurHistory;
