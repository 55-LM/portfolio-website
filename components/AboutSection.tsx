import React from "react"

const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "C++", "HTML5", "CSS3", "MySQL", "LaTeX", "Bash Script"],
  },
  {
    category: "Frameworks/Libraries",
    items: ["React", "Next JS", "Bootstrap", "JavaFX", "jQuery", "JWT", "TailwindCSS"],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "Linux",
      "Docker",
      "Kubernetes",
      "Google Cloud",
      "Oracle",
      "Vercel",
      "NetBeans IDE",
      "Visual Studio Code",
    ],
  },
]

const TechnologiesSection = () => {
  return (
    <section id="technologies">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Technologies
          <hr className="w-6 h-1 mx-auto my-4 bg-black dark:bg-gray-300 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 md:space-y-0 md:p-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-6">
              <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{skill.category}</h2>
              <div className="flex flex-wrap justify-center md:justify-start">
                {skill.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-800 px-4 py-2 m-2 text-black dark:text-gray-300 rounded-lg font-semibold"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection