import styles from "./styles/ThirdTabMainWindow.module.css";
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
  image: string; // path
};

function ThirdTabMainWindow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "project 1",
      description: "description 1",
      image: "some/image/path",
    },
    {
      title: "project 2",
      description: "description 2",
      image: "some/image/path",
    },
    {
      title: "project 3",
      description: "description 3",
      image: "some/image/path",
    },
  ];

  return (
    <div className={styles.outerFlexContainer}>
      <div className={styles.leftArrow}>
        <button
          className="button-arrow"
          onClick={() => {
            setActiveIndex(
              activeIndex > 0 ? activeIndex - 1 : projects.length - 1
            );
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
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
      <div className={styles.rightArrow}>
        <button
          className="button-arrow"
          onClick={() => {
            setActiveIndex(
              activeIndex < projects.length - 1 ? activeIndex + 1 : 0
            );
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}

export type { Project };
export default ThirdTabMainWindow;
