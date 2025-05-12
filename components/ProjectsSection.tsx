"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "AIBO",
    description:
      "A handheld digital detox device with Pomodoro timer, music, alarm, and arrow-based navigation—built on ESP32 with a scroll-wheel interface.",
    image: "/aibo.PNG",
    github: "https://github.com/55-LM/AIBO",
  },
  {
    name: "Film.ly",
    description:
      "A movie review website with microservices for searching, liking movies, and user authentication using layered architecture and REST APIs.",
    image: "/Filmlyupdate1.png",
    github: "https://github.com/55-LM/Film-Forum-Website",
  },
  {
    name: "Football DBMS",
    description:
      "Developed a Soccer League Database System to manage and provide accessible statistics for players, matches, and teams.",
    image: "/SoccerDBMSupdate.png",
    github: "https://github.com/55-LM/Soccer-League-DBMS",
  },
  {
    name: "Text-to-Braille Reader",
    description:
      "Prototyped an Arduino-based device to convert text into Braille, empowering blind and deaf individuals to communicate with new people.",
    image: "/CircuitUpdate.png",
    github: "https://github.com/55-LM/Text-to-Braille-Reader",
  },
  {
    name: "Bookstore App",
    description:
      "Developed a JavaFX application enabling users to purchase books through an interactive interface with a points-based system.",
    image: "/BookstoreUpdate.png",
    github: "https://github.com/55-LM/Bookstore-App",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "A portfolio website showcasing projects, skills, and technologies, project descriptions, and links to source code.",
    image: "/PortfolioUpdate1.png",
    github: "https://github.com/55-LM/portfolio-website",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ fontFamily: "NeueMontreal" }}>
      <h1
        style={{ fontFamily: "EditorialNew", fontSize: "2rem" }}
        className="my-10 text-center text-neutral-800"
      >
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-black border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                {/* Clickable Image */}
                <div className="md:w-1/2">
                  <Link href={project.github} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="shadow-xl hover:opacity-70 cursor-pointer"
                    />
                  </Link>
                </div>

                {/* Project Details */}
                <div className="mt-8 md:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4 text-neutral-900">
                    {project.name}
                  </h2>
                  <p className="text-lg leading-7 mb-4 text-neutral-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
