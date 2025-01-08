import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"

const projects = [
  {
    name: "Text-to-Braille Reader",
    description:
      "Prototyped an Arduino-based device to convert text into Braille, empowering blind and deaf individuals to communicate with new people.",
    image: "/textbrailleimg2.png",
    github: "https://github.com/55-LM/Text-to-Braille-Reader",
  },
  {
    name: "Bookstore App",
    description: "Developed a JavaFX application enabling users to purchase books through an interactive interface with a points-based system.",
    image: "/bookstoreimg2.png",
    github: "https://github.com/55-LM/Bookstore-App",
  },
  {
    name: "Film.ly",
    description:
      "A movie review website with microservices for searching, liking movies, and user authentication using layered architecture and REST APIs.",
    image: "/filmforumimg.png",
    github: "https://github.com/55-LM/Film-Forum-Website",
  },
  {
    name: "Soccer League DBMS",
    description:
      "Developed a Soccer League Database System to manage and provide accessible statistics for players, matches, and teams.",
    image: "/soccerdbmsimg.png",
    github: "https://github.com/55-LM/Soccer-League-DBMS",
  },
  {
    name: "General Purpose Processor",
    description:
      "Designed a general-purpose processor with an ALU for arithmetic and logical operations, implemented using Quartus II and a Cyclone-II FPGA.",
    image: "/aluimg1.png",
    github: "https://github.com/55-LM/General-Purpose-Processor-Design",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "A portfolio website showcasing projects, skills, and technologies, project descriptions, and links to source code.",
    image: "/portfolioimg.png",
    github: "https://github.com/55-LM/portfolio-website",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-black dark:bg-white border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  {/* Image as GitHub Link */}
                  <div className="md:w-1/2">
                    <Link href={project.github} target="_blank">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
                      />
                    </Link>
                  </div>
                  {/* Project Details */}
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {/* GitHub Icon and "View GitHub" Text */}
                    <div className="flex items-center space-x-4">
                      <Link href={project.github} target="_blank" className="flex items-center space-x-2">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                        <span className="underline text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-300">
                          View GitHub
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection