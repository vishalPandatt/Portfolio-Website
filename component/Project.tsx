"use client";
import { firaCode, newRocker } from "@/app/fonts";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Project One",
    desc: "Add your project description here.",
    image: "/assets/ProjectImage/theralink.png",
    techStack: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Node.js",
    ],
    live: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    desc: "Add your project description here.",
    image: "/assets/ProjectImage/FinanceAdmin.png",
    techStack: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "API",
    ],
    live: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    desc: "Add your project description here.",
    image: "/assets/ProjectImage/ShoppingCard.png",
    techStack: ["React", "JavaScript", "TailwindCSS", "Context API"],
    live: "#",
    repo: "#",
  },
  {
    title: "Project Four",
    desc: "Add your project description here.",
    image: "/assets/ProjectImage/NodeBoard.png",
    techStack: ["React", "MongoDB", "TailwindCSS", "Node.js", "Express.js"],
    live: "#",
    repo: "#",
  },
  {
    title: "Project Five",
    desc: "Add your project description here.",
    image: "/assets/ProjectImage/TravelPage.png",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive"],
    live: "#",
    repo: "#",
  },
  {
    title: "Project Six",
    desc: "Add your project description here.",
    image: "/assets/ProjectImage/ExpenseTracker.png",
    techStack: ["React", "JavaScript", "TailwindCSS", "Local Storage"],
    live: "#",
    repo: "#",
  },
];

const Project = () => {
  return (
    // Applied --color-base as background
    <section
      id="projects"
      className={`flex flex-col min-h-screen mt-10 lg:px-10 ${firaCode.className}`}
    >
      {/* Heading with --color-content */}
      <h2
        className={`text-center text-4xl font-bold mb-10 dark:text-white tracking-widest ${newRocker.className}`}
      >
        Projects
      </h2>

      <div className="mb-10 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-12 mx-auto ">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            // Card: White bg, Border uses --color-outer, Text uses --color-content
            // Hover: Border becomes --color-primary, Shadow increases
            className="group bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-lg dark:shadow-md dark:shadow-primary shadow-xs shadow-black"
          >
            <div className="relative overflow-hidden h-48 w-full">
              <Image
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                height={1000}
                width={1000}
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="pt-3 pb-3 px-5 flex flex-col items-center text-center dark:bg-dark-base">
              {/* Title with --color-content */}
              <h3 className="text-2xl font-bold mb-2 text-content tracking-wide dark:text-white">
                {project.title}
              </h3>

              {/* Desc with --color-content-alter */}
              <p className="text-sm font-medium mb-4 text-content-alter dark:text-white">
                {project.desc}
              </p>

              {/* Tags: Bg is Primary with opacity, Text is Secondary */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-50 text-cyan-500 dark:text-primary dark:border-primary dark:border dark:bg-dark-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 w-full justify-center mt-auto">
                {/* GitHub Button: Uses --color-content */}
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-4 py-1 rounded-xl font-semibold transition-all duration-300 bg-black text-white hover:bg-black/90 hover:shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>

                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-4 py-1 rounded-xl font-bold transition-all duration-300 bg-cyan-500 text-white dark:bg-primary/90 hover:bg-cyan-600 hover:shadow-lg"
                >
                  <span>Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
