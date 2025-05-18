import { Link } from "@tanstack/react-router";
import BrandLogo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-amber-950 mx-auto border-b border-[#E5E5E5]">
      <nav className="max-w-7xl mx-auto px-5 md:px-10 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 auto-rows-auto gap-x-10 md:gap-x-[70px] gap-y-[30px] md:gap-y-[50px] py-[50px] text-white">
        <div className="lg:col-span-3">
          <Link to="/">
            <img src={BrandLogo} alt="brand logo" className="w-20" />
          </Link>
          <h1 className="mt-5 text-base font-normal">
            We're the first and only company in the world offering permit-ready
            bamboo homes that meet international building standards.
          </h1>
        </div>
        <div className="lg:col-span-2">
          <h2 className="mb-4 md:mb-[23px] text-base font-normal">Models</h2>
          <ul className="flex flex-col gap-2 text-base font-light">
            <li>Tiny Homes</li>
            <li>Villa</li>
            <li>Apartments</li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="mb-4 md:mb-[23px] text-base font-normal">
            Explore Us
          </h2>
          <ul className="flex flex-col gap-2 text-base font-light">
            <li>Our Careers</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="mb-4 md:mb-[23px] text-base font-normal">
            Connect Us
          </h2>
          <ul className="flex flex-col gap-2 text-base font-light">
            <li>hello@bambooliving.com</li>
            <li>(808) 359-3359</li>
            <li>P.O. BOX 1606 PAHOA, HI 96778 USA</li>
          </ul>
        </div>

        <span className="mt-5 md:mt-0 col-span-full mx-auto text-sm font-light text-center">
          &copy; Copyright 2025 • All rights reserved • Bamboo Living
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
