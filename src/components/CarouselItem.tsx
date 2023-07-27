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
          <h1>{props.project.title}</h1>
          <p>{props.project.description}</p>
        </div>
      </div>
    </div>
  );
}
export default CarouselItem;
