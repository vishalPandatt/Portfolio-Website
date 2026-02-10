import { firaCode, newRocker, syne } from "@/app/fonts.js";
import { BriefcaseBusiness, Download, GraduationCap } from "lucide-react";

const About = () => {
  const educationData = [
    {
      year: "Year 1",
      title: "Education Title",
      institute: "Institution Name",
      description:
        "Add your education description here. Describe your academic journey, certifications, or relevant training.",
    },
    {
      year: "Year 2",
      title: "Education Title",
      institute: "Institution Name",
      description:
        "Add your education description here. Describe your academic achievements and what you learned.",
    },
    {
      year: "Year 3",
      title: "Education Title",
      institute: "Institution Name",
      description:
        "Add your education description here. Share details about your degree, major, or specialization.",
    },
  ];

  const experineceData = [
    {
      year: "Period 1",
      title: "Job Title",
      company: "Company Name, Location",
      description:
        "Add your work experience description here. Describe your responsibilities and achievements.",
    },
    {
      year: "Period 2",
      title: "Job Title",
      company: "Company Name, Location",
      description:
        "Add your work experience description here. Highlight key projects and technical skills used.",
    },
    {
      year: "Period 3",
      title: "Job Title",
      company: "Company Name, Location",
      description:
        "Add your work experience description here. Describe the impact you made at your workplace.",
    },
  ];

  return (
    <section
      id="about"
      className={`flex flex-col min-h-screen mt-10 lg:px-10 px-5 ${firaCode.className}`}
    >
      <h2
        className={`text-center text-4xl font-bold mb-10 dark:text-white tracking-widest ${newRocker.className}`}
      >
        About
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-4">
        <div className="about-card">
          <h3 className={`about-card-h3 ${syne.className}`}>40+</h3>
          <p className="about-card-p">Happy client</p>
        </div>
        <div className="about-card">
          <h3 className={`about-card-h3 ${syne.className}`}>2.5+</h3>
          <p className="about-card-p">Year Of Experience</p>
        </div>
        <div className="about-card">
          <h3 className={`about-card-h3 ${syne.className}`}>50+</h3>
          <p className="about-card-p">Project Done</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600 dark:text-white text-[15px] leading-relaxed">
            Add a brief introduction about yourself here. Describe your passion for development, your expertise, and what drives you to create amazing web experiences.
          </p>
          <p className="text-gray-600 dark:text-white text-[15px] leading-relaxed">
            Share your technical skills, your approach to problem-solving, and your professional philosophy. Let visitors know what makes you unique and what you can offer.
          </p>
        </div>

        <div className={`lg:col-span-1 space-y-4 ${syne.className}`}>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Name
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              [Your Name]
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Phone
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              +XX XXXXXXXXXX
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Email
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              your.email@example.com
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Location
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              City, Country
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12 mt-15">
        <div>
          <h3
            className={`text-xl md:text-2xl font-bold text-content mb-8 dark:text-secondary ${syne.className}`}
          >
            My Education
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 to-cyan-500 opacity-60"></div>
            <div>
              {educationData.map((item, index) => (
                <div
                  className="relative flex items-start space-x-6 pb-8"
                  key={index}
                >
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 bg-linear-to-b from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-50 px-2 py-1 dark:bg-dark-base/50 dark:border dark:border-secondary/80 rounded-lg">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2 dark:text-white/90">
                      {item.institute}
                    </p>
                    <p className="text-gray-700 text-xs dark:text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3
            className={`text-xl md:text-2xl font-bold text-content mb-8 dark:text-secondary ${syne.className}`}
          >
            Work Experience
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 to-cyan-500 opacity-60"></div>
            <div>
              {experineceData.map((item, index) => (
                <div
                  className="relative flex items-start space-x-6 pb-8"
                  key={index}
                >
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 bg-linear-to-b from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-50 px-2 py-1 dark:bg-dark-base/50 dark:border dark:border-secondary/80 rounded-lg">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2 dark:text-white/90">
                      {item.company}
                    </p>
                    <p className="text-gray-700 text-xs dark:text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
