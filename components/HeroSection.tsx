"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gradientcirclebg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-60"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 px-6 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-neutral-800 dark:text-white">
            Hi, I&#39;m Alvi!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-neutral-800 dark:text-gray-300">
            I&#39;m a{" "}
            <span className="font-semibold">
              Computer Engineering{" "}
            </span>
            student at Toronto Metropolitan University who loves exploring the connection between software and hardware, and figuring out cool ways to turn ideas into reality
          </p>
          <Link
            to="projects"
            className="font-semibold px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded shadow hover:opacity-90"
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
            className="animate-bounce text-neutral-800 dark:text-white"
          />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection