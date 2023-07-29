import styles from "./styles/CarouselItem.module.css";
import { Project } from "./ThirdTabMainWindow";
type CarouselItemProps = {
  project: Project;
};

function CarouselItem(props: CarouselItemProps) {
  return (
    <div className={styles.FlexContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.imageContainer}>image</div>
        <div className={styles.descriptionContainer}>
          <div className={styles.projectTitle}>
            {props.project.title}
            <div className={styles.techList}>
              {props.project.tech.join(" | ")}
            </div>
          </div>
          <p className={styles.projectDescription}>
            {props.project.description}
          </p>
          <div>
            {Object.entries(props.project.urls).map(([key, value]) => (
              <p>
                {key}, {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarouselItem;
