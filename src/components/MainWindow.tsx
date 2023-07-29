import React from "react";
import styles from "./styles/MainWindow.module.css";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ProjectsTab from "./ProjectsTab";

type MainWindowProps = {
  activeTab: number;
};

function MainWindow(props: MainWindowProps) {
  const mainWindowComponents: { [key: number]: React.ReactNode } = {
    1: <AboutTab />,
    2: <ExperienceTab />,
    3: <ProjectsTab />,
  };
  if ([1, 2, 3].includes(props.activeTab)) {
    return (
      <div className={styles.parentDiv}>
        {mainWindowComponents[props.activeTab]}
      </div>
    );
  } else {
    console.log(`activeTab = ${props.activeTab}. This shouldn't happen!`);
    return null;
  }
}
export default MainWindow;
