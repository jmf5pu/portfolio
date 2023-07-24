import styles from "./styles/Project.module.css";
import NavCarousel from "./NavCarousel";

function Project() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.gridContainer}></div>
      <NavCarousel />
    </div>
  );
}
export default Project;
