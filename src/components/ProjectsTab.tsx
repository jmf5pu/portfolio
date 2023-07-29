import styles from "./styles/ProjectsTab.module.css";
import CarouselItem from "./CarouselItem";
import CarouselButtons from "./CarouselButtons";
import React, { useState } from "react";

// TODO: set up "slideshow" style navigation from left to right
// with each element being a project
// add screenshots from project on left
// title of project on right follow by description and skill used
// add github link for each project in addition to other links (sourceforge, etc)
type Project = {
  title: string;
  description: string;
  tech: string[];
  images: string[]; // image file names *not complete paths*
  urls: Record<string, string>; // { link name : url }
};

function ThirdTabMainWindow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Civic Connect",
      description:
        "Civic Connect streamlines the process of contacting your local representatives by providing a single stop for a citizens to lookup their representatives' contact information via an address search then create, save, or share message templates with other users. I participated in a team of four students to construct Civic Connect as a part of my CS3240 class at UVA over a series of 6 biweekly sprints.",
      tech: ["Python", "Django", "PostgreSQL", "Scrum"],
      images: ["social_surge_1.PNG"],
      urls: { "source code": "https://github.com/jmf5pu" },
    },
    {
      title: "CNA Scheduler",
      description:
        "CNA Scheduler provides a one stop shop for elder care staff management. Built with Django and deployed on Heroku, this app was in use by six Certified Nursing Assistants and two managers over a 1 year period from 2/2022-2/2023, acting as a scheduling board, care log, and time clock for elder care staff. Carley Scheduler also provided SMS and email notifications of CNA activities to ensure that patients were always being cared for.",
      tech: ["Python", "Django", "PostgreSQL"],
      images: ["social_surge_1.PNG"],
      urls: { "source code": "https://github.com/jmf5pu" },
    },
    {
      title: "Social Surge",
      description:
        "Social Surge is desktop application that allows users to rapidly automate youtube views off of their local system by leveraging a multithreaded PuppeteerJS script. Social Surge avoids common bot detection methods by utilizing a rotating proxy system. The user interface for Social Surge was constructed using ElectronJS.",
      tech: ["ElectronJS", "PuppeteerJS", "NodeJS", "TailwindCSS"],
      images: [
        "social_surge_1.PNG",
        "social_surge_2.PNG",
        "social_surge_3.PNG",
      ],
      urls: {
        "source code": "https://github.com/jmf5pu/social-surge",
      },
    },
  ];

  return (
    <div className={styles.outerFlexContainer}>
      <div className={styles.arrowContainer}>
        <button
          className={styles.arrow}
          onClick={() => {
            setActiveIndex(
              activeIndex > 0 ? activeIndex - 1 : projects.length - 1
            );
          }}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      </div>
      <div className={styles.innerFlexContainer}>
        <div
          className={styles.itemFlexContainer}
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {projects.map((project) => {
            return <CarouselItem project={project} />;
          })}
        </div>
        <CarouselButtons
          projects={projects}
          activeIndex={activeIndex}
          onClick={setActiveIndex}
        />
      </div>
      <div className={styles.arrowContainer}>
        <button
          className={styles.arrow}
          onClick={() => {
            setActiveIndex(
              activeIndex < projects.length - 1 ? activeIndex + 1 : 0
            );
          }}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

export type { Project };
export default ThirdTabMainWindow;
