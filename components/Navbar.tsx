"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "Technologies", page: "technologies" },
  { label: "Projects", page: "projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        {/* Logo / Name */}
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2
                  style={{ fontFamily: "EditorialNew" }}
                  className="text-2xl text-neutral-800"
                >
                  Alvi Alam
                </h2>
              </div>
            </Link>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Nav Links & Icons */}
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 cursor-pointer"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* GitHub */}
              <a
                href="https://github.com/55-LM"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800"
                  size={25}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/alvia22"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800"
                  size={25}
                />
              </a>

              {/* Email */}
              <a
                href="mailto:alvialam22@gmail.com"
                className="hover:-translate-y-1 transition-transform cursor-pointer"
                title="Email"
              >
                <img
                  src="/email-and-mail-icon-black-free-png.webp"
                  alt="Email"
                  width={25}
                  height={25}
                  className="object-contain filter invert-0 brightness-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
