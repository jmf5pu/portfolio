import styles from "./styles/ThirdTabMainWindow.module.css";
import Project from "./Project";
// TODO: set up "slideshow" style navigation from left to right
// with each element being a project
// add screenshots from project on left
// title of project on right follow by description and skill used
// add github link for each project in addition to other links (sourceforge, etc)
function ThirdTabMainWindow() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.leftArrow}></div>
      <Project />
      <div className={styles.rightArrow}></div>
    </div>
  );
}

export default ThirdTabMainWindow;
