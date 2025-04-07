"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/image 20.png" // Light-mode version only
          alt=""
          width={1000}
          height={1000}
          className="opacity-60 blur-md -translate-y-12 transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 px-6 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1
            style={{ fontFamily: "EditorialNew", fontSize: "3rem" }}
            className="text-neutral-800"
          >
            Alvi Alam
          </h1>

          <p
            style={{ fontFamily: "NeueMontreal", fontSize: "1.25rem" }}
            className="mt-4 text-neutral-800"
          >
            Student at Toronto Metropolitan University studying{" "}
            <span
              style={{ fontFamily: "EditorialNew", fontStyle: "italic" }}
            >
              Computer Engineering
            </span>{" "}
            , exploring at the intersection of software and hardware to bring
            ideas to life
          </p>

          <Link
            to="projects"
            style={{ fontFamily: "EditorialNew", fontStyle: "italic" }}
            className="inline-block mt-6 text-xl text-neutral-800 cursor-pointer transition-all after:content-[''] after:block after:h-[2px] after:bg-current after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex flex-row items-center text-center justify-center absolute bottom-10">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown
            size={35}
            className="animate-bounce text-neutral-800"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
