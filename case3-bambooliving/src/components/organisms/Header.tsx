import { Link } from "@tanstack/react-router";
import { useState } from "react";
import BrandLogo from "../../assets/images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navlinks = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "about",
      path: "/about",
    },
    {
      id: 3,
      link: "portofolio",
      path: "#",
    },
    {
      id: 4,
      link: "contact",
      path: "#",
    },
  ];
  return (
    <header className="bg-amber-950 mx-auto border-b border-[#E5E5E5]">
      <nav className="max-w-7xl h-20 mx-auto px-5 md:px-10 xl:px-0 flex items-center justify-between py-4 z-50">
        <Link to="/">
          <img src={BrandLogo} alt="brand logo" className="w-16 h-full" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <ul className="md:flex hidden items-center gap-10">
          {navlinks.map((item: { id: number; link: string; path: string }) => (
            <li
              key={item.id}
              className="text-base text-white font-semibold uppercase hover:text-amber-500"
            >
              <Link
                className="[&.active]:font-bold [&.active]:text-amber-500"
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className={`
        md:hidden bg-amber-900 z-50 fixed w-full top-[81px] overflow-y-auto bottom-0 py-5 px-5
        duration-500 ${isOpen ? "left-0" : "left-[-100%]"}
        `}
        >
          {navlinks.map((item: { id: number; link: string; path: string }) => (
            <li
              key={item.id}
              className="flex gap-5 items-center justify-between p-3 text-lg text-white font-semibold uppercase border-b border-b-amber-950"
            >
              <Link
                className="[&.active]:font-bold [&.active]:text-amber-500"
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.link}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
